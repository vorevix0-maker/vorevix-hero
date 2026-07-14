import { useState } from "react";
import {
  Accessibility,
  AppWindow,
  ArrowRight,
  Building2,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Gauge,
  Plug,
  RefreshCw,
  Search,
  ShieldCheck,
  ShoppingCart,
  Wrench,
} from "lucide-react";
import { webDevelopmentFaqs } from "../webDevelopmentFaqs";
import "./WebDevelopmentPage.css";

const businessRisks = [
  "Slow web pages",
  "Weak mobile performance",
  "Difficult content updates",
  "Broken integrations",
  "Unnecessary plugins",
  "High maintenance costs",
  "Expensive redevelopment",
];

const planningItems = [
  "Target audiences",
  "Required pages",
  "User actions",
  "Content requirements",
  "Platform features",
  "Third-party integrations",
  "User roles",
  "Growth requirements",
];

const coreServices = [
  {
    title: "Custom Website Development Service",
    icon: Code2,
    paragraphs: [
      "Our custom website development service is for businesses that need more than a standard template.",
      "We create custom page layouts, components and features based on your business and customer needs.",
      "Custom website development may include:",
    ],
    items: ["Tailored page layouts", "Reusable components", "Interactive sections", "Advanced forms", "Customer accounts", "Custom content structures", "Responsive development", "API integrations"],
    closing: "We only add features that support a clear goal. This keeps the website easier to manage and reduces unnecessary complexity.",
    linkText: "Businesses that need interface planning before development can explore our ",
    link: { label: "Web Design Services", href: "/services/web-design" },
  },
  {
    title: "Business Website Development",
    icon: Building2,
    paragraphs: [
      "Our business website development service helps startups, small businesses and established companies build a stronger online presence.",
      "A professional business website should clearly explain:",
    ],
    items: ["What your business offers", "Who your services are for", "Why customers should trust you", "What visitors should do next"],
    secondLead: "Business websites may include:",
    secondItems: ["Corporate websites", "Service-based websites", "Lead-generation websites", "Company profile websites", "Landing pages", "Case studies", "Portfolio sections", "Contact forms", "Blog and resource pages"],
    closing: "We plan every web page around the customer journey. This helps potential customers find useful information and contact your business without confusion.",
  },
  {
    title: "eCommerce Website Development",
    icon: ShoppingCart,
    paragraphs: [
      "Our eCommerce website development service helps businesses build practical and easy-to-manage online stores.",
      "A good online store should make it easy to find products, review details and complete checkout.",
      "Our eCommerce services may include:",
    ],
    items: ["Shopify development", "WooCommerce development", "Product and category pages", "Cart setup", "Checkout configuration", "Payment gateway integration", "Shipping setup", "Tax configuration", "Discount features", "Inventory integrations", "Analytics setup"],
    closing: "Clear product pages, simple navigation and a smooth checkout process can support stronger conversion rates.",
    final: "We also consider how your team will manage products, orders and promotions after launch.",
  },
  {
    title: "Website Redesign and Redevelopment",
    icon: RefreshCw,
    paragraphs: [
      "An outdated website can weaken customer trust and make daily management difficult.",
      "We redesign and rebuild websites that have:",
    ],
    items: ["Outdated layouts", "Poor mobile usability", "Slow loading times", "Weak navigation", "Broken forms", "Difficult content management", "Platform limits", "Technical SEO issues", "Outdated code"],
    closing: "Before redevelopment starts, we review your existing content, URLs, rankings and important features.",
    final: "This helps us protect valuable pages and reduce SEO risks during migration.",
  },
  {
    title: "Content Management System Development",
    icon: Database,
    paragraphs: [
      "A content management system, or CMS, allows your team to update pages, products and articles without editing code.",
      "Our CMS development services may include:",
    ],
    items: ["WordPress development", "Shopify content management", "WooCommerce management", "Editable page sections", "Reusable content blocks", "Custom content fields", "User roles", "Blog management", "Product management"],
    closing: "We plan the editing system alongside the public website. This keeps content organised and reduces the need for regular developer support.",
  },
  {
    title: "API and Third-Party Integrations",
    icon: Plug,
    paragraphs: [
      "Modern websites often need to connect with other business tools.",
      "We connect websites and applications with supported third-party platforms.",
      "Integrations may include:",
    ],
    items: ["Payment gateways", "CRM systems", "Booking platforms", "Email marketing tools", "Analytics platforms", "Customer support software", "Inventory systems", "Shipping services", "Authentication tools", "Mobile apps", "External databases"],
    closing: "We review each API before development starts. This helps us understand the data flow, technical limits and security needs.",
    final: "Where supported, integrations can send real-time updates between connected systems.",
  },
  {
    title: "Website Maintenance and Support",
    icon: Wrench,
    paragraphs: [
      "Our website maintenance and support service keeps your platform stable, secure and up to date.",
      "Ongoing support may include:",
    ],
    items: ["Regular updates", "Security patches", "Website backups", "Bug fixes", "Performance checks", "Content changes", "Integration troubleshooting", "Small feature updates", "Technical support"],
    closing: "The maintenance plan depends on the platform, size and complexity of your website.",
    final: "Our web development services can also include agreed post-launch improvements and technical support.",
  },
];

const advancedSolutions = [
  {
    title: "Web Application Development",
    icon: AppWindow,
    paragraphs: [
      "Our web application development service covers browser-based platforms that help users complete tasks or manage information.",
      "Web applications may include:",
    ],
    items: ["Customer portals", "Client portals", "Admin dashboards", "Analytics dashboards", "Booking platforms", "Membership systems", "Reporting tools", "Internal business platforms", "Custom workflows"],
    secondLead: "Before development begins, we define:",
    secondItems: ["User types", "Access permissions", "Required actions", "Data needs", "Integrations", "Reports", "Notifications", "Security requirements"],
    closing: "Our back-end work can manage data, logins, permissions and integrations.",
    final: "Dashboard development is included within web application development rather than offered as a separate service.",
  },
  {
    title: "SaaS Product Development",
    icon: Cloud,
    paragraphs: [
      "Our SaaS product development service supports businesses that want to build browser-based software for customers or internal teams.",
      "Our SaaS development services may include:",
    ],
    items: ["User registration", "Secure login", "Customer dashboards", "Admin dashboards", "Role-based access", "Subscription plans", "Payment and billing", "Account management", "Notifications", "Reports", "Custom workflows", "Third-party integrations"],
    closing: "SaaS products need careful planning. They often manage users, billing, permissions and customer data.",
    final: "We normally start with a minimum viable product. The first version focuses on the main user problem and essential features.",
    last: "This helps the business test the product before investing in a wide range of advanced features.",
  },
];

const processSteps = [
  { title: "1. Discovery", body: "We begin by learning about your business, users and goals.", lead: "We review:", items: ["Target audiences", "Required pages", "Main features", "Existing systems", "Content needs", "User roles", "Growth requirements"], closing: "This stage helps us understand what the website or platform needs to achieve." },
  { title: "2. Scope and Planning", body: "We turn the requirements into a practical plan.", lead: "The plan may include:", items: ["Sitemap", "Page templates", "Feature list", "Platform selection", "Database needs", "API requirements", "Development milestones", "Testing criteria"], closing: "Clear planning reduces delays and unnecessary changes later." },
  { title: "3. UX and Design Alignment", body: "We review the approved layouts, user journeys and mobile behaviour before coding starts.", lead: "This helps ensure:", items: ["Each page has a clear purpose", "Visitors can find information easily", "Forms are simple to complete", "Mobile layouts work properly", "The final build follows the approved design"], linkText: "Projects that need wireframes or user-flow planning can also use our ", link: { label: "UI/UX Design Services", href: "/services/ui-ux-design" } },
  { title: "4. Development", body: "Our developers turn the approved plan into a working website or application.", lead: "Development may include:", items: ["Front-end development", "Back-end development", "CMS setup", "Database implementation", "User authentication", "Payment setup", "Dashboard development", "API integrations", "Analytics setup", "SEO foundations"], closing: "We review the project during development. We do not wait until launch to identify major issues." },
  { title: "5. Testing", body: "We test important pages, features and user journeys before release.", lead: "Testing may cover:", items: ["Mobile responsiveness", "Browser compatibility", "Forms", "Links", "User permissions", "Payments", "Integrations", "Performance", "Accessibility", "Error handling"], closing: "This process helps us find practical problems before customers use the platform." },
  { title: "6. Launch and Handover", body: "After approval, we prepare the platform for launch.", lead: "The launch process may include:", items: ["Production deployment", "Hosting setup", "Domain configuration", "Redirects", "Analytics checks", "Form testing", "Search indexing checks", "CMS access", "Client training"], closing: "For redevelopment projects, we carefully manage existing URLs and redirects." },
  { title: "7. Ongoing Support", body: "After launch, we can continue to improve the platform as your business needs change.", lead: "Ongoing work may include:", items: ["New features", "Integrations", "Performance improvements", "Security updates", "Content changes", "Regular maintenance"] },
];

const qualityAreas = [
  { title: "Performance-Focused Development", icon: Gauge, paragraphs: ["Website speed affects user experience and conversions.", "During development, we review:"], items: ["Image sizes", "Script loading", "Responsive images", "Font loading", "Caching", "Layout stability", "Third-party tools", "Unnecessary code"], closing: "These practices improve website speed and responsiveness across common devices.", final: "Hosting, analytics tools and future content can also affect speed. We focus on practical improvements instead of promising unrealistic scores." },
  { title: "SEO-Ready Foundations", icon: Search, paragraphs: ["A website needs a clear technical structure before it can perform well in search.", "Our development approach may include:"], items: ["Semantic HTML", "Clear heading structure", "Crawlable navigation", "Mobile-friendly layouts", "Metadata controls", "Canonical tags", "Structured data", "Internal links", "XML sitemap support", "Redirect planning"], closing: "Our web development services include technical foundations that support search visibility and future SEO work.", final: "Rankings also depend on content quality, competition, authority and backlinks.", custom: "seo" },
  { title: "Secure Development Practices", icon: ShieldCheck, paragraphs: ["Security matters when a website handles forms, payments, accounts or customer data.", "Our development practices may include:"], items: ["Input validation", "Secure authentication", "Role-based access", "Permission controls", "SSL configuration", "Form protection", "Dependency updates", "Security patches", "Backups", "Secure API handling"], closing: "Vorevix does not claim to be an enterprise cybersecurity company.", final: "Qualified security specialists should handle advanced penetration testing, compliance audits and continuous security monitoring." },
  { title: "Accessibility and Browser Compatibility", icon: Accessibility, paragraphs: ["We build websites for common devices, browsers and navigation methods.", "We may review:"], items: ["Semantic structure", "Keyboard navigation", "Form labels", "Focus states", "Alternative text", "Responsive layouts", "Colour contrast", "Browser compatibility"], closing: "Accessibility supports a better experience for a wider range of users." },
];

function Checklist({ items }) {
  return <ul className="wd-checklist">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article className="wd-card">
      <Icon className="wd-card-icon" size={26} aria-hidden="true" />
      <h3>{service.title}</h3>
      {service.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {service.items && <Checklist items={service.items} />}
      {service.secondLead && <p>{service.secondLead}</p>}
      {service.secondItems && <Checklist items={service.secondItems} />}
      {service.closing && <p>{service.closing}</p>}
      {service.final && <p>{service.final}</p>}
      {service.last && <p>{service.last}</p>}
      {service.link && <p>{service.linkText}<a href={service.link.href}>{service.link.label}</a>.</p>}
      {service.custom === "seo" && (
        <>
          <p>Explore our <a href="/services/seo-services">SEO Services</a> for ongoing search optimisation.</p>
          <p>For further guidance, read <a href="https://developers.google.com/search/docs/essentials" target="_blank" rel="noopener noreferrer">Google Search Essentials</a>.</p>
        </>
      )}
    </article>
  );
}

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(index === 0);
  const panelId = `web-development-faq-${index}`;
  return (
    <article className={`wd-faq-item ${open ? "open" : ""}`}>
      <h3>
        <button type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((value) => !value)}>
          {faq.question}<ChevronDown size={21} aria-hidden="true" />
        </button>
      </h3>
      <div id={panelId} className="wd-faq-answer" hidden={!open}><p>{faq.answer}</p></div>
    </article>
  );
}

export default function WebDevelopmentPage() {
  return (
    <main className="web-development-page">
      <nav className="wd-breadcrumbs" aria-label="Breadcrumb">
        <ol><li><a href="/">Home</a></li><li aria-hidden="true">/</li><li><a href="/services">Services</a></li><li aria-hidden="true">/</li><li><span aria-current="page">Web Development</span></li></ol>
      </nav>

      <section className="wd-hero">
        <div className="wd-hero-copy">
          <span className="wd-eyebrow">Web Development</span>
          <h1>Web Development Services for Growing Businesses</h1>
          <p>Vorevix provides web development services for businesses that need professional websites, online stores, web applications and SaaS products.</p>
          <p>We design and develop digital platforms around clear business goals. Before coding starts, we review your users, content, required features and technical needs.</p>
          <p>Our team builds responsive websites that work across desktop, tablet and mobile devices. We also focus on performance, usability, content management and future growth.</p>
          <p>Whether you need a small business website, an eCommerce store, a customer portal or a SaaS platform, our web development services can support your project from planning through launch.</p>
          <div className="wd-actions"><a className="primary" href="/contact">Start Your Project <ArrowRight size={18} aria-hidden="true" /></a><a href="/portfolio">View Our Work</a></div>
        </div>
        <div className="wd-hero-visual"><img src="/assets/vorevix-laptop.png" alt="Web development services by Vorevix" width="1080" height="1080" fetchPriority="high" /></div>
      </section>

      <section className="wd-section wd-goals">
        <div className="wd-section-heading"><span>Planning First</span><h2>Development Built Around Business Goals</h2></div>
        <div className="wd-goals-grid"><div><p>A website should help people understand your business and take the next step.</p><p>It should explain your services, answer common questions and make contact or purchasing simple. Your team should also be able to manage the platform after launch.</p><h3>Poor planning can lead to:</h3><Checklist items={businessRisks} /></div><div><h3>At the start of every web development project, we define:</h3><Checklist items={planningItems} /><p>Our web development services give each project a clear direction before design and coding begin.</p><p>This gives the client, designers and development teams a shared plan from the start.</p></div></div>
      </section>

      <section className="wd-section"><div className="wd-section-heading"><span>What We Build</span><h2>Our Web Development Services</h2></div><div className="wd-card-grid">{coreServices.map((service) => <ServiceCard service={service} key={service.title} />)}</div><div className="wd-inline-cta"><a href="/contact">Discuss Your Website Requirements <ArrowRight size={18} aria-hidden="true" /></a></div></section>

      <section className="wd-section wd-tinted"><div className="wd-section-heading"><span>Complex Platforms</span><h2>Advanced Development Solutions</h2></div><div className="wd-split-grid">{advancedSolutions.map((service) => <ServiceCard service={service} key={service.title} />)}</div></section>

      <section className="wd-section"><div className="wd-section-heading"><span>From Discovery to Support</span><h2>Our Web Development Process</h2><p>Our web development process gives each project a clear structure from discovery to launch.</p><p>This process keeps our web development services organised and gives clients a clear view of every stage.</p></div><div className="wd-process-grid">{processSteps.map((step) => <article className="wd-process-card" key={step.title}><h3>{step.title}</h3><p>{step.body}</p><p>{step.lead}</p><Checklist items={step.items} />{step.closing && <p>{step.closing}</p>}{step.link && <p>{step.linkText}<a href={step.link.href}>{step.link.label}</a>.</p>}</article>)}</div></section>

      <section className="wd-section wd-tinted"><div className="wd-section-heading"><span>Technical Foundations</span><h2>Performance, SEO and Secure Development</h2></div><div className="wd-quality-grid">{qualityAreas.map((area) => <ServiceCard service={area} key={area.title} />)}</div></section>

      <section className="wd-section wd-technologies"><div className="wd-section-heading"><span>Project-Fit Technology</span><h2>Technologies and Platforms</h2><p>We select technology based on the project’s features, budget, security and growth plans.</p></div><Checklist items={["React, Vite, JavaScript, HTML and CSS", "Node.js, PHP and Laravel", "WordPress, Shopify and WooCommerce", "Supabase, databases and REST APIs"]} /><p>We recommend tools that suit the project instead of using the same platform for every client.</p></section>

      <section className="wd-section"><div className="wd-section-heading"><span>Why Vorevix</span><h2>Why Choose Vorevix?</h2><p>Businesses choose our web development services for clear planning, practical development and ongoing support.</p></div><div className="wd-why-grid"><article><h3>Clear Planning</h3><p>We define users, goals and features before coding begins.</p></article><article><h3>Practical Development</h3><p>We design and develop features that solve real business problems.</p></article><article><h3>SEO and Performance Foundations</h3><p>We consider mobile usability, speed, crawlability and page structure during development.</p></article><article><h3>Support After Launch</h3><p>We can provide maintenance, fixes and future improvements after release.</p></article></div><p>Learn more <a href="/about">about Vorevix</a> and our approach to digital projects.</p></section>

      <section className="wd-section wd-projects"><div><span className="wd-eyebrow">Real Work Only</span><h2>Selected Development Projects</h2><p>Our portfolio shows the actual work completed for each client.</p><p>A development case study may explain:</p><Checklist items={["The original business challenge", "The project scope", "The technology used", "The main features", "The integrations", "The final platform"]} /><p>For SaaS and web application projects, we may also show dashboards, user roles and workflows.</p><p>We only publish results or statistics when we can verify them.</p><a className="wd-text-link" href="/portfolio">Explore Our Portfolio <ArrowRight size={18} aria-hidden="true" /></a></div><div className="wd-project-visual" aria-hidden="true"><img src="/service-web.png" alt="" width="1183" height="1329" loading="lazy" /></div></section>

      <section className="wd-section wd-scope"><div className="wd-section-heading"><span>Planning an Investment</span><h2>Project Scope and Pricing</h2><p>Web development costs depend on the number of pages, custom features, integrations, user accounts, eCommerce requirements and testing.</p><p>We offer:</p></div><Checklist items={["Project-based development", "MVP development", "Ongoing technical support"]} /><p>After reviewing your requirements, we can provide a clear scope, timeline and estimate.</p><a className="wd-text-link" href="/contact">Request a Project Estimate <ArrowRight size={18} aria-hidden="true" /></a></section>

      <section className="wd-section wd-faq"><div className="wd-section-heading"><span>Common Questions</span><h2>Frequently Asked Questions</h2></div><div className="wd-faq-list">{webDevelopmentFaqs.map((faq, index) => <FaqItem faq={faq} index={index} key={faq.question} />)}</div></section>

      <section className="wd-final-cta"><h2>Ready to Start Your Web Development Project?</h2><p>Tell us what you need to build, who will use it and what the platform should achieve.</p><p>Whether you need a business website, online store, customer portal or SaaS solution, our web development services can support your project from planning through launch.</p><p>Contact Vorevix to discuss the web development services your business needs.</p><div className="wd-actions"><a className="primary" href="/contact">Start Your Project <ArrowRight size={18} aria-hidden="true" /></a><a href="/contact">Talk to Our Team</a></div></section>
    </main>
  );
}
