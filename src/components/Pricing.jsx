import { ArrowRight, Check } from "lucide-react";
import "./Pricing.css";

const plans = [
  {
    name: "Launch",
    price: "$49",
    desc: "Designed for startups and small businesses ready to establish a credible and professional online presence.",
    features: [
      "8 Custom Social Media Posts",
      "Basic Graphic Design",
      "Facebook & Instagram Management",
      "Monthly performance report",
      "WhatsApp Support",
    ],
  },
  {
    name: "Growth",
    price: "$79",
    featured: true,
    desc: "Perfect for expanding businesses aiming to increase digital visibility and customer engagement.",
    features: [
      "12 Custom Social Media Posts",
      "Advanced Graphic Design",
           " SEO-Optimized Captions & Hashtags",
      "Facebook & Instagram Management",
      "Basic Meta Ads Management",
      "Monthly performance report",
      "Priority Support",
    ],
  },
  {
    name: "Scale",
    price: "$149",
    desc: "Built for established businesses highly focused on aggressive lead generation and continuous market growth.",
    features: [
      "20 Custom Social Media Posts",
      "Facebook,Instagram & Tiktok Management",
     " Content Strategy & Monthly Content Calendar",
      "Meta Ads Management",
      "Lead Generation Support",
      "Monthly Strategy Session",
     " SEO-Optimized Captions & Hashtags",
      "Competitor Analysis",
     " Monthly Strategy Consultation",
      "Detailed Performance Report",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-wrap">
        <div className="pricing-heading">
          <h2 className="pricing-title">
            <span>Choose The Perfect Plan</span>
            <span>That's Right For Your Needs</span>
          </h2>
          <p>( Our Pricing Plan )</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className="pricing-card" key={plan.name}>
              <h3 className="pricing-card-title">
                {plan.name}
                {plan.featured && <span aria-label="Featured plan">⭐</span>}
              </h3>
              <div className="price-line">
                <strong>{plan.price}</strong>
                <span>/ month</span>
              </div>
              <p>{plan.desc}</p>

              <a href="#contact" className="pricing-cta">
            Start Your Journey
                <span>
                  <ArrowRight size={24} />
                </span>
              </a>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
