import "./Team.css";

const teamMembers = [
  {
    name: "Aqib Hussian Shah",
    role: "Founder & CEO, Marketing Director",
    image: "/team-aqib-founder.png",
    className: "team-founder",
  },
  {
    name: "Ayan Iqbal",
    role: "Branding Specialist",
    image: "/team-branding.png",
    className: "team-creative",
  },
  {
    name: "Zulkifal Hussain",
    role: "Web & App Developer",
    image: "/team-web-app.png",
    className: "team-developer",
  },
  {
    name: "Obaidullah",
    role: "Social Media Marketing Specialist",
    image: "/team-social-media.png",
    className: "team-designer",
  },
  {
    name: "Zohaib Khan",
    role: "SEO Optimization Specialist",
    image: "/team-seo.png",
    className: "team-marketer",
  },
];

export default function Team() {
  return (
    <section className="team-section" id="team">
      <div className="team-wrap">
        <div className="team-kicker">( Our Team )</div>
        <h2
          className="team-title"
          aria-label="The Creative Experts Behind Vorevix"
        >
          <span>The Creative Experts </span>
          <span>Behind Vorevix</span>
        </h2>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className={`team-card ${member.className}`} key={member.name}>
              <div className="team-photo">
                <img src={member.image} alt={member.name} loading="lazy" decoding="async" />
              </div>
              <h3 className="team-card-title">{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
