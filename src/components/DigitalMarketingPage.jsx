import { useState } from "react";
import { ArrowRight, BarChart3, ChevronDown } from "lucide-react";
import { digitalMarketingFaqs } from "../digitalMarketingFaqs";
import "./WebDevelopmentPage.css";
import "./DigitalMarketingPage.css";

const process = [
  ["1. Discovery and Goals", "We review the business, offers, audience, current channels, internal resources and expected outcomes."],
  ["2. Audit and Research", "Existing performance, competitors, content, tracking and customer journeys are examined where relevant."],
  ["3. Strategy and Channel Planning", "We define priorities, audiences, campaign direction, channel roles and measurement requirements."],
  ["4. Campaign Setup", "Accounts, content, creative, landing pages and tracking are prepared according to the approved scope."],
  ["5. Launch and Quality Assurance", "Campaigns and changes are checked before launch, including links, tracking, targeting and conversion paths."],
  ["6. Reporting and Analysis", "Performance is reviewed against agreed goals. Reports focus on outcomes, context and next actions."],
  ["7. Testing and Optimisation", "Campaigns, messages, audiences, budgets and landing experiences are refined using available evidence."],
  ["8. Strategic Review", "The wider plan is reviewed as business priorities, market conditions and performance change."],
];

function List({items}) { return <ul className="wd-checklist">{items.map(item=><li key={item}>{item}</li>)}</ul>; }
function Section({title,children,tinted=false}) { return <section className={`wd-section dm-section${tinted?" wd-tinted":""}`}><div className="wd-section-heading"><h2>{title}</h2></div><div className="dm-prose">{children}</div></section>; }
function Faq({faq,index}) { const [open,setOpen]=useState(index===0); const id=`dm-faq-${index}`; return <article className="dm-faq"><h3><button type="button" aria-expanded={open} aria-controls={id} onClick={()=>setOpen(!open)}>{faq.question}<ChevronDown aria-hidden="true"/></button></h3><div id={id} hidden={!open}>{faq.answer.map(p=><p key={p}>{p}</p>)}</div></article>; }

export default function DigitalMarketingPage() {
  return <main className="web-development-page digital-marketing-page">
    <nav className="wd-breadcrumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li aria-hidden="true">/</li><li><a href="/services">Services</a></li><li aria-hidden="true">/</li><li><span aria-current="page">Digital Marketing</span></li></ol></nav>
    <section className="wd-hero"><div className="wd-hero-copy"><h1>Digital Marketing Services for Measurable Business Growth</h1><p>Vorevix provides digital marketing services that connect strategy, SEO, paid media, content, social, email, conversion optimisation and analytics into one coordinated growth system. We help businesses choose the right channels, measure meaningful performance and improve campaigns over time.</p><div className="wd-actions"><a className="primary" href="/contact">Discuss Your Digital Marketing Goals <ArrowRight size={18} aria-hidden="true"/></a><a href="/portfolio">View Our Work</a></div></div><div className="wd-hero-visual"><img src="/service-social.png" alt="Digital marketing services for measurable business growth" width="1182" height="1330" fetchPriority="high"/></div></section>

    <Section title="Why Disconnected Marketing Underperforms"><p>Many businesses invest in multiple channels without a shared strategy. SEO targets one audience, paid ads use different messages, social content follows another direction and reporting focuses on activity rather than business outcomes.</p><p>Our digital marketing services bring planning, execution and measurement together. Each channel is selected for a reason, supported by relevant content and reviewed against agreed goals.</p></Section>

    <Section title="What Our Digital Marketing Services Include" tinted><p>A complete engagement may include research, strategy, SEO, paid media, content marketing, social media, email marketing, conversion optimisation, analytics, reporting and ongoing campaign improvement.</p><p>Not every business needs every channel. The right mix depends on goals, audience behaviour, budget, existing performance and internal capabilities. We recommend a focused scope rather than an oversized package.</p></Section>

    <Section title="Strategy, Execution and Measurement"><p>Digital marketing has three connected layers.</p><p>Strategy defines goals, audiences, channel priorities, budgets and measurement. Execution turns that plan into campaigns. Measurement explains what is happening and where improvement is needed.</p><p>Our integrated digital marketing services keep these layers connected so campaign decisions are based on evidence rather than assumptions.</p></Section>

    <Section title="Business Goals and Audience Research" tinted><p>Effective planning begins with clear goals. These may include increasing qualified enquiries, improving online sales, growing organic visibility, supporting a product launch or strengthening customer retention.</p><p>Audience research helps identify needs, objections, search behaviour, channel preferences and buying motivations. The depth of research depends on available data, project scope and access to customers or sales teams.</p></Section>

    <Section title="Market and Competitor Analysis"><p>Competitor analysis reveals how others position their offers, which channels they prioritise and where gaps may exist.</p><p>This analysis can guide keyword selection, messaging, content priorities, paid-media targeting and landing-page direction. It also helps prevent campaigns from competing only on price or repeating the same generic claims as everyone else.</p></Section>

    <Section title="Campaign Planning" tinted><p>Campaign planning turns research into an objective, audience, offer, message, channel plan, budget, timeline and success measures.</p><p>Our digital marketing consulting services can also help businesses review existing activity and create a practical roadmap before execution begins.</p></Section>

    <Section title="Search Engine Optimisation"><p>SEO may include technical reviews, keyword research, page optimisation, content planning, internal linking and authority building.</p><p>SEO performance depends on competition, website quality, content, authority and implementation. Rankings and traffic growth cannot be guaranteed. Explore our dedicated <a href="/services/seo-services">SEO services</a>.</p></Section>

    <Section title="PPC and Paid Search" tinted><p>Paid search can reach users actively looking for a product or service. Work may include account structure, keywords, audiences, ad copy, bidding, tracking and landing-page recommendations.</p><p>PPC management services should be aligned with business goals and lead quality, not only clicks or impressions.</p><p>Advertising spend is separate from agency management fees unless a written proposal states otherwise. Media budgets are normally paid directly to advertising platforms.</p></Section>

    <Section title="Paid Social and Digital Advertising"><p>Paid social can support awareness, demand generation, retargeting and direct response. Platforms should match audience behaviour and campaign goals.</p><p>Digital advertising services may include audience planning, creative direction, campaign setup, testing and optimisation. Display advertising may be included where relevant, but it is not automatically suitable for every business.</p></Section>

    <Section title="Content Strategy and Content Marketing" tinted><p>Content marketing can answer customer questions, support search visibility and guide buying decisions.</p><p>Content strategy defines what should be created, who it is for, where it will be published and how it supports business goals. Deliverables may include content themes, briefs, landing-page copy, articles, campaign assets or distribution recommendations.</p></Section>

    <Section title="Social Media Marketing"><p>Social media marketing can support awareness, engagement, community building, customer education and campaign distribution.</p><p>The scope may include strategy, content planning, paid social, creative direction or ongoing social media management. These are different levels of service and should not be treated as automatically included in every engagement.</p></Section>

    <Section title="Email Marketing" tinted><p>Email marketing can support lead nurturing, retention, product education and lifecycle communication.</p><p>Work may include campaign planning, audience segmentation, email structure, copy, automation recommendations and performance review.</p></Section>

    <Section title="Conversion Rate Optimisation"><p>Generating more traffic is not enough if visitors do not take meaningful action.</p><p>Conversion rate optimisation reviews how people move through landing pages, forms, product pages and key journeys. It may include data review, usability observations, message testing, page recommendations and experiment planning.</p></Section>

    <Section title="Landing-Page Optimisation" tinted><p>Landing pages should match the audience, offer and campaign message. A strong page makes the next action clear and removes unnecessary friction.</p><p>Optimisation may cover page structure, headlines, calls to action, trust signals, forms, mobile usability, speed and message alignment. Implementation can connect with our <a href="/services/web-design">web design services</a>, <a href="/services/ui-ux-design-services">UI UX design services</a> and <a href="/services/web-development-services">web development services</a>.</p></Section>

    <Section title="Analytics and Tracking"><p>Measurement starts before launch. Tracking should reflect the actions that matter to the business, such as form submissions, calls, purchases, bookings or qualified lead stages.</p><p>Work may include analytics review, event planning, campaign parameters, conversion setup and tracking recommendations.</p><p>Tracking accuracy depends on website configuration, consent requirements, platform restrictions, CRM quality and user behaviour. No analytics setup captures every interaction perfectly.</p></Section>

    <Section title="Reporting and Attribution" tinted><p>Reporting should explain performance, not repeat dashboard numbers. It may include outcomes, trends, conversion data, lead quality and recommended actions. Attribution is directional rather than absolute. A customer may interact with search, social, email and direct visits before converting. Cross-device behaviour, privacy controls, offline sales and incomplete CRM data can limit certainty.</p><p>Our digital marketing services use the best available evidence while clearly communicating data limitations.</p></Section>

    <Section title="Lead Generation Strategy"><p>Lead generation involves more than increasing form submissions. It requires the right audience, offer, message, landing experience and follow-up process.</p><p>We can help define campaign goals, lead actions, qualification signals and conversion paths. No agency can guarantee lead quantity, lead quality, revenue or return on investment. Results also depend on the offer, pricing, sales process, market conditions and customer experience.</p></Section>

    <Section title="B2B and eCommerce Applications" tinted><p>B2B digital marketing services often require longer sales cycles, educational content, lead nurturing and coordination with sales teams.</p><p>eCommerce digital marketing services may focus on product discovery, paid acquisition, shopping campaigns, conversion, retention and customer lifetime value.</p></Section>

    <section className="wd-section dm-section"><div className="wd-section-heading"><h2>Our Digital Marketing Process</h2></div><div className="wd-process-grid">{process.map(([title,body])=><article className="wd-process-card" key={title}><BarChart3 className="wd-card-icon" aria-hidden="true"/><h3>{title}</h3><p>{body}</p></article>)}</div></section>

    <Section title="What You May Receive" tinted><p>Depending on scope, deliverables may include:</p><List items={["Digital strategy","Channel recommendations","Audience and competitor research","Campaign plan","SEO priorities","Keyword or audience targeting","Ad account structure","Content briefs","Creative direction","Email campaign plans","Landing-page recommendations","Tracking plan","Performance reports","Optimisation recommendations","Ongoing campaign management"]}/></Section>

    <Section title="Ongoing Campaign Optimisation"><p>Digital marketing should improve over time. Ongoing work may include reviewing search terms, audiences, creative, content, landing pages, lead quality and budget allocation.</p><p>Optimisation does not mean changing campaigns without a reason. Decisions should be based on performance, available data and business priorities.</p><p>Regular reviews keep channel priorities connected to changing customer behaviour, commercial needs and the evidence available from active campaigns.</p></Section>

    <Section title="Why Choose Vorevix as Your Digital Marketing Agency?" tinted><p>Vorevix connects marketing strategy with SEO, branding, design, UX and web development so campaigns remain aligned from message to conversion.</p><p>Businesses choose our digital marketing services for:</p><List items={["Strategy before channel execution","Clear scope and priorities","Integrated website and campaign thinking","Measurement planned before launch","Practical reporting","Honest attribution language","Structured testing and optimisation","Access to related design and development capabilities"]}/><p>We do not promise guaranteed leads, revenue, rankings or ROI. Sustainable performance depends on the market, offer, budget, implementation and customer experience. Campaign identity can connect with our <a href="/services/branding">branding services</a>.</p></Section>

    <Section title="Digital Marketing Pricing Factors"><p>Pricing depends on strategy depth, number of channels, campaign complexity, content and creative requirements, tracking needs, reporting scope and ongoing management.</p><p>Advertising budgets, software subscriptions, stock assets and third-party platform costs are separate unless explicitly included in the proposal.</p></Section>

    <Section title="Timelines and Communication" tinted><p>Timelines depend on scope, access to accounts, approval speed, tracking readiness and creative requirements.</p><p>Communication expectations, approval responsibilities and reporting cadence are agreed before work begins.</p></Section>

    <section className="wd-section dm-section"><div className="wd-section-heading"><h2>Frequently Asked Questions</h2></div><div className="dm-faq-list">{digitalMarketingFaqs.map((faq,index)=><Faq faq={faq} index={index} key={faq.question}/>)}</div></section>

    <section className="wd-final-cta"><h2>Build a More Connected Digital Strategy</h2><p>Vorevix provides digital marketing services for businesses that want clearer priorities, better coordination and more useful performance insight.</p><p>We can review your current activity, identify gaps and recommend a practical scope across strategy, channels, tracking and optimisation.</p><div className="wd-actions"><a className="primary" href="/contact">Discuss Your Digital Marketing Goals <ArrowRight size={18} aria-hidden="true"/></a><a href="/portfolio">View Our Work</a></div></section>
  </main>;
}
