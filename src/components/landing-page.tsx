import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import heroBanner from "@/assets/hero-banner.png";
import overviewEngineers from "@/assets/overview-engineers.jpg";
import campusNamtech from "@/assets/campus-namtech.jpg";
import eligibilityStudents from "@/assets/eligibility-students.jpg";
import trackSmartManufacturing from "@/assets/track-smart-manufacturing.jpg";
import trackSemiconductor from "@/assets/track-semiconductor.jpg";
import trackDataAi from "@/assets/track-data-ai.jpg";
import trackRobotics from "@/assets/track-robotics.jpg";
import trackAutomotive from "@/assets/track-automotive.jpg";
import trackOpenInnovation from "@/assets/track-open-innovation.jpg";
import trackSustainability from "@/assets/track-sustainability.jpg";
import namtechLogo from "@/assets/namtech-logo.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Trophy,
  Award,
  Briefcase,
  GraduationCap,
  Flag,
  Building2,
  Cpu,
  CircuitBoard,
  Bot,
  BarChart3,
  Car,
  Lightbulb,
  QrCode,
  ClipboardList,
  UploadCloud,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Rocket, FileCheck2, Megaphone } from "lucide-react";
import {
  Globe2,
  TrendingUp,
  Medal,
  Landmark,
  Users,
  BadgeIndianRupee,
  ScanLine,
  PenLine,
  FileUp,
  Check,
} from "lucide-react";

function NamtechMark() {
  return (
    <img
      src={namtechLogo}
      alt="NAMTECH — Institute of Manufacturing Innovation"
      width={1920}
      height={400}
      className="h-8 w-auto sm:h-10"
    />
  );
}

function GridBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
      style={{
        backgroundImage:
          "linear-gradient(to right, color-mix(in oklab, var(--primary) 18%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--primary) 18%, transparent) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage:
          "radial-gradient(ellipse at top, black 30%, transparent 75%)",
      }}
    />
  );
}

function FloatingLogo() {
  return (
    <div className="absolute inset-x-0 top-4 z-40 sm:top-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <NamtechMark />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image positioned to the right with white gradient on the left */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url(${heroBanner})`,
            backgroundPosition: "right center",
            backgroundSize: "contain",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, transparent 24%, rgba(0,0,0,0.08) 36%, rgba(0,0,0,0.35) 48%, rgba(0,0,0,0.72) 62%, black 76%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, transparent 24%, rgba(0,0,0,0.08) 36%, rgba(0,0,0,0.35) 48%, rgba(0,0,0,0.72) 62%, black 76%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--background) 0%, var(--background) 20%, color-mix(in oklab, var(--background) 98%, transparent) 34%, color-mix(in oklab, var(--background) 88%, transparent) 48%, color-mix(in oklab, var(--background) 66%, transparent) 62%, color-mix(in oklab, var(--background) 38%, transparent) 76%, color-mix(in oklab, var(--background) 14%, transparent) 88%, transparent 98%)",
          }}
        />
      </div>
      <GridBackdrop />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-24 sm:px-6 sm:pt-28 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pt-32">
        <div>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            BHARAT INNOVATION
            <br />
            <span className="text-primary">CHALLENGE</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            A national innovation platform for B.Tech & BE engineers graduating in
            2024, 2025, and 2026. Showcase your project, prototype, or startup
            idea — and take it to the Grand Finale at NAMTECH.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-12 rounded-full px-6 text-sm font-semibold sm:px-7 sm:text-base">
              <a href="#register">
                Register Now <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-2 gap-6 border-t border-border pt-6">
            {[
              { k: "₹2.25L", v: "Prize Pool" },
              { k: "7", v: "Innovation Tracks" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-black tracking-tight text-foreground">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="register" aria-hidden className="hidden lg:block" />
      </div>
    </section>
  );
}

function RegistrationCard() {
  return null;
}

function HeroImage() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--primary)_35%,transparent)]">
      <img
        src={heroBanner}
        alt="Bharat Innovation Challenge Hero Banner"
        width={1280}
        height={1280}
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
    </div>
  );
}

function _UnusedRegistrationCard() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="rounded-3xl border border-border bg-card p-7 shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--primary)_35%,transparent)]">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        <Sparkles className="h-3.5 w-3.5" /> Apply Now
      </div>
      <h2 className="mt-2 text-3xl font-black tracking-tight">Claim your spot</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Quick form. No commitments after.
      </p>

      {submitted ? (
        <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5">
          <CheckCircle2 className="h-6 w-6 text-primary" />
          <h3 className="mt-3 text-lg font-bold">You're on the list.</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Check your inbox for next steps.
          </p>
        </div>
      ) : (
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="space-y-1.5">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" required placeholder="Aarav Sharma" className="h-11" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" required placeholder="you@college.edu" className="h-11" />
          </div>
          <div className="grid grid-cols-[90px_1fr] gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="cc">Code</Label>
              <Input id="cc" defaultValue="+91" className="h-11" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="phone">Mobile *</Label>
              <Input id="phone" required placeholder="98765 43210" className="h-11" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="college">Institution *</Label>
            <Input id="college" required placeholder="Your college / university" className="h-11" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="branch">Branch</Label>
              <Input id="branch" placeholder="e.g. Mechanical" className="h-11" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="year">Passing Year *</Label>
              <Input id="year" required placeholder="2024 / 25 / 26" className="h-11" />
            </div>
          </div>
          <Button type="submit" size="lg" className="h-12 w-full rounded-full text-base font-semibold">
            Submit
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Your details are shared only with NAMTECH admissions.
          </p>
        </form>
      )}
    </div>
  );
}

function Overview() {
  return (
    <section id="overview" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Competition Overview
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              A national stage for India's next engineers.
            </h2>
            <div className="mt-6 overflow-hidden rounded-3xl border border-border">
              <img
                src={overviewEngineers}
                alt="Engineering students prototyping in an innovation lab"
                loading="lazy"
                width={1280}
                height={960}
                className="h-56 w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg lg:pt-20">
            <p>
              The <span className="font-semibold text-foreground">Bharat Innovation Challenge</span>{" "}
              is a national platform for B.Tech / BE engineers graduating in
              2024, 2025, and 2026 to showcase their innovation, creativity, and
              problem-solving capabilities.
            </p>
            <p>
              Participate with a final year project, semester project, prototype,
              startup idea, or independent academic innovation built during your
              engineering journey.
            </p>
            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">Submit</div>
                <div className="mt-2 text-lg font-bold text-foreground">2-Minute Elevator Pitch Video</div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">+</div>
                <div className="mt-2 text-lg font-bold text-foreground">Max 5-Slide Presentation (PDF)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const WHY = [
  { icon: Globe2, title: "Showcase Nationally", desc: "Stand out among India's top engineering talent." },
  { icon: BadgeIndianRupee, title: "Win Cash Prizes", desc: "Compete for a ₹2.25L prize pool at the Grand Finale." },
  { icon: Users, title: "Gain Industry Exposure", desc: "Get seen by mentors, founders, and recruiters." },
  { icon: TrendingUp, title: "Career Opportunities", desc: "Unlock future paths across innovation ecosystems." },
  { icon: Medal, title: "National Recognition", desc: "Build a profile that travels beyond your campus." },
  { icon: Landmark, title: "NAMTECH Campus Experience", desc: "Step into India's premier New Age Technology Institute with world-class infrastructure across innovation tracks." },
];

function Why() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Why Participate</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-5xl">
              Six reasons to put your idea on the line.
            </h2>
          </div>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-border sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-card p-6 transition hover:bg-secondary/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Rewards() {
  const prizes = [
    { place: "2nd Prize", amount: "₹75,000", rank: 2, icon: Medal, height: "h-44 sm:h-52", accent: "bg-primary-foreground/10" },
    { place: "1st Prize", amount: "₹1,00,000", rank: 1, icon: Trophy, height: "h-60 sm:h-72", accent: "bg-primary-foreground" },
    { place: "3rd Prize", amount: "₹50,000", rank: 3, icon: Award, height: "h-36 sm:h-44", accent: "bg-primary-foreground/10" },
  ];
  return (
    <section id="rewards" className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
              Rewards & Recognition
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
              Every shortlisted participant wins something real.
            </h2>
          </div>
          <div className="inline-flex items-center gap-3 self-start rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-2 backdrop-blur sm:self-end">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">₹2,25,000 total prize pool</span>
          </div>
        </div>

        {/* Podium */}
        <div className="mt-14">
          <div className="grid gap-5 sm:grid-cols-3 sm:items-end">
            {prizes.map((p) => {
              const Icon = p.icon;
              const isFirst = p.rank === 1;
              return (
                <div
                  key={p.place}
                  className={`flex flex-col items-center ${
                    p.rank === 1 ? "order-1 sm:order-2" : p.rank === 2 ? "order-2 sm:order-1" : "order-3 sm:order-3"
                  }`}
                >
                  {isFirst && (
                    <div className="relative z-20 mb-10 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-primary shadow-lg">
                      <Sparkles className="h-3.5 w-3.5" /> Top Winner
                    </div>
                  )}
                  <div
                    className={`relative flex w-full flex-col items-center justify-end rounded-t-3xl px-6 pb-7 pt-8 text-center ${p.height} ${
                      isFirst
                        ? "bg-primary-foreground text-primary shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.45)]"
                        : "bg-primary-foreground/10 text-primary-foreground ring-1 ring-inset ring-primary-foreground/15"
                    }`}
                  >
                    <span
                      className={`absolute -top-7 flex h-14 w-14 items-center justify-center rounded-full shadow-md ${
                        isFirst
                          ? "bg-primary text-primary-foreground ring-4 ring-primary-foreground"
                          : "bg-primary-foreground/15 text-primary-foreground ring-2 ring-primary-foreground/20 backdrop-blur"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className={`text-[10px] font-bold uppercase tracking-[0.18em] ${isFirst ? "text-primary/60" : "text-primary-foreground/60"}`}>
                      {p.place}
                    </div>
                    <div className={`mt-1 font-black tracking-tight ${isFirst ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"}`}>
                      {p.amount}
                    </div>
                    <div className={`mt-2 text-xs ${isFirst ? "text-primary/60" : "text-primary-foreground/60"}`}>
                      + Winner Certificate
                    </div>
                    <div
                      aria-hidden
                      className={`absolute bottom-3 right-4 select-none text-5xl font-black leading-none tracking-tighter ${
                        isFirst ? "text-primary/10" : "text-primary-foreground/15"
                      }`}
                    >
                      0{p.rank}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* podium plinth */}
          <div className="h-3 rounded-b-2xl bg-primary-foreground/20" />
        </div>

        {/* Experience Pass — full-width feature panel */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-primary-foreground/15 bg-primary-foreground text-foreground shadow-2xl">
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            <div className="relative min-h-[260px]">
              <img
                src={campusNamtech}
                alt="NAMTECH campus — premier New Age Technology Institute"
                loading="lazy"
                width={1280}
                height={720}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-primary/20 to-transparent" />
              <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary backdrop-blur">
                <CheckCircle2 className="h-3.5 w-3.5" /> Every Shortlisted Participant
              </div>
            </div>
            <div className="p-6 sm:p-10">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                All Shortlisted Participants Receive
              </div>
              <h3 className="mt-2 text-xl font-black sm:text-3xl">
                2-Day Fully Sponsored NAMTECH Experience Pass
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">Travel + accommodation included</p>

              <div className="mt-6 space-y-3">
                {[
                  { day: "Day 1", title: "Grand Finale Participation" },
                  { day: "Day 2", title: "Exclusive NAMTECH Campus Experience" },
                  { day: "+", title: "Participation E-Certificate" },
                ].map((d) => (
                  <div key={d.title} className="flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 p-3">
                    <div className="inline-flex h-10 w-14 shrink-0 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                      {d.day}
                    </div>
                    <div className="text-sm font-semibold sm:text-base">{d.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TRACKS = [
  { image: trackSmartManufacturing, name: "Smart Manufacturing", desc: "Industry 4.0, IoT-enabled production, digital twins, and intelligent factory systems." },
  { image: trackSemiconductor, name: "Semiconductor Technology", desc: "Chip design, fabrication processes, packaging innovation, and microelectronics." },
  { image: trackRobotics, name: "Robotics & Automation", desc: "Autonomous systems, cobots, precision automation, and intelligent control systems." },
  { image: trackDataAi, name: "Data Analytics & AI", desc: "Machine learning, predictive maintenance, quality AI, and smart decision systems." },
  { image: trackAutomotive, name: "Automotive Engineering", desc: "EV technology, autonomous vehicles, lightweight materials, and powertrain innovation." },
  { image: trackSustainability, name: "Sustainability Engineering", desc: "Green manufacturing, circular economy, energy efficiency, and decarbonisation pathways." },
  { image: trackOpenInnovation, name: "Open Innovation / Others", desc: "Breakthrough ideas that defy categories — the next big thing we have not seen yet." },
];

function Tracks() {
  return (
    <section id="tracks" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Innovation Tracks</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            Seven frontiers. Pick yours.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Submit your work under any one of these tracks — the same domains
            shaping India's manufacturing future.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map(({ name, desc, image }, i) => (
            <div
              key={name}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <img
                src={image}
                alt={name}
                loading="lazy"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/92 to-white/70" />
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Track 0{i + 1}
                </span>
                <span className="text-4xl font-black leading-none text-primary/20">
                  0{i + 1}
                </span>
              </div>
              <div className="relative z-10 mt-4 h-1 w-12 rounded-full bg-primary" />
              <h3 className="relative z-10 mt-5 text-xl font-bold leading-snug text-foreground">{name}</h3>
              <p className="relative z-10 mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      icon: FileUp,
      title: "Prepare Your Elevator Pitch Video",
      desc: "Record a crisp video pitch of your project, prototype, or startup idea.",
      detail: "MP4, up to 2 minutes, ≤ 200MB. Show the problem, your solution, and the impact. No fancy editing required — clarity wins.",
      time: "≤ 2 min video",
    },
    {
      icon: PenLine,
      title: "Prepare a Maximum 5-Slide Presentation",
      desc: "Summarise your idea in a concise deck — no more than 5 slides.",
      detail: "PDF, ≤ 10MB. Cover: problem, solution, tech, market, team. That's it — keep it sharp and visual.",
      time: "Max 5 slides",
    },
  ];
  return (
    <section id="process" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Submission Process</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Just two steps to enter.
            </h2>
            <p className="mt-3 text-muted-foreground">
              No long forms. No fine print. Submit your pitch and your deck — that's it.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative grid gap-5 rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_20px_50px_-25px_color-mix(in_oklab,var(--primary)_45%,transparent)] sm:p-8 md:grid-cols-[auto_1fr_auto] md:items-center"
              >
                {/* Step number + icon */}
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="relative">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_0_0_6px_color-mix(in_oklab,var(--primary)_12%,transparent)] sm:h-16 sm:w-16">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </span>
                  </div>
                  <span
                    aria-hidden
                    className="select-none text-5xl font-black leading-none tracking-tighter sm:text-6xl md:text-7xl"
                    style={{ WebkitTextStroke: "1.5px color-mix(in oklab, var(--primary) 45%, transparent)", color: "transparent" }}
                  >
                    0{i + 1}
                  </span>
                </div>

                {/* Text */}
                <div className="md:px-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                    <span>Step 0{i + 1}</span>
                    <span className="h-1 w-1 rounded-full bg-primary/40" />
                    <span className="text-muted-foreground">{s.time}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-bold sm:text-2xl">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>

                {/* Detail */}
                <div className="rounded-2xl border border-dashed border-primary/25 bg-primary/5 p-4 text-sm leading-relaxed text-foreground md:max-w-xs">
                  {s.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Eligibility() {
  const checks = [
    "B.Tech / BE Students Only",
    "Passing Year: 2024, 2025, or 2026",
    "No Active Backlogs",
  ];
  return (
    <section className="border-t border-border">
      <div className="mx-auto grid max-w-7xl items-end gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Eligibility</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            Are you on the list?
          </h2>
          <p className="mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
            Built for engineering students at the edge of graduation — ready to
            ship their ideas into the real world.
          </p>
          <div className="mt-6 overflow-hidden rounded-3xl border border-border">
            <img
              src={eligibilityStudents}
              alt="B.Tech students with a prototype and pitch deck"
              loading="lazy"
              width={1280}
              height={960}
              className="h-56 w-full object-cover"
            />
          </div>
        </div>
        <div>
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <ul className="space-y-5">
              {checks.map((c) => (
                <li key={c} className="flex items-start gap-4 border-b border-border pb-5 last:border-b-0 last:pb-0">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="text-base font-semibold text-foreground sm:text-lg">{c}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const phases = [
    {
      label: "Registration Opens",
      date: "25th May",
      icon: Rocket,
      blurb: "Sign up to lock your slot. Get instant access to submission guidelines and the project brief.",
    },
    {
      label: "Submission Deadline",
      date: "20th June",
      icon: FileCheck2,
      blurb: "Submit your 2-min pitch video and 5-slide deck before the gates close. Late entries won't be considered.",
    },
    {
      label: "Shortlist Announced",
      date: "23rd June",
      icon: Megaphone,
      blurb: "Top teams are emailed directly. Sponsored travel & stay details follow within 48 hours of the announcement.",
    },
    {
      label: "Grand Finale @ NAMTECH",
      date: "28th & 29th June",
      icon: Trophy,
      blurb: "Two days on campus — Thursday & Friday: pitch to the jury, tour labs, meet founders, and walk away with prizes & internship offers.",
    },
  ];
  return (
    <section className="relative overflow-hidden border-t border-border bg-secondary/40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,hsl(var(--primary)/0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Timeline</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-5xl">
          Four phases. One shot.
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Here is exactly how the season unfolds. Mark your calendar — the Grand Finale is a 2-day event at NAMTECH on 28th & 29th June.
        </p>

        {/* Editorial timeline — giant outlined numerals as the spine */}
        <ol className="mt-16 divide-y divide-border border-y border-border">
          {phases.map((p, i) => {
            const Icon = p.icon;
            return (
              <li
                key={p.label}
                className="group grid grid-cols-[auto_1fr] items-center gap-4 py-6 transition-colors sm:grid-cols-[auto_auto_1fr_auto] sm:gap-10 sm:py-8"
              >
                {/* Giant outlined numeral */}
                <span
                  aria-hidden
                  className="select-none text-[2.75rem] font-black leading-none tracking-tighter text-transparent transition-all duration-300 sm:text-[5rem] group-hover:[--tw-text-opacity:1]"
                  style={{
                    WebkitTextStroke: "1.5px color-mix(in oklab, var(--primary) 55%, transparent)",
                  }}
                >
                  0{i + 1}
                </span>

                {/* Icon node */}
                <span className="hidden h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground sm:inline-flex">
                  <Icon className="h-5 w-5" />
                </span>

                {/* Label + blurb */}
                <div className="min-w-0">
                  <h3 className="text-lg font-black tracking-tight sm:text-2xl">{p.label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:max-w-xl">{p.blurb}</p>
                </div>

                {/* Date pill */}
                <div className="col-span-2 flex items-center sm:col-span-1 sm:justify-end">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {p.date}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function FAQs() {
  const faqs = [
    {
      q: "Who can apply for the Bharat Innovation Challenge?",
      a: "B.Tech / BE students from across India graduating in 2024, 2025, or 2026 with no active backlogs.",
    },
    {
      q: "What do I need to submit?",
      a: "A 2-minute elevator pitch video, a maximum 5-slide PDF presentation of your project, and your registration confirmation screenshot.",
    },
    {
      q: "Can I submit a team project?",
      a: "Yes — final year projects, semester projects, prototypes, and startup ideas built with a team are welcome. One member should register as the primary contact.",
    },
    {
      q: "Will travel and stay for the finale be covered?",
      a: "Yes. All shortlisted participants get a fully sponsored 2-day Experience Pass including travel and accommodation.",
    },
  ];
  return (
    <section id="faq" className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">FAQs</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            Questions, answered.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Still curious? Write to us at{" "}
            <a href="mailto:met@namtech.ac" className="font-semibold text-foreground underline decoration-primary/40 underline-offset-4">
              met@namtech.ac
            </a>
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`q-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-sm font-semibold sm:text-base">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="border-t border-border bg-primary text-primary-foreground">
      <div className="relative mx-auto max-w-7xl overflow-hidden px-4 py-14 text-center sm:px-6 sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2), transparent 45%)",
          }}
        />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
            One application. National stage.
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            Your innovation deserves a national stage.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
            Register now and take your idea to the Grand Finale at NAMTECH.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="h-12 rounded-full bg-background px-7 text-sm font-bold text-foreground hover:bg-background/90 sm:h-14 sm:px-9 sm:text-base">
              <a href="#register">
                Register Now <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center sm:px-6 sm:py-12">
        <NamtechMark />
        <div className="text-xs text-muted-foreground sm:text-sm">
          © {new Date().getFullYear()} NAMTECH · Bharat Innovation Challenge
        </div>
        <div className="flex gap-5 text-xs text-muted-foreground sm:gap-6 sm:text-sm">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="mailto:met@namtech.ac" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function StickyApply() {
  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <Button
        asChild
        size="lg"
        className="h-12 rounded-full px-5 text-sm font-bold shadow-[0_12px_40px_-10px_color-mix(in_oklab,var(--primary)_50%,transparent)] transition-transform hover:scale-105 sm:h-14 sm:px-8 sm:text-base"
      >
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSencY3qVUwUH1bSDQ04wHheAQbjN06IIQMyK5SrtUY3_0PrCg/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register Now <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <FloatingLogo />
      <main>
        <Hero />
        <Overview />
        <Why />
        <Tracks />
        <Rewards />
        <Process />
        <Eligibility />
        <Timeline />
        <FAQs />
        <FinalCTA />
      </main>
      <StickyApply />
    </div>
  );
}