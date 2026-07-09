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

const siteUrl = "https://www.vorevix.com";
const logoUrl = `${siteUrl}/logo.png`;
const homeTitle =
  "Vorevix | Web Development, SEO & Digital Branding Agency";
const homeDescription =
  "Vorevix helps businesses grow online with web development, SEO, UI/UX design, branding, and digital marketing services.";
const homeCanonical = `${siteUrl}/`;
const portfolioTitle = "Portfolio | Vorevix";
const portfolioDescription =
  "View Vorevix portfolio projects across web development, branding, UI/UX design, and digital growth solutions.";
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
      "Build fast, modern, and SEO-friendly websites with Vorevix web development services for businesses and startups.",
    h1: "Web Development Services",
    body:
      "Build fast, secure, and conversion-focused websites for your business with Vorevix. Our web development work is structured for performance, usability, SEO, and long-term scalability.",
    serviceName: "Web Development Services",
  },
  {
    path: "/services/seo-services",
    title: "SEO Services | Vorevix",
    description:
      "Improve your Google visibility with Vorevix SEO services including technical SEO, on-page SEO, keyword strategy, and content optimization.",
    h1: "SEO Services",
    body:
      "Improve search visibility with technical SEO, on-page optimization, keyword strategy, content planning, and performance-focused recommendations built around sustainable organic growth.",
    serviceName: "SEO Services",
  },
  {
    path: "/services/ui-ux-design",
    title: "UI/UX Design Services | Vorevix",
    description:
      "Create clean, modern, and user-friendly digital experiences with Vorevix UI/UX design services.",
    h1: "UI/UX Design Services",
    body:
      "Create clean, modern, and user-friendly digital experiences that help visitors understand your offer, trust your brand, and take the next step with confidence.",
    serviceName: "UI/UX Design Services",
  },
  {
    path: "/services/branding",
    title: "Branding Services | Vorevix",
    description:
      "Build a professional brand identity with Vorevix branding services including logo design, visual identity, and brand strategy.",
    h1: "Branding Services",
    body:
      "Build a professional brand identity with visual systems, logo direction, messaging foundations, and brand strategy that help your business stand out clearly.",
    serviceName: "Branding Services",
  },
];

const servicesPage = {
  path: "/services",
  title: "Digital Services | Vorevix",
  description:
    "Explore Vorevix digital services including web development, SEO, UI/UX design, branding, and digital marketing solutions.",
  h1: "Digital Services",
  body:
    "Explore Vorevix digital services across web development, SEO, UI/UX design, branding, and digital marketing solutions for growing businesses.",
  sections: services.map((service) => ({
    title: service.h1,
    body: service.description,
    href: service.path,
  })),
};

const aboutPage = {
  path: "/about",
  title: "About Vorevix | Digital Agency",
  description:
    "Learn about Vorevix, a digital agency helping businesses build stronger online presence through design, development, SEO, and branding.",
  h1: "About Vorevix",
  body:
    "Vorevix is a digital agency helping businesses build a stronger online presence through design, development, SEO, branding, and digital marketing systems.",
};

const contactPage = {
  path: "/contact",
  title: "Contact Vorevix | Start Your Digital Project",
  description:
    "Contact Vorevix to discuss your website, SEO, branding, UI/UX, or digital marketing project.",
  h1: "Contact Vorevix",
  body:
    "Contact Vorevix to discuss your website, SEO, branding, UI/UX, or digital marketing project. Share your goals and our team will help you plan the next step.",
};

const legalPages = {
  "/privacy-policy": {
    type: "privacy",
    title: "Privacy Policy | Vorevix",
    description:
      "Read the Vorevix Privacy Policy to learn how we collect, use and protect information shared through our website, forms and agency services.",
    canonical: `${siteUrl}/privacy-policy`,
  },
  "/terms-and-conditions": {
    type: "terms",
    title: "Terms & Conditions | Vorevix",
    description:
      "Read the Vorevix Terms & Conditions for website use, agency services, proposals, payments, intellectual property and project responsibilities.",
    canonical: `${siteUrl}/terms-and-conditions`,
  },
};

function App() {
  const pathname = window.location.pathname;
  const legalPage = legalPages[window.location.pathname];
  const servicePage = services.find((page) => page.path === pathname);

  if (pathname === "/dashboard") {
    return (
      <>
        <SEO title="Dashboard | Vorevix" robots="noindex, nofollow" />
        <BlogDashboard />
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
          sections={[
            {
              title: "How Vorevix Helps",
              body: servicePage.description,
            },
          ]}
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
          sections={[
            {
              title: "Digital Growth Partner",
              body: "Our team brings together brand thinking, development, SEO, creative direction, and marketing systems to help businesses improve how they show up online.",
            },
          ]}
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
