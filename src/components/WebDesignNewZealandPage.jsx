import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  FileText,
  LayoutGrid,
  MonitorSmartphone,
  Search,
  ShoppingBag,
  Workflow,
} from "lucide-react";
import { webDesignNewZealandFaqs } from "../webDesignNewZealandFaqs";
import "./WebDesignNewZealandPage.css";

const planningItems = [
  "Business goals and priority services",
  "Target audiences and customer questions",
  "Current website strengths and weaknesses",
  "Competitor positioning",
  "Required pages and content",
  "Functional requirements",
  "Launch priorities",
  "Ongoing management needs",
];

const capabilities = [
  {
    title: "Information Architecture and Content Hierarchy",
    body: "We plan sitemaps, page relationships, navigation labels and content hierarchy before detailed interface design. This creates clearer journeys, useful internal links and stronger foundations for future SEO work.",
    icon: LayoutGrid,
    visual: "sitemap",
  },
  {
    title: "Wireframes and User-Journey Planning",
    body: "Wireframes define where headings, content, calls to action and forms should appear. Journey planning makes relevant routes clearer for different visitors and reduces unnecessary friction.",
    icon: Workflow,
    visual: "wireframe",
  },
  {
    title: "Responsive and Mobile-First Website Design",
    body: "Our website design NZ process considers navigation, forms, images and interactions across phones, tablets and larger screens. Results also depend on content quality, implementation and the strength of the offer.",
    icon: MonitorSmartphone,
    visual: "responsive",
  },
  {
    title: "Website Redesign",
    body: "We review what should be retained, improved, reorganised or removed. A redesign may include revised information architecture, content hierarchy, wireframes, interface design and development coordination.",
    icon: FileText,
    visual: "redesign",
  },
  {
    title: "eCommerce Website Design",
    body: "We consider product discovery, category structure, product pages, filtering, trust signals, cart interactions and mobile shopping journeys. Payments, shipping and integrations require separate planning.",
    icon: ShoppingBag,
    visual: "commerce",
  },
];

const process = [
  ["Discovery", "Review goals, audience, content and functionality."],
  ["Structure", "Plan the sitemap, relationships and visitor journeys."],
  ["Wireframes", "Organise content and calls to action before styling."],
  ["Interface Design", "Create responsive direction and components."],
  ["Development Coordination", "Prepare behaviour and implementation specifications."],
  ["Review and Launch Support", "Review the website against the agreed scope."],
];

const benefits = [
  "Goal-led planning",
  "Information architecture",
  "User-journey and wireframe development",
  "Responsive interface design",
  "Website redesign support",
  "eCommerce design coordination",
  "SEO-aware content structure",
  "Accessibility-aware decisions",
  "Remote collaboration",
  "Clear development handoff",
];

function InterfaceVisual({ type }) {
  return (
    <div className={`wdnz-mini-visual wdnz-mini-visual--${type}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

export default function WebDesignNewZealandPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="wdnz-page">
      <nav className="wdnz-breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Home</a></li>
          <li aria-hidden="true">/</li>
          <li><a href="/services/web-design">Web Design</a></li>
          <li aria-hidden="true">/</li>
          <li><span aria-current="page">New Zealand</span></li>
        </ol>
      </nav>

      <section className="wdnz-hero">
        <div className="wdnz-hero-copy">
          <p className="wdnz-eyebrow">Website Design New Zealand</p>
          <h1>Website Design for <span>New Zealand Businesses</span></h1>
          <p>Vorevix provides professional website design for New Zealand businesses that need a clearer, faster and more effective digital presence. We combine strategy, information architecture, UX planning, responsive interface design and development coordination around business goals.</p>
          <p>Our website design NZ service supports new websites, eCommerce platforms, landing pages and redesigns, with planning based on your audience, content, functionality and future growth.</p>
          <div className="wdnz-actions">
            <a className="wdnz-button wdnz-button--primary" href="/contact">Discuss Your Website Project <ArrowRight aria-hidden="true" /></a>
            <a className="wdnz-button" href="/portfolio">View Our Work</a>
          </div>
        </div>
        <div className="wdnz-hero-visual">
          <img
            className="wdnz-hero-art"
            src="/new-zealand-web-design-hero.png"
            alt="Responsive website design displayed across desktop, tablet and mobile screens"
            width="697"
            height="480"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="wdnz-section wdnz-intro">
        <div>
          <p className="wdnz-eyebrow">Goal-led design</p>
          <h2>Website Design NZ Built Around Business Goals</h2>
        </div>
        <div className="wdnz-intro-copy">
          <p>A strong website should explain your services clearly, guide visitors towards the right action and support marketing, communication and sales.</p>
          <p>We first define what the website must achieve—generating enquiries, supporting sales, improving credibility or helping customers complete a task. These priorities shape its structure and direction.</p>
          <blockquote>A website should have a clearly defined role within the wider business.</blockquote>
        </div>
      </section>

      <section className="wdnz-section wdnz-planning">
        <header className="wdnz-section-heading">
          <p className="wdnz-eyebrow">Foundation first</p>
          <h2>Discovery and Website Planning</h2>
          <p>Before visual design begins, Vorevix reviews your organisation, audience, current website and requirements to create clear direction and reduce avoidable assumptions.</p>
        </header>
        <div className="wdnz-planning-dashboard">
          <div className="wdnz-planning-core"><Search aria-hidden="true" /><strong>Project Direction</strong><span>Goals · Audience · Content · Function</span></div>
          <ol>
            {planningItems.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
          </ol>
        </div>
      </section>

      <section className="wdnz-section wdnz-capabilities">
        <header className="wdnz-section-heading">
          <p className="wdnz-eyebrow">Core capabilities</p>
          <h2>Website Design That Connects Structure and Experience</h2>
        </header>
        <div className="wdnz-capability-list">
          {capabilities.map(({ title, body, icon: Icon, visual }, index) => (
            <article className={`wdnz-capability wdnz-capability--${index + 1}`} key={title}>
              <div className="wdnz-capability-copy">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
              {visual === "responsive"
                ? <img src="/responsive-accessible-design-showcase.png" alt="Responsive website shown across desktop, tablet and mobile screens" width="1672" height="941" loading="lazy" />
                : <InterfaceVisual type={visual} />}
            </article>
          ))}
        </div>
      </section>

      <section className="wdnz-dark">
        <div className="wdnz-dark-column">
          <p className="wdnz-eyebrow">Search foundations</p>
          <h2>SEO-Aware Website Design</h2>
          <ul>{["Heading hierarchy", "Page relationships", "Crawlable navigation", "Content placement", "Internal linking", "Future optimisation foundations"].map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
          <p className="wdnz-disclaimer">Search visibility depends on technical quality, competition, authority, content relevance and ongoing optimisation.</p>
        </div>
        <div className="wdnz-dark-link" aria-hidden="true"><span /><span /><span /></div>
        <div className="wdnz-dark-column">
          <p className="wdnz-eyebrow">Built for people</p>
          <h2>Accessibility-Aware Design</h2>
          <ul>{["Contrast", "Readable typography", "Clear labels", "Keyboard access", "Form feedback", "Meaningful interaction states"].map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
          <p className="wdnz-disclaimer">Formal accessibility compliance depends on agreed requirements, testing and technical implementation.</p>
        </div>
      </section>

      <section className="wdnz-section wdnz-development">
        <header className="wdnz-section-heading">
          <p className="wdnz-eyebrow">From design to launch</p>
          <h2>Development Coordination and Quality Review</h2>
          <p>Approved designs must be translated into responsive, functional components. Development is included only when agreed within the project scope.</p>
        </header>
        <div className="wdnz-delivery-flow">
          {["Approved Design", "Component Specifications", "Responsive Behaviour", "Development Coordination", "Quality Review", "Launch"].map((item) => <span key={item}>{item}<ArrowRight aria-hidden="true" /></span>)}
        </div>
        <p className="wdnz-quality">Device checks · Browser checks · Interaction review · Content review · Responsive verification</p>
      </section>

      <section className="wdnz-section wdnz-process">
        <header className="wdnz-section-heading">
          <p className="wdnz-eyebrow">A clear route forward</p>
          <h2>Our Website Design Process for New Zealand Teams</h2>
        </header>
        <ol>
          {process.map(([title, body], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}
        </ol>
      </section>

      <section className="wdnz-section wdnz-remote">
        <div>
          <p className="wdnz-eyebrow">Structured remote delivery</p>
          <h2>Remote Collaboration Across New Zealand</h2>
          <p>Vorevix delivers website design NZ projects through remote meetings, documented decisions and milestone-based approvals. We work with businesses across New Zealand without implying a physical local office or New Zealand-based team.</p>
        </div>
        <div className="wdnz-remote-flow" aria-label="Remote collaboration workflow">
          {["Project Brief", "Remote Meeting", "Design Presentation", "Feedback Round", "Milestone Approval", "Delivery"].map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, "0")}</b>{item}</span>)}
        </div>
      </section>

      <section className="wdnz-section wdnz-benefits">
        <div className="wdnz-benefits-statement">
          <p className="wdnz-eyebrow">Why Vorevix</p>
          <h2>Why Choose Our Website Design NZ Approach?</h2>
          <p>We connect planning, user experience, responsive design and implementation awareness without forcing every organisation into the same package.</p>
          <strong>We do not use unsupported guarantees, fake results or one-size-fits-all solutions.</strong>
        </div>
        <ol>{benefits.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
      </section>

      <section className="wdnz-section wdnz-faq">
        <header className="wdnz-section-heading">
          <p className="wdnz-eyebrow">FAQ</p>
          <h2>Frequently Asked Questions About Website Design in New Zealand</h2>
        </header>
        <div>
          {webDesignNewZealandFaqs.map(([question, answer], index) => {
            const open = openFaq === index;
            const id = `wdnz-faq-${index}`;
            return (
              <article className={open ? "is-open" : ""} key={question}>
                <h3><button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpenFaq(open ? -1 : index)}><span>{String(index + 1).padStart(2, "0")}</span>{question}<ChevronDown aria-hidden="true" /></button></h3>
                <div id={id} hidden={!open}><p>{answer}</p></div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="wdnz-final-cta">
        <div>
          <p className="wdnz-eyebrow">Start a conversation</p>
          <h2>Plan a Clearer Website for Your Business</h2>
          <p>Tell us about your current website, goals, required functionality and expected timeline. Vorevix will review your requirements and recommend the most suitable next step for your New Zealand business.</p>
          <div className="wdnz-actions">
            <a className="wdnz-button wdnz-button--primary" href="/contact">Discuss Your Website Project <ArrowRight aria-hidden="true" /></a>
            <a className="wdnz-button" href="/portfolio">View Our Work</a>
          </div>
        </div>
        <div className="wdnz-cta-interface" aria-hidden="true"><span /><span /><span /><span /></div>
      </section>
    </main>
  );
}
