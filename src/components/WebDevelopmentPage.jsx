import { useState } from "react";
import { ArrowRight, ChevronDown, Code2 } from "lucide-react";
import { webDevelopmentFaqs } from "../webDevelopmentFaqs";
import "./WebDevelopmentPage.css";

const services = [
  ["Custom Website Development", ["We build custom business, corporate and service websites around your brand, content and conversion goals. Development can include responsive layouts, reusable components, custom forms, content management features and integrations."]],
  ["Frontend Development", ["Frontend development controls what users see and interact with. We turn approved designs into responsive interfaces that work across desktop, tablet and mobile devices.", "Our work considers accessibility, browser compatibility, page speed, semantic structure and maintainable components."]],
  ["Backend Development", ["Backend development powers the logic, data and administrative functions behind a website or application.", "Depending on the project, this may include databases, authentication, user roles, dashboards, content workflows, business rules, notifications and custom admin tools."]],
  ["Full-Stack Development", ["For projects requiring both customer-facing interfaces and server-side functionality, we provide full-stack development."]],
  ["CMS Development", ["A content management system allows your team to update pages, articles, images and other content without editing code.", "We work with WordPress, headless solutions and custom CMS setups where appropriate."]],
  ["eCommerce Development", ["We develop online stores with product catalogues, category pages, shopping carts, checkout flows, payment integrations and order management."]],
  ["Web Application Development", ["Web applications go beyond informational pages. They can include user accounts, dashboards, subscriptions, internal workflows, data processing and role-based functionality.", "Our web application development services support businesses that need custom digital tools rather than a standard marketing website."]],
  ["API and Third-Party Integrations", ["Modern websites often need to connect with payment gateways, CRMs, booking systems, email platforms, analytics tools and external databases.", "We develop and test API integrations so data can move securely and reliably between connected systems."]],
];

const process = [
  ["1. Discovery and Technical Scoping", "We define business goals, users, functionality, content needs, integrations and technical constraints."],
  ["2. Requirements and Architecture", "The project is organised into pages, components, data structures, user roles and system connections. Technologies are selected according to the actual scope."],
  ["3. Development Planning", "Work is divided into milestones so progress can be reviewed throughout the build."],
  ["4. Frontend and Backend Development", "Approved designs are implemented while databases, CMS features, APIs and business logic are developed."],
  ["5. Integration and Content Setup", "Third-party systems are connected, initial content is added where included and administrative workflows are configured."],
  ["6. Testing and Review", "The platform is tested for functionality, responsiveness, compatibility and expected user behaviour."],
  ["7. Deployment", "The approved project is prepared for production. Domain, hosting, SSL, redirects and analytics requirements are handled where included."],
  ["8. Handover and Support", "Agreed files, credentials, documentation and access are handed over. Ongoing maintenance can be arranged separately."],
];

function List({ items }) {
  return <ul className="wd-checklist">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function Section({ title, children, className = "" }) {
  return <section className={`wd-section ${className}`}><div className="wd-section-heading"><h2>{title}</h2></div><div className="wd-prose">{children}</div></section>;
}

function Faq({ faq, index }) {
  const [open, setOpen] = useState(index === 0);
  const id = `web-development-faq-${index}`;
  const designQuestion = faq.question === "What is the difference between web design and web development?";
  return <article className={`wd-faq-item ${open ? "open" : ""}`}><h3><button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>{faq.question}<ChevronDown size={21} aria-hidden="true"/></button></h3><div id={id} className="wd-faq-answer" hidden={!open}><p>{designQuestion ? <><a href="/services/web-design">Web design</a>{faq.answer.slice(10)}</> : faq.answer}</p></div></article>;
}

export default function WebDevelopmentPage() {
  return <main className="web-development-page">
    <nav className="wd-breadcrumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li aria-hidden="true">/</li><li><a href="/services">Services</a></li><li aria-hidden="true">/</li><li><span aria-current="page">Web Development</span></li></ol></nav>
    <section className="wd-hero"><div className="wd-hero-copy"><span className="wd-eyebrow">Web Development</span><h1>Web Development Services Built for Performance and Growth</h1><p>Modern businesses need more than a website that simply looks professional. They need a reliable digital platform that loads quickly, works across devices, supports business operations and remains manageable as requirements grow. Vorevix provides web development services for companies that need custom websites, content management systems, eCommerce platforms and web applications built around clear business goals.</p><p>Whether you are launching a new website, replacing an outdated system or developing a custom platform, we focus on performance, usability, security and maintainability.</p><div className="wd-actions"><a className="primary" href="/contact">Start Your Development Project <ArrowRight size={18} aria-hidden="true"/></a><a href="/portfolio">View Our Work</a></div></div><div className="wd-hero-visual"><img src="/assets/vorevix-laptop.png" alt="Custom web development services for scalable digital platforms" width="1080" height="1080" fetchPriority="high"/></div></section>

    <Section title="What Do Web Development Services Include?"><p>Web development services can include technical discovery, frontend development, backend systems, CMS configuration, databases, eCommerce functionality, API integrations, testing, deployment and post-launch support. The exact scope depends on the platform’s purpose, users, content, workflows, integrations and long-term requirements.</p><p>A professional development process should define what the platform must do, how users will interact with it, which systems need to connect and how the solution will be maintained after launch.</p></Section>

    <Section title="Web Development That Solves Real Business Problems"><p>An outdated or poorly developed website can create problems across marketing, sales and internal operations. Pages may load slowly, forms may fail, content updates may require technical support, integrations may break and new features may become expensive to add.</p><p>Our approach begins with the problem the platform needs to solve. We assess users, workflows, content, technical requirements and future plans before recommending a development direction.</p></Section>

    <section className="wd-section"><div className="wd-section-heading"><h2>Our Web Development Services</h2><p>Our web development services cover the complete implementation process, from technical planning and frontend development to backend systems, integrations, testing and deployment.</p></div><div className="wd-card-grid">{services.map(([title, paragraphs]) => <article className="wd-card" key={title}><Code2 className="wd-card-icon" size={26} aria-hidden="true"/><h3>{title}</h3>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</article>)}</div></section>

    <Section title="Website or Web Application: Which Do You Need?"><p>A website is generally focused on content, marketing and lead generation. It may include service pages, landing pages, articles, contact forms and a CMS for managing public information.</p><p>A web application includes more complex user interaction and business logic. It may require accounts, dashboards, workflows, permissions, live data or connections with multiple systems.</p></Section>

    <Section title="Performance, Scalability and Security" className="wd-tinted"><p>Performance affects user experience, conversions and search visibility. Our web development services may consider image optimisation, caching, code splitting, lazy loading, server response times, database efficiency and third-party scripts throughout development.</p><p>Scalability means the platform can support reasonable growth without requiring a complete rebuild whenever content, traffic or functionality increases.</p><p>Security is considered across the full development lifecycle. Depending on the project, measures may include input validation, secure authentication, role-based permissions, HTTPS, protected environment variables, safe API handling, dependency management and backups.</p><p>No responsible company can guarantee a perfect performance score or permanent security. Our focus is to build a strong technical foundation and reduce avoidable risks.</p></Section>

    <Section title="Development for Search, Answer and AI Discovery"><p>Technical implementation can influence how clearly search engines, answer engines and AI-powered systems understand a website.</p><p>Our development approach may support:</p><List items={["semantic HTML","logical heading structures","crawlable navigation","clean internal linking","indexable primary content","structured-data implementation","consistent entity information","accessible FAQ markup","server-rendered content where suitable","performance-conscious templates"]}/><p>Answer Engine Optimisation benefits from concise, accessible answers and clear page structure. Generative Engine Optimisation benefits from consistent entities, factual content and machine-readable relationships between services, pages and organisations.</p><p>These practices can improve clarity and discoverability, but they cannot guarantee AI citations, search-feature inclusion or specific rankings.</p><p>Where required, development can connect with our <a href="/services/seo-services">SEO services</a> and <a href="/services/ui-ux-design-services">UI/UX design services</a>.</p></Section>

    <Section title="Testing and Quality Assurance"><p>Before deployment, we test the website or application across relevant devices, browsers and user flows.</p><p>Testing may include forms, navigation, responsive layouts, authentication, integrations, checkout processes, CMS functions, permissions and error handling.</p><p>We also review performance, accessibility basics, redirects and launch configuration. Issues are resolved according to the approved scope before the platform moves into production.</p></Section>

    <section className="wd-section wd-tinted"><div className="wd-section-heading"><h2>Our Web Development Process</h2></div><div className="wd-process-grid">{process.map(([title, body]) => <article className="wd-process-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></section>

    <Section title="What Do You Receive?"><p>Project deliverables depend on the approved scope, but web development services may include:</p><List items={["a production-ready responsive website or web application","frontend and backend source code","repository access","CMS and database configuration","API and third-party integrations","deployment setup","administrative credentials","technical documentation","content-management guidance","an agreed post-launch support period"]}/></Section>

    <Section title="Technologies We Work With"><p>Frontend development may use HTML, CSS, JavaScript, TypeScript, React or Next.js. Backend requirements may be handled with Node.js, PHP, Laravel, Python or another suitable framework.</p><p>For content and commerce, we may work with WordPress, WooCommerce, Shopify, headless CMS platforms or custom systems.</p><p>Development workflows can include Git, REST APIs, cloud hosting, CDNs, caching and deployment automation.</p></Section>

    <Section title="Why Choose Vorevix?"><p>Vorevix combines technical implementation with clear communication and business-focused planning.</p><p>We explain what is required, what is optional and where complexity may affect budget or delivery time.</p><p>Our professional development approach is built around:</p><List items={["transparent project scope","responsive and maintainable implementation","practical technology choices","SEO-aware website structure","clear milestone reviews","direct communication","documented handover","post-launch support options"]}/></Section>

    <Section title="Web Development Pricing Factors"><p>The cost of custom web development services depends on the scale and complexity of the project.</p><p>Major pricing factors include the number of pages, frontend interactions, backend functionality, database requirements, user roles, CMS setup, eCommerce features, API integrations, authentication, migration and testing.</p><p>Hosting, licences and maintenance may be separate from the initial cost. After reviewing the requirements, we provide a defined scope and estimate instead of using one fixed price for projects with completely different needs.</p></Section>

    <Section title="Code Ownership, Handover and Maintenance"><p>Final project files, agreed credentials and source-code access are handed over according to the approved scope, contract and payment terms.</p><p>A website continues to require attention after deployment. Maintenance may include updates, backups, monitoring, security improvements, bug fixes, performance reviews and new features.</p><p>The initial build and long-term maintenance are treated as separate scopes unless the proposal states otherwise.</p></Section>

    <section className="wd-section wd-faq"><div className="wd-section-heading"><h2>Frequently Asked Questions About Web Development Services</h2></div><div className="wd-faq-list">{webDevelopmentFaqs.map((faq, index) => <Faq faq={faq} index={index} key={faq.question}/>)}</div></section>

    <section className="wd-final-cta"><h2>Build a Platform That Supports Your Next Stage of Growth</h2><p>The right website should support current goals without blocking future progress.</p><p>Vorevix provides web development services designed around performance, clear functionality, maintainable technology and practical business needs.</p><p>Whether you need a responsive company website, an eCommerce platform or a custom web application, we can help define the right scope and turn it into a reliable digital product.</p><div className="wd-actions"><a className="primary" href="/contact">Discuss Your Project <ArrowRight size={18} aria-hidden="true"/></a><a href="/portfolio">View Our Work</a></div></section>
  </main>;
}
