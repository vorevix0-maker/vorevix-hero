import "./Portfolio.css";

const projects = [
  {
    title: "Real Estate Growth Funnel",
    category: "Real Estate",
    desc: "Website redesign, lead capture and paid campaign structure.",
  },
  {
    title: "Restaurant Brand Launch",
    category: "Food & Hospitality",
    desc: "Visual identity, menu design, social media and local ads.",
  },
  {
    title: "ERP Operations System",
    category: "Software",
    desc: "Custom workflow, CRM and reporting system for daily operations.",
  },
  {
    title: "Ecommerce Conversion Boost",
    category: "Ecommerce",
    desc: "Landing pages, product flow improvements and retargeting campaigns.",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-header">
        <span>Featured Work</span>

        <h2>
          Latest projects.
          <br />
          Powerful results.
        </h2>
      </div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <div className="portfolio-art">
              <i></i>
              <i></i>
              <i></i>
            </div>

            <div className="portfolio-content">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a href="#contact">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
