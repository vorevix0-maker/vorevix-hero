import { ArrowRight } from "lucide-react";
import { servicesPageFaqs } from "../servicesPageFaqs";
import "./ServicesPage.css";

const coreServices = [
  {
    title: "Web Design",
    supporting: "Professional Websites Built Around Real User Needs",
    href: "/services/web-design",
    cta: "Explore Web Design",
    paragraphs: [
      "A strong site should do more than look attractive. It should explain your offer clearly, build trust and guide visitors towards enquiry, purchase or another meaningful action.",
      "Vorevix creates responsive, modern and conversion-focused layouts for service companies, ecommerce brands, startups and professional organisations. Each project is planned around content hierarchy, customer journeys, mobile usability, accessibility and brand consistency.",
      "We design corporate sites, landing pages, portfolios, online stores and tailored web experiences. Every screen is created with a clear purpose, ensuring that visitors can find relevant information without confusion.",
      "The result is a polished interface that reflects your identity, communicates your value and works effectively across desktop, tablet and mobile devices.",
    ],
  },
  {
    title: "Web Development",
    supporting: "Reliable Development for Fast, Secure and Scalable Platforms",
    href: "/services/web-development-services",
    cta: "Explore Web Development",
    paragraphs: [
      "Good design needs a dependable technical foundation. Vorevix develops responsive and manageable sites that are built for long-term use rather than short-term appearance.",
      "Our development work can include WordPress builds, custom functionality, ecommerce solutions, content management systems, landing pages, redesigns and third-party integrations.",
      "Performance, maintainability and search visibility are considered throughout the build. We pay attention to page speed, mobile behaviour, clean structure, security and ease of content management.",
      "The objective is to create a platform that works smoothly for both users and internal teams. As your organisation expands, the system should be able to handle new pages, features, campaigns and content without requiring a complete rebuild.",
    ],
  },
  {
    title: "Search Engine Optimisation",
    supporting: "SEO Focused on Relevant Traffic and Long-Term Visibility",
    href: "/services/seo-services",
    cta: "Explore SEO Services",
    paragraphs: [
      "Search optimisation helps the right people discover your offer when they are actively looking for a solution. Vorevix develops SEO plans based on user intent, commercial relevance and realistic ranking opportunities.",
      "Our work may include keyword research, competitor review, technical audits, on-page improvements, content planning, internal linking, local optimisation and performance tracking.",
      "We do not rely on repeating phrases or adding keywords without purpose. Strong SEO requires useful information, a logical site structure, technical stability and pages that genuinely answer what users are searching for.",
      "Campaigns can be planned for local, national or international audiences. The approach is shaped around your market, competition, current visibility and wider objectives.",
    ],
  },
  {
    title: "UI/UX Design",
    supporting: "Clear Interfaces That Reduce Friction",
    href: "/services/ui-ux-design-services",
    cta: "Explore UI/UX Design",
    paragraphs: [
      "Users should not have to work hard to understand a platform. Effective UI/UX makes information easier to find, actions easier to complete and the overall experience more consistent.",
      "Vorevix designs user journeys, wireframes, interfaces, responsive layouts and design systems for websites, landing pages, dashboards and online products.",
      "Every element is considered in context. Navigation, spacing, hierarchy, calls to action and interaction patterns should all help users move forward with confidence.",
      "Visual quality matters, but usability comes first. Our aim is to create experiences that feel intuitive, professional and easy to use across different screen sizes.",
    ],
  },
  {
    title: "Branding",
    supporting: "Distinctive Brand Identity Built for Consistent Use",
    href: "/services/branding",
    cta: "Explore Branding Services",
    paragraphs: [
      "A brand is shaped by far more than a logo. It includes positioning, tone, visual language and the way customers recognise and remember a company.",
      "Vorevix helps new and existing brands create a clearer identity through logo systems, typography, colour direction, messaging, guidelines and practical applications.",
      "We focus on building a system that can work across websites, social media, presentations, advertising and printed materials. The identity should feel distinctive without becoming difficult to use.",
      "For new ventures, we help create a foundation from the beginning. For established companies, we refine inconsistent visuals and strengthen how the brand appears across different channels.",
    ],
  },
  {
    title: "Digital Marketing",
    supporting: "Marketing Connected to Clear Commercial Goals",
    href: "/services/digital-marketing",
    cta: "Explore Digital Marketing",
    paragraphs: [
      "Effective marketing requires more than frequent posting or random campaign activity. It needs direction, testing and a clear understanding of the audience.",
      "Vorevix develops campaign plans around awareness, enquiries, website traffic, product launches, engagement or lead generation. Our work may include content planning, social media direction, paid campaign strategy, landing page optimisation and performance analysis.",
      "We begin by identifying what the organisation needs to achieve, then select the channels and messages most likely to contribute to that goal.",
      "Results are reviewed over time so campaigns can be refined based on actual performance rather than assumptions. This creates a more focused and measurable approach to online promotion.",
    ],
  },
];

const integratedItems = [
  "Audience and market research",
  "Information architecture",
  "Visual direction",
  "Content planning",
  "Technical implementation",
  "Search optimisation",
  "Campaign execution",
  "Ongoing improvement",
];

const audiences = [
  ["Startups and New Ventures", "We help early-stage companies establish a credible identity, launch a professional site and communicate their offer more clearly."],
  ["Small and Medium-Sized Companies", "For SMEs, the focus may be improving online visibility, generating more enquiries, upgrading an outdated platform or creating a more organised marketing system."],
  ["Established Organisations", "Larger companies may require redevelopment, stronger positioning, improved user journeys, international SEO or greater consistency across multiple channels."],
  ["Remote and International Teams", "Our workflow is suitable for clients in different countries and time zones. Projects are managed through online communication, defined milestones and scheduled review stages."],
  ["Agencies and Consultants", "We can also collaborate with creative teams, consultants and agencies that need specialist help with design, development, branding or search optimisation."],
];

const processSteps = [
  ["Discovery", "We begin by learning about your company, audience, current challenges, competitors and desired outcomes."],
  ["Planning", "The project scope, priorities, structure, deliverables and timeline are defined before production begins."],
  ["Design and Content", "Layouts, messaging, visual direction and user journeys are developed according to the approved plan."],
  ["Development and Execution", "Designs are converted into functional assets, websites or campaigns using appropriate tools and technologies."],
  ["Testing and Review", "We assess usability, responsiveness, functionality, content accuracy and technical performance."],
  ["Launch and Improvement", "After release, we can continue with optimisation, updates, search improvements and campaign refinement where required."],
];

const values = [
  ["Commercial Thinking", "Every project begins with the result you need, not simply with design trends or isolated tactics."],
  ["Multiple Disciplines Under One Direction", "Design, development, branding, SEO and marketing can be coordinated without losing consistency."],
  ["International Collaboration", "Our remote process allows us to work with clients across markets while maintaining clear communication and accountability."],
  ["Practical Creative Work", "We focus on solutions that are visually strong, usable and appropriate for real commercial environments."],
  ["Clear Project Stages", "Defined deliverables, feedback rounds and approval points help reduce confusion and unnecessary revisions."],
  ["Built for the Long Term", "The systems we create are designed to evolve as your organisation, content and market presence expand."],
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-hero" aria-labelledby="services-title">
        <h1 id="services-title">Digital Agency Services for Businesses Ready to <em>Grow</em></h1>
        <div className="services-hero-copy">
          <p>Vorevix helps startups, established companies and ambitious brands build a stronger online presence through web design, development, SEO, UI/UX, branding and performance-focused marketing. Our work combines creative thinking, technical execution and commercial understanding. Rather than treating each requirement as an isolated task, we connect design, content, technology and promotion around the outcomes you want to achieve.</p>
          <p>Whether you are launching a new company, improving an outdated site, entering another market or strengthening your brand, we create practical solutions based on your audience, goals and competitive environment. We work with clients across international markets through a structured remote process, clear communication and defined project stages.</p>
        </div>
        <nav className="services-actions" aria-label="Services page actions">
          <a className="primary" href="/contact">Discuss Your Project <ArrowRight size={18} aria-hidden="true" /></a>
          <a href="/portfolio">View Our Work</a>
        </nav>
      </section>

      <section className="services-core" aria-labelledby="core-capabilities-title">
        <header className="services-section-heading">
          <span>Services</span>
          <h2 id="core-capabilities-title">Our Core Capabilities</h2>
        </header>
        <div className="services-core-list">
          {coreServices.map((service, index) => (
            <article className="services-core-item" key={service.title}>
              <div className="services-core-title">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.supporting}</p>
              </div>
              <div className="services-core-copy">
                {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <a href={service.href}>{service.cta} <ArrowRight size={17} aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-integrated" aria-labelledby="integrated-title">
        <div className="services-section-heading">
          <span>Connected Delivery</span>
          <h2 id="integrated-title">An Integrated Approach</h2>
        </div>
        <div className="services-integrated-copy">
          <div>
            <h3>Connected Solutions Instead of Disjointed Work</h3>
            <p>Many companies struggle because their website, branding, content and marketing are handled separately. The site may not support SEO, the brand may appear inconsistent and campaigns may direct people towards weak landing pages.</p>
            <p>Vorevix connects these areas through one coordinated process.</p>
          </div>
          <ol className="services-integrated-list">
            {integratedItems.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
          </ol>
        </div>
        <p className="services-closing">This helps reduce gaps between design, development and promotion. It also ensures that each part of the project contributes to a shared objective.</p>
      </section>

      <section className="services-audiences" aria-labelledby="audiences-title">
        <div className="services-section-heading">
          <span>Clients</span>
          <h2 id="audiences-title">Who We Work With</h2>
        </div>
        <div className="services-audience-list">
          {audiences.map(([title, content], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{content}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-together" aria-labelledby="together-title">
        <div className="services-section-heading">
          <span>One Direction</span>
          <h2 id="together-title">How the Capabilities Work Together</h2>
        </div>
        <div className="services-reading-copy">
          <p>A strong brand creates a recognisable identity. UI/UX turns that identity into an effective experience. Development brings the design to life. SEO helps the platform appear for relevant searches, while marketing attracts and engages the intended audience.</p>
          <p>When these areas are planned together, the customer journey becomes clearer and the investment becomes more effective.</p>
          <p>For example, keyword research may reveal what potential clients are searching for. Those findings influence page structure and content. UX planning makes that information easier to navigate, while campaigns bring qualified visitors to the right landing pages.</p>
          <p>This connected approach prevents separate activities from competing with one another.</p>
        </div>
      </section>

      <section className="services-process" aria-labelledby="process-title">
        <div className="services-section-heading">
          <span>Delivery</span>
          <h2 id="process-title">Our Process</h2>
        </div>
        <ol className="services-process-list">
          {processSteps.map(([title, content], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{title}</h3><p>{content}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="services-values" aria-labelledby="values-title">
        <div className="services-section-heading">
          <span>Why Vorevix</span>
          <h2 id="values-title">Why Choose Vorevix?</h2>
        </div>
        <div className="services-value-grid">
          {values.map(([title, content]) => <article key={title}><h3>{title}</h3><p>{content}</p></article>)}
        </div>
      </section>

      <section className="services-faq" aria-labelledby="services-faq-title">
        <div className="services-section-heading">
          <span>FAQ</span>
          <h2 id="services-faq-title">Frequently Asked Questions</h2>
        </div>
        <div className="services-faq-list">
          {servicesPageFaqs.map((faq, index) => (
            <details key={faq.question}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="services-final-cta" aria-labelledby="services-cta-title">
        <div>
          <span>Start the Conversation</span>
          <h2 id="services-cta-title">Ready to Strengthen Your Online Presence?</h2>
        </div>
        <div>
          <p>Whether you need a new website, clearer branding, stronger search visibility or a more focused marketing direction, Vorevix can help you build the right foundation.</p>
          <p>Tell us about your company, current challenges and target market. We will review your requirements and recommend a practical next step.</p>
          <nav className="services-actions" aria-label="Contact actions">
            <a className="primary" href="/contact">Start a Project <ArrowRight size={18} aria-hidden="true" /></a>
            <a href="/contact">Contact Vorevix</a>
          </nav>
        </div>
      </section>
    </main>
  );
}
