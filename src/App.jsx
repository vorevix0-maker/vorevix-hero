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

const homeTitle =
  "Vorevix | Digital Marketing, Web Development & Software Agency";
const homeDescription =
  "Vorevix helps businesses grow online with digital marketing, SEO, social media marketing, branding, website development, software solutions and AI automation.";
const homeCanonical = "https://vorevix.com/";

const legalPages = {
  "/privacy-policy": {
    type: "privacy",
    title: "Privacy Policy | Vorevix",
    description:
      "Read the Vorevix Privacy Policy to learn how we collect, use and protect information shared through our website, forms and agency services.",
    canonical: "https://vorevix.com/privacy-policy",
  },
  "/terms-and-conditions": {
    type: "terms",
    title: "Terms & Conditions | Vorevix",
    description:
      "Read the Vorevix Terms & Conditions for website use, agency services, proposals, payments, intellectual property and project responsibilities.",
    canonical: "https://vorevix.com/terms-and-conditions",
  },
};

function App() {
  const legalPage = legalPages[window.location.pathname];

  if (window.location.pathname === "/dashboard") {
    return <BlogDashboard />;
  }

  if (window.location.pathname === "/portfolio") {
    return (
      <>
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
            image: "https://vorevix.com/vorevix-logo.png",
            imageAlt: "Vorevix",
          }}
          twitter={{
            card: "summary_large_image",
            title: legalPage.title,
            description: legalPage.description,
            image: "https://vorevix.com/vorevix-logo.png",
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
          image: "https://vorevix.com/vorevix-logo.png",
          imageAlt: "Vorevix",
        }}
        twitter={{
          card: "summary_large_image",
          title: homeTitle,
          description: homeDescription,
          image: "https://vorevix.com/vorevix-logo.png",
          imageAlt: "Vorevix",
        }}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Vorevix",
          url: homeCanonical,
          logo: "https://vorevix.com/vorevix-logo.png",
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
