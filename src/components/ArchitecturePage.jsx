import { ArrowRight, ChevronRight } from "lucide-react";
import "./ArchitecturePage.css";

export default function ArchitecturePage({ page }) {
  return (
    <main className="architecture-page">
      <div className="architecture-page-inner">
        <nav className="architecture-breadcrumbs" aria-label="Breadcrumb">
          <ol>
            {page.breadcrumbs.map((item, index) => {
              const isCurrent = index === page.breadcrumbs.length - 1;

              return (
                <li key={item.label}>
                  {index > 0 && <ChevronRight size={14} aria-hidden="true" />}
                  {isCurrent ? (
                    <span aria-current="page">{item.label}</span>
                  ) : (
                    <a href={item.href}>{item.label}</a>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <section className="architecture-intro">
          <span>{page.eyebrow}</span>
          <h1>{page.h1}</h1>
          <p>{page.intro}</p>
        </section>

        <section className="architecture-cta" aria-labelledby="architecture-cta-title">
          <div>
            <span>Next Step</span>
            <h2 id="architecture-cta-title">Start a conversation with Vorevix</h2>
            <p>Tell us what you are planning and our team will help identify the right next step.</p>
          </div>
          <a href="/contact">
            Contact Vorevix
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </section>
      </div>
    </main>
  );
}
