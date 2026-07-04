import { ArrowRight, ExternalLink } from "lucide-react";
import "./PortfolioPage.css";

const brandCards = [
  {
    name: "Arshi",
    type: "Natural Products",
    href: "#arshi-portfolio",
    image: "/portfolio/arshi-brand-hero-optimized.jpg",
    theme: "arshi",
  },
  {
    name: "A&S Botanics",
    type: "Perfume Brand",
    href: "#as-botanics-portfolio",
    image: "/portfolio/as-botanics-logo.jpg",
    theme: "botanics",
  },
  {
    name: "Dastaan",
    type: "Perfume Collection",
    href: "#dastaan-portfolio",
    image: "/portfolio/dastaan-dp.jpg",
    theme: "dastaan",
  },
];

const arshiLabels = [
  {
    title: "Arshi Mango Jam Label",
    category: "Jar Packaging",
    image: "/portfolio/arshi-mango-jam-optimized.jpg",
    tone: "mango",
  },
  {
    title: "Arshi Strawberry Juice",
    category: "Beverage Label",
    image: "/portfolio/arshi-strawberry-juice-optimized.jpg",
    tone: "berry",
  },
  {
    title: "Arshi Orange Juice",
    category: "Beverage Label",
    image: "/portfolio/arshi-orange-juice-optimized.jpg",
    tone: "orange",
  },
];

const arshiCampaigns = [
  {
    title: "Tomatro Billboard Campaign",
    category: "Outdoor Advertising",
    image: "/portfolio/tomatro-billboard-optimized.jpg",
    span: "wide",
  },
  {
    title: "Tomatro Real Taste Creative",
    category: "Social Media Design",
    image: "/portfolio/tomatro-real-taste-optimized.jpg",
  },
  {
    title: "Tomatro 250g Product Ad",
    category: "Product Campaign",
    image: "/portfolio/tomatro-ad-250-optimized.jpg",
  },
];

const arshiPackaging = [
  { title: "Tomatro 1kg Packaging", image: "/portfolio/tomatro-1kg-packaging-optimized.jpg" },
  { title: "Tomatro 500g Packaging", image: "/portfolio/tomatro-500g-packaging-optimized.jpg" },
  { title: "Tomatro 250g Packaging", image: "/portfolio/tomatro-250g-packaging-optimized.jpg" },
  { title: "Tomatro Sachet Packaging", image: "/portfolio/tomatro-sachet-optimized.jpg" },
];

const botanicsVisuals = [
  {
    title: "A&S Botanics Hero Collection",
    category: "Website Hero",
    image: "/portfolio/as-botanics-hero.jpg",
    span: "wide",
  },
  {
    title: "Two Scents, One Connection",
    category: "Couple Campaign",
    image: "/portfolio/as-botanics-couple-light.jpg",
  },
  {
    title: "Nexor Sunset Creative",
    category: "Product Visual",
    image: "/portfolio/as-botanics-nexor.jpg",
  },
  {
    title: "Avectus Nature Creative",
    category: "Product Visual",
    image: "/portfolio/as-botanics-avectus.jpg",
  },
  {
    title: "Florse Premium Visual",
    category: "Product Visual",
    image: "/portfolio/as-botanics-florse.jpg",
  },
  {
    title: "Dark Couple Campaign",
    category: "Social Campaign",
    image: "/portfolio/as-botanics-couple-dark.jpg",
  },
  {
    title: "Velora Perfume Visual",
    category: "Product Visual",
    image: "/portfolio/as-botanics-velora.jpg",
  },
];

const botanicsSupport = [
  { title: "A&S Botanics Mobile View", image: "/portfolio/as-botanics-mobile-site.jpg" },
  { title: "Founder Visiting Card", image: "/portfolio/as-botanics-cards.jpg" },
  { title: "Dastaan Mobile View", image: "/portfolio/dastaan-mobile-hero.jpg" },
  { title: "Founder Visiting Card", image: "/portfolio/dastaan-cards.jpg" },
];

const dastaanProducts = [
  { title: "Gumaan Bottle Display", image: "/portfolio/dastaan-product-gumaan.jpg" },
  { title: "Nayab Bottle Display", image: "/portfolio/dastaan-product-nayab.jpg" },
  { title: "Sahiba Bottle Display", image: "/portfolio/dastaan-product-sahiba.jpg" },
  { title: "Shah Bottle Display", image: "/portfolio/dastaan-product-shah.jpg" },
  { title: "Andaaz Bottle Display", image: "/portfolio/dastaan-product-andaaz.jpg" },
  { title: "Haya Bottle Display", image: "/portfolio/dastaan-product-haya.jpg" },
  { title: "Saya Bottle Display", image: "/portfolio/dastaan-product-saya.jpg" },
  { title: "Sultan Bottle Display", image: "/portfolio/dastaan-product-sultan.jpg" },
];

const dastaanStickers = [
  { title: "Haya Sticker Label", image: "/portfolio/dastaan-sticker-haya.jpg" },
  { title: "Sahiba Sticker Label", image: "/portfolio/dastaan-sticker-sahiba.jpg" },
  { title: "Shah Sticker Label", image: "/portfolio/dastaan-sticker-shah.jpg" },
  { title: "Sultan Sticker Label", image: "/portfolio/dastaan-sticker-sultan.jpg" },
];

const dastaanPosts = [
  { title: "Haya Fits Everywhere", category: "Social Post", image: "/portfolio/dastaan-post-haya.jpg" },
  { title: "You Set The Trends", category: "Social Post", image: "/portfolio/dastaan-post-shah.jpg" },
  { title: "Rare Fragrance Moment", category: "Social Post", image: "/portfolio/dastaan-post-nayab.jpg" },
  { title: "Gumaan Presence", category: "Social Post", image: "/portfolio/dastaan-post-gumaan.jpg" },
  { title: "Confidence Has A Scent", category: "Social Post", image: "/portfolio/dastaan-post-confidence.jpg" },
  { title: "Sahiba Attraction", category: "Social Post", image: "/portfolio/dastaan-post-sahiba.jpg" },
  { title: "Nayab Buy Now", category: "Social Post", image: "/portfolio/dastaan-post-nayab-buy.jpg" },
  { title: "Room Notice Creative", category: "Social Post", image: "/portfolio/dastaan-post-room.jpg" },
];

const dastaanReels = [
  { title: "Shah Reel", video: "/portfolio/dastaan-reel-shah.mp4" },
  { title: "Saya Reel", video: "/portfolio/dastaan-reel-saya.mp4" },
  { title: "Sahiba Reel", video: "/portfolio/dastaan-reel-sahiba.mp4" },
  { title: "Ad Reel", video: "/portfolio/dastaan-reel-ad.mp4" },
  { title: "Sahiba Perfume Reel", video: "/portfolio/dastaan-reel-sahiba-2.mp4" },
];

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <section className="portfolio-hero" id="portfolio">
        <div className="portfolio-hero-copy">
          <span className="portfolio-eyebrow">Brand Portfolio</span>
          <h1>Arshi, A&S Botanics and Dastaan creative work.</h1>
          <p>
            Choose a brand to view the complete portfolio. Arshi covers food
            packaging, A&S Botanics covers perfume visuals, and Dastaan brings a
            premium perfume collection with products, posts, stickers and reels.
          </p>

          <div className="portfolio-hero-actions">
            <a className="portfolio-primary-link" href="#brand-selector">
              Select Brand <ArrowRight size={18} />
            </a>
            <a href="/#contact" className="portfolio-secondary-link">
              Start a Project
            </a>
          </div>
        </div>

        <a
          href="#brand-selector"
          className="portfolio-hero-visual dual-hero"
          aria-label="Select a portfolio brand"
        >
          <img src="/portfolio/portfolio-brand-hero.jpg" alt="Arshi, A&S Botanics and Dastaan brand logos" />
        </a>
      </section>

      <section className="brand-selector" id="brand-selector">
        <div className="portfolio-section-heading">
          <span className="portfolio-kicker">Choose Portfolio</span>
          <h2>Click a brand logo/card to open its visuals.</h2>
        </div>

        <div className="brand-card-grid">
          {brandCards.map((brand) => (
            <a className={`brand-card ${brand.theme}`} href={brand.href} key={brand.name}>
              <img src={brand.image} alt={`${brand.name} portfolio`} />
              <div>
                <span>{brand.type}</span>
                <h3>{brand.name}</h3>
                <strong>
                  View Portfolio <ArrowRight size={17} />
                </strong>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="portfolio-section portfolio-intro" id="arshi-portfolio">
        <div>
          <span className="portfolio-kicker">Arshi Natural Products</span>
          <h2>Food packaging, labels and Tomatro campaign visuals.</h2>
        </div>
        <p>
          Arshi portfolio includes fruit product labels, Tomatro ketchup
          packaging, social creatives and a billboard campaign system.
        </p>
      </section>

      <section className="portfolio-product-grid">
        {arshiLabels.map((project) => (
          <article className={`product-card ${project.tone}`} key={project.title}>
            <div className="product-card-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="product-card-copy">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <a href={project.image} target="_blank" rel="noreferrer">
                Open Design <ExternalLink size={16} />
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="campaign-grid">
        {arshiCampaigns.map((project) => (
          <article className={`campaign-card ${project.span || ""}`} key={project.title}>
            <img src={project.image} alt={project.title} />
            <div>
              <span>{project.category}</span>
              <h3>{project.title}</h3>
            </div>
          </article>
        ))}
      </section>

      <section className="packaging-section">
        <div className="portfolio-section-heading">
          <span className="portfolio-kicker">Packaging Series</span>
          <h2>Multiple pack sizes, one recognizable shelf presence.</h2>
        </div>

        <div className="packaging-grid">
          {arshiPackaging.map((item) => (
            <article className="packaging-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section portfolio-intro botanics-intro" id="as-botanics-portfolio">
        <div>
          <span className="portfolio-kicker">A&S Botanics</span>
          <h2>Perfume branding, product photography and campaign visuals.</h2>
        </div>
        <p>
          A&S Botanics portfolio presents premium fragrance visuals with natural
          scenery, couple campaigns, mobile hero art, logo identity and printed
          promotional cards.
        </p>
      </section>

      <section className="botanics-showcase">
        <div className="botanics-logo-panel">
          <img src="/portfolio/as-botanics-logo.jpg" alt="A&S Botanics logo" />
          <h3>Pure by nature. Perfected by science.</h3>
        </div>
        <div className="botanics-hero-panel">
          <img src="/portfolio/as-botanics-mobile-hero.jpg" alt="A&S Botanics mobile hero" />
        </div>
      </section>

      <section className="campaign-grid botanics-grid">
        {botanicsVisuals.map((project) => (
          <article className={`campaign-card botanics-card ${project.span || ""}`} key={project.title}>
            <img src={project.image} alt={project.title} />
            <div>
              <span>{project.category}</span>
              <h3>{project.title}</h3>
            </div>
          </article>
        ))}
      </section>

      <section className="packaging-section botanics-support">
        <div className="portfolio-section-heading">
          <span className="portfolio-kicker">Brand Assets</span>
          <h2>Website and promotional card visuals.</h2>
        </div>

        <div className="packaging-grid botanics-assets">
          {botanicsSupport.map((item) => (
            <article className="packaging-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="packaging-section dastaan-products" id="dastaan-portfolio">
        <div className="portfolio-section-heading">
          <span className="portfolio-kicker">Product Graphics</span>
          <h2>Bottle displays for the full fragrance lineup.</h2>
        </div>

        <div className="packaging-grid dastaan-product-grid">
          {dastaanProducts.map((item) => (
            <article className="packaging-card dastaan-product-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="campaign-grid dastaan-post-grid">
        {dastaanPosts.map((project) => (
          <article className="campaign-card dastaan-card" key={project.title}>
            <img src={project.image} alt={project.title} />
            <div>
              <span>{project.category}</span>
              <h3>{project.title}</h3>
            </div>
          </article>
        ))}
      </section>

      <section className="packaging-section dastaan-stickers">
        <div className="portfolio-section-heading">
          <span className="portfolio-kicker">Sticker Labels</span>
          <h2>Fragrance label designs with notes and brand identity.</h2>
        </div>

        <div className="packaging-grid dastaan-sticker-grid">
          {dastaanStickers.map((item) => (
            <article className="packaging-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="packaging-section dastaan-reels">
        <div className="portfolio-section-heading">
          <span className="portfolio-kicker">Reels</span>
          <h2>Short-form video creatives for perfume campaigns.</h2>
        </div>

        <div className="reel-grid">
          {dastaanReels.map((item) => (
            <article className="reel-card" key={item.title}>
              <video src={item.video} controls muted playsInline preload="none" />
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-cta">
        <span>Need designs like these?</span>
        <h2>Let's make your product look ready for market.</h2>
        <a href="/#contact">
          Start Project <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}
