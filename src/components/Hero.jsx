import { Check } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-editorial-heading">
        <h1 className="hero-title">
          <span className="hero-heading-row">
            <span className="hero-line hero-line-serif">Digital Solutions</span>
            <span className="hero-line hero-line-connector">for</span>
          </span>
          <span className="hero-heading-row">
            <span className="hero-line hero-line-accent">Businesses Ready</span>
            <span className="hero-line hero-line-connector hero-line-to">to</span>
            <span className="hero-line hero-line-final"><strong>Grow</strong></span>
          </span>
        </h1>
      </div>

      <div className="hero-cinematic">
        <img
          src="/images/hero-digital-team.png"
          alt="Business team reviewing digital strategy materials"
          width="1536"
          height="1024"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="hero-lower-strip">
        <p className="hero-kicker hero-intro">Vorevix is a full-service digital agency that combines strategy, branding, UI/UX design, web design, web development, SEO and digital marketing around clear business objectives.</p>

        <div className="hero-trust" aria-label="Trusted by businesses across industries">
          <div className="hero-trust-avatars" aria-hidden="true">
            <img src="/client-1.png" alt="" />
            <img src="/client-2.png" alt="" />
            <img src="/client-3.png" alt="" />
            <span className="hero-trust-icon"><Check size={22} /></span>
          </div>
          <p>Trusted by Businesses<br />Across Industries</p>
        </div>
      </div>

      <section className="hero-about" aria-labelledby="hero-about-title">
        <div className="hero-about-inner">
          <div className="hero-about-aside">
            <span className="hero-about-label">Who Are We?</span>
            <span className="hero-about-dot" aria-hidden="true" />
            <svg className="hero-about-curve" viewBox="0 0 92 82" aria-hidden="true">
              <path d="M3 8C38 7 65 22 72 59" />
              <path d="M62 53L73 65L82 51" />
            </svg>
            <a className="hero-about-link" href="/about">About Us</a>
          </div>

          <div className="hero-about-copy">
            <span className="hero-about-hello">Hello!</span>
            <h2 id="hero-about-title">We’re Vorevix, Your Digital Agency for Practical Business Growth.</h2>
            <p>Vorevix helps businesses turn ideas into practical digital systems. Our work covers websites, SEO foundations, UI/UX design, brand identity, digital marketing, automation, and software planning. We focus on clean execution, clear communication, and digital assets that support measurable business goals.</p>
          </div>
        </div>
      </section>

      <section className="hero-partner" aria-labelledby="hero-partner-title">
        <div className="hero-partner-inner">
          <span className="hero-partner-rings" aria-hidden="true"><i /><i /></span>
          <h2 id="hero-partner-title">What Does Vorevix Do?</h2>
          <div className="hero-partner-details">
            <p className="hero-partner-eyebrow"><span className="hero-partner-bracket">(</span> <span className="hero-partner-eyebrow-text">A Connected Digital Partner</span> <span className="hero-partner-bracket">)</span></p>
            <p className="hero-partner-statement">Vorevix helps businesses plan, design, build and improve their digital presence. Our services include branding, UI/UX design, web design, web development, SEO and digital marketing. These capabilities can be delivered individually or combined into one coordinated solution based on the organisation&apos;s goals, current challenges and stage of growth.</p>
          </div>
        </div>
      </section>

      <section className="hero-digital-partner" aria-labelledby="hero-digital-partner-title">
        <div className="hero-digital-partner-inner">
          <div className="hero-digital-partner-label"><span aria-hidden="true" />Our Approach</div>
          <span className="hero-digital-partner-arrows" aria-hidden="true"><i>⌄</i><i>⌄</i><i>⌄</i></span>
          <h2 id="hero-digital-partner-title">A Digital Partner Focused on What Your Business Needs Next</h2>
          <div className="hero-digital-partner-copy">
            <p>Every business has different priorities, audiences, resources and levels of digital maturity. That is why we do not begin with a fixed package or force every project into the same process.</p>
            <p>We first look at what the business is trying to achieve, where its current digital experience is creating friction and which improvements can make the clearest practical difference.</p>
            <p>That may involve strengthening the brand, improving the website, simplifying customer journeys, resolving technical limitations, increasing organic visibility or supporting a broader marketing strategy.</p>
            <p>As a full-service digital agency, Vorevix connects strategy, design, technology and marketing around shared objectives. Your brand identity, website, search presence, content and campaigns can therefore support one another instead of operating as disconnected parts.</p>
            <p>Our role is not limited to delivering individual services. We help businesses understand what should be improved, what should be prioritised and how each digital decision can support a wider commercial objective.</p>
          </div>
        </div>
      </section>

      <section className="hero-disconnected" aria-labelledby="hero-disconnected-title">
        <div className="hero-disconnected-inner">
          <div className="hero-disconnected-main">
            <div className="hero-disconnected-heading">
              <div className="hero-disconnected-label"><span aria-hidden="true" />Digital Alignment</div>
              <h2 id="hero-disconnected-title">
                <span>Why Do</span>
                <span>Disconnected</span>
                <span>Digital Services</span>
                <span className="hero-disconnected-nowrap">Create Problems?</span>
              </h2>
            </div>

            <div className="hero-disconnected-right">
              <div className="hero-disconnected-intro">
                <p>A website can look attractive while still failing to communicate the offer clearly or generate meaningful enquiries.</p>
                <p>A marketing campaign can bring visitors to a website, while confusing navigation or weak landing pages prevent those visitors from taking action.</p>
                <p>A strong brand identity can also lose its impact when it is applied inconsistently across websites, content, campaigns and social platforms.</p>
              </div>
            </div>
          </div>

          <div className="hero-disconnected-list-wrap">
            <p className="hero-disconnected-list-title">Working with several disconnected providers may lead to:</p>
            <ol className="hero-disconnected-list">
              <li><span>01</span><strong>Inconsistent messaging</strong></li>
              <li><span>02</span><strong>Unclear responsibilities</strong></li>
              <li><span>03</span><strong>Duplicated work</strong></li>
              <li><span>04</span><strong>Slower communication</strong></li>
              <li><span>05</span><strong>Fragmented user journeys</strong></li>
              <li><span>06</span><strong>Technical limitations</strong></li>
              <li><span>07</span><strong>Short-term fixes that are difficult to scale</strong></li>
            </ol>
          </div>

          <div className="hero-disconnected-close">
            <p>Vorevix helps businesses replace fragmented digital activity with a more coordinated approach. We consider how strategy, branding, content, user experience, technology, SEO and marketing can work together to support the same objective. Working with one full-service digital agency can reduce unnecessary handovers and help important decisions remain aligned throughout the project.</p>
            <p>We support startups, SMEs, eCommerce brands, SaaS companies, professional-service firms and established organisations that need stronger digital foundations, clearer customer experiences and a more coordinated approach to online growth.</p>
            <p>Whether you are launching a new business, rebuilding an outdated website or improving your digital visibility, we help identify what matters, connect the right services and turn ideas into practical digital solutions.</p>
            <p>Instead of treating branding, design, development, search and marketing as separate activities, we bring them together through one strategy. This creates a more consistent customer experience and a stronger foundation for long-term improvement.</p>
          </div>
        </div>
      </section>
    </section>
  );
}
