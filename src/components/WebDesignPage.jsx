import {
  ArrowRight,
  Blocks,
  BriefcaseBusiness,
  FileText,
  LayoutTemplate,
  MonitorSmartphone,
  Palette,
  RefreshCw,
  ShoppingCart,
} from "lucide-react";
import "./WebDevelopmentPage.css";
import "./WebDesignPage.css";

const designServices = [
  {
    title: "Custom Website Design",
    icon: LayoutTemplate,
    paragraphs: [
      "Custom web design gives your business greater control over how your website looks, communicates and supports users.",
      "Instead of forcing your content into a generic layout, we design page structures around your brand, audience and website goals. This may include custom homepages, service pages, landing pages, product layouts and supporting content sections.",
      "The result is a more distinctive and consistent website experience that can be carried into development without unnecessary design compromises.",
    ],
  },
  {
    title: "Business Website Design",
    icon: BriefcaseBusiness,
    paragraphs: [
      "We design business websites that present services clearly and make it easier for potential customers to understand what you offer.",
      "A strong business website should explain your value, establish credibility and guide users towards an appropriate next step. Depending on the project, that action may be requesting a quote, booking a consultation, contacting your team or exploring a specific service.",
    ],
    items: ["Clear service presentation", "Logical page hierarchy", "Professional visual design", "Strong content structure", "Responsive layouts", "Visible calls to action"],
    closing: "The website is planned to support current requirements while leaving room for future growth.",
  },
  {
    title: "eCommerce Website Design",
    icon: ShoppingCart,
    paragraphs: [
      "An eCommerce website must help customers discover products, evaluate their options and move through the buying journey with as little friction as possible.",
      "Our eCommerce web design work may include:",
    ],
    items: ["Homepage and promotional layouts", "Product-category structures", "Product listing pages", "Product detail pages", "Search and filtering interfaces", "Cart and checkout journeys", "Mobile shopping layouts", "Trust and reassurance elements"],
    closing: "We focus on clear information, visual consistency and practical user journeys rather than adding unnecessary elements that distract from the products.",
    custom: "Technical store development, payment integrations and platform implementation can be handled through our ",
    link: { label: "web development services", href: "/services/web-development" },
  },
  {
    title: "Website Redesign",
    icon: RefreshCw,
    paragraphs: [
      "An existing website may still function technically while no longer representing the quality, direction or needs of the business.",
      "Our website redesign services address problems such as:",
    ],
    items: ["Outdated visual design", "Confusing navigation", "Weak mobile layouts", "Inconsistent branding", "Poor content hierarchy", "Unclear calls to action", "Difficult-to-manage page structures"],
    closing: "We review the current website before deciding what should be retained, reorganised or redesigned.",
    final: "A redesign does not always mean replacing everything. In many cases, the right approach is to preserve useful content and functionality while improving the overall structure, usability and visual direction.",
  },
  {
    title: "Responsive Web Design",
    icon: MonitorSmartphone,
    paragraphs: [
      "Your website should provide a clear and usable experience across mobile phones, tablets, laptops and desktop screens.",
      "Responsive web design is not simply about shrinking a desktop page to fit a smaller screen. Each layout needs to account for different screen sizes, reading patterns and interaction methods.",
      "We plan responsive behaviour for:",
    ],
    items: ["Navigation menus", "Content columns", "Images and media", "Forms and buttons", "Product grids", "Tables and supporting information", "Calls to action"],
    closing: "This helps keep the website readable, usable and visually consistent across devices.",
  },
  {
    title: "Landing Page Design",
    icon: FileText,
    paragraphs: [
      "Landing pages are designed around a specific campaign, offer, audience or action.",
      "Unlike broader website pages, a landing page usually has a narrower objective. It may support paid advertising, lead generation, product launches, event registrations or service promotions.",
      "We organise landing-page content to create a clear progression from the initial message to the final call to action.",
      "Depending on the campaign, the page may include:",
    ],
    items: ["A focused headline", "Key benefits", "Supporting proof", "Product or service details", "Process information", "Frequently asked questions", "Contact or enquiry forms"],
    closing: "The design remains focused so unnecessary navigation and competing messages do not distract the user.",
  },
  {
    title: "WordPress and CMS Website Design",
    icon: Blocks,
    paragraphs: [
      "We design websites for content management systems such as WordPress and other suitable platforms.",
      "The design process considers how pages, content blocks, blog posts, service sections and reusable components will be managed after launch.",
      "This helps create layouts that are visually consistent while remaining practical for future content updates.",
    ],
    custom: "Technical CMS setup and development remain part of our ",
    link: { label: "web development service", href: "/services/web-development" },
  },
];

const processSteps = [
  ["1. Discovery", "We begin by discussing your business, audience, website goals, current challenges and project requirements."],
  ["2. Research and Requirements", "We review relevant competitors, user expectations, website functionality, content needs and platform considerations."],
  ["3. Sitemap and Content Planning", "We define the required pages, navigation structure, page relationships and content priorities."],
  ["4. Wireframing", "We create structural layouts that organise content, navigation and calls to action before detailed visual styling begins."],
  ["5. Visual Design", "We apply the approved brand direction, typography, colour, imagery and interface styling to the website layouts."],
  ["6. Responsive Design and Prototyping", "We adapt important layouts for different screen sizes and demonstrate key interactions where required."],
  ["7. Review and Development Handoff", "We refine the approved direction and prepare the design assets, components and specifications required for development."],
];

const whyPoints = [
  ["Strategy Before Decoration", "We begin with your audience, content and business objectives before deciding how the website should look."],
  ["Clear and Practical Process", "Each stage has a defined purpose, from discovery and wireframing through visual design and development handoff."],
  ["Brand and User Alignment", "We balance how the business wants to be presented with what users need to understand and accomplish."],
  ["Responsive Thinking", "Layouts are planned for different screens rather than treating mobile design as an afterthought."],
  ["Development-Aware Design", "We create interfaces with implementation in mind, helping reduce ambiguity between design and development."],
  ["Integrated Digital Expertise", "Our wider experience in branding, UI/UX, development and SEO helps us consider how the website fits into the broader digital presence."],
];

const faqs = [
  ["What is included in your web design services?", ["The scope may include discovery, website planning, sitemap development, information architecture, wireframes, responsive layouts, visual design, prototypes, reusable UI components and development-ready design files.", "The exact deliverables are defined before the project begins."]],
  ["What is the difference between web design and web development?", ["Web design determines how a website is structured, presented and used. Web development turns those approved designs into a functioning website through coding, systems and integrations."]],
  ["Do you create custom website designs?", ["Yes. We create custom layouts based on the brand, audience, content and goals of the project rather than applying the same generic layout to every business."]],
  ["Do you design responsive and mobile-friendly websites?", ["Yes. Important pages and components are planned for mobile, tablet and desktop experiences."]],
  ["Can you redesign an existing website?", ["Yes. We can review the current website and redesign its structure, visual direction, navigation, content hierarchy and responsive layouts."]],
  ["Do you design eCommerce websites?", ["Yes. We design eCommerce experiences including product discovery, category pages, product pages, cart journeys, checkout interfaces and mobile shopping layouts."]],
  ["Which platforms do you design websites for?", ["We can design websites for platforms such as WordPress, Shopify, WooCommerce and custom development environments, depending on the requirements and confirmed project scope."]],
  ["How long does a web design project take?", ["The timeline depends on the number of pages, content readiness, review process, design complexity and whether development is included. A clear schedule is provided after the scope has been defined."]],
  ["How much does professional web design cost?", ["Pricing depends on the project size, required layouts, eCommerce needs, prototyping, content requirements and development involvement. We provide a custom proposal based on the actual scope rather than a generic package that may not fit the project."]],
  ["Will my website be designed with SEO in mind?", ["Yes. We consider page structure, heading hierarchy, internal-link opportunities, content placement, navigation and responsive layouts. Ongoing SEO strategy and optimisation are available through our dedicated SEO service."]],
];

function Checklist({ items }) {
  return <ul className="wd-checklist">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function DesignServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article className="wd-card">
      <Icon className="wd-card-icon" size={26} aria-hidden="true" />
      <h3>{service.title}</h3>
      {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {service.items && <Checklist items={service.items} />}
      {service.closing && <p>{service.closing}</p>}
      {service.final && <p>{service.final}</p>}
      {service.link && <p>{service.custom}<a href={service.link.href}>{service.link.label}</a>.</p>}
    </article>
  );
}

function ContentSection({ title, children, className = "" }) {
  return (
    <section className={`wd-section web-design-content ${className}`}>
      <div className="wd-section-heading">
        <h2>{title}</h2>
      </div>
      <div className="web-design-prose">{children}</div>
    </section>
  );
}

export default function WebDesignPage() {
  return (
    <main className="web-development-page web-design-page">
      <nav className="wd-breadcrumbs" aria-label="Breadcrumb">
        <ol><li><a href="/">Home</a></li><li aria-hidden="true">/</li><li><a href="/services">Services</a></li><li aria-hidden="true">/</li><li><span aria-current="page">Web Design</span></li></ol>
      </nav>

      <section className="wd-hero web-design-hero">
        <div className="wd-hero-copy">
          <span className="wd-eyebrow">Web Design</span>
          <h1>Web Design Services for Growing Businesses</h1>
          <p>Your website should do more than look professional. It should communicate clearly, guide visitors confidently and support the goals behind your business.</p>
          <p>Vorevix provides strategic web design services for businesses that need a modern, responsive and user-focused digital presence. We combine website planning, information architecture, wireframing and visual design to create experiences that are clear, consistent and ready for effective development.</p>
          <p>Whether you are launching a new business website, redesigning an outdated platform or planning an eCommerce experience, we design around your audience, brand and commercial objectives.</p>
          <div className="wd-actions"><a className="primary" href="/contact">Discuss Your Website Project <ArrowRight size={18} aria-hidden="true" /></a><a href="/portfolio">View Our Portfolio</a></div>
        </div>
        <div className="wd-hero-visual web-design-visual"><img src="/service-web.png" alt="Web design services by Vorevix" width="1183" height="1329" fetchPriority="high" /></div>
      </section>

      <ContentSection eyebrow="Purpose Before Decoration" title="Web Design Built Around Your Business Goals">
        <p>Effective website design starts with understanding what the website needs to achieve.</p>
        <p>A service business may need to generate qualified enquiries. An eCommerce brand may need to make products easier to discover and compare. A growing company may need a clearer digital presence that supports new services, markets or campaigns.</p>
        <p>Our web design services are planned around your audience, business objectives and the actions you want visitors to take.</p>
        <p>We begin by identifying your audience, business priorities, core messages and desired user actions. These insights guide the website structure, content hierarchy and visual direction.</p>
        <p>This approach helps create a website that is visually polished, easier to understand and more practical for users.</p>
        <p>Our goal is to ensure that every important page has a clear purpose and that visitors can move through the website without unnecessary confusion.</p>
      </ContentSection>

      <section className="wd-section"><div className="wd-section-heading"><span>Seven Core Services</span><h2>Web Design Services for Modern Businesses</h2><p>Our web design services combine strategic planning, responsive design and clear visual communication within one coordinated process.</p><p>Each project is shaped around the business, its users and the type of website being created. The scope may include custom layouts, business websites, eCommerce experiences, landing pages, responsive interfaces and website redesigns.</p></div><div className="wd-card-grid">{designServices.map((service) => <DesignServiceCard service={service} key={service.title} />)}</div></section>

      <ContentSection eyebrow="Foundation" title="Strategic Website Planning"><p>Good visual design cannot compensate for a weak website structure.</p><p>Before detailed interface design begins, we plan how information should be organised across the website. This includes understanding which pages are required, how they relate to each other and how visitors are likely to move between them.</p><p>Strategic website planning may include:</p><Checklist items={["Audience and competitor review", "Website goals", "Page requirements", "Sitemap planning", "Content hierarchy", "Navigation structure", "User journeys", "Calls to action", "Internal-link opportunities"]} /><p>This planning stage creates a stronger foundation for both design and future development.</p></ContentSection>

      <ContentSection eyebrow="Clear Structure" title="Information Architecture and Content Hierarchy"><p>Information architecture determines how website content is grouped, labelled and connected.</p><p>When the structure is unclear, users may struggle to find services, products or important information. A clear structure makes the website easier to navigate and helps each page communicate one primary purpose.</p><p>We organise content so that important information appears in a logical order.</p><p>This may include defining:</p><Checklist items={["Main navigation categories", "Service and subservice relationships", "Product categories", "Supporting pages", "Footer navigation", "On-page section order", "Links between related content"]} /><p>Content hierarchy then determines what users see first, what supports the main message and what appears later for people who need additional detail.</p></ContentSection>

      <ContentSection eyebrow="Review Early" title="Wireframing and Prototyping"><p>Wireframes establish the structure of a page before detailed visual styling begins.</p><p>They help define:</p><Checklist items={["Section order", "Content placement", "Navigation", "Calls to action", "Image areas", "Forms", "Reusable components"]} /><p>Reviewing the structure early helps identify unclear journeys or missing information before detailed visual design begins.</p><p>For projects with more complex interactions, we may also create interactive prototypes. These demonstrate how important screens, menus, buttons or user journeys are expected to behave.</p><p>Prototypes provide a practical way to review the experience before development starts.</p></ContentSection>

      <ContentSection eyebrow="Designed for People" title="User-Focused Website Experiences"><p>A website should be easy to understand for the people using it, not only for the business that owns it.</p><p>We design user journeys around common visitor questions:</p><Checklist items={["Where am I?", "What does this business offer?", "Is this relevant to me?", "Why should I trust it?", "Where can I find more detail?", "What should I do next?"]} /><p>Clear navigation, scannable content and visible actions help users move through the website more confidently.</p><p>For projects that require deeper user research, application interfaces or product experience planning, explore our <a href="/services/ui-ux-design">UI/UX design services</a>.</p></ContentSection>

      <ContentSection eyebrow="A Consistent Identity" title="Brand-Aligned Visual Design"><p>Your website should feel like a natural extension of your brand.</p><p>We use typography, colour, imagery, spacing and layout to create a consistent visual language across pages and devices.</p><p>The visual direction should reflect how the business wants to be perceived while remaining suitable for the audience and industry.</p><p>Our design approach may include:</p><Checklist items={["Typography systems", "Colour application", "Image direction", "Icon styles", "Buttons and form elements", "Layout spacing", "Reusable interface components", "Consistent section patterns"]} /><p>Businesses that need a broader visual identity system can also explore our <a href="/services/branding">branding services</a>.</p></ContentSection>

      <ContentSection eyebrow="Designed to Scale" title="Design Systems and Reusable Components"><p>For larger websites, consistent components help keep the interface organised and easier to scale.</p><p>A design system may include reusable elements such as:</p><Checklist items={["Buttons", "Cards", "Forms", "Navigation patterns", "Alerts", "Content blocks", "Pricing sections", "Testimonials", "Product elements", "Typography styles"]} /><p>Reusable components help maintain visual consistency when new pages or features are added later.</p><p>They also create a clearer handoff for developers because the same patterns do not need to be interpreted differently on every page.</p></ContentSection>

      <ContentSection eyebrow="Search-Friendly Planning" title="SEO-Ready Website Structure"><p>Web design and SEO are different disciplines, but design decisions can support or obstruct search visibility.</p><p>Our web design services consider practical SEO foundations during the planning and interface-design process, including:</p><Checklist items={["Logical page hierarchy", "Clear heading structures", "Suitable content placement", "Internal-link opportunities", "Mobile-friendly layouts", "Readable text", "Consistent navigation", "Space for useful page content"]} /><p>This does not guarantee rankings. It creates a stronger design foundation for technical implementation and ongoing optimisation.</p><p>For keyword research, content strategy and search optimisation, visit our <a href="/services/seo-services">SEO services</a>.</p></ContentSection>

      <ContentSection eyebrow="Inclusive Principles" title="Accessibility and Browser Considerations"><p>Websites should be understandable and usable by as many people as reasonably possible.</p><p>During the design process, we consider principles such as:</p><Checklist items={["Readable typography", "Clear content hierarchy", "Suitable visual contrast", "Recognisable links and buttons", "Clear form labels", "Visible interaction states", "Consistent navigation", "Practical spacing and touch targets"]} /><p>Our design approach also considers established accessibility principles, including guidance from the official <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">Web Content Accessibility Guidelines</a>.</p><p>We avoid layouts that depend too heavily on a single browser, screen size or interaction method.</p><p>Accessibility requirements can vary by project and jurisdiction, so any formal compliance target should be confirmed during project planning.</p></ContentSection>

      <section className="wd-section wd-tinted"><div className="wd-section-heading"><span>Seven Stages</span><h2>Our Web Design Process</h2><p>Our web design services follow a structured process from discovery and wireframing to responsive design and development handoff.</p></div><div className="wd-process-grid">{processSteps.map(([title, body]) => <article className="wd-process-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></section>

      <ContentSection eyebrow="Connected Disciplines" title="Web Design and Web Development"><p>Web design and web development are connected, but they are not the same service.</p><p>Web design determines:</p><Checklist items={["Website structure", "Page layouts", "Visual direction", "User journeys", "Responsive behaviour", "Interface components"]} /><p>Web development turns the approved design into a functioning website through coding, content management systems, integrations and technical implementation.</p><p>Vorevix can provide both services as part of one coordinated project or design a website for implementation by another development team.</p><p>Learn more about our <a href="/services/web-development">web development services</a>.</p></ContentSection>

      <section className="wd-section"><div className="wd-section-heading"><span>Why Vorevix</span><h2>Why Choose Vorevix for Web Design?</h2></div><div className="web-design-why">{whyPoints.map(([title, body]) => <article key={title}><Palette size={24} aria-hidden="true" /><h3>{title}</h3><p>{body}</p></article>)}</div><div className="web-design-prose"><p>Our web design services bring these disciplines together without confusing their individual roles or project scope.</p><p>Learn more <a href="/about">about Vorevix</a>.</p></div></section>

      <ContentSection eyebrow="Portfolio" title="Selected Web Design Projects" className="web-design-callout"><p>Every project has different goals, audiences and technical requirements.</p><p>Our web design services can support new websites, redesign projects and digital experiences for growing businesses.</p><p>Our portfolio includes website and digital work created for businesses that needed stronger visual communication, clearer user journeys and more effective digital experiences.</p><a className="wd-text-link" href="/portfolio">View Selected Projects <ArrowRight size={18} aria-hidden="true" /></a></ContentSection>

      <ContentSection eyebrow="Planning the Scope" title="Web Design Project Scope and Pricing"><p>The scope and cost of our web design services depend on the size, complexity and requirements of the project.</p><p>Key pricing factors include:</p><Checklist items={["Number of pages", "Number of custom layouts", "Content readiness", "Sitemap complexity", "eCommerce requirements", "Wireframing depth", "Prototype requirements", "Number of responsive layouts", "Design system requirements", "Revision rounds", "Development involvement"]} /><p>A small marketing website will have a different scope from a large eCommerce store or a multi-service business platform.</p><p>We review the requirements first and then provide a clear project scope based on the actual work involved.</p><a className="wd-text-link" href="/contact">Request a Project Quote <ArrowRight size={18} aria-hidden="true" /></a></ContentSection>

      <section className="wd-section web-design-faq"><div className="wd-section-heading"><span>Common Questions</span><h2>Frequently Asked Questions</h2></div><div className="web-design-faq-grid">{faqs.map(([question, answers]) => <article key={question}><h3>{question}</h3>{answers.map((answer) => <p key={answer}>{answer}</p>)}</article>)}</div></section>

      <section className="wd-final-cta"><h2>Design a Website That Supports Your Next Stage of Growth</h2><p>Your website should communicate your value clearly, reflect your brand professionally and make it easier for users to take the next step.</p><p>Our web design services can help you plan a clearer, more professional and development-ready website built around your audience, business and brand.</p><p>We design websites that combine strategy, structure and visual clarity to create a stronger foundation for your digital presence.</p><blockquote>“We build digital solutions that combine strategy, design, technology, and performance to help businesses grow with confidence.”</blockquote><div className="wd-actions"><a className="primary" href="/contact">Discuss Your Website Project <ArrowRight size={18} aria-hidden="true" /></a></div></section>
    </main>
  );
}
