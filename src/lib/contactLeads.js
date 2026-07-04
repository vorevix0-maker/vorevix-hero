const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const SUPABASE_HEADERS = {
  apikey: SUPABASE_ANON_KEY,
  Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
};

function getCleanContactPayload(formData) {
  return {
    name: formData.get("name")?.toString().trim() || "",
    email: formData.get("email")?.toString().trim() || "",
    phone: formData.get("phone")?.toString().trim() || "",
    service: formData.get("service")?.toString().trim() || "",
    message: formData.get("message")?.toString().trim() || "",
  };
}

export async function submitContactLead(formData) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("Supabase environment variables missing hain.");
  }

  const payload = getCleanContactPayload(formData);

  const response = await fetch(`${SUPABASE_URL}/rest/v1/contact_messages`, {
    method: "POST",
    headers: {
      ...SUPABASE_HEADERS,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const emailResponse = await fetch(`${SUPABASE_URL}/functions/v1/contact-email`, {
    method: "POST",
    headers: {
      ...SUPABASE_HEADERS,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!emailResponse.ok) {
    throw new Error(await emailResponse.text());
  }

  return payload;
}
