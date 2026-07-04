create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  created_at timestamptz not null default now()
);

create unique index if not exists newsletter_subscribers_email_unique
  on public.newsletter_subscribers (lower(email));

alter table public.newsletter_subscribers enable row level security;

drop policy if exists "Anyone can subscribe to newsletter" on public.newsletter_subscribers;
create policy "Anyone can subscribe to newsletter"
  on public.newsletter_subscribers
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Authenticated users can read newsletter subscribers" on public.newsletter_subscribers;
create policy "Authenticated users can read newsletter subscribers"
  on public.newsletter_subscribers
  for select
  to authenticated
  using (true);
