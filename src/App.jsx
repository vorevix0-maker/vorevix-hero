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

const siteUrl = "https://www.vorevix.com";
const logoUrl = `${siteUrl}/vorevix-logo.png`;
const homeTitle =
  "Vorevix | Web Development, Digital Marketing & AI Solutions Agency";
const homeDescription =
  "Vorevix helps businesses grow through custom web development, software engineering, AI automation, SEO, branding and digital marketing solutions.";
const homeCanonical = `${siteUrl}/`;
const portfolioTitle = "Portfolio | Vorevix";
const portfolioDescription =
  "Explore Vorevix's portfolio of web development, software, branding, AI automation and digital marketing projects.";
const portfolioCanonical = `${siteUrl}/portfolio`;

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
  const legalPage = legalPages[window.location.pathname];

  if (window.location.pathname === "/dashboard") {
    return (
      <>
        <SEO title="Dashboard | Vorevix" robots="noindex, nofollow" />
        <BlogDashboard />
      </>
    );
  }

  if (window.location.pathname === "/portfolio") {
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
            type: "website",
            siteName: "Vorevix",
            image: logoUrl,
            imageAlt: "Vorevix",
          }}
          twitter={{
            card: "summary_large_image",
            title: portfolioTitle,
            description: portfolioDescription,
            image: logoUrl,
            imageAlt: "Vorevix",
          }}
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
            type: "website",
            siteName: "Vorevix",
            image: logoUrl,
            imageAlt: "Vorevix",
          }}
          twitter={{
            card: "summary_large_image",
            title: legalPage.title,
            description: legalPage.description,
            image: logoUrl,
            imageAlt: "Vorevix",
          }}
        />
        <Header />
        <LegalPage type={legalPage.type} />
        <Footer />
      </>
    );
  }

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
          type: "website",
          siteName: "Vorevix",
          image: logoUrl,
          imageAlt: "Vorevix",
        }}
        twitter={{
          card: "summary_large_image",
          title: homeTitle,
          description: homeDescription,
          image: logoUrl,
          imageAlt: "Vorevix",
        }}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Vorevix",
          url: homeCanonical,
          logo: logoUrl,
          description: homeDescription,
          sameAs: [
            "https://www.facebook.com/profile.php?id=61589562344260",
            "https://www.instagram.com/vorevix.io",
            "https://www.linkedin.com/company/vorevix/",
            "https://www.tiktok.com/@vorevix.io",
          ],
        }}
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

export default App;
