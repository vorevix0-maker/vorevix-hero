create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  service text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

drop policy if exists "Anyone can submit contact messages" on public.contact_messages;
create policy "Anyone can submit contact messages"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Authenticated users can read contact messages" on public.contact_messages;
create policy "Authenticated users can read contact messages"
  on public.contact_messages
  for select
  to authenticated
  using (true);
