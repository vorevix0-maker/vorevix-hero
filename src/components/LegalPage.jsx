import "./LegalPage.css";

const privacySections = [
  {
    title: "Information We Collect",
    body: [
      "When you contact Vorevix, subscribe to updates, request a quote, book a strategy call or submit a project form, we may collect your name, email address, phone number, company name, project details and any message you choose to share.",
      "We may also collect basic website usage information such as pages visited, device type, browser type, referral source and approximate location to help us understand how visitors use our website.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use your information to respond to inquiries, provide proposals, manage client communication, deliver services, improve our website, send requested updates and support ongoing business relationships.",
      "We do not sell your personal information. We only use it for legitimate business, service delivery, communication and website improvement purposes.",
    ],
  },
  {
    title: "Marketing Communication",
    body: [
      "If you subscribe to our newsletter or request updates, we may send you agency news, useful resources, service updates or relevant offers. You can unsubscribe or ask us to stop contacting you at any time.",
    ],
  },
  {
    title: "Cookies and Analytics",
    body: [
      "Our website may use cookies, analytics tools or similar technologies to improve user experience, measure traffic and understand how visitors interact with our pages.",
      "You can control cookies through your browser settings. Some website features may work differently if cookies are disabled.",
    ],
  },
  {
    title: "Sharing of Information",
    body: [
      "We may share limited information with trusted service providers who help us operate our website, manage forms, send emails, host data or deliver services. These providers are expected to protect your information and use it only for the required purpose.",
      "We may also disclose information if required by law, regulation, legal process or to protect the rights and safety of Vorevix, our clients or others.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We take reasonable technical and organizational steps to protect personal information from unauthorized access, misuse, loss or disclosure. No online system is completely risk-free, but we work to keep your information secure.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request access, correction or deletion of your personal information by contacting us. We will respond to reasonable requests in line with applicable laws and business record requirements.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For privacy-related questions, contact us at contact@vorevix.com.",
    ],
  },
];

const termsSections = [
  {
    title: "Use of Our Website",
    body: [
      "By using the Vorevix website, you agree to use it only for lawful purposes and in a way that does not damage the website, interfere with other users or misuse our content, forms, systems or services.",
    ],
  },
  {
    title: "Services and Proposals",
    body: [
      "Information on this website describes our agency services, including branding, website development, marketing, SEO, software solutions and automation. Website content is for general information and does not create a binding service agreement.",
      "Project scope, timelines, pricing, deliverables and payment terms are confirmed separately through written proposals, invoices, contracts or agreed communication with Vorevix.",
    ],
  },
  {
    title: "Client Responsibilities",
    body: [
      "Clients are responsible for providing accurate project information, content, access, approvals and feedback required for delivery. Delays in providing required materials may affect project timelines.",
    ],
  },
  {
    title: "Payments and Revisions",
    body: [
      "Payment schedules, deposits, milestones, revisions and refund terms depend on the specific service agreement or proposal. Additional work outside the approved scope may require additional fees and timeline changes.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "Vorevix retains ownership of its pre-existing tools, processes, templates, code libraries, concepts and internal materials. Client-owned assets remain the property of the client.",
      "Final ownership of approved deliverables is transferred according to the relevant proposal, invoice or contract once agreed payments are completed.",
    ],
  },
  {
    title: "Third-Party Tools",
    body: [
      "Some projects may use third-party platforms, hosting providers, plugins, APIs, analytics tools, ad platforms or software. Vorevix is not responsible for third-party outages, policy changes, pricing changes or account restrictions.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "We aim to deliver high-quality work and reliable guidance, but we do not guarantee specific business results, rankings, ad performance, sales numbers or revenue outcomes. Results depend on many factors outside our control.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For questions about these terms, contact us at contact@vorevix.com.",
    ],
  },
];

const legalContent = {
  privacy: {
    eyebrow: "Privacy Policy",
    title: "Privacy Policy",
    updated: "Last updated: July 2, 2026",
    intro:
      "This Privacy Policy explains how Vorevix collects, uses and protects information when you visit our website, contact our team or use our agency services.",
    sections: privacySections,
  },
  terms: {
    eyebrow: "Terms & Conditions",
    title: "Terms & Conditions",
    updated: "Last updated: July 2, 2026",
    intro:
      "These Terms & Conditions explain the basic rules for using the Vorevix website and working with our agency. Specific client projects may also be governed by separate proposals, invoices or written agreements.",
    sections: termsSections,
  },
};

export default function LegalPage({ type }) {
  const page = legalContent[type];

  return (
    <main className="legal-page">
      <section className="legal-hero">
        <span>{page.eyebrow}</span>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        <time dateTime="2026-07-02">{page.updated}</time>
      </section>

      <section className="legal-content" aria-label={`${page.title} details`}>
        {page.sections.map((section) => (
          <article className="legal-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </section>
    </main>
  );
}
