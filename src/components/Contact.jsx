import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { submitContactLead } from "../lib/contactLeads";
import "./Contact.css";

const contactItems = [
  {
    label: "Address",
    value: "Mansehra, Pakistan",
    icon: MapPin,
  },
  {
    label: "Phone",
    value: "+92 300 0000000",
    href: "tel:+923000000000",
    icon: Phone,
  },
  {
    label: "E-mail",
    value: "contact@vorevix.com",
    href: "mailto:contact@vorevix.com",
    icon: Mail,
  },
];

export default function Contact() {
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {
      await submitContactLead(new FormData(form));
      form.reset();
      setFormStatus({
        type: "success",
        message: "Message sent. Vorevix team will contact you soon.",
      });
    } catch (error) {
      const detail = error instanceof Error ? error.message : "";
      setFormStatus({
        type: "error",
        message: detail
          ? `Message send nahi hua: ${detail}`
          : "Message send nahi hua. Please thori dair baad try karein.",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrap">
        <div className="contact-heading">
          <h2 className="contact-title">
            Contact <span>Us</span>
          </h2>
        </div>

        <div className="contact-layout">
          <div className="contact-content">
            <p className="contact-content-title">Your Next Big Idea Starts Here</p>
            <p>
              Share your goals with Vorevix. We will help you plan a practical
              website, brand, marketing, automation or software solution for
              your next stage of growth.
            </p>

            <address className="contact-info-list">
              {contactItems.map(({ label, value, href, icon: Icon }) => {
                const content = (
                  <>
                    <Icon size={30} />
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </>
                );

                return href ? (
                  <a href={href} className="contact-info-item" key={label}>
                    {content}
                  </a>
                ) : (
                  <div className="contact-info-item" key={label}>
                    {content}
                  </div>
                );
              })}
            </address>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <span className="form-tag">Let's Connect!</span>

            <label>
              Name*
              <input type="text" name="name" placeholder="Your Full Name" required />
            </label>

            <label>
              Email*
              <input type="email" name="email" placeholder="Your Email Address" required />
            </label>

            <label>
              Phone Number*
              <input type="tel" name="phone" placeholder="+92 300 0000000" required />
            </label>

            <label>
              Subject*
              <select name="service" defaultValue="" required>
                <option value="" disabled>
                  Select service
                </option>
                <option>Branding</option>
                <option>Web Development</option>
                <option>Social Media Marketing</option>
                <option>SEO Optimization</option>
                <option>Software Solutions & App Development</option>
              </select>
            </label>

            <label>
              Message*
              <textarea
                name="message"
                rows="4"
                placeholder="Message Here"
                required
              ></textarea>
            </label>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
              <ArrowRight size={18} />
            </button>

            {formStatus.message ? (
              <p className={`contact-status ${formStatus.type}`}>
                {formStatus.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
