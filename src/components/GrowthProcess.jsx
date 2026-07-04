import {
  ClipboardCheck,
  Code2,
  Lightbulb,
  MonitorCheck,
  Rocket,
  SearchCheck,
} from "lucide-react";
import "./GrowthProcess.css";

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We thoroughly analyze your business goals target audience market competitors and unique value propositions.",
    icon: SearchCheck,
  },
  {
    number: "02",
    title: "Planning",
    desc: "We develop a customized strategy clear timeline and structured project plan to ensure flawless execution.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Design",
    desc: "We design beautiful visuals compelling brand identities and highly functional digital experiences.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Development",
    desc: "We transform approved designs into fully responsive websites mobile apps or robust software platforms.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Testing",
    desc: "We rigorously test site speed user experience mobile responsiveness and overall performance prior to launch.",
    icon: MonitorCheck,
  },
  {
    number: "06",
    title: "Launch",
    desc: "Your new digital system goes live with our full support ensuring a seamless transition and continuous growth.",  
    icon: Rocket,
  },
];

export default function GrowthProcess() {
  return (
    <section className="growth-process-section">
      <div className="growth-process-header">
        <span>( Our Process )</span>
        <h2 className="growth-process-title">Roadmap to digital growth</h2>
      </div>

      <div className="roadmap-board">
        {steps.map(({ icon: Icon, ...step }) => (
          <article className={`road-step road-step-${step.number}`} key={step.number}>
            <div className="step-orb">
              <Icon size={28} />
            </div>
            <span>{step.number}</span>
            <h3 className="road-step-title">{step.title}</h3>
            <p>{step.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
