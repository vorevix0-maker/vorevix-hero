import { useState } from "react";
import { ArrowRight, ChevronDown, PanelsTopLeft } from "lucide-react";
import { uiUxFaqs } from "../uiUxFaqs";
import "./WebDevelopmentPage.css";
import "./UiUxDesignPage.css";

const problems = [
  ["Users Struggle to Find Important Information", "Navigation labels, page hierarchy or content groupings may not reflect how users naturally search for information. Visitors may move repeatedly between pages without finding a clear answer."],
  ["Important Actions Are Being Abandoned", "Enquiry forms, registrations, booking journeys, checkouts or account-setup flows may contain too many steps, unclear instructions or unexpected requirements."],
  ["Features Exist but Are Rarely Used", "A valuable feature may be difficult to discover, poorly introduced or disconnected from the user’s primary workflow. Better onboarding and feature visibility can make the product easier to understand."],
  ["Interfaces Feel Inconsistent", "Buttons, forms, menus, messages and page layouts may look or behave differently across the product. Inconsistency can create uncertainty and make familiar tasks feel unpredictable."],
  ["Mobile Experiences Feel Difficult", "Layouts developed mainly for desktop may create cramped controls, long forms, awkward navigation or unclear content priorities on smaller screens."],
  ["Teams Rely on Assumptions", "Product decisions may be based on internal preferences rather than user evidence, analytics, observed behaviour or structured testing."],
];

const services = [
  ["UX Audit and Heuristic Review", "We review navigation, user journeys, consistency, mobile usability, forms, content clarity, feedback, accessibility, interaction patterns, onboarding and feature discovery. Findings are prioritised into practical recommendations according to user impact and implementation effort."],
  ["User Research and Insights", "Stakeholder discussions, user interviews, surveys, analytics, behavioural observations and customer feedback can clarify who users are, what they want to achieve, where they experience difficulty, what information they need, how they behave today, what they expect and which barriers affect adoption."],
  ["Personas and User Journey Mapping", "Research-informed personas and journey maps organise audience groups, motivations, behaviours, touchpoints, friction, missing information and opportunities. They should be grounded in evidence rather than invented assumptions."],
  ["Information Architecture", "We organise pages, content and features into structures users can understand. This may include navigation, sitemaps, dashboards, menus, feature groups, account structures and relationships between information."],
  ["User Flow Design", "We map account creation, enquiries, booking, purchase, uploads, subscriptions, invitations, onboarding, account recovery and profile settings. Mapping can reveal unnecessary steps, unclear decisions and dead ends before they become expensive to build."],
  ["Wireframing", "Wireframes define layouts, navigation, content placement, forms, controls, feature relationships, responsive behaviour, calls to action, dashboards and key states before detailed visual design begins."],
  ["User Interface Design", "Interface design brings hierarchy, typography, colour, spacing, buttons, controls, forms, cards, data, navigation, tables, filters and empty, loading, success and error states into a consistent brand-aligned system. UI is not decoration applied after UX; it is how the experience becomes clear and operable."],
  ["Interaction Design", "We define hover and active states, transitions, micro-interactions, messages, confirmations, progress, loading, empty states, notifications, expandable content and touch behaviour so the interface responds clearly to user actions."],
  ["Responsive UI Design", <>We design desktop, tablet and mobile behaviour around content priority, touch controls, navigation, typography, responsive data and flexible components. For broader website planning and visual direction, explore our <a href="/services/web-design">web design services</a>.</>],
  ["Clickable Prototyping", "Clickable prototypes can demonstrate navigation, registration, onboarding, forms, checkout, dashboards, feature behaviour, responsive transitions and key task sequences before development."],
  ["Usability Testing", "Task-based observation can reveal unclear labels, unexpected navigation, misunderstood features, difficult forms, missing feedback, workflow interruptions and differences between expected and actual behaviour."],
  ["Design Systems and Component Libraries", "Design systems organise colours, typography, spacing, buttons, inputs, cards, navigation, data components, states, responsive behaviour, tokens, guidance and reusable patterns for greater consistency."],
  ["Accessibility and Inclusive Design", <>We consider contrast, structure, keyboard interaction, focus states, labels, errors, target size, readability, text alternatives, navigation and experiences that do not rely on colour alone. Our approach is informed by the <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">Web Content Accessibility Guidelines</a>. Formal compliance may require technical testing and specialist review.</>],
  ["Developer Handoff and Design Support", <>Handoff may include organised Figma files, responsive layouts, component variants, spacing, assets, interaction notes, prototypes, implementation collaboration and design QA. Our <a href="/services/web-development-services">web development services</a> can support implementation.</>],
];

const platforms = [
  ["Website UI UX Design", "Business, service, corporate, lead-generation, content, campaign and membership websites can benefit from clearer navigation, hierarchy, page layouts, enquiry journeys, forms and mobile usability."],
  ["eCommerce UX Design", "We can improve categories, search, filtering, product pages, cart, checkout, accounts, mobile shopping, trust information, delivery details and order feedback."],
  ["Mobile App UI UX Design", "App design can cover onboarding, navigation, account setup, feature discovery, notifications, touch interactions, forms, subscriptions, app states and prototypes."],
  ["SaaS Product Design", "SaaS design can include dashboards, onboarding, account management, subscriptions, roles, permissions, data visualisation, feature adoption, workflows, components and prototypes."],
  ["Web Application Design", "We design portals, internal tools, management systems, marketplaces and role-based experiences involving complex forms, tables, filters, workflow status, reporting, accounts, bulk actions, feedback and data presentation."],
];

const stages = [
  ["New Product Design", "We can take an idea through research, flows, wireframes, prototypes and interface design for websites, apps, SaaS products or MVPs."],
  ["Existing Product Improvement", "A focused review can improve journeys, features, mobile usability, forms, navigation, consistency, onboarding, accessibility and feedback."],
  ["Product Redesign", <>A redesign can address outdated interfaces, significant product change or structures that no longer support users. Where the wider identity also needs attention, explore our <a href="/services/branding">branding services</a>.</>],
  ["Ongoing UX Support", "Ongoing support can include feature design, usability reviews, design-system updates, prototypes, research, interface improvements, QA and collaboration."],
];

const process = [
  ["1. Discovery and Project Alignment", "We align business goals, users, challenges, available evidence, constraints, platforms, stakeholder priorities and success criteria."],
  ["2. Research and Experience Review", "This stage may combine stakeholder interviews, user research, analytics, competitor experience review, heuristic evaluation, customer feedback and an existing-product review."],
  ["3. Structure and User Flows", "We define the sitemap, information architecture, journeys, flows, feature relationships, content priorities and navigation."],
  ["4. Wireframes and Prototypes", "Wireframes and prototypes allow layout, task sequence and interaction logic to be evaluated before detailed visual design."],
  ["5. Interface Design and Design System", "We create responsive screens, typography, colour, components, hierarchy, interface states and the foundations of a reusable system."],
  ["6. Testing, Handoff and Support", "Stakeholder review or usability testing informs refinement before organised deliverables, specifications, assets and implementation guidance are handed over."],
];

const deliverables = [
  ["Research Deliverables", "UX audit, heuristic review, research summary, user insights, personas, journey maps, usability findings and prioritised recommendations."],
  ["Experience Design Deliverables", "Sitemap, information architecture, user flows, wireframes, content hierarchy, feature recommendations and onboarding structure."],
  ["Interface Design Deliverables", "High-fidelity screens, responsive layouts, interaction states, UI components, component library, visual specifications and design-system foundations."],
  ["Validation Deliverables", "Clickable prototype, usability test plan, observations, refinements and prioritised improvement list."],
  ["Development Handoff Deliverables", "Organised files, component states, exported assets, responsive references, interaction notes, implementation support and design QA."],
];

const benefits = [
  ["Clearer User Journeys", "Clear structure and navigation can help users understand where they are and what to do next."],
  ["Reduced Interaction Friction", "Simpler flows, clearer labels and timely feedback can make important tasks easier to complete."],
  ["Stronger Product Adoption", "Thoughtful onboarding and feature discovery can help users understand available value."],
  ["More Consistent Digital Experiences", "Reusable patterns can make interactions feel more predictable across screens and devices."],
  ["More Efficient Development", "Defined components, states and responsive rules can reduce ambiguity during implementation."],
  ["Better Accessibility", "Inclusive design practices can make experiences more usable for a wider range of people."],
  ["Better Alignment Between Teams", "Shared flows, prototypes and systems can give product, design and development teams a clearer reference point."],
];

const why = [
  ["Research Before Assumptions", "We use available evidence and structured inquiry to guide design decisions."],
  ["UX and UI in One Connected Process", "Structure, behaviour and visual presentation are developed as connected parts of the same experience."],
  ["User and Business Goals Aligned", "We consider what users need alongside practical product and organisational objectives."],
  ["Brand-Aligned Interfaces", <>Interfaces are designed to feel consistent with the wider identity. Our <a href="/services/branding">branding services</a> can support projects that need a stronger foundation.</>],
  ["Designed for Development", "Responsive behaviour, components and states are documented with implementation in mind."],
  ["Flexible Project Scope", "Our UI UX design services can support a complete engagement or a focused product stage."],
  ["Clear Collaboration", "We establish feedback stages, responsibilities and deliverables so teams can work with clarity."],
  ["Connected Digital Expertise", <>Our wider strategy, design and development capability supports coordinated delivery. Learn more <a href="/about">about Vorevix</a>.</>],
];

function Section({ title, intro, children, tinted = false }) { return <section className={`wd-section uiux-section${tinted ? " wd-tinted" : ""}`}><div className="wd-section-heading"><h2>{title}</h2>{intro && <p>{intro}</p>}</div>{children}</section>; }
function Card({ title, body }) { return <article className="wd-card"><PanelsTopLeft className="wd-card-icon" aria-hidden="true" /><h3>{title}</h3><p>{body}</p></article>; }
function Cards({ items, className = "wd-card-grid" }) { return <div className={className}>{items.map(([title, body]) => <Card key={title} title={title} body={body} />)}</div>; }

export default function UiUxDesignPage() {
  const [openFaq, setOpenFaq] = useState(0);
  return <main className="web-development-page uiux-page">
    <nav className="wd-breadcrumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li aria-hidden="true">/</li><li><a href="/services">Services</a></li><li aria-hidden="true">/</li><li><span aria-current="page">UI UX Design Services</span></li></ol></nav>
    <section className="wd-hero"><div className="wd-hero-copy"><h1>UI UX Design Services for Better Digital Experiences</h1><p>Vorevix provides research-led UI UX design services for websites, mobile applications, SaaS products, web applications and digital platforms. We combine user insight, clear information architecture and thoughtful interface design to create experiences that are easier to understand, navigate and use.</p><p>Our process considers how people move through a product, what information they need at each stage and which design decisions may reduce unnecessary friction. From early research and wireframes to polished interfaces, prototypes and developer handoff, every stage connects user needs with practical business objectives.</p><p>Whether you are launching a new digital product, improving an existing website or redesigning a complex application, our team can turn technical and commercial requirements into a clear and consistent user experience.</p><div className="wd-actions"><a className="primary" href="/contact">Start Your UI UX Project <ArrowRight size={18} aria-hidden="true" /></a><a href="/portfolio">View Our Work</a></div></div><div className="wd-hero-visual uiux-hero-art" aria-hidden="true"><PanelsTopLeft /></div></section>

    <Section title="Design Digital Experiences Around Real User Needs"><div className="uiux-prose"><p>A digital product can look polished while remaining difficult to use. Visitors may struggle to locate important information, understand what to do next, complete a form or discover a useful product feature.</p><p>Strong user experience design begins by understanding what people are trying to achieve and what prevents them from moving forward. It considers navigation, content structure, interface behaviour, accessibility, feedback and the sequence of decisions required to complete a task.</p><p>Our UI UX design services bring these elements together. We design interfaces that support clear user journeys while remaining aligned with your brand, technical requirements and wider business goals.</p><p>Depending on the project, this may involve simplifying a form, reorganising website content, improving mobile navigation, clarifying SaaS onboarding or building a reusable interface system for a growing digital product.</p><p>The goal is not to remove every decision. It is to ensure that each decision is understandable, relevant and presented at the right stage of the experience.</p></div></Section>
    <Section title="Signs Your Website or Product May Have UX Problems" intro="UX problems are not always visible during a quick design review. They often appear through user behaviour, repeated support requests, abandoned tasks, low feature adoption or inconsistent product usage." tinted><Cards items={problems} /><p className="uiux-note">A focused UX audit can identify the most significant issues and organise recommendations according to user impact, business relevance and implementation effort.</p></Section>
    <Section title="Our UI UX Design Services" intro="Our UI UX design services can support a complete product-design process or a focused stage within an existing project. The scope is shaped around your product, users, available evidence, technical environment and current priorities."><Cards items={services} /><img className="uiux-content-image" src="/service-software-app.png" alt="UI UX design services by Vorevix" width="1306" height="1205" loading="lazy" /></Section>

    <Section title="UX Design and UI Design Work Together" tinted><Cards items={[["User Experience Design", "User experience design covers research, user needs, personas, journeys, information architecture, flows, usability, testing and interaction logic."], ["User Interface Design", "User interface design covers layout, typography, colour, components, controls, hierarchy, responsive screens, feedback states and consistency."]]} /><p className="uiux-note">UX determines how the experience works. UI determines how it is presented and operated. Strong digital products require both disciplines to support one another.</p></Section>
    <Section title="UI UX Design for Websites, Apps and Digital Products" intro="Our UI UX design services can be adapted to different platforms, user groups, technical environments and product requirements."><Cards items={platforms} /></Section>
    <Section title="UI UX Support for Every Product Stage" tinted><Cards items={stages} /></Section>
    <Section title="Our UI UX Design Process" intro="Our UI UX design services follow a structured process that creates clear stages for research, decisions, feedback and delivery."><Cards items={process} className="wd-process-grid" /></Section>
    <Section title="What a UI UX Design Project Can Include" intro="Every project is different. Depending on your objectives, platform and agreed scope, our UI UX design services can include the following deliverables." tinted><Cards items={deliverables} /><p className="uiux-note">The final deliverable set is agreed before the project begins so responsibilities and expectations remain clear.</p></Section>

    <Section title="Tools That Support Our UI UX Workflow"><Cards items={[["Design and Prototyping", "Figma."], ["Workshops and Collaboration", "FigJam and Miro."], ["Analytics and Behaviour Insights", "Google Analytics, Microsoft Clarity and Hotjar where access is available."], ["Accessibility Review", "Lighthouse, WAVE and browser-based accessibility tools; technical testing may also be required."]]} /></Section>
    <Section title="How Strong UI UX Design Supports Your Business" tinted><Cards items={benefits} /></Section>
    <Section title="Why Choose Vorevix as Your UI UX Design Agency"><Cards items={why} /></Section>

    <Section title="UI UX Design Work and Digital Product Experience" tinted><div className="uiux-prose"><p>Selected portfolio projects should explain the product type, original challenge, research and design approach, agreed deliverables and relevant interface examples.</p><p>Where outcomes are presented, we only use results that can be verified from the actual work. We do not turn estimates or assumptions into performance claims.</p><a className="wd-text-link" href="/portfolio">Explore Our Portfolio <ArrowRight size={18} aria-hidden="true" /></a></div></Section>
    <Section title="UI UX Design Services Pricing" intro="The cost of UI UX design services depends on product complexity and the depth of research, design and validation required."><div className="uiux-prose"><p>Pricing may be influenced by:</p><ul className="wd-checklist">{["Number of screens", "Platform complexity", "Research requirements", "Existing product condition", "User roles", "Prototype depth", "Usability testing", "Design-system requirements", "Responsive layouts", "Development handoff", "Timeline", "Ongoing support"].map((item) => <li key={item}>{item}</li>)}</ul></div><Cards items={[["UX Audit", "A focused review with prioritised findings and recommendations."], ["Fixed-Scope UI UX Project", "A defined research, experience design, interface or validation engagement."], ["Ongoing UI UX Support", "Regular design support for evolving features, systems and product improvements."], ["Embedded Design Support", "Collaborative design support working alongside an existing product or development team."]]} /><a className="wd-text-link uiux-pricing-link" href="/contact">Request a Project Estimate <ArrowRight size={18} aria-hidden="true" /></a></Section>

    <Section title="Frequently Asked Questions" tinted><div className="uiux-faq-list">{uiUxFaqs.map((faq, index) => { const open = openFaq === index; const id = `uiux-faq-${index}`; return <article className="uiux-faq" key={faq.question}><h3><button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpenFaq(open ? -1 : index)}>{faq.question}<ChevronDown aria-hidden="true" /></button></h3><div id={id} hidden={!open}><p>{faq.answer}</p></div></article>; })}</div></Section>
    <section className="wd-final-cta"><h2>Create a Better Digital Experience Without Unnecessary Friction</h2><p>Whether you are planning a new website, improving an existing application or designing a SaaS product, Vorevix can help turn complex requirements into a clear, consistent and usable digital experience.</p><p>Our UI UX design services combine research, structure, interface design, prototyping and implementation support within one connected process.</p><div className="wd-actions"><a className="primary" href="/contact">Discuss Your UI UX Project <ArrowRight size={18} aria-hidden="true" /></a><a href="/portfolio">View Our Portfolio</a></div></section>
  </main>;
}
