import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, RoundedBox, Environment } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./VoreVixWorld.css";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Every Business Starts With An Idea.",
    sub: "We turn that idea into a digital growth system.",
    label: "IDEA",
  },
  {
    title: "First, We Build Your Identity.",
    sub: "Logo, colors, brand voice and content direction.",
    label: "BRAND",
  },
  {
    title: "Then, We Build Your Digital Storefront.",
    sub: "Premium websites built for trust, speed and conversion.",
    label: "WEBSITE",
  },
  {
    title: "Traffic Is Not Luck. It’s A System.",
    sub: "SEO, Google Ads, Meta Ads and content strategy.",
    label: "TRAFFIC",
  },
  {
    title: "Attention Becomes Opportunity.",
    sub: "Visitors become leads. Leads become clients.",
    label: "LEADS",
  },
  {
    title: "Work Less. Scale More.",
    sub: "CRM, follow-up, proposal and sales automation.",
    label: "AUTOMATION",
  },
  {
    title: "Your Business Growth Engine.",
    sub: "Website, marketing, CRM, AI and automation working together.",
    label: "GROWTH",
  },
  {
    title: "From Idea To Empire.",
    sub: "Built by Vorevix.",
    label: "EMPIRE",
  },
];

function GlowDot({ progress }) {
  const ref = useRef();

  useFrame(() => {
    const p = progress.current;
    const scale = THREE.MathUtils.lerp(0.35, 1.8, Math.min(p * 4, 1));
    ref.current.scale.setScalar(scale);
  });

  return (
    <group ref={ref} position={[0, 0.4, 0]}>
      <mesh>
        <sphereGeometry args={[0.45, 64, 64]} />
        <meshStandardMaterial
          color="#ff6a00"
          emissive="#ff6a00"
          emissiveIntensity={1.6}
          roughness={0.25}
        />
      </mesh>
    </group>
  );
}

function BrandV() {
  return (
    <Float speed={2} rotationIntensity={0.25} floatIntensity={0.45}>
      <Text
        position={[0, 0.4, 0]}
        fontSize={2.5}
        color="#ff6a00"
        anchorX="center"
        anchorY="middle"
      >
        V
      </Text>
    </Float>
  );
}

function WebsiteFrame() {
  return (
    <group position={[0, 0.3, 0]}>
      <RoundedBox args={[4, 2.5, 0.08]} radius={0.12}>
        <meshStandardMaterial color="#ffffff" roughness={0.35} />
      </RoundedBox>

      <mesh position={[0, 1.05, 0.07]}>
        <boxGeometry args={[3.7, 0.08, 0.02]} />
        <meshStandardMaterial color="#ff6a00" />
      </mesh>

      <mesh position={[-1.1, 0.35, 0.08]}>
        <boxGeometry args={[1.3, 0.75, 0.04]} />
        <meshStandardMaterial color="#111111" />
      </mesh>

      <mesh position={[0.9, 0.55, 0.08]}>
        <boxGeometry args={[1.4, 0.13, 0.04]} />
        <meshStandardMaterial color="#ff6a00" />
      </mesh>

      <mesh position={[0.75, 0.15, 0.08]}>
        <boxGeometry args={[1.7, 0.1, 0.04]} />
        <meshStandardMaterial color="#dddddd" />
      </mesh>

      <mesh position={[0.65, -0.18, 0.08]}>
        <boxGeometry args={[1.4, 0.1, 0.04]} />
        <meshStandardMaterial color="#dddddd" />
      </mesh>
    </group>
  );
}

function TrafficSystem() {
  const group = useRef();

  useFrame(({ clock }) => {
    group.current.rotation.z = clock.elapsedTime * 0.25;
  });

  return (
    <group ref={group} position={[0, 0.35, 0]}>
      {["SEO", "ADS", "META", "GOOGLE", "CONTENT"].map((item, i) => {
        const angle = (i / 5) * Math.PI * 2;
        const x = Math.cos(angle) * 2.3;
        const y = Math.sin(angle) * 1.5;

        return (
          <group key={item} position={[x, y, 0]}>
            <mesh>
              <sphereGeometry args={[0.18, 32, 32]} />
              <meshStandardMaterial color={i % 2 ? "#111111" : "#ff6a00"} />
            </mesh>
            <Text
              position={[0, -0.38, 0]}
              fontSize={0.18}
              color="#111111"
              anchorX="center"
            >
              {item}
            </Text>
          </group>
        );
      })}

      <mesh>
        <torusGeometry args={[2.3, 0.015, 16, 100]} />
        <meshStandardMaterial color="#ff6a00" />
      </mesh>
    </group>
  );
}

function LeadsFunnel() {
  return (
    <group position={[0, 0.25, 0]}>
      {[
        ["100 Visitors", 2.8, 0.8],
        ["20 Leads", 2.0, 0],
        ["5 Clients", 1.2, -0.8],
      ].map(([text, width, y], i) => (
        <group key={text} position={[0, y, 0]}>
          <RoundedBox args={[width, 0.45, 0.12]} radius={0.08}>
            <meshStandardMaterial color={i === 2 ? "#ff6a00" : "#ffffff"} />
          </RoundedBox>
          <Text
            position={[0, 0, 0.1]}
            fontSize={0.22}
            color="#111111"
            anchorX="center"
            anchorY="middle"
          >
            {text}
          </Text>
        </group>
      ))}
    </group>
  );
}

function AutomationFlow() {
  const nodes = ["Lead", "CRM", "Follow-up", "Proposal", "Sale"];

  return (
    <group position={[0, 0.3, 0]}>
      {nodes.map((node, i) => (
        <group key={node} position={[-3 + i * 1.5, 0, 0]}>
          <mesh>
            <sphereGeometry args={[0.35, 32, 32]} />
            <meshStandardMaterial color={i === 4 ? "#ff6a00" : "#ffffff"} />
          </mesh>
          <Text position={[0, -0.65, 0]} fontSize={0.18} color="#111111" anchorX="center">
            {node}
          </Text>

          {i < nodes.length - 1 && (
            <mesh position={[0.75, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.035, 0.035, 0.9, 16]} />
              <meshStandardMaterial color="#ff6a00" />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
}

function GrowthEngine() {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.elapsedTime * 0.35;
  });

  return (
    <group ref={ref} position={[0, 0.3, 0]}>
      {["WEB", "SEO", "ADS", "AI", "CRM", "BRAND"].map((item, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const x = Math.cos(angle) * 2.1;
        const y = Math.sin(angle) * 1.45;

        return (
          <group key={item} position={[x, y, 0]}>
            <RoundedBox args={[0.9, 0.45, 0.12]} radius={0.08}>
              <meshStandardMaterial color={i % 2 ? "#111111" : "#ff6a00"} />
            </RoundedBox>
            <Text
              position={[0, 0, 0.1]}
              fontSize={0.18}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              {item}
            </Text>
          </group>
        );
      })}

      <mesh>
        <sphereGeometry args={[0.55, 48, 48]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <Text position={[0, 0, 0.6]} fontSize={0.5} color="#ff6a00" anchorX="center">
        V
      </Text>
    </group>
  );
}

function EmpireFinal() {
  return (
    <group position={[0, 0.2, 0]}>
      <Text fontSize={1.2} color="#ff6a00" anchorX="center">
        VOREVIX
      </Text>
      <Text position={[0, -0.75, 0]} fontSize={0.28} color="#111111" anchorX="center">
        FROM IDEA TO EMPIRE
      </Text>
    </group>
  );
}

function Visuals({ active, progress }) {
  return (
    <group>
      {active === 0 && <GlowDot progress={progress} />}
      {active === 1 && <BrandV />}
      {active === 2 && <WebsiteFrame />}
      {active === 3 && <TrafficSystem />}
      {active === 4 && <LeadsFunnel />}
      {active === 5 && <AutomationFlow />}
      {active === 6 && <GrowthEngine />}
      {active === 7 && <EmpireFinal />}
    </group>
  );
}

function ThreeScene({ active, progress }) {
  useFrame(({ camera }) => {
    const p = progress.current;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, 0, 0.08);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.5, 0.08);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 6 - Math.sin(p * Math.PI) * 1.1, 0.08);
    camera.lookAt(0, 0.3, 0);
  });

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 5, 5]} intensity={2} />
      <Environment preset="city" />
      <Visuals active={active} progress={progress} />
    </>
  );
}

export default function IdeaToEmpire() {
  const pageRef = useRef(null);
  const progress = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: pageRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        progress.current = self.progress;
        setActive(Math.min(7, Math.floor(self.progress * 8)));
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <main ref={pageRef} className="ite-page">
      <section className="ite-fixed">
        <Canvas camera={{ position: [0, 0.5, 6], fov: 45 }}>
          <ThreeScene active={active} progress={progress} />
        </Canvas>

        <div className="ite-content">
          <div className="ite-pill">VOREVIX BUSINESS JOURNEY</div>

          <h1>{steps[active].title}</h1>

          <p>{steps[active].sub}</p>

          <div className="ite-progress">
            <span>{steps[active].label}</span>
            <b>{String(active + 1).padStart(2, "0")}/08</b>
          </div>

          {active === 7 && (
            <div className="ite-buttons">
              <button>Start Your Journey</button>
              <button className="secondary">Book Consultation</button>
            </div>
          )}
        </div>

        <div className="ite-scroll">
          <span>SCROLL</span>
          <i></i>
        </div>
      </section>

      {steps.map((step) => (
        <section key={step.label} className="ite-spacer"></section>
      ))}
    </main>
  );
}
