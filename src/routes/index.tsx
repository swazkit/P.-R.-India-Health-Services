import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BedDouble,
  ClipboardList,
  HandHeart,
  HeartPulse,
  Home,
  Stethoscope,
  UserRound,
  UsersRound,
  Wind,
} from "lucide-react";

import heroImage from "../assets/hero-home-care.jpg";
import homeIcuImage from "../assets/home-icu.jpg";
import teamImage from "../assets/healthcare-team.jpg";
import aboutImage from "../assets/about-care.jpg";
import { CTASection } from "../components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "P. R. India Health Services — Professional Critical Care Services at Home" },
      {
        name: "description",
        content:
          "Coordinated home healthcare services in India: home ICU setup, home nursing services, doctor home visits, physiotherapy and critical care equipment — care coordinated around your needs.",
      },
      { property: "og:title", content: "P. R. India Health Services — Professional Critical Care Services at Home" },
      {
        property: "og:description",
        content:
          "Home ICU setup, home nursing services, doctor home visits and critical care equipment, coordinated around your needs.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: BedDouble,
    title: "Home ICU Setup",
    description: "Support for creating an appropriate critical-care environment at home.",
  },
  {
    icon: HeartPulse,
    title: "Nursing Services",
    description: "Professional nursing support for home-based patient care.",
  },
  {
    icon: Stethoscope,
    title: "Doctor Visits",
    description:
      "Coordination of doctor visits based on patient requirements and professional availability.",
  },
  {
    icon: HandHeart,
    title: "Attendant & Caregiver Services",
    description: "Trained attendants and caretakers for patient support.",
  },
  {
    icon: Activity,
    title: "Physiotherapy",
    description: "Home-based physiotherapy support where appropriate.",
  },
  {
    icon: ClipboardList,
    title: "Medical Equipment",
    description:
      "Critical-care and monitoring equipment available based on requirement and availability.",
  },
];

const equipmentCategories = [
  {
    title: "ICU Setup",
    items: ["Motorized ICU Bed", "Anti-bedsore Air Mattress", "Saline / IV Stand"],
  },
  {
    title: "Respiratory & Airway Support",
    items: [
      "Oxygen Concentrator — 5L / 10L",
      "Jumbo Oxygen Cylinder",
      "Ventilator",
      "BiPAP / CPAP",
      "Suction Machine",
      "Nebulizer",
      "Ambu Bag",
    ],
  },
  {
    title: "Monitoring & Clinical Equipment",
    items: [
      "Multipara Cardiac Monitor",
      "Pulse Oximeter",
      "Infusion & Syringe Pumps",
      "Glucometer",
      "Stethoscope & BP Apparatus",
      "ABG Machine",
      "Portable X-Ray Machine",
      "Holter Machine",
    ],
  },
];

const professionalRoles = [
  "Registered / Staff Nurses",
  "Trained Attendants / Caretakers",
  "Physiotherapists",
  "MBBS / MD / DM Doctors",
  "Specialized Technicians",
];

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description: "Submit your healthcare requirement.",
  },
  {
    number: "02",
    title: "We Review Your Request",
    description: "Our team reviews the requirement.",
  },
  {
    number: "03",
    title: "Support Is Coordinated",
    description:
      "Appropriate professionals and/or equipment can be coordinated based on availability and suitability.",
  },
  {
    number: "04",
    title: "Care Begins",
    description: "The agreed service is arranged.",
  },
];

const whyCards = [
  { icon: UsersRound, title: "Professional Healthcare Network" },
  { icon: Home, title: "Home-Based Care Support" },
  { icon: BedDouble, title: "Critical-Care Equipment" },
  { icon: Stethoscope, title: "Multiple Healthcare Disciplines" },
  { icon: HandHeart, title: "Patient & Family Focus" },
  { icon: ClipboardList, title: "Coordinated Service Requests" },
];

function Index() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-section">
        <div className="container-site grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow">Home Critical Care Services</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl">
              Professional Critical Care Services at Home
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Professional healthcare support, critical-care equipment and trained healthcare
              professionals coordinated around your needs — bringing essential care closer to home.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/request-service"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-navy"
              >
                Request a Service
              </Link>
              <Link
                to="/join-team"
                className="inline-flex items-center justify-center rounded-lg border border-primary bg-card px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-secondary"
              >
                Join Our Healthcare Team
              </Link>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <HeartPulse className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
              Care coordinated around your needs.
            </p>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="A nurse providing home healthcare to an elderly patient at home"
              width={1600}
              height={1104}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      {/* 2. Two-audience section */}
      <section className="container-site py-16 sm:py-20">
        <h2 className="text-center font-display text-3xl font-bold text-foreground sm:text-4xl">
          How Can We Help You?
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card-soft flex flex-col p-8 sm:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
              <UserRound className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="mt-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Patient / Family
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
              Need Healthcare Support at Home?
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
              Request nursing, doctor visits, attendants, physiotherapy, home ICU support or medical
              equipment.
            </p>
            <Link
              to="/request-service"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy"
            >
              Request a Service
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="card-soft flex flex-col p-8 sm:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground">
              <Stethoscope className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="mt-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Healthcare Professional
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
              Want to Join Our Healthcare Network?
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
              Doctors, nurses, physiotherapists, attendants and specialized technicians can register
              their professional interest.
            </p>
            <Link
              to="/join-team"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              Join Our Team
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section className="bg-section">
        <div className="container-site py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Comprehensive Home Healthcare Support
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Healthcare services and critical-care support designed around the needs of patients and
              families.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="card-soft flex flex-col p-6">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-primary">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-teal"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Home ICU / Equipment */}
      <section className="container-site py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Home ICU Support & Medical Equipment
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              When home-based critical-care support is required, we help coordinate essential
              equipment and professional services based on individual requirements and availability.
            </p>
            <img
              src={homeIcuImage}
              alt="Home ICU setup with motorized hospital bed, cardiac monitor and oxygen equipment"
              width={1600}
              height={1008}
              loading="lazy"
              className="mt-8 aspect-[8/5] w-full rounded-2xl object-cover shadow-soft"
            />
          </div>
          <div className="space-y-6">
            {equipmentCategories.map((category) => (
              <div key={category.title} className="card-soft p-6">
                <h3 className="flex items-center gap-2.5 font-display text-base font-bold text-foreground">
                  <Wind className="h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                  {category.title}
                </h3>
                <ul className="mt-3 grid gap-x-6 gap-y-1.5 text-sm text-muted-foreground sm:grid-cols-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <Link
                to="/request-service"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-navy"
              >
                Request Equipment
              </Link>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Availability and clinical suitability should be confirmed by qualified healthcare
                professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Healthcare team */}
      <section className="bg-section">
        <div className="container-site grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-14">
          <img
            src={teamImage}
            alt="Healthcare team of doctors, nurses and physiotherapists"
            width={1600}
            height={1008}
            loading="lazy"
            className="aspect-[8/5] w-full rounded-2xl object-cover shadow-soft"
          />
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Join Our Healthcare Team
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We work with qualified healthcare professionals to support patients requiring care at
              home.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {professionalRoles.map((role) => (
                <li
                  key={role}
                  className="flex items-center gap-2.5 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground"
                >
                  <HeartPulse className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  {role}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg border border-border bg-card p-5">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                Flexible Opportunities
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li>Flexible coverage</li>
                <li>Part-time / visit-based work</li>
                <li>Doctor visit coordination</li>
              </ul>
            </div>
            <Link
              to="/join-team"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-navy"
            >
              Join Our Healthcare Team
            </Link>
          </div>
        </div>
      </section>

      {/* 6. How it works */}
      <section className="container-site py-16 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            How It Works
          </h2>
        </div>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="card-soft relative p-6">
              <span className="font-display text-3xl font-bold text-teal">{step.number}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Service availability and clinical suitability are subject to assessment and confirmation.
        </p>
      </section>

      {/* 7. Why choose us */}
      <section className="bg-section">
        <div className="container-site py-16 sm:py-20">
          <h2 className="text-center font-display text-3xl font-bold text-foreground sm:text-4xl">
            Care Coordinated Around Your Needs
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((card) => (
              <div key={card.title} className="card-soft flex items-center gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                  <card.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-base font-bold text-foreground">{card.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. About preview */}
      <section className="container-site py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Healthcare Support With a Human Approach
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              P. R. India Health Services focuses on connecting patients and families with appropriate
              home healthcare support, qualified professionals and medical equipment — coordinated
              with professionalism, responsiveness and a genuinely human approach to care.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              About P. R. India Health Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <img
            src={aboutImage}
            alt="Doctor on a home visit reviewing notes with an elderly patient"
            width={1600}
            height={1008}
            loading="lazy"
            className="aspect-[8/5] w-full rounded-2xl object-cover shadow-soft"
          />
        </div>
      </section>

      {/* 9. Final CTA */}
      <CTASection />
    </>
  );
}
