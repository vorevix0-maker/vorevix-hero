import { useEffect } from "react";

const SECTION_SELECTORS = [
  ".hero-section",
  ".why-section",
  ".services-section",
  ".process-section",
  ".team-section",
  ".conversion-section",
  ".growth-process-section",
  ".pricing-section",
  ".insights-section",
  ".contact-section",
  ".portfolio-page section",
  ".site-footer",
].join(",");

const ITEM_SELECTORS = [
  ".service-card",
  ".process-card",
  ".team-card",
  ".pricing-card",
  ".insight-card",
  ".portfolio-card",
  ".brand-choice-card",
  ".portfolio-work-card",
  ".portfolio-asset-card",
  ".portfolio-mobile-card",
  ".footer-column",
].join(",");

const TILT_SELECTORS = [
  ".service-card",
  ".process-card",
  ".team-card",
  ".pricing-card",
  ".insight-card",
  ".portfolio-card",
  ".brand-choice-card",
  ".portfolio-work-card",
  ".portfolio-asset-card",
].join(",");

function applyStagger(elements) {
  let groupIndex = 0;
  let lastParent = null;

  elements.forEach((element) => {
    if (element.parentElement !== lastParent) {
      groupIndex = 0;
      lastParent = element.parentElement;
    }

    element.style.setProperty("--reveal-delay", `${Math.min(groupIndex * 80, 420)}ms`);
    groupIndex += 1;
  });
}

function PageAnimations() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(document.querySelectorAll(SECTION_SELECTORS));
    const items = Array.from(document.querySelectorAll(ITEM_SELECTORS));
    const animatedElements = [...sections, ...items];
    const tiltElements = Array.from(document.querySelectorAll(TILT_SELECTORS));

    document.documentElement.classList.add("animations-ready");
    applyStagger(items);

    const updatePointerGlow = (event) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    const updateScrollProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${Math.min(Math.max(progress, 0), 1)}`);
    };

    const cleanupTilt = tiltElements.map((element) => {
      const handleMove = (event) => {
        const rect = element.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

        element.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
        element.style.setProperty("--tilt-y", `${(x * 5).toFixed(2)}deg`);
        element.style.setProperty("--shine-x", `${event.clientX - rect.left}px`);
        element.style.setProperty("--shine-y", `${event.clientY - rect.top}px`);
      };

      const handleLeave = () => {
        element.style.setProperty("--tilt-x", "0deg");
        element.style.setProperty("--tilt-y", "0deg");
      };

      element.addEventListener("pointermove", handleMove);
      element.addEventListener("pointerleave", handleLeave);

      return () => {
        element.removeEventListener("pointermove", handleMove);
        element.removeEventListener("pointerleave", handleLeave);
      };
    });

    window.addEventListener("pointermove", updatePointerGlow, { passive: true });
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress();

    if (reduceMotion || !("IntersectionObserver" in window)) {
      animatedElements.forEach((element) => element.classList.add("is-visible"));
      return () => {
        window.removeEventListener("pointermove", updatePointerGlow);
        window.removeEventListener("scroll", updateScrollProgress);
        cleanupTilt.forEach((cleanup) => cleanup());
      };
    }

    animatedElements.forEach((element) => element.classList.add("reveal-on-scroll"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", updatePointerGlow);
      window.removeEventListener("scroll", updateScrollProgress);
      cleanupTilt.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <>
      <span className="scroll-progress" aria-hidden="true" />
      <span className="pointer-glow" aria-hidden="true" />
    </>
  );
}

export default PageAnimations;
