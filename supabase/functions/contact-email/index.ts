const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type ContactLead = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  created_at?: string;
};

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
      headers: corsHeaders,
    });
  }

  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  const toEmail = Deno.env.get("CONTACT_TO_EMAIL") || "contact@vorevix.com";
  const fromEmail =
    Deno.env.get("CONTACT_FROM_EMAIL") || "Vorevix Website <onboarding@resend.dev>";

  if (!resendApiKey) {
    return new Response("RESEND_API_KEY missing", {
      status: 500,
      headers: corsHeaders,
    });
  }

  const lead = (await request.json()) as ContactLead;
  const subject = `New Vorevix Contact Lead: ${lead.service || "Website inquiry"}`;

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111;">
      <h2 style="margin:0 0 16px;color:#ff5b00;">New contact message</h2>
      <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(lead.phone)}</p>
      <p><strong>Service:</strong> ${escapeHtml(lead.service)}</p>
      <p><strong>Submitted:</strong> ${escapeHtml(lead.created_at)}</p>
      <hr style="border:0;border-top:1px solid #eee;margin:20px 0;" />
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(lead.message).replaceAll("\n", "<br />")}</p>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: lead.email,
      subject,
      html,
    }),
  });

  if (!response.ok) {
    return new Response(await response.text(), {
      status: response.status,
      headers: corsHeaders,
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
});
