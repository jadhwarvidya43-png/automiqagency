import { Skybridge } from "skybridge/server";
import { z } from "zod";

const leads = [
  { lead_id: "auto-001", business_name: "UrbanNest Interiors", industry: "Interiors & Renovation", location: "Mumbai", intent_score: "HIGH", intent_reasons: ["Recently promoted renovation services", "Active Instagram presence"], status: "Prospect" },
  { lead_id: "auto-002", business_name: "Studio Revamp", industry: "Interiors & Renovation", location: "Pune", intent_score: "HIGH", intent_reasons: ["Running Meta ads", "Clear lead-generation offer"], status: "Prospect" },
  { lead_id: "auto-003", business_name: "CasaCraft Renovations", industry: "Interiors & Renovation", location: "Delhi", intent_score: "MEDIUM", intent_reasons: ["Growing service area", "Website has enquiry CTA"], status: "Qualified" },
];

function makeMessage(lead: typeof leads[number], channel: "Instagram" | "WhatsApp" | "Email") {
  const opener = `Hi ${lead.business_name} 👋 I’m Shreyash from AUTOMIQ Agency. I noticed you’re active in ${lead.industry.toLowerCase()} and ${lead.intent_reasons[0].toLowerCase()}.`;
  const body = `We build AI automation that helps capture, qualify and follow up with leads. Would you be open to a quick look at how this could work for ${lead.business_name}?`;
  return channel === "Email" ? `${opener}\n\n${body}` : `${opener} ${body}`;
}

export const app = new Skybridge({
  name: "automiq-prospect-copilot",
  version: "0.1.0",
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
        async ({ industry, location, quantity, intent_signals }) => ({
          structuredContent: { leads: leads.slice(0, quantity), query: { industry, location, intent_signals: intent_signals ?? [] }, data_mode: "development_mock" },
          content: [{ type: "text", text: `Found ${Math.min(quantity, leads.length)} development prospects for ${industry} in ${location}. Live provider connections are not enabled yet.` }],
          isError: false,
        }),
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
          const lead = leads.find((item) => item.lead_id === lead_id) ?? leads[0];
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
        async ({ action, lead_id }) => ({
          structuredContent: { action, lead_id, leads, execution: action === "list_due" ? "read" : "approval_required" },
          content: [{ type: "text", text: action === "list_due" ? `There are ${leads.length} follow-up candidates.` : `Prepared ${action}; no message was sent and no record was changed.` }],
          isError: false,
        }),
      ),
});

export type AppType = typeof app;
