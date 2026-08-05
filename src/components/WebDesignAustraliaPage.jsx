import { useEffect, useRef, useState } from "react";
import {
  Accessibility,
  ArrowRight,
  Blocks,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Cloud,
  Code2,
  Compass,
  FileSearch,
  Gauge,
  History,
  LayoutTemplate,
  MessageSquare,
  MonitorSmartphone,
  MousePointerClick,
  Palette,
  PanelsTopLeft,
  PencilRuler,
  RefreshCw,
  Search,
  ShoppingCart,
  Store,
  Target,
} from "lucide-react";
import "./WebDevelopmentPage.css";
import "./WebDesignAustraliaPage.css";

const services = [
  {
    icon: LayoutTemplate,
    title: "Custom Website Design",
    copy: "We create custom website layouts around your business, brand and audience instead of forcing content into a generic template. Structure, messaging and visual hierarchy support the actions you want users to take.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive and Mobile-First Design",
    copy: "We design navigation, forms, images and calls to action so the experience remains clear when customers move between phone, tablet and desktop.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    copy: "We review the current website, identify friction points and decide what should be retained, improved or reorganised to strengthen structure, accessibility and conversion pathways.",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Website Design",
    copy: "Our approach considers product discovery, category structure, product pages, trust signals and mobile shopping journeys so customers can buy with greater confidence.",
  },
  {
    icon: Building2,
    title: "Business and Corporate Website Design",
    copy: "We design professional websites for service businesses, consultancies and corporate organisations that need to communicate expertise, credibility and complex information clearly.",
  },
  {
    icon: PanelsTopLeft,
    title: "UX and UI Design",
    copy: "UX planning defines structure, user journeys and usability. UI design creates the visual system, components and responsive behaviours that bring those decisions to life.",
  },
];

const performance = [
  [Compass, "Clear User Journeys"],
  [MousePointerClick, "Conversion-Focused Layouts"],
  [Search, "SEO-Ready Structure"],
  [Accessibility, "Accessibility Considerations"],
  [Gauge, "Responsive Performance"],
  [Blocks, "Scalable Design Systems"],
];

const process = [
  [Target, "Discovery and Project Goals", "We discuss your business, audience, challenges, competitors, technical needs and desired outcomes."],
  [FileSearch, "Research and Website Structure", "We plan the website hierarchy, navigation, page groups and conversion paths."],
  [PencilRuler, "Wireframes and UX Planning", "Wireframes define page structure, content order and user journeys before detailed styling."],
  [Palette, "Visual Design", "We develop the visual direction using your brand identity, priorities and audience expectations."],
  [MessageSquare, "Feedback and Refinement", "Feedback is collected at agreed stages so revisions remain focused and efficient."],
  [Code2, "Development or Handoff", "Vorevix can connect design with development or prepare organised files for an approved development team."],
];

const collaboration = [
  [ClipboardList, "Brief"],
  [BriefcaseBusiness, "Planned Meeting"],
  [CheckCircle2, "Milestone Review"],
  [MessageSquare, "Documented Feedback"],
  [Code2, "Delivery"],
];

const businessTypes = [
  [Store, "Small and Growing Businesses"],
  [BriefcaseBusiness, "Professional Service Companies"],
  [ShoppingCart, "eCommerce Brands"],
  [Cloud, "SaaS and Digital Products"],
  [Building2, "Corporate Organisations"],
  [History, "Businesses Replacing Outdated Websites"],
];

const reasons = [
  "Strategy before decoration",
  "Custom website layouts",
  "Responsive UX and UI design",
  "SEO-aware website structure",
  "Clear project stages",
  "Development-ready deliverables",
  "Honest communication",
];

const faqs = [
  ["How much does web design cost in Australia?", "Cost depends on page count, design complexity, content, eCommerce features, integrations, development scope and support needs. A tailored proposal is provided after reviewing the project."],
  ["How long does a website design project take?", "Timelines vary according to scope, content readiness, feedback speed and technical requirements."],
  ["Do you work with businesses across Australia?", "Yes. Vorevix works remotely with businesses across Australia using planned meetings, milestone reviews and documented feedback."],
  ["Will the website be mobile-friendly?", "Yes. Responsive behaviour is planned for desktop, tablet and mobile layouts."],
  ["Will the website be SEO-ready?", "The design can support SEO through logical structure, content hierarchy, crawlable navigation and internal linking. Technical SEO must be implemented correctly during development."],
];

function Reveal({ as: Tag = "section", className = "", children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add("is-visible");
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <Tag ref={ref} className={`wdaus-reveal ${className}`} {...props}>{children}</Tag>;
}

function Heading({ eyebrow, title, copy, id }) {
  return (
    <div className="wdaus-heading">
      {eyebrow && <span>{eyebrow}</span>}
      <h2 id={id}>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function Faq({ question, answer, index, openIndex, setOpenIndex }) {
  const open = openIndex === index;
  const buttonId = `wdaus-faq-button-${index}`;
  const panelId = `wdaus-faq-panel-${index}`;
  return (
    <article className={`wdaus-faq-item${open ? " is-open" : ""}`}>
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
      <div id={panelId} role="region" aria-labelledby={buttonId} className="wdaus-faq-panel">
        <div><p>{answer}</p></div>
      </div>
    </article>
  );
}

export default function WebDesignAustraliaPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="wdaus-page">
      <nav className="wd-breadcrumbs wdaus-breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Home</a></li>
          <li aria-hidden="true">/</li>
          <li><a href="/services/web-design">Web Design</a></li>
          <li aria-hidden="true">/</li>
          <li><span aria-current="page">Australia</span></li>
        </ol>
      </nav>

      <Reveal className="wdaus-hero" aria-labelledby="wdaus-title">
        <div className="wdaus-hero-copy">
          <span className="wdaus-eyebrow">Australian Web Design</span>
          <h1 id="wdaus-title">Web Design Services for <em>Australian Businesses</em></h1>
          <p>Vorevix provides professional web design services for Australian businesses that need a clearer, faster and more effective online presence. We combine website strategy, UX planning, responsive UI design and development-ready execution.</p>
          <p>Whether you need a business website, eCommerce store, landing page or complete redesign, our web design Australia service is planned around your audience, content, conversion path and technical requirements.</p>
          <div className="wdaus-actions">
            <a className="wdaus-button wdaus-button-primary" href="/contact">Discuss Your Website Project <ArrowRight aria-hidden="true" /></a>
            <a className="wdaus-button wdaus-button-secondary" href="/portfolio">View Our Work</a>
          </div>
        </div>
        <div className="wdaus-hero-visual" aria-label="Responsive website design preview">
          <img src="/web-design-responsive-showcase.png" alt="Responsive website previews demonstrating professional web design for Australian businesses" width="1536" height="1024" fetchPriority="high" />
        </div>
      </Reveal>

      <Reveal className="wdaus-section wdaus-intro" aria-labelledby="wdaus-intro-title">
        <div>
          <span className="wdaus-eyebrow">Purpose before polish</span>
          <h2 id="wdaus-intro-title">Web Design Australia Built Around Business Goals</h2>
        </div>
        <div className="wdaus-intro-copy">
          <p>A strong website should do more than look polished. It should explain your offer clearly, guide visitors towards the right action and support growth across desktop, tablet and mobile devices.</p>
          <p>We begin by identifying what the website must achieve—generating enquiries, supporting eCommerce sales, strengthening your brand, explaining complex services or making information easier to find.</p>
          <blockquote>Every design decision should connect user needs with practical business priorities.</blockquote>
        </div>
      </Reveal>

      <Reveal className="wdaus-section wdaus-services" aria-labelledby="wdaus-services-title">
        <Heading eyebrow="Capabilities" id="wdaus-services-title" title="Web Design Services for Australian Businesses" />
        <div className="wdaus-service-grid">
          {services.map(({ icon: Icon, title, copy }, index) => (
            <article className={`wdaus-service-card wdaus-service-${index + 1}`} key={title}>
              <div className="wdaus-card-top"><Icon aria-hidden="true" /><span>{String(index + 1).padStart(2, "0")}</span></div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <ArrowRight className="wdaus-card-arrow" aria-hidden="true" />
              {index === 1 && <div className="wdaus-device-mini" aria-hidden="true"><i /><i /><i /></div>}
              {index === 3 && <div className="wdaus-store-mini" aria-hidden="true"><i /><i /><i /></div>}
              {index === 5 && <div className="wdaus-ui-mini" aria-hidden="true"><i /><i /><i /><i /></div>}
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal className="wdaus-performance" aria-labelledby="wdaus-performance-title">
        <div className="wdaus-performance-inner">
          <Heading eyebrow="Performance by design" id="wdaus-performance-title" title="Websites Designed to Perform, Not Just Look Good" copy="Effective web design Australia balances visual quality with practical performance." />
          <div className="wdaus-performance-system">
            <img
              className="wdaus-performance-image"
              src="/australia-web-design-performance.png"
              alt="Responsive travel website displayed across desktop monitors and mobile devices"
              width="1536"
              height="1348"
              loading="lazy"
            />
            <div className="wdaus-feature-nodes">
              {performance.map(([Icon, label], index) => (
                <div className={`wdaus-feature-node node-${index + 1}`} key={label}>
                  <Icon aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="wdaus-disclaimer">SEO-ready structure supports future optimisation, but rankings also depend on content quality, technical implementation, competition and authority.</p>
        </div>
      </Reveal>

      <Reveal className="wdaus-section wdaus-process" aria-labelledby="wdaus-process-title">
        <Heading eyebrow="A clear route forward" id="wdaus-process-title" title="Our Web Design Process for Australian Clients" />
        <ol>
          {process.map(([Icon, title, copy], index) => (
            <li key={title}>
              <div className="wdaus-process-marker"><Icon aria-hidden="true" /><span>{String(index + 1).padStart(2, "0")}</span></div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal className="wdaus-section wdaus-collaboration" aria-labelledby="wdaus-collaboration-title">
        <div className="wdaus-collaboration-copy">
          <span className="wdaus-eyebrow">Organised remote delivery</span>
          <h2 id="wdaus-collaboration-title">Remote Collaboration Across Australia</h2>
          <p>Vorevix works remotely with businesses across Australia through planned meetings, written updates, milestone reviews and documented feedback.</p>
          <strong>Clear communication and organised decisions keep every stage moving—without implying a physical local office.</strong>
        </div>
        <ol className="wdaus-collaboration-flow">
          {collaboration.map(([Icon, label], index) => (
            <li key={label}><Icon aria-hidden="true" /><span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong></li>
          ))}
        </ol>
      </Reveal>

      <Reveal className="wdaus-section wdaus-businesses" aria-labelledby="wdaus-businesses-title">
        <Heading eyebrow="Flexible website planning" id="wdaus-businesses-title" title="Web Design for Different Business Needs" />
        <ol>
          {businessTypes.map(([Icon, title], index) => (
            <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" /><h3>{title}</h3></li>
          ))}
        </ol>
      </Reveal>

      <Reveal className="wdaus-section wdaus-reasons" aria-labelledby="wdaus-reasons-title">
        <div className="wdaus-reasons-statement">
          <span className="wdaus-eyebrow">A practical design partner</span>
          <h2 id="wdaus-reasons-title">Why Work With Vorevix?</h2>
          <p>We do not use unsupported guarantees, fake results or one-size-fits-all solutions.</p>
        </div>
        <ol>
          {reasons.map((reason, index) => <li key={reason}><span>{String(index + 1).padStart(2, "0")}</span><strong>{reason}</strong></li>)}
        </ol>
      </Reveal>

      <Reveal className="wdaus-section wdaus-faq" aria-labelledby="wdaus-faq-title">
        <Heading eyebrow="Common questions" id="wdaus-faq-title" title="Frequently Asked Questions About Web Design in Australia" />
        <div className="wdaus-faq-list">
          {faqs.map(([question, answer], index) => (
            <Faq key={question} question={question} answer={answer} index={index} openIndex={openFaq} setOpenIndex={setOpenFaq} />
          ))}
        </div>
      </Reveal>

      <Reveal className="wdaus-final-cta" aria-labelledby="wdaus-cta-title">
        <div className="wdaus-cta-interface" aria-hidden="true"><i /><i /><i /><span /><span /></div>
        <div>
          <span className="wdaus-eyebrow">Start a conversation</span>
          <h2 id="wdaus-cta-title">Ready to Build a Better Website for Your Business?</h2>
          <p>Tell us about your current website, objectives, required pages, functionality and timeframe. Vorevix will review your requirements and recommend the right web design solution for your Australian business.</p>
          <div className="wdaus-actions">
            <a className="wdaus-button wdaus-button-primary" href="/contact">Discuss Your Website Project <ArrowRight aria-hidden="true" /></a>
            <a className="wdaus-button wdaus-button-dark" href="/portfolio">View Our Work</a>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
