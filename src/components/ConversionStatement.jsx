import { ArrowRight } from "lucide-react";
import "./ConversionStatement.css";

export default function ConversionStatement() {
  return (
    <section className="conversion-section" aria-label="Conversion statement">
      <div className="conversion-wrap">
        <h2 className="conversion-title">
          <span>Transforming Clicks</span>
          <span>
            Into <em>Loyal Customers</em>
          </span>
          <span className="conversion-nowrap">
          Through <strong>Strategic Design</strong>
          </span>
          <span>& Marketing Mastery</span>
        </h2>

        <a href="#contact" className="conversion-link" aria-label="Start your project">
          <ArrowRight size={34} />
        </a>
      </div>
    </section>
  );
}
 
