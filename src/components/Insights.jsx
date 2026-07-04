import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import "./Insights.css";
import { fetchBlogs } from "../lib/blogs";

const layoutClasses = ["featured-post", "small-post top-post", "wide-post", "small-post bottom-post"];

const defaultPosts = [
  {
    title: "How to Build a Brand That Stands Out in a Crowded Market",
    date: "April 21, 2025",
    image: "/why-brand-together.jpg",
    className: "featured-post",
  },
  {
    title: "How to Create a High-Converting Landing Page",
    date: "May 11, 2025",
    image: "/why-data-driven.jpg",
    className: "small-post top-post",
  },
  {
    title: "The Rise of AI in Digital Marketing: What You Need to Know",
    date: "May 11, 2025",
    image: "/why-proven-results.jpg",
    className: "wide-post",
  },
  {
    title: "How to Build a Strong Brand Online",
    date: "May 11, 2025",
    image: "/why-client-rating.jpg",
    className: "small-post bottom-post",
  },
];

function applyLayout(posts) {
  return posts.slice(0, 4).map((post, index) => ({
    ...post,
    className: layoutClasses[index] || "small-post",
  }));
}

export default function Insights() {
  const [posts, setPosts] = useState(defaultPosts);

  useEffect(() => {
    let isMounted = true;

    async function loadBlogs() {
      try {
        const blogs = await fetchBlogs(4);

        if (isMounted && blogs.length > 0) {
          setPosts(applyLayout(blogs));
        }
      } catch {
        if (isMounted) {
          setPosts(defaultPosts);
        }
      }
    }

    loadBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="insights-section" id="blog">
      <div className="insights-wrap">
        <div className="insights-heading">
          <h2 className="insights-title">
            <span>Creative Insights</span>
            <span>For a Digital World</span>
          </h2>
          <p>( Our Insight )</p>
        </div>

        <div className="insights-grid">
          {posts.map((post) => (
            <article className={`insight-card ${post.className}`} key={post.title}>
              <div className="insight-image">
                <img src={post.image} alt="" loading="lazy" decoding="async" />
              </div>
              <time>{post.date}</time>
              <h3 className="insight-title">{post.title}</h3>
            </article>
          ))}

          <a href="#contact" className="insights-cta">
            Explore All
            <span>
              <ArrowRight size={24} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
