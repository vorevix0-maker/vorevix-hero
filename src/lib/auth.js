const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const SESSION_KEY = "vorevix_admin_session";

function saveSession(session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function getAdminSession() {
  const savedSession = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");

  if (!savedSession?.access_token) {
    return null;
  }

  if (savedSession.expires_at && savedSession.expires_at < Date.now()) {
    localStorage.removeItem(SESSION_KEY);
    return null;
  }

  return savedSession;
}

export async function loginAdmin(email, password) {
  const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed. Email/password check karein.");
  }

  const data = await response.json();
  const session = {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    user: data.user,
    expires_at: Date.now() + data.expires_in * 1000,
  };

  saveSession(session);
  return session;
}

export function logoutAdmin() {
  localStorage.removeItem(SESSION_KEY);
}

