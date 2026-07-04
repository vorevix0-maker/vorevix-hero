import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./VorevixOS.css";

gsap.registerPlugin(ScrollTrigger);

const modules = [
  {
    key: "boot",
    label: "BOOT",
    title: "VOREVIX OS",
    sub: "The operating system for digital business growth.",
  },
  {
    key: "marketing",
    label: "MARKETING",
    title: "Loading Marketing Engine",
    sub: "SEO, Meta Ads, Google Ads and social media growth systems.",
  },
  {
    key: "website",
    label: "WEBSITE",
    title: "Launching Website System",
    sub: "Premium landing pages, conversion flow and UI experiences.",
  },
  {
    key: "ai",
    label: "AI AUTOMATION",
    title: "Activating AI Automation",
    sub: "Smart workflows that reduce manual work and increase speed.",
  },
  {
    key: "crm",
    label: "CRM",
    title: "Connecting CRM Pipeline",
    sub: "Lead capture, follow-ups, proposals and sales tracking.",
  },
  {
    key: "analytics",
    label: "ANALYTICS",
    title: "Analyzing Business Growth",
    sub: "Numbers, insights and decisions in one dashboard.",
  },
  {
    key: "final",
    label: "COMPLETE",
    title: "Your Business. One System.",
    sub: "Powered by Vorevix.",
  },
];

export default function VorevixOS() {
  const pageRef = useRef(null);
  const screenRef = useRef(null);
  const dashboardRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".os-card");
      const lines = gsap.utils.toArray(".os-line");
      const windows = gsap.utils.toArray(".os-window");

      gsap.set(cards, { y: 40, opacity: 0, scale: 0.92 });
      gsap.set(lines, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(windows, { y: 80, opacity: 0, scale: 0.9 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          onUpdate: (self) => {
            setActive(Math.min(6, Math.floor(self.progress * 7)));
          },
        },
      });

      tl.fromTo(
        ".os-logo",
        { scale: 0.7, opacity: 0, rotateX: 25 },
        { scale: 1, opacity: 1, rotateX: 0, duration: 1 }
      )
        .to(".boot-loader span", {
          width: "100%",
          duration: 1.1,
        })
        .to(screenRef.current, {
          scale: 0.82,
          y: -80,
          borderRadius: 36,
          duration: 1.2,
        })
        .to(
          dashboardRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.8"
        )
        .to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 1,
        })
        .to(lines, {
          scaleX: 1,
          stagger: 0.12,
          duration: 0.8,
        })
        .to(windows, {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.18,
          duration: 1,
        })
        .to(".os-final", {
          opacity: 1,
          scale: 1,
          duration: 1,
        });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="os-page">
      <section className="os-fixed">
        <div ref={screenRef} className="os-screen">
          <div className="os-topbar">
            <div className="os-dots">
              <i></i>
              <i></i>
              <i></i>
            </div>

            <div className="os-url">vorevix.os/business-growth</div>

            <div className="os-status">ONLINE</div>
          </div>

          <div className="os-boot">
            <div className="os-logo">
              VORE<span>VIX</span>
            </div>

            <p>{modules[active].sub}</p>

            <div className="boot-loader">
              <span></span>
            </div>

            <b>{modules[active].label}</b>
          </div>
        </div>

        <div ref={dashboardRef} className="os-dashboard">
          <div className="os-left">
            <div className="os-pill">BUSINESS OPERATING SYSTEM</div>

            <h1>{modules[active].title}</h1>

            <p>{modules[active].sub}</p>

            <div className="os-progress">
              <span>{String(active + 1).padStart(2, "0")}</span>
              <i></i>
              <b>07</b>
            </div>
          </div>

          <div className="os-right">
            <div className="os-card main">
              <h3>Growth Core</h3>
              <strong>V</strong>
            </div>

            <div className="os-line line-1"></div>
            <div className="os-line line-2"></div>
            <div className="os-line line-3"></div>
            <div className="os-line line-4"></div>

            <div className="os-card card-1">
              <b>SEO</b>
              <span>Ranking System</span>
            </div>

            <div className="os-card card-2">
              <b>WEB</b>
              <span>Website Engine</span>
            </div>

            <div className="os-card card-3">
              <b>AI</b>
              <span>Automation Hub</span>
            </div>

            <div className="os-card card-4">
              <b>CRM</b>
              <span>Lead Pipeline</span>
            </div>
          </div>
        </div>

        <div className="os-windows">
          <div className="os-window">
            <h4>Marketing</h4>
            <p>Campaigns, creatives, ads and growth strategy.</p>
          </div>

          <div className="os-window">
            <h4>Website</h4>
            <p>Conversion-first pages with premium UI/UX.</p>
          </div>

          <div className="os-window">
            <h4>Automation</h4>
            <p>Follow-ups, CRM flows and AI-powered systems.</p>
          </div>
        </div>

        <div className="os-final">
          <h2>Your Business. One System.</h2>
          <p>Powered by Vorevix.</p>
          <button>Start Your Growth System</button>
        </div>
      </section>

      {modules.map((item) => (
        <section key={item.key} className="os-spacer"></section>
      ))}
    </main>
  );
}