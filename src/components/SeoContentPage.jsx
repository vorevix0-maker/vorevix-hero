import { ArrowRight } from "lucide-react";
import "./SeoContentPage.css";

export default function SeoContentPage({
  eyebrow,
  title,
  description,
  sections = [],
  links = [],
  serviceCards = [],
  titleAccent,
}) {
  const titleLead = titleAccent ? title.replace(titleAccent, "").trim() : title;

  return (
    <main className="seo-page">
      <section className={`seo-page-hero ${serviceCards.length > 0 ? "seo-page-hero-services" : ""}`}>
        {eyebrow && <span>{eyebrow}</span>}
        <h1 className={titleAccent ? "seo-page-accent-title" : undefined}>
          {titleAccent ? (
            <>
              {titleLead} <em>{titleAccent}</em>
            </>
          ) : title}
        </h1>
        <p>{description}</p>
        {serviceCards.length > 0 && (
          <section className="seo-service-cards" aria-label="Vorevix services by market">
            <p className="seo-service-cards-intro">
              We offer these services across Australia, New Zealand and the United Arab Emirates.
            </p>
            <div className="seo-service-card-grid">
              {serviceCards.map((service, index) => (
                <article className="seo-service-card" key={service.href}>
                  <span className="seo-service-card-number">{String(index + 1).padStart(2, "0")}</span>
                  <h2>
                    <a href={service.href}>{service.title}</a>
                  </h2>
                  <p>{service.description}</p>
                  <div className="seo-service-market-links">
                    {service.markets.map((market) => (
                      <a href={market.href} key={market.href}>
                        {market.label}
                        <ArrowRight size={15} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
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
        <section
          className={`seo-page-sections ${serviceCards.length > 0 ? "seo-page-sections-plain" : ""}`}
          aria-label={`${title} details`}
        >
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
