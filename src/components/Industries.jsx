import {
  BriefcaseBusiness,
  HardHat,
  Home,
  PaintbrushVertical,
  Shirt,
  PlaneTakeoff,
  ShoppingCart,
  Utensils,
} from "lucide-react";
import "./Industries.css";

const industries = [
  {
    title: "Real Estate",
    desc: "Lead funnels, landing pages and campaigns for property projects.",
    icon: Home,
  },
  {
    title: "Restaurants",
    desc: "Branding, menus, local ads and social media systems for food brands.",
    icon: Utensils,
  },
  {
    title: "Ecommerce",
    desc: "Conversion-focused stores, product pages and retargeting flows.",
    icon: ShoppingCart,
  },
  {
    title: "Fashion",
    desc: "Premium brand identity, launch campaigns and content direction.",
    icon: Shirt,
  },
  {
    title: "Beauty & Cosmetics",
    desc: "Visual storytelling, social commerce and trust-building campaigns.",
    icon: PaintbrushVertical,
  },
  {
    title: "Tours & Travel",
    desc: "Booking-focused websites, SEO and destination marketing assets.",
    icon: PlaneTakeoff,
  },
  {
    title: "Construction",
    desc: "Corporate profiles, project showcases and lead generation systems.",
    icon: HardHat,
  },
  {
    title: "Custom Software",
    desc: "ERP, CRM, dashboards and workflow tools for operational growth.",
    icon: BriefcaseBusiness,
  },
];

export default function Industries() {
  return (
    <section className="industries-section">
      <div className="industries-header">
        <span>Industries</span>
        <h2>Growth systems built for every market.</h2>
        <p>
          Vorevix adapts strategy, design, marketing and technology to the way
          your industry sells, serves and scales.
        </p>
      </div>

      <div className="industries-grid">
        {industries.map(({ icon: Icon, ...item }, index) => (
          <div className="industry-card" key={item.title}>
            <div className="industry-top">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <Icon size={26} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
