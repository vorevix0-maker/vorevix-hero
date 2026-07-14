import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyVorevix from "./components/WhyVorevix";
import Process from "./components/Process";
import Team from "./components/Team";
import ConversionStatement from "./components/ConversionStatement";
import Pricing from "./components/Pricing";
import Insights from "./components/Insights";
import GrowthProcess from "./components/GrowthProcess";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BlogDashboard from "./components/BlogDashboard";
import PortfolioPage from "./components/PortfolioPage";
import PageAnimations from "./components/PageAnimations";
import SEO from "./components/SEO";
import LegalPage from "./components/LegalPage";
import SeoContentPage from "./components/SeoContentPage";
import HomepageSeoContent from "./components/HomepageSeoContent";
import ArchitecturePage from "./components/ArchitecturePage";
import { architecturePages } from "./architecturePages";
import WebDevelopmentPage from "./components/WebDevelopmentPage";
import WebDesignPage from "./components/WebDesignPage";
import { webDevelopmentFaqs } from "./webDevelopmentFaqs";

const siteUrl = "https://www.vorevix.com";
const logoUrl = `${siteUrl}/logo.png`;
const homeTitle =
  "Vorevix | Web Development, SEO & Digital Branding Agency";
const homeDescription =
  "Grow with Vorevix web design, web development and SEO services for ambitious businesses across Australia, New Zealand and the UAE. Book a consultation.";
const homeCanonical = `${siteUrl}/`;
const portfolioTitle = "Portfolio | Vorevix";
const portfolioDescription =
  "See Vorevix web, branding and digital marketing projects, with practical case studies showing creative execution, measurable results and business growth.";
const portfolioCanonical = `${siteUrl}/portfolio`;
const brandDescription =
  "Vorevix is a digital agency offering web development, SEO, UI/UX design, branding, and digital marketing services.";

const defaultOpenGraph = {
  type: "website",
  siteName: "Vorevix",
  image: logoUrl,
  imageAlt: "Vorevix logo",
};

function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function serviceSchema(name, description, url) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Vorevix",
      url: siteUrl,
    },
    areaServed: ["Australia", "New Zealand", "United Arab Emirates", "Pakistan"],
  };
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vorevix",
  url: siteUrl,
  logo: logoUrl,
  description: brandDescription,
  areaServed: ["Australia", "New Zealand", "United Arab Emirates", "Pakistan"],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61589562344260",
    "https://www.instagram.com/vorevix.io",
    "https://www.linkedin.com/company/vorevix/",
    "https://www.tiktok.com/@vorevix.io",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vorevix",
  url: siteUrl,
  description: brandDescription,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vorevix",
  url: siteUrl,
  logo: logoUrl,
  image: logoUrl,
  description: brandDescription,
  email: "contact@vorevix.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mansehra",
    addressCountry: "PK",
  },
  areaServed: ["Australia", "New Zealand", "United Arab Emirates", "Pakistan"],
};

const services = [
  {
    path: "/services/web-development",
    title: "Web Development Services | Vorevix",
    description:
      "Launch a fast, scalable and responsive business website with Vorevix. Get conversion-focused web development built for performance and future growth.",
    h1: "Web Development Services",
    body:
      "Build fast, secure, and conversion-focused websites for your business with Vorevix. Our web development work is structured for performance, usability, SEO, and long-term scalability.",
    serviceName: "Web Development Services",
    sections: [
      {
        title: "Who This Service Is For",
        body: "This service is for startups, service businesses, ecommerce brands, and growing companies that need a website that looks professional, loads quickly, and supports real business goals. Vorevix focuses on clear page structure, responsive design, search-friendly foundations, and user journeys that make it easier for visitors to understand your offer and contact your team.",
      },
      {
        title: "What We Build",
        body: "We plan and build modern business websites, landing pages, portfolio sites, lead generation pages, and custom web interfaces. Each project is shaped around your content, brand direction, target audience, and conversion goals. The result is a site that is easier to manage, easier to crawl, and easier for customers to trust.",
      },
    {
      title: "Process and Benefits",
      body: "Our web development process covers discovery, planning, design direction, development, testing, and launch support. We pay attention to mobile responsiveness, technical performance, clean navigation, metadata, image handling, and the details that help a website feel reliable. After launch, your website can become the foundation for SEO, marketing campaigns, automation, and future service pages.",
    },
    {
      title: "Next Step",
      body: "If you are not sure whether you need a new website or improvements to your current one, Vorevix can help review your goals, audience, content, and technical gaps. From there, we can recommend a practical development path and connect the website with your SEO, branding, portfolio, and contact strategy.",
    },
    ],
  },
  {
    path: "/services/seo-services",
    title: "SEO Services | Vorevix",
    description:
      "Grow qualified organic traffic with Vorevix technical SEO, on-page optimization and keyword strategy designed to improve rankings, visibility and leads.",
    h1: "SEO Services",
    body:
      "Improve search visibility with technical SEO, on-page optimization, keyword strategy, content planning, and performance-focused recommendations built around sustainable organic growth.",
    serviceName: "SEO Services",
    sections: [
      {
        title: "Who This Service Is For",
        body: "SEO services are useful for businesses that want more qualified organic traffic and a stronger presence on Google without relying only on paid ads. Vorevix helps companies improve technical crawlability, page-level relevance, metadata quality, internal linking, and content structure so search engines can understand the website more clearly.",
      },
      {
        title: "What We Improve",
        body: "Our SEO work can include technical audits, on-page optimization, keyword mapping, title and description improvements, heading reviews, image alt text, sitemap checks, schema markup, and content recommendations. We focus on practical improvements that support both users and search engines instead of keyword stuffing or shortcuts.",
      },
    {
      title: "Process and Benefits",
      body: "The process starts with understanding your services, audience, competitors, and existing website issues. From there, we prioritize fixes that can improve crawlability, indexability, page clarity, and conversion paths. A stronger SEO foundation helps your website become easier to discover, easier to navigate, and better prepared for future regional SEO campaigns.",
    },
    {
      title: "Next Step",
      body: "If your website is being crawled but not performing well, Vorevix can help identify whether the issue is technical structure, weak metadata, thin content, poor internal linking, unclear service pages, or missing schema. The goal is to create a clean SEO foundation before scaling content into new regions.",
    },
    ],
  },
  {
    path: "/services/ui-ux-design",
    title: "UI/UX Design Services | Vorevix",
    description:
      "Turn complex journeys into intuitive interfaces with Vorevix UI/UX design, improving usability, engagement and conversions across web and mobile products.",
    h1: "UI/UX Design Services",
    body:
      "Create clean, modern, and user-friendly digital experiences that help visitors understand your offer, trust your brand, and take the next step with confidence.",
    serviceName: "UI/UX Design Services",
    sections: [
      {
        title: "Who This Service Is For",
        body: "UI/UX design is for businesses that want their website, app, dashboard, or digital product to feel clear, modern, and easy to use. Vorevix designs interfaces for users who need to scan information quickly, compare options, take action, and feel confident that they are dealing with a credible brand.",
      },
      {
        title: "What We Design",
        body: "We work on website interfaces, landing pages, product flows, dashboard screens, mobile layouts, and conversion-focused page structures. The design process considers hierarchy, spacing, content clarity, responsive behavior, navigation, forms, calls to action, and trust signals so the interface supports the business goal instead of just looking attractive.",
      },
    {
      title: "Process and Benefits",
      body: "Our UI/UX process starts with goals, users, and page priorities. We then organize content, create layouts, refine visual direction, and prepare designs that can move smoothly into development. Strong UI/UX helps reduce confusion, improve engagement, support conversions, and make your brand feel more professional across every digital touchpoint.",
    },
    {
      title: "Next Step",
      body: "If your current website or app feels difficult to use, Vorevix can help review page hierarchy, calls to action, visual consistency, mobile behavior, and form flow. These improvements can support stronger SEO engagement signals, clearer customer journeys, and better lead generation.",
    },
    ],
  },
  {
    path: "/services/branding",
    title: "Branding Services | Vorevix",
    description:
      "Build a distinctive brand identity with Vorevix through strategic positioning, cohesive visual systems and practical brand strategy that supports growth.",
    h1: "Branding Services",
    body:
      "Build a professional brand identity with visual systems, logo direction, messaging foundations, and brand strategy that help your business stand out clearly.",
    serviceName: "Branding Services",
    sections: [
      {
        title: "Who This Service Is For",
        body: "Branding services are for businesses that need a clearer identity, stronger first impression, or more consistent presentation across digital channels. Vorevix helps new and growing brands define how they should look, sound, and feel so customers can recognize them and understand their value faster.",
      },
      {
        title: "What We Create",
        body: "Branding work can include logo direction, visual identity, color systems, typography guidance, brand voice, social media styling, and practical design assets for websites and campaigns. The goal is to create a brand system that looks professional and can be used consistently by your team.",
      },
    {
      title: "Process and Benefits",
      body: "We begin by understanding your audience, offer, competitors, and positioning. From there, we develop a visual direction and supporting assets that make the brand easier to remember and easier to trust. A strong brand identity improves website presentation, marketing consistency, social content, and long-term customer recognition.",
    },
    {
      title: "Next Step",
      body: "If your business has a logo but no clear identity system, Vorevix can help turn scattered visuals into a more consistent brand presence. That foundation can then support website design, service pages, social media campaigns, portfolios, proposals, and future digital marketing activity.",
    },
    ],
  },
];

const servicesPage = {
  path: "/services",
  title: "Digital Services | Vorevix",
  description:
    "Choose integrated web development, SEO, UI/UX design, branding and digital marketing services from Vorevix to attract customers and accelerate growth.",
  h1: "Digital Services for Growing Businesses",
  body:
    "Explore Vorevix digital services across web development, SEO, UI/UX design, branding, and digital marketing solutions for growing businesses. Our services are planned to work together, so your website, brand identity, content, and marketing channels support the same business goals instead of feeling disconnected.",
  sections: [
    {
      title: "What Vorevix Offers",
      body: "Vorevix brings together web development, SEO, UI/UX design, branding, and digital marketing for businesses that want a stronger online presence. We help clients create professional websites, clearer service pages, search-friendly content structures, visual identity systems, and marketing assets that can support long-term growth.",
    },
    {
      title: "Who Our Services Help",
      body: "Our services are useful for startups, local businesses, ecommerce brands, service providers, and growing companies that need practical digital systems. Whether you are launching a new brand, improving an existing website, or preparing for SEO campaigns in future regions, we focus on clear foundations first.",
    },
    {
      title: "How the Work Connects",
      body: "A strong digital presence is not only one page or one campaign. Your brand identity should support your website, your website should support your SEO, and your content should support customer trust. Vorevix connects these pieces through planning, design, development, optimization, and ongoing improvement.",
    },
    ...services.map((service) => ({
      title: service.h1,
      body: service.description,
      href: service.path,
    })),
  ],
};

const aboutPage = {
  path: "/about",
  title: "About Vorevix | Digital Agency",
  description:
    "Meet Vorevix, a digital agency combining strategy, design, development and SEO to help ambitious international businesses compete and grow online.",
  h1: "About Vorevix",
  body:
    "Vorevix is a digital agency helping businesses build a stronger online presence through design, development, SEO, branding, and digital marketing systems.",
  sections: [
    {
      title: "What Vorevix Offers",
      body: "Vorevix helps businesses turn ideas into practical digital systems. Our work covers websites, SEO foundations, UI/UX design, brand identity, digital marketing, automation, and software planning. We focus on clean execution, clear communication, and digital assets that support measurable business goals.",
    },
    {
      title: "Who We Work With",
      body: "We work with ambitious businesses that want a more professional online presence and a clearer path for growth. This includes startups, service providers, product brands, ecommerce projects, and teams preparing to expand into new markets. Our approach is flexible, but the priority is always the same: make the brand easier to understand, trust, and contact.",
    },
    {
      title: "How We Approach Projects",
      body: "Every project starts with understanding the business, audience, offer, and current digital gaps. From there, we plan the right mix of design, development, SEO, branding, and marketing support. This helps avoid disconnected work and gives each page, campaign, and asset a clearer role in the customer journey.",
    },
    {
      title: "What Makes the Work Practical",
      body: "We keep the focus on useful outcomes: clearer pages, stronger calls to action, better technical foundations, consistent brand presentation, and content that supports real customer decisions. This makes the website easier to maintain, easier to optimize, and easier to expand when new service or regional pages are added later.",
    },
  ],
};

const contactPage = {
  path: "/contact",
  title: "Contact Vorevix | Start Your Digital Project",
  description:
    "Request a consultation with Vorevix to discuss your website, SEO, UI/UX, branding or digital marketing goals and plan the right path to sustainable growth.",
  h1: "Contact Vorevix",
  body:
    "Contact Vorevix to discuss your website, SEO, branding, UI/UX, or digital marketing project. Share your goals and our team will help you plan the next step.",
  sections: [
    {
      title: "Start Your Digital Project With Vorevix",
      body: "If you are planning a new website, improving an existing brand, fixing SEO issues, or preparing a digital marketing campaign, you can contact Vorevix to discuss the next practical step. Share your goals, current challenges, target audience, and timeline so our team can understand what kind of support will be most useful.",
    },
    {
      title: "What You Can Contact Us For",
      body: "You can reach out for web development, SEO services, UI/UX design, branding, digital marketing, automation planning, software solutions, or a complete digital growth system. We can also review whether your current website needs technical improvements, clearer service pages, better calls to action, or stronger content structure.",
    },
    {
      title: "How We Help Businesses Grow Online",
      body: "Our process is built around clarity. We identify what your business offers, who you want to reach, and what your website or marketing system needs to do. Then we help plan digital assets that improve trust, search visibility, user experience, lead generation, and long-term scalability without overcomplicating the project.",
    },
    {
      title: "What Happens After You Reach Out",
      body: "After you contact us, we review your message and look at the most relevant next step. That may be a website plan, an SEO review, a branding direction, a UI/UX improvement, or a broader digital strategy. The first goal is to understand the problem clearly before suggesting a solution.",
    },
  ],
};

const legalPages = {
  "/privacy-policy": {
    type: "privacy",
    title: "Privacy Policy | Vorevix",
    description:
      "Read the Vorevix Privacy Policy to learn how information submitted through our website, contact forms and agency services is collected, used and protected.",
    canonical: `${siteUrl}/privacy-policy`,
  },
  "/terms-and-conditions": {
    type: "terms",
    title: "Terms & Conditions | Vorevix",
    description:
      "Review the Vorevix Terms and Conditions covering website use, agency services, project responsibilities, payments, intellectual property and client agreements.",
    canonical: `${siteUrl}/terms-and-conditions`,
  },
};

function App() {
  const pathname = window.location.pathname;
  const legalPage = legalPages[window.location.pathname];
  const servicePage = services.find((page) => page.path === pathname);
  const architecturePage = architecturePages.find((page) => page.path === pathname);

  if (pathname === "/dashboard") {
    return (
      <>
        <SEO title="Dashboard | Vorevix" robots="noindex, nofollow" />
        <BlogDashboard />
      </>
    );
  }

  if (pathname === "/services/web-design") {
    const canonical = `${siteUrl}/services/web-design`;
    const title = "7 Powerful Web Design Services for Business and eCommerce";
    const description =
      "Vorevix provides web design services for responsive business websites, eCommerce stores and custom digital experiences built around your brand and users.";

    return (
      <>
        <SEO
          title={title}
          description={description}
          canonical={canonical}
          robots="index, follow"
          openGraph={{
            title,
            description,
            url: canonical,
            ...defaultOpenGraph,
          }}
          twitter={{
            card: "summary_large_image",
            title,
            description,
            image: logoUrl,
            imageAlt: "Vorevix logo",
          }}
          schema={[
            serviceSchema("Web Design Services", description, canonical),
            breadcrumbSchema([
              { name: "Home", url: `${siteUrl}/` },
              { name: "Services", url: `${siteUrl}/services` },
              { name: "Web Design", url: canonical },
            ]),
          ]}
        />
        <Header />
        <WebDesignPage />
        <Footer />
      </>
    );
  }

  if (architecturePage) {
    const canonical = `${siteUrl}${architecturePage.path}`;
    const breadcrumbItems = architecturePage.breadcrumbs.map((item) => ({
      name: item.label,
      url: item.href ? `${siteUrl}${item.href === "/" ? "/" : item.href}` : canonical,
    }));

    return (
      <>
        <SEO
          title={architecturePage.title}
          description={architecturePage.description}
          canonical={canonical}
          robots="index, follow"
          openGraph={{
            title: architecturePage.title,
            description: architecturePage.description,
            url: canonical,
            ...defaultOpenGraph,
          }}
          twitter={{
            card: "summary_large_image",
            title: architecturePage.title,
            description: architecturePage.description,
            image: logoUrl,
            imageAlt: "Vorevix logo",
          }}
          schema={breadcrumbSchema(breadcrumbItems)}
        />
        <Header />
        <ArchitecturePage page={architecturePage} />
        <Footer />
      </>
    );
  }

  if (pathname === "/portfolio") {
    return (
      <>
        <SEO
          title={portfolioTitle}
          description={portfolioDescription}
          canonical={portfolioCanonical}
          robots="index, follow"
          openGraph={{
            title: portfolioTitle,
            description: portfolioDescription,
            url: portfolioCanonical,
            ...defaultOpenGraph,
          }}
          twitter={{
            card: "summary_large_image",
            title: portfolioTitle,
            description: portfolioDescription,
            image: logoUrl,
            imageAlt: "Vorevix logo",
          }}
          schema={breadcrumbSchema([
            { name: "Home", url: `${siteUrl}/` },
            { name: "Portfolio", url: portfolioCanonical },
          ])}
        />
        <PageAnimations />
        <Header />
        <PortfolioPage />
        <Footer />
      </>
    );
  }

  if (legalPage) {
    return (
      <>
        <SEO
          title={legalPage.title}
          description={legalPage.description}
          canonical={legalPage.canonical}
          robots="index, follow"
          openGraph={{
            title: legalPage.title,
            description: legalPage.description,
            url: legalPage.canonical,
            ...defaultOpenGraph,
          }}
          twitter={{
            card: "summary_large_image",
            title: legalPage.title,
            description: legalPage.description,
            image: logoUrl,
            imageAlt: "Vorevix logo",
          }}
          schema={breadcrumbSchema([
            { name: "Home", url: `${siteUrl}/` },
            { name: legalPage.title.replace(" | Vorevix", ""), url: legalPage.canonical },
          ])}
        />
        <Header />
        <LegalPage type={legalPage.type} />
        <Footer />
      </>
    );
  }

  if (pathname === servicesPage.path) {
    const canonical = `${siteUrl}${servicesPage.path}`;

    return (
      <>
        <SEO
          title={servicesPage.title}
          description={servicesPage.description}
          canonical={canonical}
          robots="index, follow"
          openGraph={{
            title: servicesPage.title,
            description: servicesPage.description,
            url: canonical,
            ...defaultOpenGraph,
          }}
          twitter={{
            card: "summary_large_image",
            title: servicesPage.title,
            description: servicesPage.description,
            image: logoUrl,
            imageAlt: "Vorevix logo",
          }}
          schema={breadcrumbSchema([
            { name: "Home", url: `${siteUrl}/` },
            { name: "Services", url: canonical },
          ])}
        />
        <Header />
        <SeoContentPage
          eyebrow="Services"
          title={servicesPage.h1}
          description={servicesPage.body}
          sections={servicesPage.sections}
          links={[
            ...services.map((service) => ({ label: service.h1, href: service.path })),
            { label: "View Portfolio", href: "/portfolio" },
            { label: "Contact Vorevix", href: "/contact" },
          ]}
        />
        <Footer />
      </>
    );
  }

  if (pathname === "/services/web-development") {
    const canonical = `${siteUrl}/services/web-development`;
    const title = "Web Development Services for Business, eCommerce and SaaS";
    const description = "Vorevix provides web development services for custom websites, eCommerce stores, web applications, SaaS platforms, integrations and ongoing support.";

    return (
      <>
        <SEO
          title={title}
          description={description}
          canonical={canonical}
          robots="index, follow"
          openGraph={{
            title,
            description,
            url: canonical,
            ...defaultOpenGraph,
          }}
          twitter={{
            card: "summary_large_image",
            title,
            description,
            image: logoUrl,
            imageAlt: "Vorevix logo",
          }}
          schema={[
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: title,
              description,
              url: canonical,
              isPartOf: {
                "@type": "WebSite",
                name: "Vorevix",
                url: siteUrl,
              },
            },
            serviceSchema("Web Development Services", description, canonical),
            breadcrumbSchema([
              { name: "Home", url: `${siteUrl}/` },
              { name: "Services", url: `${siteUrl}/services` },
              { name: "Web Development", url: canonical },
            ]),
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: webDevelopmentFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]}
        />
        <Header />
        <WebDevelopmentPage />
        <Footer />
      </>
    );
  }

  if (servicePage) {
    const canonical = `${siteUrl}${servicePage.path}`;

    return (
      <>
        <SEO
          title={servicePage.title}
          description={servicePage.description}
          canonical={canonical}
          robots="index, follow"
          openGraph={{
            title: servicePage.title,
            description: servicePage.description,
            url: canonical,
            ...defaultOpenGraph,
          }}
          twitter={{
            card: "summary_large_image",
            title: servicePage.title,
            description: servicePage.description,
            image: logoUrl,
            imageAlt: "Vorevix logo",
          }}
          schema={[
            serviceSchema(servicePage.serviceName, servicePage.description, canonical),
            breadcrumbSchema([
              { name: "Home", url: `${siteUrl}/` },
              { name: "Services", url: `${siteUrl}/services` },
              { name: servicePage.h1, url: canonical },
            ]),
          ]}
        />
        <Header />
        <SeoContentPage
          eyebrow="Service"
          title={servicePage.h1}
          description={servicePage.body}
          sections={servicePage.sections}
          links={[
            { label: "All Services", href: "/services" },
            { label: "View Portfolio", href: "/portfolio" },
            { label: "Contact Vorevix", href: "/contact" },
          ]}
        />
        <Footer />
      </>
    );
  }

  if (pathname === aboutPage.path) {
    const canonical = `${siteUrl}${aboutPage.path}`;

    return (
      <>
        <SEO
          title={aboutPage.title}
          description={aboutPage.description}
          canonical={canonical}
          robots="index, follow"
          openGraph={{
            title: aboutPage.title,
            description: aboutPage.description,
            url: canonical,
            ...defaultOpenGraph,
          }}
          twitter={{
            card: "summary_large_image",
            title: aboutPage.title,
            description: aboutPage.description,
            image: logoUrl,
            imageAlt: "Vorevix logo",
          }}
          schema={breadcrumbSchema([
            { name: "Home", url: `${siteUrl}/` },
            { name: "About", url: canonical },
          ])}
        />
        <Header />
        <SeoContentPage
          eyebrow="About"
          title={aboutPage.h1}
          description={aboutPage.body}
          sections={aboutPage.sections}
          links={[
            { label: "Explore Services", href: "/services" },
            { label: "Contact Vorevix", href: "/contact" },
          ]}
        />
        <Footer />
      </>
    );
  }

  if (pathname === contactPage.path) {
    const canonical = `${siteUrl}${contactPage.path}`;

    return (
      <>
        <SEO
          title={contactPage.title}
          description={contactPage.description}
          canonical={canonical}
          robots="index, follow"
          openGraph={{
            title: contactPage.title,
            description: contactPage.description,
            url: canonical,
            ...defaultOpenGraph,
          }}
          twitter={{
            card: "summary_large_image",
            title: contactPage.title,
            description: contactPage.description,
            image: logoUrl,
            imageAlt: "Vorevix logo",
          }}
          schema={[
            localBusinessSchema,
            breadcrumbSchema([
              { name: "Home", url: `${siteUrl}/` },
              { name: "Contact", url: canonical },
            ]),
          ]}
        />
        <Header />
        <SeoContentPage
          eyebrow="Contact"
          title={contactPage.h1}
          description={contactPage.body}
          sections={contactPage.sections}
          links={[
            { label: "Explore Services", href: "/services" },
            { label: "Email Vorevix", href: "mailto:contact@vorevix.com" },
          ]}
        />
        <Footer />
      </>
    );
  }

  if (pathname === "/") {
    return (
      <>
        <SEO
          title={homeTitle}
          description={homeDescription}
          canonical={homeCanonical}
          robots="index, follow"
          openGraph={{
            title: homeTitle,
            description: homeDescription,
            url: homeCanonical,
            ...defaultOpenGraph,
          }}
          twitter={{
            card: "summary_large_image",
            title: homeTitle,
            description: homeDescription,
            image: logoUrl,
            imageAlt: "Vorevix logo",
          }}
          schema={[organizationSchema, websiteSchema]}
        />
        <Header />
        <main>
          <PageAnimations />
          <Hero />
          <HomepageSeoContent />
          <WhyVorevix />
          <Services />
          <Process />
          <Team />
          <ConversionStatement />
          <GrowthProcess />
          <Pricing />
          <Insights />
          <Contact />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO
        title="Page Not Found | Vorevix"
        description="The page you are looking for could not be found. Return to Vorevix home, services, or contact page."
        canonical={`${siteUrl}${pathname}`}
        noindex
        openGraph={{
          title: "Page Not Found | Vorevix",
          description:
            "The page you are looking for could not be found. Return to Vorevix home, services, or contact page.",
          url: `${siteUrl}${pathname}`,
          ...defaultOpenGraph,
        }}
        twitter={{
          card: "summary_large_image",
          title: "Page Not Found | Vorevix",
          description:
            "The page you are looking for could not be found. Return to Vorevix home, services, or contact page.",
          image: logoUrl,
          imageAlt: "Vorevix logo",
        }}
      />
      <Header />
      <SeoContentPage
        eyebrow="404"
        title="Page Not Found"
        description="The page you are looking for could not be found. Return to Vorevix home, services, or contact page."
        links={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <Footer />
    </>
  );
}

export default App;
