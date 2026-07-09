import "./Services.css";


const services = [
  {
    title: "Brand Identity Design",
    desc: "Logos, identity systems, brand voice and visuals that make your business memorable.",
    visual: "brand",
    image: "/service-branding.png",
    href: "/services/branding",
  },
  {
    title: "Custom Web Development",
    desc: "Fast, modern and conversion-focused websites built for trust, leads and growth.",
    visual: "web",
    image: "/service-web.png",
    href: "/services/web-development",
  },
  
  {
    title: "Social Media Marketing",
    desc: "Content planning, creative campaigns and paid social strategies that bring real attention.",
    visual: "tablet",
    image: "/service-social.png",
    href: "/services",
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Technical SEO, keyword strategy and content improvements that help your brand rank higher.",
    visual: "seo",
    image: "/service-seo.png",
    href: "/services/seo-services",
  },
  {
    title: "Software Solutions & App Development",
    desc: "ERP, CRM, dashboards, mobile apps and workflow systems built around your operations.",
    visual: "software",
    image: "/service-software-app.png",
    href: "/services",
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-intro">
        <h2 className="services-title">
          <span>Building Brands</span>   
          <span>Boosting Visibility</span>
          <span>and Driving Growth</span>
        </h2>
        <span>( Our Services )</span>
      </div>

      <div className="services-grid">
        <p className="services-side-copy">
         We develop complete brand systems custom websites marketing campaigns and
          digital products that help our clients capture attention build industry trust and scale confidently online.
        </p>

        {services.map(({ icon: Icon, ...service }) => (
          <article className={`service-card service-${service.visual}`} key={service.title}>
            <div className="service-visual" aria-hidden="true">
              {service.image ? (
                <img src={service.image} alt={`${service.title} service visual`} loading="lazy" decoding="async" />
              ) : (
                <>
                  <Icon className="service-floating-icon" size={28} />
                  <div className="visual-device">
                    <span></span>
                    <strong>VOREVIX</strong>
                    <i></i>
                  </div>
                </>
              )}
            </div>
            <div className="service-copy">
              <h3 className="service-title">
                <a href={service.href}>{service.title}</a>
              </h3>
              <p>{service.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
