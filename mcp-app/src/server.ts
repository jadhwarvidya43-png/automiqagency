import { Skybridge } from "skybridge/server";
import { z } from "zod";

export type Lead = {
  lead_id: string;
  business_name: string;
  industry: string;
  location: string;
  website?: string;
  instagram?: string;
  whatsapp?: string;
  email?: string;
  source: string[];
  intent_score: number;
  intent_reasons: string[];
  status: "new" | "qualified" | "contacted" | "awaiting_reply" | "follow_up" | "converted" | "not_interested";
};

const leads: Lead[] = [
  { lead_id: "demo-001", business_name: "Studio Habitat", industry: "Interiors & Renovation", location: "Mumbai", instagram: "@studiohabitat", source: ["Web research"], intent_score: 92, intent_reasons: ["Recently promoting renovation projects", "Active Instagram presence"], status: "new" },
  { lead_id: "demo-002", business_name: "UrbanCraft Interiors", industry: "Interiors & Renovation", location: "Pune", instagram: "@urbancraftinteriors", source: ["Google Maps"], intent_score: 84, intent_reasons: ["Strong local reviews", "Recent portfolio activity"], status: "qualified" },
  { lead_id: "demo-003", business_name: "PrimeSpace Renovations", industry: "Interiors & Renovation", location: "Dubai", instagram: "@primespacereno", source: ["Meta Ad Library"], intent_score: 97, intent_reasons: ["Active Meta advertising signal", "Lead-generation CTA detected"], status: "new" },
];

function makeMessage(lead: Lead, channel: "Instagram" | "WhatsApp" | "Email") {
  const opener = `Hi ${lead.business_name} 👋 I’m Shreyash from AUTOMIQ Agency. I noticed ${lead.intent_reasons[0]?.toLowerCase() ?? "your recent business activity"}.`;
  const body = `We build AI automation that helps capture, qualify and follow up with leads. Would you be open to a quick look at how this could work for ${lead.business_name}?`;
  return channel === "Email" ? `${opener}\n\n${body}` : `${opener} ${body}`;
}

function rankProspects(industry: string, location: string, quantity: number) {
  const industryNeedle = industry.trim().toLowerCase();
  const locationNeedle = location.trim().toLowerCase();
  return leads
    .filter((lead) => {
      const industryMatch = !industryNeedle || lead.industry.toLowerCase().includes(industryNeedle);
      const locationMatch = !locationNeedle || lead.location.toLowerCase().includes(locationNeedle);
      return industryMatch && locationMatch;
    })
    .sort((a, b) => b.intent_score - a.intent_score)
    .slice(0, quantity);
}

export const app = new Skybridge({
  name: "automiq-prospect-copilot",
  version: "0.2.0",
  handler: (server) =>
    server
      .registerTool(
        {
          name: "find_prospects",
          description: "Find and rank prospects. Development mode uses clearly labeled mock records until live providers are connected.",
          inputSchema: {
            industry: z.string(),
            location: z.string(),
            quantity: z.number().int().min(1).max(50).default(10),
            intent_signals: z.array(z.string()).optional(),
          },
          annotations: { title: "Find high-intent prospects", readOnlyHint: true, destructiveHint: false, openWorldHint: true },
          _meta: { "openai/toolInvocation/invoking": "Finding and ranking prospects…", "openai/toolInvocation/invoked": "Prospects ranked." },
          view: { component: "prospects", domain: "https://skybridge.tech", description: "Ranked AUTOMIQ prospects" },
        },
        async ({ industry, location, quantity, intent_signals }) => {
          const results = rankProspects(industry, location, quantity);
          return {
            structuredContent: { leads: results, query: { industry, location, intent_signals: intent_signals ?? [] }, data_mode: "development_mock", live_providers: false },
            content: [{ type: "text", text: `Found ${results.length} development prospects for ${industry} in ${location}. Live provider connections are not enabled yet.` }],
            isError: false,
          };
        },
      )
      .registerTool(
        {
          name: "generate_outreach",
          description: "Generate personalized outreach for a selected lead. This tool never sends a message.",
          inputSchema: { lead_id: z.string(), channel: z.enum(["Instagram", "WhatsApp", "Email"]) },
          annotations: { title: "Generate personalized outreach", readOnlyHint: true, destructiveHint: false, openWorldHint: false },
          _meta: { "openai/toolInvocation/invoking": "Writing personalized outreach…", "openai/toolInvocation/invoked": "Outreach draft ready." },
          view: { component: "outreach", domain: "https://skybridge.tech", description: "Personalized outreach draft" },
        },
        async ({ lead_id, channel }) => {
          const lead = leads.find((item) => item.lead_id === lead_id);
          if (!lead) return { content: [{ type: "text", text: `Lead ${lead_id} was not found.` }], isError: true };
          const message = makeMessage(lead, channel);
          return { structuredContent: { lead, channel, message, approved_for_sending: false }, content: [{ type: "text", text: message }], isError: false };
        },
      )
      .registerTool(
        {
          name: "manage_followups",
          description: "List follow-up candidates and prepare follow-up actions. Changes require explicit approval.",
          inputSchema: { action: z.enum(["list_due", "generate_next", "mark_replied", "snooze"]), lead_id: z.string().optional() },
          annotations: { title: "Manage follow-ups", readOnlyHint: false, destructiveHint: false, openWorldHint: false },
          _meta: { "openai/toolInvocation/invoking": "Checking follow-ups…", "openai/toolInvocation/invoked": "Follow-up queue ready." },
          view: { component: "followups", domain: "https://skybridge.tech", description: "AUTOMIQ follow-up queue" },
        },
        async ({ action, lead_id }) => {
          const due = leads.filter((lead) => ["awaiting_reply", "follow_up"].includes(lead.status));
          return {
            structuredContent: { action, lead_id, leads: due, execution: action === "list_due" ? "read" : "approval_required" },
            content: [{ type: "text", text: action === "list_due" ? `There are ${due.length} follow-up candidates.` : `Prepared ${action}; no message was sent and no record was changed.` }],
            isError: false,
          };
        },
      ),
});

export type AppType = typeof app;
