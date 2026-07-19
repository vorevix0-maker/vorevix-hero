import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { uiUxAustraliaContent } from "../uiUxAustraliaContent";
import { uiUxAustraliaFaqs } from "../uiUxAustraliaFaqs";
import "./WebDevelopmentPage.css";
import "./WebDevelopmentAustraliaPage.css";

const links = [
  ["WCAG accessibility guidelines", "https://www.w3.org/WAI/standards-guidelines/wcag/", true],
  ["general UI/UX design services", "/services/ui-ux-design-services"],
  ["Web Development Australia", "/services/web-development-australia"],
  ["Digital Marketing Australia", "/services/digital-marketing-australia"],
  ["Branding Services Australia", "/services/branding-australia"],
  ["Web Design Australia", "/services/web-design-australia"],
  ["web development services", "/services/web-development-services"],
  ["Digital marketing services", "/services/digital-marketing"],
  ["Branding services", "/services/branding"],
  ["web design services", "/services/web-design"],
  ["Request a UI/UX Review", "/contact"],
  ["about Vorevix", "/about"],
  ["View Our Portfolio", "/portfolio"],
];

function LinkedText({ children }) {
  let parts = [children];
  links.forEach(([label, href, external]) => {
    parts = parts.flatMap((part) => {
      if (typeof part !== "string") return [part];
      return part.split(label).flatMap((piece, index, values) => index === values.length - 1
        ? [piece]
        : [piece, <a key={`${label}-${index}-${part.length}`} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{label}</a>]);
    });
  });
  return parts;
}

function ContentSections() {
  const blocks = uiUxAustraliaContent.trim().split(/\n\s*\n/);
  const nodes = [];
  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index].trim();
    if (block.startsWith("## ")) {
      nodes.push(<h2 key={`h2-${index}`}>{block.slice(3)}</h2>);
    } else if (block.startsWith("### ")) {
      nodes.push(<h3 key={`h3-${index}`}>{block.slice(4)}</h3>);
    } else if (block.startsWith("- ")) {
      const items = [];
      while (index < blocks.length && blocks[index].trim().startsWith("- ")) {
        items.push(
          ...blocks[index]
            .trim()
            .split("\n")
            .map((item) => item.trim())
            .filter((item) => item.startsWith("- "))
            .map((item) => item.slice(2)),
        );
        index += 1;
      }
      index -= 1;
      nodes.push(<ul className="wd-checklist" key={`list-${index}`}>{items.map((item) => <li key={item}><LinkedText>{item}</LinkedText></li>)}</ul>);
    } else {
      nodes.push(<p key={`p-${index}`}><LinkedText>{block}</LinkedText></p>);
    }
  }
  return <div className="wda-prose wda-long-form">{nodes}</div>;
}

export default function UiUxAustraliaPage() {
  const [openFaq, setOpenFaq] = useState(0);
  return <main className="web-development-page wda-page">
    <nav className="wd-breadcrumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li aria-hidden="true">/</li><li><a href="/services">Services</a></li><li aria-hidden="true">/</li><li><span aria-current="page">UI UX Design Services Australia</span></li></ol></nav>
    <section className="wd-hero"><div className="wd-hero-copy"><span className="wd-eyebrow">UI UX Design Services Australia</span><h1>UI/UX Design Services for Businesses in Australia</h1><p>Vorevix provides UI UX design services Australia businesses can use to improve user journeys, simplify digital interactions and create clearer interfaces across websites, mobile apps, ecommerce stores and SaaS products.</p><p>Our work may include UX research, stakeholder workshops, journey mapping, information architecture, wireframes, user interface design, interactive prototypes, usability testing, accessibility reviews and design systems.</p><p>We approach UI/UX design as a structured product and experience process rather than a visual styling exercise. Each recommendation is shaped around user needs, business goals, technical constraints and the actions the digital product needs to support.</p><p>Vorevix works remotely with businesses across Australia through online workshops, shared prototypes, design reviews, documented feedback and developer-ready handoff.</p><div className="wd-actions"><a className="primary" href="/contact">Discuss Your UI/UX Project <ArrowRight size={18}/></a><a href="/services/ui-ux-design-services">Explore Our UI/UX Design Services</a></div><ul className="wda-trust" aria-label="Service highlights"><li>Research before interface design</li><li>Website, mobile, ecommerce and SaaS coverage</li><li>Responsive and accessibility-aware design</li><li>Clear prototypes and developer handoff</li></ul></div><div className="wd-hero-visual"><img src="/service-software-app.png" alt="UI UX design services Australia by Vorevix" width="1306" height="1205" fetchPriority="high"/></div></section>
    <section className="wd-section wda-section"><ContentSections /></section>
    <section className="wd-section wda-section wd-tinted"><div className="wd-section-heading"><h2>UI UX Design Services Australia FAQs</h2></div><div className="wda-faq-list">{uiUxAustraliaFaqs.map((faq, index) => { const open = openFaq === index; const id = `ui-ux-au-faq-${index}`; return <article className="wda-faq" key={faq.question}><h3><button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpenFaq(open ? -1 : index)}>{faq.question}<ChevronDown aria-hidden="true"/></button></h3><div id={id} hidden={!open}>{faq.answer.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></article>; })}</div></section>
    <section className="wd-final-cta"><h2>Improve Your Digital Product Experience in Australia</h2><p>Tell us where users are getting confused, which journeys need improvement and what your website, app or product needs to achieve.</p><p>Vorevix will review the current experience, user needs, business goals, technical constraints and required deliverables before recommending a practical UI/UX scope.</p><p>Whether you need research, wireframes, interface design, prototyping, usability testing, a design system or a complete product redesign, our UI UX design services Australia approach can be structured around your priorities and product stage.</p><div className="wd-actions"><a className="primary" href="/contact">Discuss Your UI/UX Project <ArrowRight size={18}/></a><a href="/services/ui-ux-design-services">Explore Our UI/UX Design Services</a></div></section>
  </main>;
}
