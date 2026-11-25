import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Check,
  CircuitBoard,
  Clock3,
  MapPin,
  Phone,
  ScanSearch,
  ShieldCheck,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SiteHeader from "./components/site-header";
import SpotLogo from "./components/spot-logo";
import WhatsAppIcon from "./components/whatsapp-icon";

const whatsappUrl =
  "https://wa.me/27822251241?text=Hello%20SPOT%20Inverter%20Repairs%2C%20I%20would%20like%20to%20enquire%20about%20an%20inverter%20repair";
const phoneUrl = "tel:+27822251241";

const services: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "All-Brand Inverter Repairs",
    description:
      "Comprehensive inverter repair services across all brands. From fault finding and troubleshooting to component-level repairs and practical repair solutions.",
    icon: BatteryCharging,
  },
  {
    number: "02",
    title: "Sunsynk & Deye Inverter Repairs",
    description:
      "Specialist repair support for Sunsynk and Deye inverters, from fault diagnosis and troubleshooting to practical repair solutions.",
    icon: Sun,
  },
  {
    number: "03",
    title: "Fault diagnosis",
    description:
      "We investigate what is happening, identify the fault, and explain what can be done.",
    icon: ScanSearch,
  },
  {
    number: "04",
    title: "Troubleshooting & repair",
    description:
      "A repair-first approach focused on getting your existing system back to work.",
    icon: Wrench,
  },
];

const processSteps = [
  {
    number: "01",
    title: "We listen first.",
    description:
      "Tell us what your inverter is doing and what you have already noticed.",
  },
  {
    number: "02",
    title: "We find the cause.",
    description:
      "We diagnose the fault and talk you through a practical way forward.",
  },
  {
    number: "03",
    title: "We repair with care.",
    description:
      "Where it makes sense, we focus on repairing the system you already have.",
  },
  {
    number: "04",
    title: "We stand behind the work.",
    description: "Every repair includes a 30-day repair warranty.",
  },
];

const workImages = [
  {
    src: "/inspection.jpg",
    alt: "Technician soldering an inverter circuit board at a repair bench",
    title: "Equipment inspection",
    description: "A careful look at the system helps guide the diagnosis.",
  },
  {
    src: "/trouble.jpg",
    alt: "SPOT technician testing a Sunsynk inverter with a multimeter in the workshop",
    title: "Technical troubleshooting",
    description: "Understanding the wider system is part of finding the fault.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader whatsappUrl={whatsappUrl} />
      <main>
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-grid-pattern" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span className="eyebrow-dot" />
                All-brand inverter repairs{" "}
                <span className="eyebrow-separator">·</span> Gauteng &amp;
                Mpumalanga
              </p>
              <h1 id="hero-heading">
                We fix what
                <br />
                others <span>replace.</span>
              </h1>
              <p className="hero-description">
                Specialists in all inverter brands and aspects of inverter
                repairs. We find the fault, explain the fix, and help bring your
                backup power back online.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-orange"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={19} />
                  WhatsApp for repairs
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <a className="button button-outline-light" href={phoneUrl}>
                  <Phone size={17} aria-hidden="true" />
                  Call 082 225 1241
                </a>
              </div>
              <div className="hero-proof" aria-label="Service details">
                <div className="proof-item">
                  <MapPin size={17} aria-hidden="true" />
                  <span>
                    <strong>Gauteng</strong>
                    <small>Based here</small>
                  </span>
                </div>
                <span className="proof-divider" aria-hidden="true" />
                <div className="proof-item">
                  <Zap size={17} aria-hidden="true" />
                  <span>
                    <strong>Gauteng &amp; Mpumalanga</strong>
                    <small>Service areas</small>
                  </span>
                </div>
                <span className="proof-divider" aria-hidden="true" />
                <div className="proof-item">
                  <Clock3 size={17} aria-hidden="true" />
                  <span>
                    <strong>Same-day</strong>
                    <small>Diagnosis</small>
                  </span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-frame">
                <Image
                  src="/inverter-circuit-repair.jpg"
                  alt="Close-up of a technician carefully working on an electronic circuit board"
                  fill
                  priority
                  sizes="(max-width: 760px) 100vw, (max-width: 1200px) 48vw, 600px"
                  className="hero-image"
                />
                <div className="image-shade" />
                <div className="image-topline">
                  <span className="image-status">
                    <span />
                    REPAIR, NOT REPLACE
                  </span>
                  <span className="image-index">SPOT / 01</span>
                </div>
                <div className="image-caption">
                  <span className="caption-icon">
                    <CircuitBoard size={19} aria-hidden="true" />
                  </span>
                  <span>
                    <strong>Power electronics, understood.</strong>
                    <small>Thoughtful diagnosis. Straight answers.</small>
                  </span>
                  <ArrowUpRight size={19} aria-hidden="true" />
                </div>
              </div>
              <div className="hero-side-note" aria-hidden="true">
                SPECIALIST CARE
                <span>FOR YOUR BACKUP POWER</span>
              </div>
            </div>
            <a className="hero-scroll" href="#expertise">
              <span>Explore what we do</span>
              <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="service-section section-light" id="expertise">
          <div className="container">
            <div className="section-heading service-heading">
              <div>
                <p className="eyebrow eyebrow-dark">What we do</p>
                <h2>
                  Keep your power.
                  <br />
                  <span>Lose the fault.</span>
                </h2>
              </div>
              <p className="section-intro">
                When your inverter lets you down, you deserve a clear diagnosis
                and a repair that makes sense. That is where SPOT comes in.
              </p>
            </div>
            <div className="service-grid">
              {services.map(({ number, title, description, icon: Icon }) => (
                <article className="service-card" key={number}>
                  <div className="service-card-top">
                    <span className="service-icon">
                      <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className="service-number">{number}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a
                    className="card-link"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enquire about ${title.toLowerCase()} on WhatsApp`}
                  >
                    <WhatsAppIcon size={15} />
                    Enquire about this service
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
            <div className="service-footnote">
              <span className="footnote-line" />
              <p>
                Specialists in all aspects of inverter repairs across multiple
                brands, including Mecer, FiveStar, Kodak, Growatt, Luxpower,
                RCT, Deye and Sunsynk, and many more. Serving customers across
                Gauteng and Mpumalanga.
              </p>
            </div>
          </div>
        </section>

        <section className="work-section" aria-labelledby="work-heading">
          <div className="container">
            <div className="section-heading work-heading">
              <div>
                <p className="eyebrow eyebrow-dark">Inside the repair process</p>
                <h2 id="work-heading">
                  The details
                  <br />
                  <span>matter.</span>
                </h2>
              </div>
              <p className="section-intro">
                Every inverter fault is different. Careful inspection helps
                separate the symptoms from the cause.
              </p>
            </div>
            <div className="work-gallery">
              {workImages.map((image, index) => (
                <figure className="work-card" key={image.src}>
                  <div className="work-image-frame">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 760px) 100vw, 50vw"
                      className="work-image"
                    />
                  </div>
                  <figcaption className="work-caption">
                    <span className="work-number">0{index + 1}</span>
                    <span>
                      <strong>{image.title}</strong>
                      <small>{image.description}</small>
                    </span>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="work-disclaimer">
              Photos from SPOT&apos;s inverter repair work.
            </p>
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="approach-orb approach-orb-one" aria-hidden="true" />
          <div className="approach-orb approach-orb-two" aria-hidden="true" />
          <div className="container approach-inner">
            <div className="approach-copy">
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                A better way to repair
              </p>
              <h2>
                We believe a repair should <span>make sense.</span>
              </h2>
              <p className="approach-description">
                Replacing an inverter is not always the answer. We start by
                understanding the fault, then give you an honest recommendation
                based on what we find.
              </p>
              <ul className="approach-list">
                <li>
                  <Check size={16} aria-hidden="true" />
                  <span>
                    <strong>Repair-first thinking</strong>
                    Repair what can be repaired, where appropriate.
                  </span>
                </li>
                <li>
                  <Check size={16} aria-hidden="true" />
                  <span>
                    <strong>Honest recommendations</strong>
                    Clear options, without pressure or guesswork.
                  </span>
                </li>
                <li>
                  <Check size={16} aria-hidden="true" />
                  <span>
                    <strong>Clear communication</strong>
                    Understand the fault and the next step.
                  </span>
                </li>
              </ul>
            </div>
            <div className="approach-stats">
              <article className="stat-card stat-card-primary">
                <span className="stat-icon">
                  <ShieldCheck size={20} aria-hidden="true" />
                </span>
                <p className="stat-number">
                  30<span> days</span>
                </p>
                <h3>Repair warranty</h3>
                <p>Every repair comes with a 30-day repair warranty.</p>
                <span className="stat-card-index">01 / OUR WORD</span>
              </article>
              <article className="stat-card stat-card-secondary">
                <span className="stat-icon">
                  <Clock3 size={20} aria-hidden="true" />
                </span>
                <p className="stat-number">
                  1–2<span> days</span>
                </p>
                <h3>Typical turnaround</h3>
                <p>
                  Subject to the fault and parts availability. Diagnosis is
                  same-day.
                </p>
                <span className="stat-card-index">02 / OUR PACE</span>
              </article>
            </div>
          </div>
          <div className="container credential-row">
            <span>100% Black-owned</span>
            <i aria-hidden="true" />
            <span>B-BBEE Level 1 contributor</span>
            <i aria-hidden="true" />
            <span>135% procurement recognition</span>
          </div>
        </section>

        <section className="process-section section-light">
          <div className="container">
            <div className="section-heading process-heading">
              <div>
                <p className="eyebrow eyebrow-dark">Our approach</p>
                <h2>
                  Straightforward,
                  <br />
                  <span>from first call to fix.</span>
                </h2>
              </div>
              <p className="section-intro">
                No mystery. Just a considered process and a team that keeps you
                in the loop at every step.
              </p>
            </div>
            <div className="process-grid">
              {processSteps.map((step) => (
                <article className="process-step" key={step.number}>
                  <div className="process-step-top">
                    <span className="process-number">{step.number}</span>
                    <span className="process-rule" />
                    <span className="process-node" />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
            <a
              className="process-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tell us what your inverter is doing
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-grid-pattern" aria-hidden="true" />
          <div className="container contact-inner">
            <div className="contact-copy">
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                Let’s get your power back
              </p>
              <h2>
                Power restored.
                <br />
                <span>Peace of mind.</span>
              </h2>
              <p>
                Speak directly with our team about your inverter repair. Tell us
                what’s going on and we’ll help you work out the next step.
              </p>
              <div className="contact-actions">
                <a
                  className="button button-orange"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={19} />
                  WhatsApp our team
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <a className="button button-outline-light" href={phoneUrl}>
                  <Phone size={17} aria-hidden="true" />
                  Call now
                </a>
              </div>
            </div>
            <div className="contact-details">
              <div className="contact-detail">
                <span className="detail-label">Call us</span>
                <a href={phoneUrl}>082 225 1241</a>
              </div>
              <div className="contact-detail">
                <span className="detail-label">Find us</span>
                <p>Gauteng, South Africa</p>
              </div>
              <div className="contact-detail">
                <span className="detail-label">We cover</span>
                <p>Gauteng &amp; Mpumalanga</p>
              </div>
              <span className="contact-detail-note">
                Specialists in all aspects of inverter repairs across multiple
                brands, including Mecer, FiveStar, Kodak, Growatt, Luxpower,
                RCT, Deye and Sunsynk, and many more. Serving customers across
                Gauteng and Mpumalanga.
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <SpotLogo />
            <p>We fix what others replace.</p>
            <div className="footer-credentials">
              <span>100% Black-owned</span>
              <span>B-BBEE Level 1 contributor</span>
              <span>135% procurement recognition</span>
            </div>
          </div>
          <div className="footer-column">
            <h2>Explore</h2>
            <a href="#expertise">Expertise</a>
            <a href="#approach">Our approach</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-column footer-contact">
            <h2>Get in touch with Kagiso</h2>
            <a href={phoneUrl}>082 225 1241</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={16} />
              WhatsApp SPOT <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <span>Gauteng · Gauteng &amp; Mpumalanga</span>
          </div>
          <a className="back-to-top" href="#top" aria-label="Back to top">
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 SPOT Inverter Repairs</span>
          <span>Specialist inverter repairs in South Africa</span>
          <span>
            Design &amp; hosted by{" "}
            <a
              href="https://sihleb.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              SihleB Digital Studio
            </a>
          </span>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SPOT Inverter Repairs on WhatsApp"
      >
        <WhatsAppIcon size={22} variant="classic" />
        <span>WhatsApp us</span>
      </a>
    </>
  );
}
