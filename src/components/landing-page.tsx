import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import heroInnovation from "@/assets/hero-innovation.jpg";
import overviewEngineers from "@/assets/overview-engineers.jpg";
import campusNamtech from "@/assets/campus-namtech.jpg";
import eligibilityStudents from "@/assets/eligibility-students.jpg";
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
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-12 pt-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pt-16">
        <div>
          <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            BHARAT INNOVATION
            <br />
            <span className="text-primary">CHALLENGE</span>
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

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
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
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Competition Overview
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
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
  { icon: Globe2, title: "Showcase Nationally", desc: "Stand out among India's top engineering talent." },
  { icon: BadgeIndianRupee, title: "Win Cash Prizes", desc: "Compete for a ₹1.03L prize pool at the Grand Finale." },
  { icon: Users, title: "Gain Industry Exposure", desc: "Get seen by mentors, founders, and recruiters." },
  { icon: TrendingUp, title: "Career Opportunities", desc: "Unlock future paths across innovation ecosystems." },
  { icon: Medal, title: "National Recognition", desc: "Build a profile that travels beyond your campus." },
  { icon: Landmark, title: "NAMTECH Campus Experience", desc: "Step into India's premier manufacturing institute." },
];

function Why() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Why Participate</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
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
    { place: "1st Prize", amount: "₹51,000", tone: "text-primary" },
    { place: "2nd Prize", amount: "₹31,000", tone: "text-foreground" },
    { place: "3rd Prize", amount: "₹21,000", tone: "text-foreground" },
  ];
  return (
    <section id="rewards" className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
          Rewards & Recognition
        </p>
        <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
          Every shortlisted participant wins something real.
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-border bg-background p-8 text-foreground">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              All Shortlisted Participants Receive
            </div>
            <h3 className="mt-3 text-2xl font-bold">
              2-Day Fully Sponsored NAMTECH Experience Pass
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">Travel + accommodation included</p>

            <div className="mt-5 overflow-hidden rounded-2xl border border-border">
              <img
                src={campusNamtech}
                alt="NAMTECH campus — advanced manufacturing institute"
                loading="lazy"
                width={1280}
                height={720}
                className="h-40 w-full object-cover"
              />
            </div>

            <div className="mt-7 space-y-4">
              {[
                { day: "Day 1", title: "Grand Finale Participation" },
                { day: "Day 2", title: "Exclusive NAMTECH Campus Experience" },
                { day: "+", title: "Participation E-Certificate" },
              ].map((d) => (
                <div key={d.title} className="flex items-start gap-4 border-t border-border pt-4 first:border-t-0 first:pt-0">
                  <div className="mt-0.5 inline-flex h-9 w-12 items-center justify-center rounded-md bg-muted text-xs font-bold text-foreground">
                    {d.day}
                  </div>
                  <div className="text-base font-semibold">{d.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center rounded-3xl border border-border bg-background p-8 text-center text-foreground">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Grand Finale Winner Prizes
            </div>
            <div className="mt-6 w-full space-y-4">
              {prizes.map((p, i) => {
                const isFirst = i === 0;
                return (
                  <div
                    key={p.place}
                    className={`flex flex-col items-center justify-center rounded-2xl text-foreground ${
                      isFirst
                        ? "bg-primary/10 p-8 ring-2 ring-primary/30"
                        : "bg-muted p-5"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center rounded-full bg-primary/10 font-black text-primary ${
                        isFirst ? "h-14 w-14 text-xl" : "h-10 w-10 text-sm"
                      }`}
                    >
                      {i + 1}
                    </div>
                    <div
                      className={`mt-3 uppercase tracking-wider text-muted-foreground ${
                        isFirst ? "text-sm font-semibold" : "text-xs"
                      }`}
                    >
                      {p.place}
                    </div>
                    <div
                      className={`text-muted-foreground ${
                        isFirst ? "text-sm" : "text-xs"
                      }`}
                    >
                      + Winner Certificate
                    </div>
                    <div
                      className={`mt-3 font-black tracking-tight ${p.tone} ${
                        isFirst ? "text-5xl sm:text-6xl" : "text-2xl"
                      }`}
                    >
                      {p.amount}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TRACKS = [
  { icon: Cpu, name: "Smart Manufacturing", desc: "Industry 4.0, IoT-enabled production, digital twins, and intelligent factory systems.", color: "#4f46e5" },
  { icon: CircuitBoard, name: "Semiconductor Technology", desc: "Chip design, fabrication processes, packaging innovation, and microelectronics.", color: "#7c3aed" },
  { icon: Leaf, name: "Sustainability Engineering", desc: "Green manufacturing, circular economy, carbon-neutral processes, and eco-design.", color: "#059669" },
  { icon: Bot, name: "Robotics & Automation", desc: "Autonomous systems, cobots, precision automation, and intelligent control systems.", color: "#db2777" },
  { icon: BarChart3, name: "Data Analytics & AI", desc: "Machine learning, predictive maintenance, quality AI, and smart decision systems.", color: "#2563eb" },
  { icon: Car, name: "Automotive Engineering", desc: "EV technology, autonomous vehicles, lightweight materials, and powertrain innovation.", color: "#d97706" },
  { icon: Lightbulb, name: "Open Innovation / Others", desc: "Breakthrough ideas that defy categories — the next big thing we have not seen yet.", color: "#7c2d12" },
];

function Tracks() {
  return (
    <section id="tracks" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
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

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map(({ name, desc, color }, i) => (
            <div
              key={name}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(circle, ${color}33 0%, transparent 70%)` }}
              />
              <div className="relative z-10 flex items-center justify-between">
                <span
                  className="text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color }}
                >
                  Track 0{i + 1}
                </span>
                <span
                  className="text-4xl font-black leading-none opacity-10"
                  style={{ color }}
                >
                  0{i + 1}
                </span>
              </div>
              <div
                className="relative z-10 mt-4 h-1 w-12 rounded-full"
                style={{ backgroundColor: color }}
              />
              <h3 className="relative z-10 mt-5 text-xl font-bold leading-snug">{name}</h3>
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
      icon: ScanLine,
      title: "Scan & Pay ₹1",
      desc: "Scan the QR code and complete the ₹1 registration payment. Save the confirmation screenshot.",
      detail: "Use any UPI app — GPay, PhonePe, Paytm. Takes under 30 seconds. Screenshot the success page; you'll attach it in step 3.",
      time: "30 sec",
    },
    {
      icon: PenLine,
      title: "Complete Form",
      desc: "Fill in the registration form with your academic and personal details.",
      detail: "Name, email, mobile, college, branch, passing year. All fields are short — no essays, no uploads here.",
      time: "2 min",
    },
    {
      icon: FileUp,
      title: "Upload Submission",
      desc: "Submit your 2-min pitch video, 5-slide PDF, and ₹1 payment receipt.",
      detail: "Pitch video (MP4, ≤ 200MB), slide deck (PDF, ≤ 10MB), payment screenshot (PNG/JPG). Drag & drop or browse.",
      time: "5 min",
    },
  ];
  const [active, setActive] = useState(0);
  const Current = steps[active].icon;
  return (
    <section id="process" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Submission Process</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Three steps. About 10 minutes.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tap any step to see exactly what happens. No surprises, no fine print.
            </p>
          </div>
        </div>

        <div className="relative mt-12">
          {/* connector base */}
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-1 rounded-full bg-border md:block" />
          {/* animated progress */}
          <div
            className="pointer-events-none absolute left-0 top-9 hidden h-1 rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-500 ease-out md:block"
            style={{ width: `${((active + 1) / steps.length) * 100}%` }}
          />

          <div className="relative grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === active;
              const isDone = i < active;
              return (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className={`group relative flex flex-col items-start rounded-3xl border bg-card p-7 text-left transition-all duration-300 focus:outline-none ${
                    isActive
                      ? "-translate-y-1 border-primary shadow-[0_20px_50px_-20px_color-mix(in_oklab,var(--primary)_55%,transparent)]"
                      : "border-border hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <span
                      className={`relative flex h-[72px] w-[72px] items-center justify-center rounded-2xl transition-all duration-300 ${
                        isActive
                          ? "scale-110 bg-primary text-primary-foreground shadow-[0_0_0_6px_color-mix(in_oklab,var(--primary)_18%,transparent)]"
                          : isDone
                          ? "bg-primary/15 text-primary"
                          : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                      }`}
                    >
                      {isDone ? <Check className="h-7 w-7" /> : <Icon className="h-7 w-7" />}
                      {isActive && (
                        <span className="absolute inset-0 animate-ping rounded-2xl bg-primary/25" />
                      )}
                    </span>
                    <span
                      className={`text-5xl font-black tracking-tight transition-colors ${
                        isActive ? "text-primary/30" : "text-primary/10"
                      }`}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    <span className={isActive ? "text-primary" : ""}>Step 0{i + 1}</span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                    <span>{s.time}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div
                    className={`grid w-full transition-all duration-500 ease-out ${
                      isActive ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed text-foreground">
                        {s.detail}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
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
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 py-16 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Eligibility</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Are you on the list?
          </h2>
          <p className="mt-4 max-w-md text-lg text-muted-foreground">
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
          <p className="invisible hidden text-xs font-semibold uppercase tracking-[0.18em] lg:block" aria-hidden>
            Spacer
          </p>
          <h2 className="invisible hidden text-4xl font-black tracking-tight sm:text-5xl lg:mt-3 lg:block" aria-hidden>
            &nbsp;
          </h2>
          <div className="rounded-3xl border border-border bg-card p-8 lg:mt-4">
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
      </div>
    </section>
  );
}

function Timeline() {
  const phases = [
    {
      label: "Registration Opens",
      date: "TBD",
      icon: Rocket,
      blurb: "Sign up with ₹1 to lock your slot. Get instant access to submission guidelines and the project brief.",
    },
    {
      label: "Submission Deadline",
      date: "TBD",
      icon: FileCheck2,
      blurb: "Submit your 2-min pitch video and 5-slide deck before the gates close. Late entries won't be considered.",
    },
    {
      label: "Shortlist Announced",
      date: "TBD",
      icon: Megaphone,
      blurb: "Top teams are emailed directly. Sponsored travel & stay details follow within 48 hours of the announcement.",
    },
    {
      label: "Grand Finale @ NAMTECH",
      date: "TBD",
      icon: Trophy,
      blurb: "Two days on campus: pitch to the jury, tour labs, meet founders, and walk away with prizes & internship offers.",
    },
  ];
  const [active, setActive] = useState(0);
  const Current = phases[active].icon;
  return (
    <section className="relative overflow-hidden border-t border-border bg-secondary/40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,hsl(var(--primary)/0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Timeline</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
          Four phases. One shot.
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Tap a phase to see what happens. Specific dates drop soon — registrations stay open until then.
        </p>

        {/* Track */}
        <div className="relative mt-14">
          {/* base line */}
          <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-border md:block" />
          {/* progress line */}
          <div
            className="absolute left-0 top-7 hidden h-0.5 bg-gradient-to-r from-primary to-primary/60 transition-all duration-500 ease-out md:block"
            style={{ width: `${(active / (phases.length - 1)) * 100}%` }}
          />

          <div className="grid gap-10 md:grid-cols-4 md:gap-4">
            {phases.map((p, i) => {
              const Icon = p.icon;
              const isActive = i === active;
              const isDone = i < active;
              return (
                <button
                  key={p.label}
                  onClick={() => setActive(i)}
                  className="group relative flex flex-col items-center text-center focus:outline-none"
                >
                  <span
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? "scale-110 border-primary bg-primary text-primary-foreground shadow-[0_0_0_6px_hsl(var(--primary)/0.15)]"
                        : isDone
                        ? "border-primary bg-primary/15 text-primary"
                        : "border-border bg-card text-muted-foreground group-hover:border-primary/60 group-hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                    {isActive && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
                    )}
                  </span>
                  <div
                    className={`mt-4 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    Phase 0{i + 1}
                  </div>
                  <div
                    className={`mt-1 text-sm font-semibold leading-snug transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {p.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active detail card */}
        <div
          key={active}
          className="mt-12 grid animate-fade-in gap-6 rounded-3xl border border-border bg-card p-6 sm:p-8 md:grid-cols-[auto_1fr_auto] md:items-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Current className="h-8 w-8" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Phase 0{active + 1} of 0{phases.length}
            </div>
            <h3 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">
              {phases[active].label}
            </h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">{phases[active].blurb}</p>
          </div>
          <div className="flex items-center gap-3 md:flex-col md:items-end">
            <div className="text-right">
              <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Date</div>
              <div className="text-2xl font-black tracking-tight">{phases[active].date}</div>
            </div>
            <button
              onClick={() => setActive((a) => (a + 1) % phases.length)}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Next phase <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
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
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_1.4fr]">
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
      <div className="relative mx-auto max-w-7xl overflow-hidden px-6 py-16 text-center">
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

function StickyApply() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            size="lg"
            className="h-14 rounded-full px-8 text-base font-bold shadow-[0_12px_40px_-10px_color-mix(in_oklab,var(--primary)_50%,transparent)] transition-transform hover:scale-105"
          >
            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="mx-auto max-h-[85vh] max-w-xl rounded-t-3xl border-border bg-card p-0">
          <div className="sr-only">
            <SheetTitle>Apply Now</SheetTitle>
          </div>
          <div className="overflow-y-auto p-6">
            <RegistrationCard />
          </div>
        </SheetContent>
      </Sheet>
    </div>
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
      <StickyApply />
    </div>
  );
}