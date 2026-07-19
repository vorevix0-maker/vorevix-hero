import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { homepageFaqs as faqs } from "../homepageFaqs";
import "./HomepageSeoContent.css";

const services = [
  ["Web Development", "/services/web-development", "We build reliable, responsive and scalable websites that support real business requirements. Our development approach considers performance, search visibility, accessibility, maintainability, security and future growth from the beginning.", "Whether you need a business website, an eCommerce platform, a content-managed website or a custom digital solution, we focus on creating a dependable technical foundation."],
  ["Web Design", "/services/web-design", "We design modern websites that communicate clearly and guide users towards meaningful actions. Every layout is shaped around your content, audience, brand and customer journey rather than a generic visual template.", "Our goal is to balance visual quality with clarity, usability and conversion-focused structure."],
  ["SEO Services", "/services/seo-services", "We help businesses improve organic visibility through technical SEO, keyword strategy, on-page optimisation, content planning and ongoing performance improvements.", "The goal is not simply to attract more traffic. It is to attract relevant visitors who are more likely to engage with your services, products or content."],
  ["Branding", "/services/branding", "We develop brand identities and visual systems that help businesses communicate with greater clarity, consistency and confidence.", "Branding may include positioning, visual direction, identity development, typography, colour systems and practical usage guidelines."],
  ["UI/UX Design", "/services/ui-ux-design", "We design digital experiences that are clear, intuitive and aligned with how people use websites and digital products.", "Our UI/UX process helps improve navigation, reduce friction and create more consistent interactions across screens and devices."],
  ["Digital Marketing", "/services/digital-marketing", "We create digital marketing strategies that connect businesses with relevant audiences through the right channels, messages and campaigns.", "Our work may include campaign strategy, search marketing, content planning, landing-page improvement and performance analysis."],
];

const connections = [
  ["Strategy Connected to Execution", "We clarify what needs to be achieved before deciding what should be designed, developed or promoted. This keeps the project focused on the actual business problem instead of isolated deliverables."],
  ["Branding Connected to User Experience", "Your brand should influence more than a logo or colour palette. It should shape your messaging, visual direction, website experience and the way customers interact with your business."],
  ["Development Connected to SEO", "Website structure, performance, accessibility and search visibility should be considered during development rather than added after launch. This creates a stronger technical foundation and reduces avoidable rework."],
  ["Marketing Connected to Conversion", "Traffic has limited value when visitors cannot understand the offer or complete the intended action. We connect campaigns with landing pages, messaging and user journeys designed to support enquiries, sign-ups or purchases."],
  ["Launch Connected to Improvement", "A website or campaign is not treated as the end of the process. Where required, we use performance data, customer feedback and changing business needs to guide future improvements."],
];

const reasons = [
  ["Solutions Based on Real Requirements", "We recommend services based on your goals, current position and practical needs instead of forcing every business into a standard package."],
  ["Clear Communication", "We aim to keep decisions, responsibilities, timelines and project progress understandable throughout the process."],
  ["Connected Digital Expertise", "Strategy, branding, design, development, SEO and marketing are planned together instead of operating as unrelated services."],
  ["Built for Future Growth", "Our solutions are created with scalability, maintainability and future improvements in mind."],
  ["Quality Beyond Appearance", "Visual design matters, but so do usability, performance, accessibility, technical structure and long-term value."],
  ["Continued Support", "Where required, we continue supporting websites, campaigns and digital platforms after launch."],
];

const process = [
  ["1. Discover", "We learn about your business, audience, competitors, current challenges and project goals. This helps us understand what the project needs to solve and what success should look like."],
  ["2. Define", "We establish the scope, priorities, content requirements, technical needs and responsibilities. Clear definition reduces uncertainty and keeps the project focused."],
  ["3. Design", "We develop the visual direction, page structure, user journeys and key interface elements. Design decisions are based on the brand, content and intended user actions."],
  ["4. Develop", "We turn the approved design into a functional, responsive and performance-conscious digital experience. Development may include content management, integrations, custom functionality and technical SEO considerations."],
  ["5. Review and Launch", "We test the experience across relevant devices and browsers, resolve issues and prepare the project for launch."],
  ["6. Improve", "After launch, we can continue supporting technical updates, SEO, content changes, performance improvements and digital marketing."],
];

const businessTypes = [
  ["New Businesses", "Build a clear brand, professional website and reliable digital foundation from the beginning."], ["Growing Businesses", "Improve existing systems, increase visibility and create a more consistent customer experience."], ["Established Businesses", "Modernise outdated websites, strengthen digital positioning and support new services or markets."], ["eCommerce Brands", "Create stronger product experiences, improve website performance and support customer acquisition."], ["SaaS and Digital Products", "Plan user journeys, interfaces and scalable web applications around real customer needs."], ["Professional Service Businesses", "Build credibility, communicate expertise and generate more relevant enquiries."],
];

function Cards({ items, links = false }) {
  return <div className="homepage-service-list">{items.map(([title, hrefOrBody, first, second]) => { const body = links ? first : hrefOrBody; return <article className="homepage-service-item" key={title}><h3>{title}</h3><p>{body}</p>{second && <p>{second}</p>}{links && <a href={hrefOrBody}>Explore {title}<ArrowRight size={16} /></a>}</article>; })}</div>;
}

function Block({ number, title, children, className = "" }) {
  return <section className={`homepage-seo-block ${className}`}><div className="homepage-seo-block-heading"><span>{number}</span><h2>{title}</h2></div>{children}</section>;
}

function FaqList() {
  const [openIndex, setOpenIndex] = useState(null);
  return <div className="homepage-faq-list">{faqs.map(([question, answer], index) => { const open = openIndex === index; const panelId = `homepage-faq-${index}`; return <div className="homepage-faq-item" key={question}><button type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpenIndex(open ? null : index)}>{question}</button><div id={panelId} hidden={!open}><p>{answer}</p></div></div>; })}</div>;
}

export default function HomepageSeoContent() {
  return <div className="homepage-seo-section">
    <section className="homepage-seo-header"><span>( A Connected Digital Partner )</span><h2>A Digital Partner Focused on What Your Business Needs Next</h2><div><p>Every business has different priorities, audiences and stages of growth. That is why we do not begin with a standard package or force every project into the same process.</p><p>We first look at what your business is trying to achieve, where the current digital experience is holding you back and which services can create the most meaningful improvement.</p><p>As a full-service digital agency, Vorevix connects strategy, design, development and marketing around the same business objectives. Your brand identity, website, search visibility, customer experience and campaigns can therefore support one another instead of operating as disconnected parts.</p><p>Our role is not simply to deliver individual services. We help businesses understand what should be improved, what should be prioritised and how each digital decision can support a broader commercial goal.</p></div></section>

    <Block number="01" title="Digital Growth Needs More Than Disconnected Services"><p>A website can look attractive and still fail to generate meaningful enquiries. A marketing campaign can bring traffic while poor user experience prevents visitors from taking action. A strong visual identity can also lose its impact when it is applied inconsistently across websites, content, social media and campaigns.</p><p>Working with separate providers for branding, design, development and marketing often creates:</p><ul className="homepage-benefit-list">{["Inconsistent messaging","Duplicated work","Slow communication","Unclear responsibility","Disconnected user journeys","Technical limitations","Short-term fixes that do not scale"].map(x=><li key={x}>{x}</li>)}</ul><p>We consider how strategy, branding, content, user experience, technology, SEO and marketing can work together to support the same objective. Working with one full-service digital agency also reduces unnecessary handovers and helps important decisions remain aligned throughout the project.</p></Block>

    <Block number="02" title="Digital Services Built Around Business Growth"><Cards items={services} links /></Block>

    <Block number="03" title="One Full-Service Digital Agency for Your Business Goals"><p>Successful digital work is rarely created by treating branding, design, development, SEO and marketing as unrelated activities.</p><Cards items={connections} /></Block>

    <Block number="04" title="Why Businesses Work With Vorevix"><Cards items={reasons} /><p>As a full-service digital agency, we can support individual projects as well as wider digital improvement programmes.</p><a className="homepage-text-link" href="/about">Learn More About Vorevix <ArrowRight size={16}/></a></Block>

    <Block number="05" title="Selected Digital Work"><div className="homepage-feature"><img src="/portfolio/portfolio-brand-hero.jpg" alt="Selected Vorevix branding project" width="1200" height="675" loading="lazy" decoding="async"/><div><p>Our work combines business thinking, design and technical execution.</p><a className="homepage-text-link" href="/portfolio">View Our Portfolio <ArrowRight size={16}/></a></div></div></Block>

    <Block number="06" title="A Clear Process From Strategy to Launch"><Cards items={process}/></Block>

    <Block number="07" title="Digital Solutions for Different Stages of Growth"><Cards items={businessTypes}/><p>A flexible full-service digital agency can support these businesses with different combinations of strategy, design, development, SEO and marketing services.</p></Block>

    <Block number="08" title="Supporting Businesses Across Key Markets"><Cards links items={[["Australia","/locations/australia","Digital services for Australian businesses looking to strengthen their online presence and support long-term growth."],["New Zealand","/locations/new-zealand","Strategy, branding, design, development and marketing support for businesses operating across New Zealand."],["United Arab Emirates","/locations/united-arab-emirates","Digital solutions for businesses building and expanding their presence in the UAE."]]}/></Block>

    <Block number="09" title="Built With Performance, Usability and Long-Term Value in Mind"><ul className="homepage-benefit-list">{["Mobile responsiveness","Website performance","Technical SEO","Accessibility","Scalable content management","Security practices","Analytics integration","Conversion-focused structure","Browser compatibility","Maintainable development","Third-party integrations","Ongoing support"].map(x=><li key={x}>{x}</li>)}</ul><p>Our technical approach follows established guidance for creating useful, accessible and search-friendly digital experiences, including principles outlined in <a href="https://developers.google.com/search/docs/essentials" target="_blank" rel="noopener noreferrer">Google Search Essentials</a>.</p></Block>

    <Block number="10" title="What Clients Say About Working With Vorevix"><a className="homepage-text-link" href="/portfolio">View Our Portfolio <ArrowRight size={16}/></a></Block>

    <Block number="11" title="Frequently Asked Questions" className="homepage-faqs"><FaqList /></Block>

    <Block number="12" title="Insights for Better Digital Decisions"><p>Explore practical insights covering website strategy, web design, web development, SEO, branding, UI/UX, digital marketing and business growth.</p><a className="homepage-text-link" href="/blog">View All Insights <ArrowRight size={16}/></a></Block>

    <section className="homepage-seo-cta"><div><h2>Ready to Build What Comes Next?</h2><p>Tell us what you are launching, improving or trying to grow.</p><p>Partner with a full-service digital agency that can support your business from early strategy through design, development, launch and ongoing improvement.</p><p>We will help identify the right combination of services for your goals, priorities and stage of growth.</p></div><div className="homepage-cta-links"><a href="/contact">Start a Conversation</a><a href="/portfolio">View Our Work</a></div></section>
  </div>;
}
