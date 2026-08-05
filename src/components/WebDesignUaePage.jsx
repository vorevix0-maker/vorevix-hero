import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  FileText,
  LayoutGrid,
  MonitorSmartphone,
  MousePointerClick,
  Search,
  Smartphone,
  Users,
} from "lucide-react";
import { webDesignUaeFaqs } from "../webDesignUaeFaqs";
import "./WebDesignUaePage.css";

const strategyItems = [
  ["01", "Main purpose", FileText],
  ["02", "Priority audiences", Users],
  ["03", "Conversion actions", MousePointerClick],
  ["04", "Required pages", LayoutGrid],
  ["05", "Trust information", Search],
  ["06", "Mobile requirements", Smartphone],
  ["07", "Content ownership", FileText],
  ["08", "Development needs", MonitorSmartphone],
  ["09", "Review stages", MousePointerClick],
];

const serviceGroups = [
  {
    title: "Audience, Competitor and Sitemap Planning",
    copy: "Audience planning considers what users need before making contact. Competitor research reveals common structures and communication gaps, while sitemap planning organises Home, About, Services, case studies, insights, contact and legal pages.",
    visual: "sitemap",
  },
  {
    title: "Custom and Responsive Website Design",
    copy: "Responsive design adapts navigation, typography, forms, calls to action, images and spacing across desktop, tablet and mobile screens. Custom layouts follow the approved brand and hierarchy rather than a lightly edited generic template.",
    visual: "devices",
  },
  {
    title: "Corporate, Service-Business and eCommerce Design",
    copy: "Corporate websites organise complex information for varied stakeholders. Service websites prioritise trust and enquiry paths. eCommerce planning covers product discovery, filters, product pages, cart journeys and mobile shopping behaviour.",
    visual: "dashboard",
  },
  {
    title: "Landing Pages and Website Redesign",
    copy: "Focused landing pages support campaigns and clear conversion actions. Redesign work can improve navigation, structure, branding and mobile usability while reviewing existing URLs, redirects and SEO migration requirements before major changes.",
    visual: "compare",
  },
];

const process = [
  ["01", "Discovery", "Review the business, audience, competitors and objectives."],
  ["02", "Strategy and Sitemap", "Define priorities, user paths and page structure."],
  ["03", "Wireframes and Content Hierarchy", "Organise sections and calls to action."],
  ["04", "Visual Design", "Create responsive layouts using the approved brand direction."],
  ["05", "Review and Refinement", "Complete agreed feedback and approval stages."],
  ["06", "Design Handoff", "Prepare final layouts, components and implementation notes."],
];

const workflow = ["Strategy", "Design System", "Responsive Components", "Development Handoff", "SEO-Aware Implementation"];
const remoteSteps = ["Project Brief", "Scheduled Meeting", "Shared Design Files", "Written Feedback", "Staged Approval", "Final Delivery"];

function HeroVisual() {
  return (
    <div className="uae-hero-art">
      <img
        src="/uae-web-design-responsive.png"
        alt="Responsive website displayed across desktop, tablet and mobile screens"
        width="872"
        height="588"
        fetchPriority="high"
      />
    </div>
  );
}

function ServiceVisual({ type }) {
  if (type === "sitemap") return <div className="uae-service-visual sitemap" aria-hidden="true"><b>HOME</b><span /><span /><span /><i /><i /><i /></div>;
  if (type === "devices") return <div className="uae-service-visual devices" aria-hidden="true"><b /><span /><i /></div>;
  if (type === "dashboard") return <div className="uae-service-visual dashboard" aria-hidden="true"><b /><span /><span /><i /><i /></div>;
  return <div className="uae-service-visual compare" aria-hidden="true"><span>BEFORE</span><b /><span>AFTER</span></div>;
}

export default function WebDesignUaePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="uae-design-page">
      <nav className="uae-breadcrumbs" aria-label="Breadcrumb">
        <ol><li><a href="/">Home</a></li><li>/</li><li><a href="/services/web-design">Web Design</a></li><li>/</li><li aria-current="page">United Arab Emirates</li></ol>
      </nav>

      <section className="uae-hero">
        <div className="uae-hero-copy">
          <p className="uae-kicker">Web Design United Arab Emirates</p>
          <h1>Website Design for <em>UAE Businesses</em></h1>
          <p>Vorevix provides professional website design for UAE businesses that need a clear, credible and commercially focused online presence. We combine website strategy, audience planning, responsive interface design, content hierarchy and development coordination to create websites that support real business priorities.</p>
          <div className="uae-actions"><a className="primary" href="/contact">Discuss Your Website Design Project <ArrowRight /></a><a href="/portfolio">View Our Work</a></div>
        </div>
        <HeroVisual />
      </section>

      <section className="uae-priorities">
        <div><p className="uae-kicker">Business-first design</p><h2>Website Design Built Around Business Priorities</h2></div>
        <div><blockquote>A strong website should explain what the business offers, who it serves and what visitors should do next.</blockquote><p>Before visual design begins, we review your organisation, target audience, services, competitors, current website, content readiness and commercial goals.</p></div>
      </section>

      <section className="uae-strategy">
        <header><p className="uae-kicker">Project foundation</p><h2>Discovery and Website Strategy</h2><p>Discovery creates a clearer project foundation. This reduces assumptions and keeps design decisions connected to approved business needs.</p></header>
        <div className="uae-strategy-deck">
          {strategyItems.map(([number, label]) => <article key={number}>
            <small>Focus</small>
            <span>{number}</span>
            <h3>{label}</h3>
          </article>)}
        </div>
      </section>

      <section className="uae-services">
        <header><p className="uae-kicker">Core capabilities</p><h2>Website Design Services for UAE Businesses</h2></header>
        <div className="uae-service-list">
          {serviceGroups.map((service, index) => <article key={service.title} className={index % 2 ? "reverse" : ""}>
            <div><span className="uae-index">0{index + 1}</span><h3>{service.title}</h3><p>{service.copy}</p></div>
            <ServiceVisual type={service.visual} />
          </article>)}
        </div>
      </section>

      <section className="uae-language">
        <div className="uae-language-copy"><p className="uae-kicker">Multilingual planning</p><h2>Multilingual and Arabic Website Planning</h2><p>Many UAE organisations communicate with multilingual audiences. Planning may consider language switching, duplicated page structures, translation workflows, navigation length, content ownership, mobile presentation and right-to-left layout requirements.</p><p className="uae-disclaimer">Arabic interfaces may require specialist typography, content review and RTL implementation. These requirements should only be included when the required resources and scope are confirmed.</p></div>
        <div className="uae-language-ui" aria-label="Left-to-right and right-to-left interface planning example"><div><small>EN · LTR</small><b>Navigation</b><span /><span /></div><div dir="rtl"><small>AR · RTL</small><b>التنقل</b><span /><span /></div></div>
      </section>

      <section className="uae-system">
        <header><p className="uae-kicker">Connected delivery</p><h2>Design Systems, Handoff and SEO-Aware Structure</h2><p>A design system can define typography, spacing, buttons, forms, cards, icons and reusable sections. Approved designs should also document responsive layouts, component states, interactions and developer notes.</p></header>
        <div className="uae-workflow">{workflow.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong>{index < workflow.length - 1 && <ArrowRight aria-hidden="true" />}</div>)}</div>
        <p className="uae-disclaimer light">Technical SEO, keyword research, structured data, indexing and backlink strategy remain separate responsibilities. Design alone cannot guarantee Google rankings.</p>
      </section>

      <section className="uae-process">
        <header><p className="uae-kicker">From brief to handoff</p><h2>Our Website Design Process</h2></header>
        <div className="uae-timeline">{process.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </section>

      <section className="uae-remote">
        <div><p className="uae-kicker">Structured communication</p><h2>Remote Collaboration Across the UAE</h2><p>Vorevix works remotely with organisations across the United Arab Emirates through scheduled meetings, shared design files, written updates and staged approvals. National availability does not imply a physical UAE office, local phone number or UAE-based design team.</p></div>
        <div className="uae-remote-flow">{remoteSteps.map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong></div>)}</div>
      </section>

      <section className="uae-why">
        <div><p className="uae-kicker">Why Vorevix</p><h2>Why Work With Vorevix?</h2><p>Vorevix combines business discovery, sitemap planning, clear content hierarchy, custom responsive layouts, website redesign, design systems and coordinated SEO and development handoff.</p><blockquote>Recommendations remain practical and do not rely on guaranteed commercial outcomes.</blockquote></div>
        <ol>{["Business and audience discovery", "Sitemap and content hierarchy", "Custom responsive layouts", "Corporate and service websites", "eCommerce and landing pages", "Design systems and handoff", "SEO and development coordination", "Remote collaboration"].map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol>
      </section>

      <section className="uae-faq">
        <header><p className="uae-kicker">FAQ</p><h2>Frequently Asked Questions</h2></header>
        <div>{webDesignUaeFaqs.map(([question, answer], index) => {
          const open = openFaq === index;
          const id = `uae-faq-${index}`;
          return <article key={question}><h3><button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpenFaq(open ? -1 : index)}><span>0{index + 1}</span>{question}<ChevronDown aria-hidden="true" /></button></h3><div id={id} hidden={!open}><p>{answer}</p></div></article>;
        })}</div>
      </section>

      <section className="uae-cta">
        <div><p className="uae-kicker">Start a conversation</p><h2>Plan Your UAE Website Project</h2><p>Share your current website, required pages, target audience, preferred features, content status and expected timeline. Vorevix will review your requirements and recommend the most suitable next step.</p><div className="uae-actions"><a className="primary" href="/contact">Discuss Your Website Design Project <ArrowRight /></a><a href="/portfolio">View Our Work</a></div></div>
        <div className="uae-cta-art" aria-hidden="true"><i /><i /><i /><span /><span /><b /></div>
      </section>
    </main>
  );
}
