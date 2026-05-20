import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Trophy,
  Award,
  Briefcase,
  GraduationCap,
  Flag,
  Building2,
  Cpu,
  CircuitBoard,
  Leaf,
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

function NamtechMark() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-baseline text-xl font-black tracking-tight text-foreground">
        <span>NAM</span>
        <span className="text-primary">:</span>
        <span>TECH</span>
      </div>
      <div className="hidden h-6 w-px bg-border sm:block" />
      <div className="hidden text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:block">
        Institute of
        <br />
        Manufacturing Innovation
      </div>
    </div>
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

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <NamtechMark />
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#overview" className="hover:text-foreground">Overview</a>
          <a href="#tracks" className="hover:text-foreground">Tracks</a>
          <a href="#rewards" className="hover:text-foreground">Rewards</a>
          <a href="#process" className="hover:text-foreground">How to Apply</a>
          <a href="#faq" className="hover:text-foreground">FAQs</a>
        </nav>
        <Button asChild size="sm" className="rounded-full px-5">
          <a href="#register">Register · ₹1</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GridBackdrop />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pt-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Bharat Innovation Challenge · 2026
          </div>
          <h1 className="mt-6 text-5xl font-black leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            I am India.
            <br />
            <span className="text-primary">I build the future.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            A national innovation platform for B.Tech & BE engineers graduating in
            2024, 2025, and 2026. Showcase your project, prototype, or startup
            idea — and take it to the Grand Finale at NAMTECH.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-12 rounded-full px-7 text-base font-semibold">
              <a href="#register">
                Register Now for ₹1 <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-foreground/15 px-7 text-base">
              <a href="#overview">Learn more</a>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "₹1", v: "Registration" },
              { k: "₹1.03L", v: "Prize Pool" },
              { k: "7", v: "Innovation Tracks" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-black tracking-tight text-foreground">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="register" className="lg:pt-6">
          <RegistrationCard />
        </div>
      </div>
    </section>
  );
}

function RegistrationCard() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="rounded-3xl border border-border bg-card p-7 shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--primary)_35%,transparent)]">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        <Sparkles className="h-3.5 w-3.5" /> Apply Now
      </div>
      <h2 className="mt-2 text-3xl font-black tracking-tight">Claim your spot</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Just ₹1 to register. Quick form. No commitments after.
      </p>

      {submitted ? (
        <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5">
          <CheckCircle2 className="h-6 w-6 text-primary" />
          <h3 className="mt-3 text-lg font-bold">You're on the list.</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Check your inbox for next steps and the ₹1 payment QR.
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
            Submit · Pay ₹1
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
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Competition Overview
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              A national stage for India's next engineers.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
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
  { icon: Flag, title: "Showcase Nationally", desc: "Stand out among India's top engineering talent." },
  { icon: Trophy, title: "Win Cash Prizes", desc: "Compete for a ₹1.03L prize pool at the Grand Finale." },
  { icon: Briefcase, title: "Gain Industry Exposure", desc: "Get seen by mentors, founders, and recruiters." },
  { icon: GraduationCap, title: "Career Opportunities", desc: "Unlock future paths across innovation ecosystems." },
  { icon: Award, title: "National Recognition", desc: "Build a profile that travels beyond your campus." },
  { icon: Building2, title: "NAMTECH Campus Experience", desc: "Step into India's premier manufacturing institute." },
];

function Why() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Why Participate</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
              Six reasons to put your idea on the line.
            </h2>
          </div>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-border sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-card p-8 transition hover:bg-secondary/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
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
    { place: "1st Prize", amount: "₹51,000", tone: "text-primary" },
    { place: "2nd Prize", amount: "₹31,000", tone: "text-foreground" },
    { place: "3rd Prize", amount: "₹21,000", tone: "text-foreground" },
  ];
  return (
    <section id="rewards" className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/60">
          Rewards & Recognition
        </p>
        <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
          Every shortlisted participant wins something real.
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-background/10 bg-background/5 p-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-background/60">
              All Shortlisted Participants Receive
            </div>
            <h3 className="mt-3 text-2xl font-bold">
              2-Day Fully Sponsored NAMTECH Experience Pass
            </h3>
            <p className="mt-1 text-sm text-background/60">Travel + accommodation included</p>

            <div className="mt-7 space-y-4">
              {[
                { day: "Day 1", title: "Grand Finale Participation" },
                { day: "Day 2", title: "Exclusive NAMTECH Campus Experience" },
                { day: "+", title: "Participation E-Certificate" },
              ].map((d) => (
                <div key={d.title} className="flex items-start gap-4 border-t border-background/10 pt-4 first:border-t-0 first:pt-0">
                  <div className="mt-0.5 inline-flex h-9 w-12 items-center justify-center rounded-md bg-background/10 text-xs font-bold">
                    {d.day}
                  </div>
                  <div className="text-base font-semibold">{d.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-background/10 bg-background/5 p-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-background/60">
              Grand Finale Winner Prizes
            </div>
            <div className="mt-6 space-y-4">
              {prizes.map((p, i) => (
                <div
                  key={p.place}
                  className="flex items-center justify-between rounded-2xl bg-background p-5 text-foreground"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-black text-primary">
                      {i + 1}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">{p.place}</div>
                      <div className="text-xs text-muted-foreground">+ Winner Certificate</div>
                    </div>
                  </div>
                  <div className={`text-2xl font-black tracking-tight ${p.tone}`}>{p.amount}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TRACKS = [
  { icon: Cpu, name: "Smart Manufacturing" },
  { icon: CircuitBoard, name: "Semiconductor Technology" },
  { icon: Leaf, name: "Sustainability Engineering" },
  { icon: Bot, name: "Robotics & Automation" },
  { icon: BarChart3, name: "Data Analytics & AI" },
  { icon: Car, name: "Automotive Engineering" },
  { icon: Lightbulb, name: "Open Innovation / Others" },
];

function Tracks() {
  return (
    <section id="tracks" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Innovation Tracks</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Seven frontiers. Pick yours.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Submit your work under any one of these tracks — the same domains
            shaping India's manufacturing future.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRACKS.map(({ icon: Icon, name }, i) => (
            <div
              key={name}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-10">
                <div className="text-xs font-medium text-muted-foreground">Track 0{i + 1}</div>
                <div className="mt-1 text-base font-bold leading-snug">{name}</div>
              </div>
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
      icon: QrCode,
      title: "Scan & Pay ₹1",
      desc: "Scan the QR code and complete the ₹1 registration payment. Save the confirmation screenshot.",
    },
    {
      icon: ClipboardList,
      title: "Complete Form",
      desc: "Fill in the registration form with your academic and personal details.",
    },
    {
      icon: UploadCloud,
      title: "Upload Submission",
      desc: "Submit your 2-min pitch video, 5-slide PDF, and ₹1 payment receipt.",
    },
  ];
  return (
    <section id="process" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Submission Process</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Three steps. About 10 minutes.
            </h2>
          </div>
        </div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-3xl border border-border bg-card p-7">
              <div className="flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <s.icon className="h-7 w-7" />
                </div>
                <span className="text-5xl font-black tracking-tight text-primary/10">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Required submissions:</span>{" "}
          2-Minute Elevator Pitch Video · 5-Slide Project Presentation (PDF) · ₹1
          Payment Confirmation Screenshot / Receipt.
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
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Eligibility</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Are you on the list?
          </h2>
          <p className="mt-4 max-w-md text-lg text-muted-foreground">
            Built for engineering students at the edge of graduation — ready to
            ship their ideas into the real world.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8">
          <ul className="space-y-5">
            {checks.map((c) => (
              <li key={c} className="flex items-start gap-4 border-b border-border pb-5 last:border-b-0 last:pb-0">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div className="text-lg font-semibold text-foreground">{c}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const phases = [
    { label: "Registration Opens", date: "TBD" },
    { label: "Submission Deadline", date: "TBD" },
    { label: "Shortlist Announced", date: "TBD" },
    { label: "Grand Finale @ NAMTECH", date: "TBD" },
  ];
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Timeline</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
          Key dates, coming soon.
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((p, i) => (
            <div key={p.label} className="rounded-2xl border border-border bg-card p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-primary">Phase 0{i + 1}</div>
              <div className="mt-3 text-lg font-bold leading-snug">{p.label}</div>
              <div className="mt-4 text-3xl font-black tracking-tight text-muted-foreground">
                {p.date}
              </div>
            </div>
          ))}
        </div>
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
      q: "What does the ₹1 registration cover?",
      a: "It confirms your application and locks in your submission slot. Shortlisted candidates get a fully sponsored 2-day Grand Finale experience at NAMTECH.",
    },
    {
      q: "What do I need to submit?",
      a: "A 2-minute elevator pitch video, a maximum 5-slide PDF presentation of your project, and your ₹1 payment confirmation screenshot.",
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
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">FAQs</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Questions, answered.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Still curious? Write to us at{" "}
            <a href="mailto:admissions@namtech.ac.in" className="font-semibold text-foreground underline decoration-primary/40 underline-offset-4">
              admissions@namtech.ac.in
            </a>
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`q-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-semibold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
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
      <div className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 text-center">
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
          <h2 className="mx-auto mt-4 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            Your innovation deserves a national stage.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/80">
            Register now for just ₹1 and take your idea to the Grand Finale at NAMTECH.
          </p>
          <div className="mt-9">
            <Button asChild size="lg" variant="secondary" className="h-14 rounded-full bg-background px-9 text-base font-bold text-foreground hover:bg-background/90">
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
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center">
        <NamtechMark />
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} NAMTECH · Bharat Innovation Challenge
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="mailto:admissions@namtech.ac.in" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
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
      <Footer />
    </div>
  );
}