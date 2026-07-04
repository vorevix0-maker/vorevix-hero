const BLOG_BUCKET = "blog-images";
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const SUPABASE_HEADERS = {
  apikey: SUPABASE_ANON_KEY,
  Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
};

function authHeaders(accessToken) {
  return {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${accessToken}`,
  };
}

export function formatBlogDate(value) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

function mapBlog(row) {
  return {
    id: row.id,
    title: row.title,
    category: row.category,
    date: formatBlogDate(row.published_at || row.created_at),
    rawDate: row.published_at,
    excerpt: row.excerpt,
    image: row.image_url,
    createdAt: row.created_at,
  };
}

export async function fetchBlogs(limit) {
  const params = new URLSearchParams({
    select: "id,title,category,excerpt,image_url,published_at,created_at",
    order: "published_at.desc",
  });

  if (limit) {
    params.set("limit", limit);
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/blogs?${params}`, {
    headers: SUPABASE_HEADERS,
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const data = await response.json();
  return data.map(mapBlog);
}

export async function uploadBlogImage(file, accessToken) {
  if (!file) return "/why-data-driven.jpg";

  const extension = file.name.split(".").pop();
  const filePath = `${Date.now()}-${crypto.randomUUID()}.${extension}`;
  const response = await fetch(
    `${SUPABASE_URL}/storage/v1/object/${BLOG_BUCKET}/${filePath}`,
    {
      method: "POST",
      headers: {
        ...authHeaders(accessToken),
        "Content-Type": file.type,
        "x-upsert": "false",
      },
      body: file,
    },
  );

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return `${SUPABASE_URL}/storage/v1/object/public/${BLOG_BUCKET}/${filePath}`;
}

export async function createBlogPost(form, imageUrl, accessToken) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/blogs`, {
    method: "POST",
    headers: {
      ...authHeaders(accessToken),
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      title: form.title.trim(),
      category: form.category.trim() || "Marketing",
      excerpt: form.excerpt.trim(),
      image_url: imageUrl,
      published_at: form.date,
    }),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const [data] = await response.json();
  return mapBlog(data);
}

export async function deleteBlogPost(id, accessToken) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/blogs?id=eq.${id}`, {
    method: "DELETE",
    headers: authHeaders(accessToken),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }
}
