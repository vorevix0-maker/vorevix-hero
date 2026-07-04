import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProblemsSection.css";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  { number: "01", title: "No Leads", desc: "Your website exists but customers are not coming." },
  { number: "02", title: "Poor Branding", desc: "People see your business but don't remember it." },
  { number: "03", title: "Manual Operations", desc: "Daily tasks consume time and reduce productivity." },
  { number: "04", title: "No Growth System", desc: "Everything depends on the owner and nothing scales." },
];

export default function ProblemsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".problem-card", {
        y: 90,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".problems-grid",
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="problems-section" ref={sectionRef}>
      <div className="container">
        <span className="section-tag">Business Problems</span>

        <h2>
          YOUR BUSINESS IS BUSY.
          <br />
          BUT IS IT GROWING?
        </h2>

        <p className="section-subtitle">
          Most businesses struggle with the same growth challenges. Vorevix helps
          solve them through strategy, technology and automation.
        </p>

        <div className="problems-grid">
          {problems.map((item) => (
            <div className="problem-card" key={item.number}>
              <span className="problem-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}