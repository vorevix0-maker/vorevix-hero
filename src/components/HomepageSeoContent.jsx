import { useEffect, useRef, useState } from "react";
import { ArrowRight, BadgeCheck, ClipboardList, Headphones, LayoutTemplate, MessageSquareText, Network, Plus, RefreshCw, Rocket, Search, Target, TrendingUp, Wrench } from "lucide-react";
import { homepageFaqs as faqs } from "../homepageFaqs";
import "./HomepageSeoContent.css";

const services = [
  ["Web Design", "/services/web-design", "We design clear, modern and responsive websites shaped around your brand, content, audience and customer journey.", "Our approach focuses on visual hierarchy, page structure, usability and meaningful calls to action rather than relying on a generic visual template.", "A carefully planned website can help visitors understand the business, find relevant information and move towards an enquiry, purchase or other intended action."],
  ["Web Development", "/services/web-development-services", "We build reliable, scalable and maintainable websites that support real business requirements.", "Development may include content-management systems, eCommerce functionality, third-party integrations, custom features, performance improvements and technical foundations that support accessibility and organic search.", "The platform and technologies are selected according to the project's requirements rather than a fixed technology preference."],
  ["UI/UX Design", "/services/ui-ux-design-services", "We design digital experiences that are intuitive, consistent and aligned with how people use websites, applications and digital products.", "Our UI/UX work may include user journeys, information architecture, wireframes, interface design and interaction patterns that reduce friction across different screens and devices.", "The objective is to make important actions easier to understand and complete."],
  ["Branding", "/services/branding", "We develop brand identities and visual systems that help businesses communicate with greater clarity, consistency and confidence.", "Depending on the project, branding may include positioning, messaging direction, identity development, typography, colour systems and practical usage guidelines.", "A strong brand system helps create a consistent experience across websites, campaigns, presentations, social media and other customer touchpoints."],
  ["SEO Services", "/services/seo-services", "We help businesses improve organic visibility through technical SEO, keyword research, on-page optimisation, content planning, internal linking and ongoing performance review.", "Modern SEO also requires information to be structured so that traditional search engines, answer engines and AI-powered discovery systems can interpret it clearly.", "This may involve direct answers, logical headings, consistent entity information, structured data and useful coverage of related topics. Search-feature inclusion, AI-generated citations and specific ranking positions cannot be guaranteed."],
  ["Digital Marketing", "/services/digital-marketing", "We create digital marketing strategies that connect businesses with relevant audiences through suitable channels, messages and campaigns.", "Our work may include paid search, paid social, campaign planning, landing-page improvements, content coordination, remarketing and performance analysis.", "Digital marketing activity should support a clear business objective rather than generating traffic without a defined customer journey."],
];

const connections = [
  ["Strategy Connected to Execution", "We clarify what needs to be achieved before deciding what should be designed, developed or promoted.", "This keeps the work focused on the underlying business problem instead of isolated deliverables."],
  ["Branding Connected to Customer Experience", "A brand should influence more than a logo or colour palette.", "It should shape messaging, visual direction, website presentation and the way customers experience the organisation across different touchpoints."],
  ["Design Connected to Development", "Design decisions should consider content, responsive behaviour, accessibility and implementation from the beginning.", "This reduces avoidable rework and supports a more consistent final product."],
  ["Development Connected to SEO", "Website structure, performance, crawlability, accessibility, metadata and internal linking should be considered during development rather than added only after launch."],
  ["Marketing Connected to Conversion", "Traffic has limited value when visitors cannot understand the offer or complete the intended action.", "We connect campaigns with landing pages, messaging and user journeys intended to support enquiries, registrations or purchases."],
  ["Launch Connected to Improvement", "A website or campaign is not treated as the end of the process.", "Where agreed, performance data, customer feedback and changing business priorities can be used to guide ongoing improvements."],
];

const reasons = [
  ["Solutions Based on Real Requirements", "We recommend services according to business goals, current conditions, available resources and practical needs instead of forcing every organisation into a standard package."],
  ["Clear Communication", "We aim to keep decisions, responsibilities, timelines and project progress understandable throughout the engagement."],
  ["Connected Digital Capabilities", "Strategy, branding, design, development, SEO and marketing are considered together whenever the project requires coordinated delivery."],
  ["Built for Future Improvement", "Our solutions are planned with maintainability, scalability and future changes in mind."],
  ["Quality Beyond Appearance", "Visual quality matters, but usability, accessibility, performance, technical structure and long-term value also influence the success of a digital experience."],
  ["Continued Support", "Where required, we can continue supporting websites, campaigns and digital platforms after launch under an agreed scope."],
  ["Launch and Improve", "We use launch insights, performance data and changing priorities to guide practical improvements over time."],
];

const reasonIcons = [Target, MessageSquareText, Network, TrendingUp, BadgeCheck, Headphones, RefreshCw];

const process = [
  ["1. Discover", "We learn about the business, audience, current assets, competitors, challenges and project goals.", "This helps clarify what the project needs to solve and which outcomes should guide the work."],
  ["2. Define", "We establish the scope, priorities, content requirements, technical needs, responsibilities and practical constraints.", "Clear definition helps reduce uncertainty and prevents avoidable changes later in the process."],
  ["3. Plan", "We organise the strategy, structure, user journeys, technical approach and delivery priorities before implementation begins."],
  ["4. Design and Build", "Depending on the project, we develop the visual direction, interfaces, website, brand system or campaign assets required to deliver the agreed solution."],
  ["5. Review and Launch", "We review the work, test relevant functionality and responsive behaviour, resolve agreed issues and prepare the final delivery or launch."],
  ["6. Improve", "Where included in the scope, we continue supporting technical updates, content changes, SEO, performance improvements and digital marketing activity."],
];

const processIcons = [Search, ClipboardList, LayoutTemplate, Wrench, Rocket, RefreshCw];

const businessTypes = [
  ["New Businesses", "Build a clear brand, professional website and dependable digital foundation from the beginning."],
  ["Growing Businesses", "Improve existing systems, increase visibility and create a more consistent customer experience."],
  ["Established Organisations", "Modernise outdated websites, strengthen digital positioning and support new products, services or markets."],
  ["eCommerce Brands", "Improve product experiences, website performance, content structure and customer-acquisition journeys."],
  ["SaaS and Digital Products", "Plan user journeys, interfaces and scalable digital experiences around genuine customer needs."],
  ["Professional-Service Firms", "Communicate expertise clearly, strengthen credibility and support more relevant enquiries."],
];

const internationalMarkets = [
  ["Australia", "/locations/australia", "Connected strategy, branding, design, development, SEO and digital marketing support for Australian businesses.", "/images/flag-australia.svg"],
  ["New Zealand", "/locations/new-zealand", "Digital services for New Zealand organisations seeking stronger brands, websites, customer experiences and online visibility.", "/images/flag-new-zealand.jpg"],
  ["United Arab Emirates", "/locations/united-arab-emirates", "Digital solutions for businesses building, improving or expanding their presence in the UAE.", "/images/flag-uae.png"],
];

const performanceBenefits = [
  "Mobile responsiveness",
  "Website performance",
  "Technical SEO",
  "Accessibility",
  "Scalable content management",
  "Security practices",
  "Analytics integration",
  "Conversion-focused structure",
  "Browser compatibility",
  "Maintainable development",
  "Third-party integrations",
  "Ongoing support",
];

function Block({ number, title, children, className = "" }) {
  return <section className={`homepage-seo-block ${className}`}><div className="homepage-seo-block-heading"><span>{number}</span><h2>{title}</h2></div>{children}</section>;
}

function ServicesScroller() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const viewportRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const viewport = viewportRef.current;
    const card = cardRefs.current[activeIndex];
    if (!viewport || !card) return;
    const track = card.parentElement;
    const cardPosition = card.offsetLeft - (track?.offsetLeft ?? 0);
    viewport.scrollTo({ left: cardPosition, behavior: "smooth" });
  }, [activeIndex]);

  return <section
    className="homepage-services-scroller"
    aria-labelledby="homepage-services-title"
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
    onFocusCapture={() => setIsPaused(true)}
    onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false); }}
  >
    <div className="homepage-services-heading">
      <span>Services We Provide</span>
      <h2 id="homepage-services-title">Digital Services Built Around Business Growth</h2>
      <p>Focused digital capabilities designed around your goals, audience and next stage of growth.</p>
    </div>

    <div className="homepage-services-carousel" ref={viewportRef}>
      <div className="homepage-services-track">
        {services.map(([title, href, description], index) => <article
          className={`homepage-services-card ${index === activeIndex ? "is-active" : ""}`}
          ref={(node) => { cardRefs.current[index] = node; }}
          key={title}
        >
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={href}>Read More <ArrowRight size={16} aria-hidden="true" /></a>
        </article>)}
      </div>
    </div>

    <div className="homepage-services-dots" aria-label="Choose a service">
      {services.map(([title], index) => <button
        className={index === activeIndex ? "is-active" : ""}
        type="button"
        aria-label={`Show ${title}`}
        aria-current={index === activeIndex ? "true" : undefined}
        onClick={() => setActiveIndex(index)}
        key={title}
      />)}
    </div>
  </section>;
}

function FaqList() {
  const [openIndex, setOpenIndex] = useState(null);
  return <div className="homepage-faq-list">{faqs.map(([question, answer], index) => { const open = openIndex === index; const panelId = `homepage-faq-${index}`; return <div className={`homepage-faq-item ${open ? "is-open" : ""}`} key={question}><button type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpenIndex(open ? null : index)}><span className="homepage-faq-number">{String(index + 1).padStart(2, "0")}</span><span className="homepage-faq-question">{question}</span><span className="homepage-faq-toggle"><Plus size={16} aria-hidden="true" /></span></button><div id={panelId} hidden={!open}><p>{answer}</p></div></div>; })}</div>;
}

export default function HomepageSeoContent() {
  return <div className="homepage-seo-section">
    <ServicesScroller />

    <section className="homepage-connections" aria-labelledby="homepage-connections-title">
      <div className="homepage-connections-heading">
        <span>Connected Digital Services</span>
        <h2 id="homepage-connections-title">How Do Our Digital Services Work Together?</h2>
        <p>Successful digital work connects branding, design, development, SEO and marketing around one shared direction.</p>
      </div>
      <div className="homepage-connections-grid">
        {connections.map(([title, ...paragraphs], index) => (
          <article className="homepage-connection-item" key={title}>
            <span className="homepage-connection-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{title}</h3>
            {paragraphs.filter(Boolean).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <span className="homepage-connection-mark" aria-hidden="true" />
          </article>
        ))}
      </div>
      <p className="homepage-connections-summary">A full-service digital agency can help coordinate these capabilities so that every part of the customer experience supports a shared direction.</p>
    </section>

    <section className="homepage-reasons" aria-labelledby="homepage-reasons-title">
      <div className="homepage-reasons-heading">
        <span>Why Vorevix</span>
        <h2 id="homepage-reasons-title">Why Do Businesses Work With Vorevix?</h2>
        <p>Working with one full-service digital agency can reduce fragmented communication and keep every part of a business&apos;s digital presence aligned.</p>
      </div>
      <div className="homepage-reasons-grid">
        {reasons.map(([title, ...paragraphs], index) => {
          const Icon = reasonIcons[index];
          return (
            <article className="homepage-reason-item" key={title}>
              <span className="homepage-reason-icon"><Icon size={24} strokeWidth={1.8} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{paragraphs.filter(Boolean).join(" ")}</p>
              <span className="homepage-reason-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            </article>
          );
        })}
      </div>
      <div className="homepage-reasons-footer">
        <p>As a full-service digital agency, Vorevix can support both individual projects and broader digital-improvement programmes.</p>
        <a href="/about">Learn More About Vorevix <ArrowRight size={16} aria-hidden="true" /></a>
      </div>
    </section>

    <Block number="06" title="Selected Digital Work"><div className="homepage-feature"><img src="/portfolio/portfolio-brand-hero.jpg" alt="Selected Vorevix branding project" width="1200" height="675" loading="lazy" decoding="async"/><div><p>Our work combines business thinking, design and technical execution.</p><p>Each project begins with a specific challenge and is shaped around the requirements of the organisation, its audience and the intended outcome.</p><p>Explore selected projects to understand how branding, user experience, development, SEO and marketing can be connected within one solution.</p><p>Any performance results presented in case studies should be based on approved and verifiable project data rather than estimates or unsupported marketing claims.</p><a className="homepage-text-link" href="/portfolio">View Our Portfolio <ArrowRight size={16} aria-hidden="true"/></a></div></div></Block>

    <section className="homepage-process-flow" aria-labelledby="homepage-process-title">
      <div className="homepage-process-heading">
        <span>Our Process</span>
        <h2 id="homepage-process-title">A Clear Process From Strategy to Launch</h2>
        <p>A connected path from early discovery through delivery and ongoing improvement.</p>
      </div>
      <div className="homepage-process-flow-grid">
        {process.map(([title, ...paragraphs], index) => {
          const Icon = processIcons[index];
          const cleanTitle = title.replace(/^\d+\.\s*/, "");
          return (
            <article className="homepage-process-step" key={title}>
              <div className="homepage-process-circle">
                <Icon size={30} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <span className="homepage-process-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{cleanTitle}</h3>
              <p>{paragraphs.filter(Boolean).join(" ")}</p>
            </article>
          );
        })}
      </div>
      <p className="homepage-process-summary">This connected process allows a full-service digital agency to maintain clearer alignment from early planning through implementation and ongoing support.</p>
    </section>

    <section className="homepage-audiences" aria-labelledby="homepage-audiences-title">
      <div className="homepage-audiences-heading">
        <span>Businesses We Support</span>
        <h2 id="homepage-audiences-title">Who Does Vorevix Work With?</h2>
        <p>Vorevix may support organisations at different stages of digital and commercial growth.</p>
      </div>
      <div className="homepage-audiences-track">
        {businessTypes.map(([title, description], index) => (
            <article className="homepage-audience-step" key={title}>
              <div className="homepage-audience-number">
                <strong>{String(index + 1).padStart(2, "0")}</strong>
              </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
      <p className="homepage-audiences-summary">A flexible full-service digital agency can assist these organisations through different combinations of strategy, branding, design, development, SEO and digital marketing.</p>
    </section>

    <section className="homepage-international" aria-labelledby="homepage-international-title">
      <div className="homepage-international-heading">
        <span>International Support</span>
        <h2 id="homepage-international-title">Can Vorevix Support International Businesses?</h2>
        <p>Yes. Vorevix works remotely and can coordinate discovery, planning, reviews, approvals and delivery across suitable time zones. Our current geographic focus includes organisations seeking digital support in the following markets.</p>
      </div>
      <div className="homepage-international-grid">
        {internationalMarkets.map(([title, href, description, flag], index) => (
          <article className="homepage-market" key={title}>
            <span className="homepage-market-index">{String(index + 1).padStart(2, "0")}</span>
            <div className="homepage-market-icon">
              <img src={flag} alt={`${title} flag`} width="74" height="74" loading="lazy" decoding="async" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={href}>Explore {title === "United Arab Emirates" ? "the UAE" : title} <ArrowRight size={15} aria-hidden="true" /></a>
          </article>
        ))}
      </div>
      <div className="homepage-international-notes">
        <p>The homepage remains globally positioned, while dedicated country and service pages can address location-specific search intent.</p>
        <p>Regional availability does not imply a local office, local employees or a physical presence unless independently verified.</p>
      </div>
    </section>

    <section className="homepage-performance" aria-labelledby="homepage-performance-title">
      <div className="homepage-performance-heading">
        <span>Built for Better Outcomes</span>
        <h2 id="homepage-performance-title">Built With Performance, Usability and Long-Term Value in Mind</h2>
        <p>Digital quality involves more than appearance. Depending on the project, our work may consider:</p>
      </div>
      <div className="homepage-performance-cards">
        {performanceBenefits.map((item, index) => {
          const rotation = (index - (performanceBenefits.length - 1) / 2) * 1.35;
          return (
            <article
              className="homepage-performance-card"
              style={{ "--card-rotation": `${rotation}deg` }}
              key={item}
            >
              <small>Focus</small>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <h3>{item}</h3>
            </article>
          );
        })}
      </div>
      <div className="homepage-performance-copy">
        <p>Our full-service digital agency approach allows technical, visual and marketing considerations to be reviewed within the wider context of the business.</p>
        <p>The technologies and methods used are selected according to project requirements rather than a fixed platform preference.</p>
      </div>
    </section>

    <Block number="11" title="What Clients Say About Working With Vorevix"><p>Client feedback can help potential customers understand the quality of communication, collaboration, delivery and ongoing support.</p><a className="homepage-text-link" href="/portfolio">View Our Portfolio <ArrowRight size={16} aria-hidden="true"/></a></Block>

    <section className="homepage-faqs" aria-labelledby="homepage-faq-title">
      <div className="homepage-faq-heading">
        <span>FAQs</span>
        <h2 id="homepage-faq-title">Frequently Asked Questions</h2>
        <p>Clear answers to common questions about working with Vorevix.</p>
      </div>
      <FaqList />
      <p className="homepage-faq-contact">Have another question? <a href="/contact">Contact Us <ArrowRight size={14} aria-hidden="true" /></a></p>
    </section>

    <Block number="13" title="Insights for Better Digital Decisions"><p>Explore practical insights covering website strategy, web design, web development, SEO, branding, UI/UX, digital marketing and business growth.</p><p>Useful and original content can help businesses make informed digital decisions while strengthening the clarity, topical relevance and machine-readable understanding of the Vorevix website.</p><a className="homepage-text-link" href="/blog">View All Insights <ArrowRight size={16} aria-hidden="true"/></a></Block>

    <section className="homepage-seo-cta"><div><h2>Ready to Build What Comes Next?</h2><p>Tell us what you are launching, improving or trying to grow.</p><p>Partner with a full-service digital agency that can support your business from early strategy through branding, design, development, launch and ongoing improvement.</p><p>We will help identify the right combination of services for your goals, priorities and stage of growth.</p></div><div className="homepage-cta-links"><a href="/contact">Start a Conversation</a><a href="/portfolio">View Our Work</a></div></section>
  </div>;
}
