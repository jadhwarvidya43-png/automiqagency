# AUTOMIQ Prospect & Outreach Copilot

## Product goal
A conversational MCP app for AUTOMIQ agency owners to find high-intent prospects, personalize outreach, and manage follow-ups from one shared workspace.

## Target user
AUTOMIQ agency owners/operators, initially optimized for a one-person agency workflow.

## Core problem
Prospecting, qualification, personalization, and follow-up are fragmented across search, lead databases, maps, ad libraries, messaging apps, and spreadsheets. The app should turn a natural-language request into an actionable lead pipeline.

## MVP capabilities

### 1. Find Prospects
Natural-language inputs such as:
- "Find high-intent renovation businesses in Mumbai"
- "Find builders running Meta ads in Dubai"

Inputs:
- niche / industry
- location
- quantity
- intent signals
- source selection

Sources:
- Web/search research
- Apollo
- Google Maps
- Meta Ad Library

Output:
- business name
- industry
- location
- website
- Instagram
- WhatsApp/phone when available
- email when available
- source
- intent score: High / Medium / Low
- intent reasons
- canonical lead ID

Actions:
- Qualify
- Generate Outreach
- Save Lead

### 2. Generate Outreach
Generate personalized outreach for selected leads using context from the lead and its intent signals.

Channels:
- Instagram
- WhatsApp
- Email

The UI must show the generated message and the context/reasons used for personalization. Sending requires explicit user approval and only occurs through connected integrations.

Actions:
- Copy
- Regenerate
- Approve
- Send (when supported)

### 3. Manage Follow-ups
Show leads that are overdue, awaiting reply, or due for follow-up.

Actions:
- Generate follow-up
- Mark replied
- Snooze
- Update status

## Canonical lead model
```text
Lead
├── lead_id
├── business_name
├── industry
├── location
├── website
├── instagram
├── whatsapp
├── email
├── source
├── intent_score
├── intent_reasons[]
├── status
├── last_contacted_at
├── next_followup_at
├── outreach_history[]
├── firestore_id
└── airtable_record_id
```

## Storage strategy
- Firestore is the application source of truth.
- Airtable is the human-friendly operational/CRM view.
- Use one canonical `lead_id` to keep records synchronized and avoid duplicates/conflicting identities.

## UX
First view: "AUTOMIQ ⚡ — What do you want to do?"
- Find Prospects
- Create Outreach
- Manage Follow-ups
- natural-language command input

Prospecting view: ranked lead cards/table with intent and reasons.
Outreach view: channel selector, editable message, personalization context, approval/send controls.
Follow-up view: due/overdue leads and next-action controls.

Core funnel:
Prospect → Qualified → Personalized Outreach → Follow-up → Converted

## AI/LLM contract
The LLM should be able to invoke tools and understand the structured result returned by each tool. Views are a shared surface between the human and the LLM: important state should be visible in the UI and represented in tool results/context.

## Safety and trust
- Never send an outreach message without explicit user approval.
- Do not fabricate contact details or intent signals.
- Label source and confidence/intent reasons.
- Keep provider credentials server-side.
- Design for tenant isolation, rate limiting, and idempotency before production integrations are enabled.

## Integration boundary
The MCP tool layer should use provider adapters so Web/search, Apollo, Google Maps, Meta Ad Library, Instagram, WhatsApp, Email, Firestore, and Airtable can be connected independently. MVP development may use deterministic mock adapters for UI development, but the interfaces must be shaped for real providers and must not pretend mock data is live.

## Existing codebase
The repository is an existing Next.js 16 / React 19 AUTOMIQ marketing site. The MCP app should be added without destroying the existing site. Prefer an isolated app/server surface and reusable components rather than replacing the public landing page.

## Success criteria
1. A user can describe a prospecting request and receive structured, ranked prospects.
2. A user can select a lead and generate channel-specific personalized outreach.
3. A user can see and manage due follow-ups.
4. Every lead has a stable canonical ID and source attribution.
5. Sending is always approval-gated.
6. The app remains usable in ChatGPT and as a standalone development/test surface.
