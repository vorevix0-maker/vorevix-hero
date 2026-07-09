import { ArrowRight } from "lucide-react";
import "./HomepageSeoContent.css";

const coreServices = [
  {
    title: "Web Development",
    href: "/services/web-development",
    body:
      "Vorevix builds modern, responsive websites that are easy to use, easy to manage, and structured for search engines. A strong website should load quickly, explain your offer clearly, support trust, and guide visitors toward the next action without confusion.",
  },
  {
    title: "SEO Services",
    href: "/services/seo-services",
    body:
      "Our SEO work focuses on practical improvements that help search engines understand your pages. We review technical foundations, metadata, content structure, internal links, image text, and service page relevance so your website can support long-term organic growth.",
  },
  {
    title: "UI/UX Design",
    href: "/services/ui-ux-design",
    body:
      "Clean UI/UX design helps people understand your business faster. We organize layouts, calls to action, forms, navigation, and visual hierarchy so your website feels professional and gives users a clear path from interest to inquiry.",
  },
  {
    title: "Branding",
    href: "/services/branding",
    body:
      "Branding gives your business a more consistent identity across your website, social media, proposals, and campaigns. Vorevix helps shape visual systems, logo direction, brand voice, and presentation so your business feels memorable and trustworthy.",
  },
  {
    title: "Digital Marketing",
    href: "/services",
    body:
      "Digital marketing connects your brand, website, content, and campaigns into one growth system. We help businesses plan campaigns that support visibility, engagement, lead generation, and stronger communication with the right audience.",
  },
];

const benefits = [
  "Clean and modern design that reflects your brand professionally.",
  "SEO-friendly development foundations for crawlability and page clarity.",
  "Scalable digital strategy that can grow with future service or regional pages.",
  "User-focused experience that makes information easier to scan and act on.",
  "Performance and growth focused execution across website, brand, and marketing touchpoints.",
];

const processSteps = [
  {
    title: "Discover",
    body:
      "We start by understanding your business, audience, services, competitors, and current website challenges. This helps us identify what needs to be improved first.",
  },
  {
    title: "Design",
    body:
      "We shape the structure, message, visual direction, and user experience so each page supports trust, clarity, and action.",
  },
  {
    title: "Develop",
    body:
      "We build responsive, search-friendly digital experiences with clean layouts, meaningful content areas, and practical technical foundations.",
  },
  {
    title: "Grow",
    body:
      "After launch, the website can support SEO, digital marketing, content improvements, automation, and future growth campaigns.",
  },
];

export default function HomepageSeoContent() {
  return (
    <section className="homepage-seo-section" aria-labelledby="digital-solutions-heading">
      <header className="homepage-seo-header">
        <span>( Digital Growth Foundation )</span>
        <h2 id="digital-solutions-heading">
          Digital Solutions Built for Modern Businesses
        </h2>
        <p>
          Vorevix helps businesses build a stronger online presence through web
          development, SEO, UI/UX design, branding, and digital marketing. We
          focus on practical digital systems that make your business easier to
          discover, easier to understand, and easier to contact. Whether you are
          launching a new brand, improving an existing website, or preparing for
          future growth campaigns, our work connects design, content, technical
          structure, and strategy into one clear foundation.
        </p>
        <p>
          We work with growing brands, service businesses, startups, product
          companies, and teams that need a professional online presence without
          unnecessary complexity. The goal is not to add random pages or crowded
          content. The goal is to build useful digital assets that explain your
          offer clearly, support search visibility, improve user experience, and
          guide qualified visitors toward the right next step.
        </p>
      </header>

      <section className="homepage-seo-block" aria-labelledby="core-services-heading">
        <div className="homepage-seo-block-heading">
          <span>01</span>
          <h2 id="core-services-heading">Our Core Services</h2>
        </div>

        <div className="homepage-service-list">
          {coreServices.map((service) => (
            <article className="homepage-service-item" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
              <a href={service.href}>
                Learn More
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="homepage-seo-block" aria-labelledby="why-choose-heading">
        <div className="homepage-seo-block-heading">
          <span>02</span>
          <h2 id="why-choose-heading">Why Businesses Choose Vorevix</h2>
        </div>

        <div className="homepage-seo-copy-grid">
          <article>
            <h3>Built for clarity and trust</h3>
            <p>
              A successful digital presence should make your business feel
              credible from the first visit. Vorevix combines clean design,
              consistent branding, and clear content structure so visitors can
              quickly understand who you are, what you offer, and why they
              should take the next step.
            </p>
          </article>
          <article>
            <h3>Designed for growth</h3>
            <p>
              We think beyond a single page or campaign. Your website should
              support SEO, social content, paid campaigns, lead generation, and
              future service expansion. That is why we focus on scalable page
              structures, useful internal links, and content that can grow over
              time.
            </p>
          </article>
        </div>

        <ul className="homepage-benefit-list">
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </section>

      <section className="homepage-seo-block" aria-labelledby="homepage-process-heading">
        <div className="homepage-seo-block-heading">
          <span>03</span>
          <h2 id="homepage-process-heading">Our Process</h2>
        </div>

        <div className="homepage-process-list">
          {processSteps.map((step) => (
            <article className="homepage-process-item" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="homepage-seo-cta" aria-labelledby="homepage-cta-heading">
        <div>
          <h2 id="homepage-cta-heading">Ready to Grow Your Digital Presence?</h2>
          <p>
            If your website, brand, SEO, or digital marketing system needs a
            stronger foundation, Vorevix can help you plan the next step. Start
            by exploring our services, reviewing our portfolio, or contacting
            our team with your goals.
          </p>
        </div>
        <div className="homepage-cta-links">
          <a href="/services">Explore Services</a>
          <a href="/portfolio">View Portfolio</a>
          <a href="/contact">Contact Vorevix</a>
        </div>
      </section>
    </section>
  );
}
