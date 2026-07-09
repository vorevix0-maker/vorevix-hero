import { ArrowRight } from "lucide-react";
import "./SeoContentPage.css";

export default function SeoContentPage({ eyebrow, title, description, sections = [], links = [] }) {
  return (
    <main className="seo-page">
      <section className="seo-page-hero">
        {eyebrow && <span>{eyebrow}</span>}
        <h1>{title}</h1>
        <p>{description}</p>
        {links.length > 0 && (
          <div className="seo-page-links" aria-label="Page links">
            {links.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
                <ArrowRight size={18} />
              </a>
            ))}
          </div>
        )}
      </section>

      {sections.length > 0 && (
        <section className="seo-page-sections" aria-label={`${title} details`}>
          {sections.map((section) => (
            <article className="seo-page-section" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.href && (
                <a className="seo-page-section-link" href={section.href}>
                  Learn more
                  <ArrowRight size={16} />
                </a>
              )}
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
