import { useState } from "react";
import { ArrowRight } from "lucide-react";
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
];

const process = [
  ["1. Discover", "We learn about the business, audience, current assets, competitors, challenges and project goals.", "This helps clarify what the project needs to solve and which outcomes should guide the work."],
  ["2. Define", "We establish the scope, priorities, content requirements, technical needs, responsibilities and practical constraints.", "Clear definition helps reduce uncertainty and prevents avoidable changes later in the process."],
  ["3. Plan", "We organise the strategy, structure, user journeys, technical approach and delivery priorities before implementation begins."],
  ["4. Design and Build", "Depending on the project, we develop the visual direction, interfaces, website, brand system or campaign assets required to deliver the agreed solution."],
  ["5. Review and Launch", "We review the work, test relevant functionality and responsive behaviour, resolve agreed issues and prepare the final delivery or launch."],
  ["6. Improve", "Where included in the scope, we continue supporting technical updates, content changes, SEO, performance improvements and digital marketing activity."],
];

const businessTypes = [
  ["New Businesses", "Build a clear brand, professional website and dependable digital foundation from the beginning."],
  ["Growing Businesses", "Improve existing systems, increase visibility and create a more consistent customer experience."],
  ["Established Organisations", "Modernise outdated websites, strengthen digital positioning and support new products, services or markets."],
  ["eCommerce Brands", "Improve product experiences, website performance, content structure and customer-acquisition journeys."],
  ["SaaS and Digital Products", "Plan user journeys, interfaces and scalable digital experiences around genuine customer needs."],
  ["Professional-Service Firms", "Communicate expertise clearly, strengthen credibility and support more relevant enquiries."],
];

function Cards({ items, links = false, linkLabel }) {
  return <div className="homepage-service-list">{items.map(([title, hrefOrBody, ...paragraphs]) => <article className="homepage-service-item" key={title}><h3>{title}</h3>{(links ? paragraphs : [hrefOrBody, ...paragraphs]).filter(Boolean).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{links && <a href={hrefOrBody}>{linkLabel ? linkLabel(title) : `Explore ${title}`}<ArrowRight size={16} aria-hidden="true"/></a>}</article>)}</div>;
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
    <section className="homepage-seo-header"><span>( A Connected Digital Partner )</span><h2>What Does Vorevix Do?</h2><div><p>Vorevix helps businesses plan, design, build and improve their digital presence. Our services include branding, UI/UX design, web design, web development, SEO and digital marketing. These capabilities can be delivered individually or combined into one coordinated solution based on the organisation's goals, current challenges and stage of growth.</p></div></section>

    <Block number="01" title="A Digital Partner Focused on What Your Business Needs Next"><p>Every business has different priorities, audiences, resources and levels of digital maturity. That is why we do not begin with a fixed package or force every project into the same process.</p><p>We first look at what the business is trying to achieve, where its current digital experience is creating friction and which improvements can make the clearest practical difference.</p><p>That may involve strengthening the brand, improving the website, simplifying customer journeys, resolving technical limitations, increasing organic visibility or supporting a broader marketing strategy.</p><p>As a full-service digital agency, Vorevix connects strategy, design, technology and marketing around shared objectives. Your brand identity, website, search presence, content and campaigns can therefore support one another instead of operating as disconnected parts.</p><p>Our role is not limited to delivering individual services. We help businesses understand what should be improved, what should be prioritised and how each digital decision can support a wider commercial objective.</p></Block>

    <Block number="02" title="Why Do Disconnected Digital Services Create Problems?"><p>A website can look attractive while still failing to communicate the offer clearly or generate meaningful enquiries.</p><p>A marketing campaign can bring visitors to a website, while confusing navigation or weak landing pages prevent those visitors from taking action.</p><p>A strong brand identity can also lose its impact when it is applied inconsistently across websites, content, campaigns and social platforms.</p><p>Working with several disconnected providers may lead to:</p><ul className="homepage-benefit-list">{["Inconsistent messaging", "Duplicated work", "Slower communication", "Unclear responsibilities", "Fragmented user journeys", "Technical limitations", "Short-term fixes that are difficult to scale"].map((item) => <li key={item}>{item}</li>)}</ul><p>Vorevix helps businesses replace fragmented digital activity with a more coordinated approach.</p><p>We consider how strategy, branding, content, user experience, technology, SEO and marketing can work together to support the same objective.</p><p>Working with one full-service digital agency can reduce unnecessary handovers and help important decisions remain aligned throughout the project.</p></Block>

    <Block number="03" title="Digital Services Built Around Business Growth"><p>Our services can be delivered separately or combined into a broader digital solution.</p><Cards items={services} links/></Block>

    <Block number="04" title="How Do Our Digital Services Work Together?"><p>Successful digital work is rarely created by treating branding, design, development, SEO and marketing as unrelated activities.</p><p>A full-service digital agency can help coordinate these capabilities so that every part of the customer experience supports a shared direction.</p><Cards items={connections}/></Block>

    <Block number="05" title="Why Do Businesses Work With Vorevix?"><p>Working with one full-service digital agency can help reduce fragmented communication and keep the different parts of a business's digital presence aligned.</p><Cards items={reasons}/><p>As a full-service digital agency, Vorevix can support both individual projects and broader digital-improvement programmes.</p><a className="homepage-text-link" href="/about">Learn More About Vorevix <ArrowRight size={16} aria-hidden="true"/></a></Block>

    <Block number="06" title="Selected Digital Work"><div className="homepage-feature"><img src="/portfolio/portfolio-brand-hero.jpg" alt="Selected Vorevix branding project" width="1200" height="675" loading="lazy" decoding="async"/><div><p>Our work combines business thinking, design and technical execution.</p><p>Each project begins with a specific challenge and is shaped around the requirements of the organisation, its audience and the intended outcome.</p><p>Explore selected projects to understand how branding, user experience, development, SEO and marketing can be connected within one solution.</p><p>Any performance results presented in case studies should be based on approved and verifiable project data rather than estimates or unsupported marketing claims.</p><a className="homepage-text-link" href="/portfolio">View Our Portfolio <ArrowRight size={16} aria-hidden="true"/></a></div></div></Block>

    <Block number="07" title="A Clear Process From Strategy to Launch"><Cards items={process}/><p>This connected process allows a full-service digital agency to maintain clearer alignment from early planning through implementation and ongoing support.</p></Block>

    <Block number="08" title="Who Does Vorevix Work With?"><p>Vorevix may support organisations at different stages of digital and commercial growth.</p><Cards items={businessTypes}/><p>A flexible full-service digital agency can assist these organisations through different combinations of strategy, branding, design, development, SEO and digital marketing.</p></Block>

    <Block number="09" title="Can Vorevix Support International Businesses?"><p>Yes. Vorevix works remotely and can coordinate discovery, planning, reviews, approvals and delivery across suitable time zones.</p><p>Our current geographic focus includes organisations seeking digital support in the following markets.</p><Cards links linkLabel={(title) => `Digital Services in ${title === "United Arab Emirates" ? "the UAE" : title}`} items={[["Australia", "/locations/australia", "Connected strategy, branding, design, development, SEO and digital marketing support for Australian businesses."], ["New Zealand", "/locations/new-zealand", "Digital services for New Zealand organisations seeking stronger brands, websites, customer experiences and online visibility."], ["United Arab Emirates", "/locations/united-arab-emirates", "Digital solutions for businesses building, improving or expanding their presence in the UAE."]]}/><p>The homepage remains globally positioned, while dedicated country and service pages can address location-specific search intent.</p><p>Regional availability does not imply a local office, local employees or a physical presence unless independently verified.</p></Block>

    <Block number="10" title="Built With Performance, Usability and Long-Term Value in Mind"><p>Digital quality involves more than appearance.</p><p>Depending on the project, our work may consider:</p><ul className="homepage-benefit-list">{["Mobile responsiveness", "Website performance", "Technical SEO", "Accessibility", "Scalable content management", "Security practices", "Analytics integration", "Conversion-focused structure", "Browser compatibility", "Maintainable development", "Third-party integrations", "Ongoing support"].map((item) => <li key={item}>{item}</li>)}</ul><p>Our full-service digital agency approach allows technical, visual and marketing considerations to be reviewed within the wider context of the business.</p><p>The technologies and methods used are selected according to project requirements rather than a fixed platform preference.</p></Block>

    <Block number="11" title="What Clients Say About Working With Vorevix"><p>Client feedback can help potential customers understand the quality of communication, collaboration, delivery and ongoing support.</p><a className="homepage-text-link" href="/portfolio">View Our Portfolio <ArrowRight size={16} aria-hidden="true"/></a></Block>

    <Block number="12" title="Frequently Asked Questions" className="homepage-faqs"><FaqList/></Block>

    <Block number="13" title="Insights for Better Digital Decisions"><p>Explore practical insights covering website strategy, web design, web development, SEO, branding, UI/UX, digital marketing and business growth.</p><p>Useful and original content can help businesses make informed digital decisions while strengthening the clarity, topical relevance and machine-readable understanding of the Vorevix website.</p><a className="homepage-text-link" href="/blog">View All Insights <ArrowRight size={16} aria-hidden="true"/></a></Block>

    <section className="homepage-seo-cta"><div><h2>Ready to Build What Comes Next?</h2><p>Tell us what you are launching, improving or trying to grow.</p><p>Partner with a full-service digital agency that can support your business from early strategy through branding, design, development, launch and ongoing improvement.</p><p>We will help identify the right combination of services for your goals, priorities and stage of growth.</p></div><div className="homepage-cta-links"><a href="/contact">Start a Conversation</a><a href="/portfolio">View Our Work</a></div></section>
  </div>;
}
