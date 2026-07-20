import { ArrowRight, Palette } from "lucide-react";
import { webDesignFaqs } from "../webDesignFaqs";
import "./WebDevelopmentPage.css";
import "./WebDesignPage.css";

const services = [
  ["Custom Web Design", "We create original layouts around your goals, content and audience. Instead of forcing your business into a generic template, we design a structure that reflects what users need to understand and what your business needs them to do next.", "Our custom web design services can support new websites, complete redesigns, campaign pages and scalable systems for larger platforms."],
  ["Business Website Design", "We design professional websites for service providers, consultancies, agencies, organisations and growing companies. These websites explain services clearly, establish trust and make the next step easy."],
  ["eCommerce Website Design", "We design product discovery, category structures, product pages, carts and checkout journeys with clarity and usability in mind."],
  ["Landing Page Design", "Landing pages need one clear objective. We design focused pages for campaigns, product launches and lead generation, with strong information hierarchy, clear calls to action and minimal distraction."],
  ["Responsive Web Design", "Responsive web design services should cover more than shrinking a desktop layout. We plan how content, navigation, forms, images and calls to action should behave across desktop, tablet and mobile screens."],
  ["Website Redesign", "A redesign should improve what is weak without discarding what already works. We review the existing website, identify usability and content problems, preserve valuable assets and create a stronger direction for the next version."],
  ["UI/UX Design", "We design user flows, wireframes, interfaces and interaction patterns for websites and web-based products. The goal is to reduce friction, improve clarity and make important actions easier to complete."],
  ["Design Systems", "For websites that need to grow, we create reusable components, spacing rules, typography styles and interface standards. A design system improves consistency and makes future pages easier to design and build."],
];

const process = [
  ["1. Discovery", "We learn about your business, users, existing website, competitors, goals and project constraints."],
  ["2. Research and Strategy", "We review the available information, identify priorities and define the role each page needs to play."],
  ["3. Sitemap and User Journeys", "We organise the website structure and map the main paths users will take from entry to action."],
  ["4. Wireframing", "We create page structures that establish hierarchy, content flow and functionality before visual styling begins."],
  ["5. Visual Design", "We apply typography, colour, spacing, imagery and interface components in a system that reflects the brand."],
  ["6. Responsive States", "We define how layouts and components adapt across desktop, tablet and mobile devices."],
  ["7. Review and Refinement", "Feedback is collected in a structured way and applied through agreed revision rounds."],
  ["8. Development Handoff", "The approved files, components, responsive rules and interaction notes are organised for implementation."],
  ["9. Launch Design QA", "Where development is included, we review the implemented website for visual consistency before launch."],
];

const why = [
  ["Strategy Before Decoration", "We begin with goals, users and content, not visual effects."],
  ["Custom, Purpose-Built Layouts", "The website is designed around the business instead of being assembled from unrelated template sections."],
  ["Design and Development Understanding", "Our approach considers how components, content and responsive layouts will function after handoff."],
  ["Clear Deliverables", "You know what will be designed, reviewed and delivered before the project starts."],
  ["Honest Communication", "We avoid guaranteed results, fabricated numbers and vague claims. Recommendations are connected to the project goals and available evidence."],
];

function List({ items }) { return <ul className="wd-checklist">{items.map(item => <li key={item}>{item}</li>)}</ul>; }
function Section({ title, children, className = "" }) { return <section className={`wd-section web-design-content ${className}`}><div className="wd-section-heading"><h2>{title}</h2></div><div className="web-design-prose">{children}</div></section>; }

export default function WebDesignPage() {
  return <main className="web-development-page web-design-page">
    <nav className="wd-breadcrumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li aria-hidden="true">/</li><li><a href="/services">Services</a></li><li aria-hidden="true">/</li><li><span aria-current="page">Web Design</span></li></ol></nav>
    <section className="wd-hero web-design-hero"><div className="wd-hero-copy"><span className="wd-eyebrow">Web Design</span><h1>Web Design Services for Growing Businesses</h1><p>Your website should do more than look professional. It should explain your value clearly, help visitors find the right information and guide them toward a useful next step.</p><p>Vorevix provides strategic web design services for businesses that need a website built around real users, clear goals and long-term growth. We combine research, content structure, user experience and responsive design to create websites that are easier to understand, easier to use and ready for effective development.</p><div className="wd-actions"><a className="primary" href="/contact">Start Your Web Design Project <ArrowRight size={18} aria-hidden="true" /></a><a href="/portfolio">View Our Work</a></div></div><div className="wd-hero-visual web-design-visual"><img src="/service-web.png" alt="Web design services by Vorevix" width="1183" height="1329" fetchPriority="high" /></div></section>

    <Section title="Is Your Website Holding Your Business Back?"><p>A website can look acceptable and still create serious business problems. Visitors may struggle to understand what you offer, important pages may be difficult to find and the mobile experience may feel incomplete.</p><p>Common warning signs include:</p><List items={["An outdated design that no longer reflects the business","Confusing navigation or inconsistent page structures","Weak calls to action and unclear conversion paths","Poor usability on mobile and tablet devices","Crowded pages that are difficult to scan","Visual design that does not match the brand","Content added without a clear hierarchy","A website that is difficult to maintain or scale"]}/><p>These issues are not fixed by changing colours or adding more graphics. They require a clearer structure, stronger content priorities and a design process based on how people actually use the website.</p></Section>

    <Section title="Web Design Built Around Your Business Goals"><p>Effective design begins before the visual interface.</p><p>We start by understanding your business model, audience, priorities and the actions you want users to take. This prevents design decisions from being based only on personal preference or temporary trends.</p><p>Our web design services bring together:</p><List items={["Business and audience discovery","Competitor and market review","Sitemap and content planning","User journeys and conversion paths","Wireframes and page structure","Brand-aligned interface design","Responsive behaviour across devices","Development feasibility and handoff planning"]}/><p>The result is a clear website experience and a practical system for development.</p></Section>

    <section className="wd-section"><div className="wd-section-heading"><h2>Our Web Design Services</h2></div><div className="wd-card-grid">{services.map(([title,...paragraphs])=><article className="wd-card" key={title}><Palette className="wd-card-icon" size={26} aria-hidden="true"/><h3>{title}</h3>{paragraphs.map(p=><p key={p}>{p}</p>)}</article>)}</div></section>

    <Section title="Websites Designed for Different Business Models"><p>Different businesses need different website structures. A SaaS company, an online store and a professional service provider should not be pushed into the same page model.</p><p>Vorevix designs:</p><List items={["Corporate and company websites","Service-business websites","SaaS and software websites","eCommerce stores","Startup websites","Portfolio websites","Membership websites","Lead-generation websites","Campaign landing pages"]}/></Section>

    <Section title="Designed to Guide Users Toward Action"><p>Good design makes the next step clear.</p><p>We organise pages around the questions users ask and the decisions they need to make. Important information and calls to action appear at logical points.</p><p>Conversion-focused design may include:</p><List items={["Clear visual hierarchy","Focused calls to action","Scannable sections","Relevant trust signals","Simplified forms","Logical navigation","Reduced visual friction","Consistent messaging"]}/><p>Design can support conversions, but no honest web design agency can guarantee a specific result without considering traffic quality, offers, pricing and sales processes.</p></Section>

    <Section title="Responsive and Accessible by Design"><p>We plan responsive behaviour from the beginning rather than treating mobile design as a final adjustment. This includes flexible layouts, touch-friendly controls, readable typography, responsive images and practical breakpoint planning.</p><p>We also consider accessibility during the design stage through:</p><List items={["Suitable colour contrast","Clear labels","Logical heading hierarchy","Readable font sizes","Visible focus states","Form usability","Consistent navigation","Content that does not rely only on colour"]}/><p>Accessibility is shared across design, content and development. Final compliance depends on correct implementation and testing, so we do not make unsupported compliance claims.</p></Section>

    <Section title="Web Design That Supports Search Visibility"><p>Web design and SEO are separate disciplines, but design decisions can support or obstruct search performance.</p><p>Our SEO-aware approach considers:</p><List items={["Logical page and heading structures","Clear areas for useful content","Internal linking opportunities","Mobile usability","Performance-conscious layouts","Crawl-friendly navigation concepts","Reusable templates for future pages"]}/><p>Technical SEO, structured data and performance implementation must be handled during development. Where required, we can connect the project with our <a href="/services/seo-services">SEO</a> and <a href="/services/web-development-services">web development services</a>.</p></Section>

    <Section title="What You Receive"><p>Clear deliverables reduce confusion and make implementation more efficient. Depending on scope, your package may include:</p><List items={["Sitemap and page planning","User journeys","Content hierarchy recommendations","Low-fidelity wireframes","High-fidelity page designs","Desktop, tablet and mobile states","Interactive prototype","Reusable component library","Typography, spacing and colour rules","Form and interaction states","Developer notes and design specifications","Organised development handoff","Design QA during implementation"]}/><p>The exact deliverables are agreed before work begins, so both sides understand what is included.</p></Section>

    <section className="wd-section wd-tinted"><div className="wd-section-heading"><h2>Our Web Design Process</h2></div><div className="wd-process-grid">{process.map(([title,body])=><article className="wd-process-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></section>

    <Section title="Designed for Modern Website Platforms"><p>Our designs can be prepared for platforms such as:</p><List items={["WordPress","Shopify","WooCommerce","Webflow","React-based websites","Custom content management systems"]}/><p>Platform selection should reflect your content, functionality, budget and future plans.</p></Section>

    <Section title="From Design Strategy to Development-Ready Execution"><p>Web design defines how the website should communicate, look and behave. Web development turns that approved design into a functioning website.</p><p>You can use Vorevix for design only, or connect the project directly with our <a href="/services/web-development-services">web development service</a>. In either case, the handoff is planned to reduce ambiguity and preserve the design intent.</p></Section>

    <section className="wd-section"><div className="wd-section-heading"><h2>Why Businesses Choose Vorevix</h2></div><div className="web-design-why">{why.map(([title,body])=><article key={title}><Palette size={24} aria-hidden="true"/><h3>{title}</h3><p>{body}</p></article>)}</div></section>

    <Section title="Selected Web Design Work" className="web-design-callout"><p>Each case study may include:</p><List items={["Client or industry","Initial website problem","Research and design approach","Main deliverables","Important design decisions","Final interface","Verified outcomes, where available"]}/><a className="wd-text-link" href="/portfolio">View Our Portfolio <ArrowRight size={18} aria-hidden="true"/></a></Section>

    <Section title="What Affects the Cost of Web Design?"><p>The cost of professional web design services depends on the amount and complexity of work required.</p><p>Main pricing factors include:</p><List items={["Number of unique pages","Complexity of layouts","Content readiness","eCommerce requirements","Integrations","Custom components","Responsive states","Prototype complexity","Revision rounds","Design system requirements","Development and testing needs"]}/><p>After reviewing your requirements, we provide a clear estimate and explain what is included.</p></Section>

    <section className="wd-section web-design-faq"><div className="wd-section-heading"><h2>Frequently Asked Questions</h2></div><div className="web-design-faq-grid">{webDesignFaqs.map(([question,answer])=><article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div><p className="web-design-regional-note">Vorevix works with businesses worldwide, including organisations seeking <a href="/australia/web-design">web design services in Australia</a> and <a href="/new-zealand/web-design">web design services in New Zealand</a>, as well as companies across other international markets.</p></section>

    <section className="wd-final-cta"><h2>Ready to Build a Website That Works for Your Business?</h2><p>A strong website should make your business easier to understand and your next step easier to take.</p><p>Tell us about your goals, current website, required pages, functionality and timeline. We will review the project and recommend a practical direction based on what your business actually needs.</p><div className="wd-actions"><a className="primary" href="/contact">Discuss Your Project <ArrowRight size={18} aria-hidden="true"/></a><a href="/portfolio">View Our Work</a></div></section>
  </main>;
}
