import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Blocks,
  Check,
  ChevronDown,
  Code2,
  FileText,
  Gauge,
  GitBranch,
  LayoutTemplate,
  Link2,
  Monitor,
  MonitorSmartphone,
  MousePointerClick,
  Navigation,
  Palette,
  PanelTop,
  RefreshCw,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Type,
} from "lucide-react";
import { webDesignFaqs } from "../webDesignFaqs";
import "./WebDevelopmentPage.css";
import "./WebDesignPage.css";
import "./WebDesignServiceRedesign.css";

const inclusions = [
  [Search, "Discovery"],
  [MousePointerClick, "Audience Research"],
  [GitBranch, "Website Structure"],
  [Navigation, "User Journeys"],
  [LayoutTemplate, "Wireframes"],
  [MonitorSmartphone, "Responsive Design"],
  [Palette, "UI/UX Design"],
  [PanelTop, "Prototyping"],
  [Blocks, "Design Systems"],
  [Code2, "Development"],
];

const problems = [
  "Outdated design",
  "Confusing navigation",
  "Weak calls to action",
  "Poor mobile experience",
  "Crowded pages",
  "Inconsistent branding",
  "Unclear content",
  "Difficult maintenance",
];

const services = [
  [Palette, "Custom Web Design", "Original layouts shaped around your brand, content, audience and commercial goals."],
  [Monitor, "Business Website Design", "Clear service pages that communicate credibility and guide visitors towards an enquiry."],
  [ShoppingCart, "Ecommerce Website Design", "Usable product discovery, category, cart and checkout experiences across devices."],
  [MousePointerClick, "Landing Page Design", "Focused campaign pages with clear hierarchy, trust signals and calls to action."],
  [MonitorSmartphone, "Responsive Web Design", "Layouts and components planned for desktop, tablet and mobile behaviour."],
  [RefreshCw, "Website Redesign", "A clearer direction that improves weak areas while preserving useful content and assets."],
  [Navigation, "UI/UX Design", "User flows, wireframes and interfaces designed to reduce friction and improve clarity."],
  [Blocks, "Design Systems", "Reusable components and interface rules that support consistency as the website grows."],
];

const websiteTypes = [
  "Corporate websites",
  "Service business websites",
  "SaaS websites",
  "Ecommerce stores",
  "Startup websites",
  "Portfolio websites",
  "Membership websites",
  "Lead-generation websites",
  "Campaign landing pages",
];

const conversionFeatures = [
  "Clear hierarchy",
  "Strong CTAs",
  "Scannable sections",
  "Trust signals",
  "Simple forms",
  "Logical navigation",
];

const accessibilityFeatures = [
  "Readable typography",
  "Clear labels",
  "Suitable colour contrast",
  "Logical headings",
  "Keyboard-friendly navigation",
  "User-friendly forms",
];

const searchFeatures = [
  [GitBranch, "Logical page structure"],
  [Type, "Heading hierarchy"],
  [Smartphone, "Mobile-friendly layouts"],
  [Link2, "Internal linking"],
  [Gauge, "Performance-conscious design"],
  [Navigation, "Crawl-friendly navigation"],
  [FileText, "FAQ sections"],
  [Blocks, "Structured content"],
  [ShieldCheck, "Consistent business information"],
];

const deliverables = [
  "Sitemap",
  "User journeys",
  "Content hierarchy",
  "Wireframes",
  "High-fidelity designs",
  "Responsive layouts",
  "Interactive prototypes",
  "Component libraries",
  "Design specifications",
  "Development handoff",
  "Design quality assurance",
];

const process = [
  ["Discovery", "Clarify the business, audience, current website and project objectives."],
  ["Research and Planning", "Review priorities, competitors, content needs and the role of each page."],
  ["Wireframing", "Establish page hierarchy, content flow and functionality before visual styling."],
  ["Visual Design", "Apply typography, colour, imagery and interface components through a clear system."],
  ["Responsive Design", "Define how layouts and interactions adapt across desktop, tablet and mobile."],
  ["Prototyping and Handoff", "Prepare approved screens, reusable components and implementation guidance."],
];

const platforms = ["WordPress", "Shopify", "WooCommerce", "Webflow", "React", "Custom CMS"];

const reasons = [
  ["Strategy before decoration", "Goals, users and content guide the visual direction."],
  ["Custom layouts", "Page structures are shaped around the organisation, not a generic template."],
  ["Responsive UI/UX", "Layouts are considered across screen sizes and practical user journeys."],
  ["Development-ready execution", "Components and responsive rules are planned for reliable implementation."],
  ["Clear deliverables", "Scope, review stages and final outputs are agreed before work begins."],
  ["Honest communication", "Recommendations stay connected to objectives without guaranteed outcomes."],
];

function Reveal({ as: Tag = "section", className = "", children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node?.classList.add("is-visible");
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add("is-visible");
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <Tag ref={ref} className={`wds-reveal ${className}`} {...props}>{children}</Tag>;
}

function SectionHeading({ eyebrow, title, copy, light = false }) {
  return (
    <div className={`wds-heading ${light ? "wds-heading-light" : ""}`}>
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function Faq({ question, answer, index, openIndex, setOpenIndex }) {
  const open = openIndex === index;
  const panelId = `web-design-faq-panel-${index}`;
  const buttonId = `web-design-faq-button-${index}`;
  return (
    <article className={`wds-faq-item ${open ? "is-open" : ""}`}>
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpenIndex(open ? -1 : index)}
        >
          <span>{String(index + 1).padStart(2, "0")}</span>
          {question}
          <ChevronDown aria-hidden="true" />
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
        <p>{answer}</p>
      </div>
    </article>
  );
}

export default function WebDesignPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="web-development-page web-design-page wds-page">
      <nav className="wd-breadcrumbs wds-breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Home</a></li><li aria-hidden="true">/</li>
          <li><a href="/services">Services</a></li><li aria-hidden="true">/</li>
          <li><span aria-current="page">Web Design</span></li>
        </ol>
      </nav>

      <Reveal className="wds-hero" aria-labelledby="web-design-title">
        <div className="wds-hero-copy">
          <span className="wds-kicker">Web Design</span>
          <h1 id="web-design-title">Web Design Services <em>for Growing Businesses</em></h1>
          <p>Strategic, responsive web design that makes your business easier to understand and the next step easier to take.</p>
          <div className="wds-actions">
            <a className="wds-button wds-button-primary" href="/contact">Start Your Web Design Project <ArrowRight aria-hidden="true" /></a>
            <a className="wds-button wds-button-secondary" href="/portfolio">View Our Work</a>
          </div>
        </div>
        <div className="wds-hero-visual">
          <img
            className="wds-hero-showcase"
            src="/web-design-responsive-showcase.png"
            alt="Responsive ecommerce website displayed across desktop, tablet and mobile devices"
            width="1566"
            height="1004"
            fetchPriority="high"
          />
        </div>
      </Reveal>

      <Reveal className="wds-section wds-inclusions" aria-labelledby="inclusions-title">
        <SectionHeading eyebrow="Connected planning" title="What Web Design Services Include" copy="Research, design decisions and development handoff work as one process." />
        <ol className="wds-inclusion-track">
          {inclusions.map(([, label], index) => (
            <li key={label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{label}</strong>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal className="wds-section wds-problems" aria-labelledby="problems-title">
        <SectionHeading eyebrow="Website problems" title="Is Your Website Holding Your Business Back?" copy="A website can look acceptable while making information difficult to find and actions unclear." light />
        <div className="wds-problem-grid">
          {problems.map((problem, index) => <article key={problem}><span>{String(index + 1).padStart(2, "0")}</span><h3>{problem}</h3><ArrowRight aria-hidden="true" /></article>)}
        </div>
      </Reveal>

      <Reveal className="wds-section wds-services" aria-labelledby="services-title">
        <SectionHeading eyebrow="Core capabilities" title="Our Web Design Services" copy="Design support for websites, redesigns, campaigns and scalable platforms." />
        <div className="wds-service-grid">
          {services.map(([Icon, title, copy], index) => (
            <article className={`wds-service-card wds-service-${index + 1}`} key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href={title === "UI/UX Design" ? "/services/ui-ux-design-services" : "/contact"} aria-label={`Discuss ${title}`}>Explore <ArrowRight aria-hidden="true" /></a>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal className="wds-section wds-types" aria-labelledby="types-title">
        <div className="wds-types-sticky"><SectionHeading eyebrow="Website categories" title="Types of Websites We Design" copy="Different business models need different structures, content priorities and customer journeys." /></div>
        <ol>
          {websiteTypes.map((type, index) => <li key={type}><span>{String(index + 1).padStart(2, "0")}</span><h3>{type}</h3></li>)}
        </ol>
      </Reveal>

      <Reveal className="wds-section wds-conversion" aria-labelledby="conversion-title">
        <div>
          <SectionHeading eyebrow="Conversion-focused" title="Guide Users Towards the Next Action" copy="We organise pages around visitor questions and decisions. Design can support conversion opportunities, but cannot guarantee a specific rate." />
          <a className="wds-button wds-button-primary" href="/contact">Discuss Your Website <ArrowRight aria-hidden="true" /></a>
        </div>
        <div className="wds-interface-checklist">
          <div className="wds-mini-browser"><span /><span /><span /></div>
          {conversionFeatures.map((feature) => <p key={feature}><Check aria-hidden="true" />{feature}</p>)}
        </div>
      </Reveal>

      <Reveal className="wds-section wds-responsive" aria-labelledby="responsive-title">
        <SectionHeading eyebrow="Built for people" title="Responsive and Accessible by Design" copy="Responsive behaviour is planned from the beginning. Accessibility remains shared across design, content, development and final testing." />
        <div className="wds-device-stage">
          <img
            src="/responsive-accessible-design-showcase.png"
            alt="Responsive restaurant website displayed across desktop, tablet and mobile devices"
            width="1672"
            height="941"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="wds-badges">{accessibilityFeatures.map((feature) => <span key={feature}><Check aria-hidden="true" />{feature}</span>)}</div>
      </Reveal>

      <Reveal className="wds-section wds-search" aria-labelledby="search-title">
        <SectionHeading eyebrow="Search-ready foundations" title="SEO-Friendly Web Design" copy="Design can support search, answer engines and AI-powered discovery through clear structure and readable information. Inclusion, citations and rankings cannot be guaranteed." />
        <div className="wds-search-diagram">
          {searchFeatures.map(([, label], index) => <article key={label}><span>{String(index + 1).padStart(2, "0")}</span><h3>{label}</h3></article>)}
        </div>
      </Reveal>

      <Reveal className="wds-section wds-deliverables" aria-labelledby="deliverables-title">
        <SectionHeading eyebrow="Clear outputs" title="What You Receive" copy="Exact deliverables are agreed before work begins, so design, review and implementation expectations remain clear." />
        <div className="wds-dashboard">
          {deliverables.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><Check aria-hidden="true" /><h3>{item}</h3></article>)}
        </div>
      </Reveal>

      <Reveal className="wds-section wds-process" aria-labelledby="process-title">
        <SectionHeading eyebrow="From strategy to handoff" title="Our Web Design Process" />
        <ol>
          {process.map(([title, copy], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}
        </ol>
      </Reveal>

      <Reveal className="wds-section wds-platforms" aria-labelledby="platforms-title">
        <SectionHeading eyebrow="Flexible implementation" title="Designed for Modern Website Platforms" copy="Platform selection depends on content, functionality, integrations, budget, internal capability and future plans—not a forced technology preference." />
        <div>{platforms.map((platform) => <span key={platform}>{platform}</span>)}</div>
      </Reveal>

      <Reveal className="wds-section wds-locations" aria-label="Web Design Services by Location">
        <SectionHeading
          eyebrow="Local services"
          title="Web Design Services by Location"
          copy="Explore our dedicated web design services for businesses in Australia, New Zealand and Dubai."
        />
        <div className="wds-location-grid">
          <a className="wds-location-card" href="/australia/web-design">
            <span className="wds-location-number" aria-hidden="true">01</span>
            <span className="wds-location-name">Australia Web Design</span>
            <span className="wds-location-link">View Local Website <ArrowRight aria-hidden="true" /></span>
          </a>
          <a className="wds-location-card" href="/new-zealand/web-design">
            <span className="wds-location-number" aria-hidden="true">02</span>
            <span className="wds-location-name">New Zealand Web Design</span>
            <span className="wds-location-link">View Local Website <ArrowRight aria-hidden="true" /></span>
          </a>
          <a className="wds-location-card" href="/united-arab-emirates/web-design">
            <span className="wds-location-number" aria-hidden="true">03</span>
            <span className="wds-location-name">Dubai Web Design</span>
            <span className="wds-location-link">View Local Website <ArrowRight aria-hidden="true" /></span>
          </a>
        </div>
      </Reveal>

      <Reveal className="wds-section wds-reasons" aria-labelledby="reasons-title">
        <SectionHeading eyebrow="Why Vorevix" title="Why Choose Vorevix?" />
        <div>
          {reasons.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </Reveal>

      <Reveal className="wds-section wds-faq" aria-labelledby="faq-title">
        <SectionHeading eyebrow="Common questions" title="Frequently Asked Questions" />
        <div className="wds-faq-list">
          {webDesignFaqs.map(([question, answer], index) => <Faq key={question} question={question} answer={answer} index={index} openIndex={openFaq} setOpenIndex={setOpenFaq} />)}
        </div>
      </Reveal>

      <Reveal className="wds-final-cta" aria-labelledby="final-cta-title">
        <div className="wds-cta-grid" aria-hidden="true" />
        <div>
          <span>Start a conversation</span>
          <h2 id="final-cta-title">Ready to Start Your Web Design Project?</h2>
          <p>Tell us about your goals, website, pages and functionality. We will recommend a practical direction.</p>
          <div className="wds-actions">
            <a className="wds-button wds-button-primary" href="/contact">Discuss Your Project <ArrowRight aria-hidden="true" /></a>
            <a className="wds-button wds-button-dark-outline" href="/portfolio">View Our Work</a>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
