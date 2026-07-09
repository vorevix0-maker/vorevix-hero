import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Calendar,
  ImagePlus,
  Save,
  Trash2,
  UploadCloud,
} from "lucide-react";
import "./BlogDashboard.css";
import { getAdminSession, loginAdmin, logoutAdmin } from "../lib/auth";
import {
  createBlogPost,
  deleteBlogPost,
  fetchBlogs,
  formatBlogDate,
  uploadBlogImage,
} from "../lib/blogs";

const emptyForm = {
  title: "",
  category: "Marketing",
  date: new Date().toISOString().slice(0, 10),
  excerpt: "",
  image: "",
  imageFile: null,
};

export default function BlogDashboard() {
  const [session, setSession] = useState(getAdminSession);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState(
    session ? "Loading blogs from Supabase..." : "Login required",
  );
  const [isSaving, setIsSaving] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const latestPost = useMemo(() => posts[0], [posts]);

  useEffect(() => {
    let isMounted = true;

    async function loadPosts() {
      try {
        const blogs = await fetchBlogs();
        if (isMounted) {
          setPosts(blogs);
          setStatus("Connected to Supabase");
        }
      } catch (error) {
        if (isMounted) {
          setStatus(`Supabase error: ${error.message}`);
        }
      }
    }

    loadPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const updateLoginField = (event) => {
    const { name, value } = event.target;
    setLoginForm((current) => ({ ...current, [name]: value }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoggingIn(true);
    setStatus("Logging in...");

    try {
      const nextSession = await loginAdmin(loginForm.email, loginForm.password);
      setSession(nextSession);
      setStatus("Logged in. Loading blogs...");
    } catch (error) {
      setStatus(error.message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    setSession(null);
    setPosts([]);
    setStatus("Logged out");
  };

  const handleImage = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (file.size > 1800000) {
      alert("Image 1.8MB se choti upload karein taake dashboard fast rahe.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setForm((current) => ({
        ...current,
        image: reader.result,
        imageFile: file,
      }));
    };
    reader.readAsDataURL(file);
  };

  const publishPost = async (event) => {
    event.preventDefault();

    if (!form.title.trim()) {
      alert("Blog title zaroor add karein.");
      return;
    }

    setIsSaving(true);
    setStatus("Uploading blog to Supabase...");

    try {
      const imageUrl = await uploadBlogImage(form.imageFile, session.access_token);
      const savedPost = await createBlogPost(form, imageUrl, session.access_token);
      setPosts((current) => [savedPost, ...current]);
      setForm(emptyForm);
      setStatus("Blog published successfully");
    } catch (error) {
      setStatus(`Publish failed: ${error.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  const deletePost = async (id) => {
    setStatus("Deleting blog...");

    try {
      await deleteBlogPost(id, session.access_token);
      setPosts((current) => current.filter((post) => post.id !== id));
      setStatus("Blog deleted");
    } catch (error) {
      setStatus(`Delete failed: ${error.message}`);
    }
  };

  return (
    <main className="blog-dashboard">
      <header className="dashboard-header">
        <a className="dashboard-brand" href="/">
          <img src="/logo.png" alt="Vorevix logo" />
        </a>
        <div className="dashboard-actions">
          {session ? (
            <button className="dashboard-logout" type="button" onClick={handleLogout}>
              Logout
            </button>
          ) : null}
          <a className="dashboard-back" href="/">
            <ArrowLeft size={18} />
            View Website
          </a>
        </div>
      </header>

      {!session ? (
        <section className="dashboard-login">
          <form className="login-card" onSubmit={handleLogin}>
            <p className="dashboard-kicker">Admin Login</p>
            <h1>Login required to upload blogs.</h1>
            <p>
              Sirf authorized Vorevix admin dashboard se blog publish aur delete
              kar sakta hai.
            </p>

            <label>
              Email
              <input
                name="email"
                type="email"
                value={loginForm.email}
                onChange={updateLoginField}
                placeholder="admin@vorevix.com"
                required
              />
            </label>

            <label>
              Password
              <input
                name="password"
                type="password"
                value={loginForm.password}
                onChange={updateLoginField}
                placeholder="Your password"
                required
              />
            </label>

            <button className="dashboard-submit" type="submit" disabled={isLoggingIn}>
              {isLoggingIn ? "Logging in..." : "Login to Dashboard"}
            </button>
            <span>{status}</span>
          </form>
        </section>
      ) : (
        <>

      <section className="dashboard-hero">
        <div>
          <p className="dashboard-kicker">Vorevix Blog Dashboard</p>
          <h1>Upload and manage website blog posts.</h1>
          <p>
            Add a blog title, cover image, date and short excerpt. Saved posts
            will appear automatically in the website Insights section.
          </p>
        </div>

        <div className="dashboard-stats">
          <article>
            <span>{posts.length}</span>
            Total Posts
          </article>
          <article>
            <span>{latestPost ? latestPost.category : "Ready"}</span>
            Latest Category
          </article>
        </div>
      </section>

      <p className="dashboard-status">{status}</p>

      <section className="dashboard-grid">
        <form className="dashboard-form" onSubmit={publishPost}>
          <div className="form-title-row">
            <div>
              <p>New Blog</p>
              <h2>Create post</h2>
            </div>
            <UploadCloud size={30} />
          </div>

          <label>
            Blog Title
            <input
              name="title"
              value={form.title}
              onChange={updateField}
              placeholder="How to grow your business online"
            />
          </label>

          <div className="form-two">
            <label>
              Category
              <input
                name="category"
                value={form.category}
                onChange={updateField}
                placeholder="Marketing"
              />
            </label>

            <label>
              Date
              <input
                name="date"
                type="date"
                value={form.date}
                onChange={updateField}
              />
            </label>
          </div>

          <label>
            Short Excerpt
            <textarea
              name="excerpt"
              value={form.excerpt}
              onChange={updateField}
              placeholder="Write a short summary for this blog..."
              rows="5"
            />
          </label>

          <label className="upload-box">
            <input type="file" accept="image/*" onChange={handleImage} />
            <ImagePlus size={28} />
            <strong>Upload cover image</strong>
            <span>PNG/JPG/WebP, under 1.8MB</span>
          </label>

          <button className="dashboard-submit" type="submit" disabled={isSaving}>
            <Save size={18} />
            {isSaving ? "Publishing..." : "Publish Blog"}
          </button>
        </form>

        <aside className="dashboard-preview">
          <div className="preview-card">
            <div className="preview-image">
              {form.image ? (
                <img src={form.image} alt="" />
              ) : (
                <ImagePlus size={42} />
              )}
            </div>
            <p>{form.category || "Marketing"}</p>
            <h3>{form.title || "Your blog title preview"}</h3>
            <span>
              <Calendar size={15} />
              {formatBlogDate(form.date)}
            </span>
          </div>

          <div className="saved-posts">
            <h2>Saved blogs</h2>
            {posts.length === 0 ? (
              <p className="empty-posts">Abhi koi blog upload nahi hua.</p>
            ) : (
              posts.map((post) => (
                <article className="saved-post" key={post.id}>
                  <img src={post.image} alt="" />
                  <div>
                    <span>{post.date}</span>
                    <h3>{post.title}</h3>
                  </div>
                  <button type="button" onClick={() => deletePost(post.id)}>
                    <Trash2 size={17} />
                  </button>
                </article>
              ))
            )}
          </div>
        </aside>
      </section>
        </>
      )}
    </main>
  );
}
