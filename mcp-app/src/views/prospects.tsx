import { useState } from "react";

export default function Prospects({ toolOutput }: { toolOutput?: { leads?: Array<{ lead_id: string; business_name: string; industry: string; location: string; intent_score: string; intent_reasons: string[]; status: string }> } }) {
  const [selected, setSelected] = useState<string | null>(null);
  const leads = toolOutput?.leads ?? [];
  return <div style={{ fontFamily: "Inter, system-ui, sans-serif", padding: 20, maxWidth: 760, margin: "auto" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}><div><div style={{ fontSize: 12, opacity: .6 }}>AUTOMIQ ⚡</div><h2 style={{ margin: "4px 0" }}>High-intent prospects</h2></div><span style={{ fontSize: 12, padding: "6px 10px", borderRadius: 999, background: "#f3f4f6" }}>Development data</span></div>
    {leads.length === 0 ? <p style={{ opacity: .65 }}>Ask the assistant to find prospects to populate this view.</p> : leads.map((lead) => <button key={lead.lead_id} onClick={() => setSelected(lead.lead_id)} style={{ width: "100%", textAlign: "left", border: "1px solid #e5e7eb", borderRadius: 14, padding: 16, marginBottom: 10, background: selected === lead.lead_id ? "#f8fafc" : "white", cursor: "pointer" }}><div style={{ display: "flex", justifyContent: "space-between" }}><strong>{lead.business_name}</strong><b style={{ fontSize: 12 }}>{lead.intent_score}</b></div><div style={{ fontSize: 13, opacity: .65, marginTop: 5 }}>{lead.industry} · {lead.location}</div><div style={{ fontSize: 13, marginTop: 9 }}>{lead.intent_reasons.join(" · ")}</div><div style={{ fontSize: 11, opacity: .5, marginTop: 8 }}>{lead.status} · {lead.lead_id}</div></button>)}
  </div>;
}
