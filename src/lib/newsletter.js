const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const SUPABASE_HEADERS = {
  apikey: SUPABASE_ANON_KEY,
  Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
};

function getCleanEmail(formData) {
  return formData.get("email")?.toString().trim().toLowerCase() || "";
}

export async function subscribeToNewsletter(formData) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("Supabase environment variables missing hain.");
  }

  const email = getCleanEmail(formData);

  if (!email) {
    throw new Error("Email enter karein.");
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/newsletter_subscribers`, {
    method: "POST",
    headers: {
      ...SUPABASE_HEADERS,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ email }),
  });

  if (response.status === 409) {
    return { email, alreadySubscribed: true };
  }

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return { email };
}
