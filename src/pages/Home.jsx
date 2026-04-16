import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  Briefcase,
  Building2,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import { COLLEGE_NAME } from "../constants/college";
import { courses } from "../constants/courses";

/* ── helpers ── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("is-visible"),
        ),
      { threshold: 0.1 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ── data ── */
const stats = [
  { value: "3,200+", label: "Students Enrolled", icon: GraduationCap },
  { value: "94%", label: "Placement Rate", icon: Briefcase },
  { value: "250+", label: "Recruiter Partners", icon: Building2 },
  { value: "46 yrs", label: "Of Excellence", icon: Award },
];

const recruiters = [
  "TCS",
  "Infosys",
  "Wipro",
  "CTS",
  "Deloitte",
  "HDFC Bank",
  "Axis Bank",
  "Accenture",
  "HCL",
  "IBM",
  "Zoho",
  "Freshworks",
  "TCS",
  "Infosys",
  "Wipro",
  "CTS",
  "Deloitte",
  "HDFC Bank",
  "Axis Bank",
  "Accenture",
  "HCL",
  "IBM",
  "Zoho",
  "Freshworks",
];

const testimonials = [
  {
    name: "Priya Krishnamurthy",
    batch: "B.Com – General 2023",
    company: "Deloitte USI",
    quote:
      "The placement cell was incredible. I got placed before graduation with a package I didn't even dream of. The faculty genuinely cares about your career.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200",
  },
  {
    name: "Arjun Selvam",
    batch: "B.Sc Psychology 2023",
    company: "Zoho Corp",
    quote:
      "The AI & Data Science specialisation gave me an edge. Projects were industry-relevant and the professors had real corporate experience.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
  },
  {
    name: "Sneha Ramachandran",
    batch: "BBA – Business Administration 2022",
    company: "HDFC Bank",
    quote:
      "From personality development workshops to mock interviews, the college prepares you completely. I had 4 offers before the final year ended.",
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200",
  },
];

const features = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "Industry-First Curriculum",
    desc: "Programs co-designed with industry partners to ensure every graduate is employment-ready from day one.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: "NAAC A++ Accredited",
    desc: "Among the top-ranked autonomous colleges in Tamil Nadu, re-accredited with CGPA 3.59 — the highest in our category.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Expert Faculty",
    desc: "140+ experienced faculty members, many with industry backgrounds and PhD qualifications from premier institutions.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
        />
      </svg>
    ),
    title: "Global Exposure",
    desc: "MoUs with 30+ companies & institutions. Study tours, international seminars, and exchange programs.",
  },
];

const campusImages = [
  {
    url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=900",
    label: "Main Campus",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600",
    label: "Smart Classrooms",
    span: "",
  },
  {
    url: "https://designcollaborative.com/wp-content/uploads/2024/02/11.16.22_066-scaled.webp",
    label: "Science Labs",
    span: "",
  },
  {
    url: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=600",
    label: "Central Library",
    span: "md:col-span-2",
  },
];

/* ── component ── */
export default function Home() {
  useScrollReveal();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const prevOverflowX = document.body.style.overflowX;
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = prevOverflowX;
    };
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setActiveTestimonial((p) => (p + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
        {/* Background image + overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/college.jpg"
            alt=""
            className="w-full h-full object-cover blur-[3px] scale-105"
            loading="eager"
            fetchPriority="high"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* change circle */}
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              <span className="block">{COLLEGE_NAME}</span>
              <span className="block italic font-light">Future with</span>
              <span className="block text-gold">Industry-Ready</span>
              <span className="block">Education.</span>
            </h1>

            <p className="text-white/60 font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              {COLLEGE_NAME} is a NAAC A++ accredited autonomous college in
              Chennai - 46 years of shaping careers across Arts, Science,
              Commerce &amp; Technology.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/admissions"
                className="bg-gold text-white px-5 py-2.5 rounded-full font-sans font-600 text-sm tracking-wide hover:bg-gold-dark hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Apply Now →
              </Link>
              <button className="border border-white/25 text-white px-5 py-2.5 rounded-full font-sans text-sm hover:bg-white/8 transition-all">
                Talk to Counsellor
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-0 translate-y-[100px] md:bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
            <span className="text-white text-xs font-sans tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-px h-10 bg-white/40" />
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-gold py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="mb-2 flex justify-center">
                  <s.icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div className="font-serif text-3xl md:text-4xl text-white font-600">
                  {s.value}
                </div>
                <div className="text-white/70 text-sm font-sans mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES PREVIEW ── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal animate-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="section-label">Academic Programs</div>
              <h2 className="section-heading">
                Courses designed for
                <br />
                <em className="font-light">the careers of tomorrow</em>
              </h2>
            </div>
            <Link
              to="/courses"
              className="border border-navy/20 text-navy px-6 py-3 rounded-full text-sm font-sans font-500 hover:bg-navy hover:text-white transition-all self-start md:self-auto"
            >
              View All Courses →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c, i) => (
              <Link
                key={i}
                to={`/courses/${c.slug}`}
                className="reveal animate-on-scroll group bg-white rounded-2xl p-6 border border-navy/5 hover:border-gold/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <h3 className="font-serif text-xl text-navy font-600 mb-3">
                  {c.name}
                </h3>
                <p className="text-muted text-sm font-sans leading-relaxed mb-5">
                  {c.shortDescription}
                </p>
                <div className="pt-3 border-t border-cream">
                  <span className="inline-flex items-center gap-2 text-gold-dark font-sans text-sm font-600">
                    View Details
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image collage */}
            <div className="reveal animate-on-scroll relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600"
                  alt="Students"
                  className="rounded-2xl w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=600"
                  alt="Campus"
                  className="rounded-2xl w-full h-48 object-cover mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600"
                  alt="Classroom"
                  className="rounded-2xl w-full h-48 object-cover col-span-2"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-navy text-white rounded-2xl px-5 py-4 shadow-xl">
                <div className="font-serif text-2xl font-600 text-gold">46</div>
                <div className="text-white/60 text-xs font-sans">
                  Years of
                  <br />
                  Excellence
                </div>
              </div>
            </div>

            {/* Text + Features */}
            <div className="reveal animate-on-scroll">
              <div className="section-label">Why Choose Us</div>
              <h2 className="section-heading mb-6">
                Where potential meets
                <br />
                <em className="font-light">purpose</em>
              </h2>
              <p className="text-muted font-sans leading-relaxed mb-10">
                We don't just offer degrees — we build professionals. Every
                program at the college is crafted with industry alignment,
                mentorship, and outcomes in mind.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {features.map((f, i) => (
                  <div key={i} className="group">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-3 group-hover:bg-gold group-hover:text-white transition-all">
                      {f.icon}
                    </div>
                    <h4 className="font-sans font-600 text-navy text-sm mb-1.5">
                      {f.title}
                    </h4>
                    <p className="text-muted text-sm font-sans leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex gap-3">
                <Link to="/about" className="btn-outline-dark">
                  Learn More About Us
                </Link>
                <Link to="/admissions" className="btn-primary">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECRUITERS MARQUEE ── */}
      <section className="py-16 bg-cream border-y border-navy/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <div className="section-label">Our Recruiters</div>
          <h2 className="font-serif text-3xl text-navy">
            250+ companies hire our graduates every year
          </h2>
        </div>
        <div className="marquee-container relative overflow-hidden">
          <div className="marquee-track flex gap-6 animate-marquee whitespace-nowrap w-max">
            {recruiters.map((r, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-white border border-navy/5 rounded-xl px-8 py-4 font-sans font-600 text-navy/60 text-sm hover:border-gold/40 hover:text-navy transition-all shadow-sm"
              >
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPUS VISUALS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal animate-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="section-label">Campus Life</div>
              <h2 className="section-heading">
                A campus built for
                <br />
                <em className="font-light">modern learners</em>
              </h2>
            </div>
            <Link
              to="/campus"
              className="border border-navy/20 text-navy px-6 py-3 rounded-full text-sm font-sans font-500 hover:bg-navy hover:text-white transition-all self-start md:self-auto"
            >
              Explore Campus →
            </Link>
          </div>

          <div className="reveal animate-on-scroll grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4">
            {campusImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl group ${img.span}`}
              >
                <img
                  src={img.url}
                  alt={img.label}
                  className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-sans text-sm font-600">
                  {img.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-navy overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-gold text-xs font-sans tracking-[0.2em] uppercase mb-3">
              Student Stories
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              What our alumni say
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`bg-white/5 border rounded-2xl p-7 transition-all duration-500 ${activeTestimonial === i ? "border-gold/40 bg-white/8 scale-[1.02]" : "border-white/5"}`}
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <svg
                      key={s}
                      className="w-4 h-4 text-gold fill-gold"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 font-sans text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-gold/20"
                  />
                  <div>
                    <div className="text-white font-sans font-600 text-sm">
                      {t.name}
                    </div>
                    <div className="text-white/40 text-xs font-sans">
                      {t.batch} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`rounded-full transition-all ${activeTestimonial === i ? "w-6 h-2 bg-gold" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── AI ASSISTANT FEATURE ── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal animate-on-scroll">
              <div className="section-label">AI-Powered Support</div>
              <h2 className="section-heading mb-6">
                Meet Asha, your
                <br />
                <em className="font-light">AI counsellor</em>
              </h2>
              <p className="text-muted font-sans leading-relaxed mb-8">
                Available 24/7 in English, Tamil, and Tanglish. Get instant
                answers about courses, admissions, fees, and campus life — no
                waiting, no forms.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Course & career guidance",
                  "Admission eligibility check",
                  "Fee structure queries",
                  "Connects to human counsellor",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-sans text-navy/80"
                  >
                    <span className="w-5 h-5 rounded-full bg-gold/15 text-gold flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="btn-primary">Chat with Asha →</button>
            </div>

            {/* Chat UI mockup */}
            <div className="reveal animate-on-scroll">
              <div className="bg-white rounded-3xl shadow-xl border border-navy/5 overflow-hidden">
                <div className="bg-navy px-5 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white font-serif font-600">
                    A
                  </div>
                  <div>
                    <div className="text-white font-sans font-600 text-sm">
                      Asha — AI Counsellor
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      <span className="text-white/50 text-xs font-sans">
                        Online · Responds instantly
                      </span>
                    </div>
                  </div>
                  <div className="ml-auto text-white/30 text-xs font-sans">
                    EN | தமிழ் | Tanglish
                  </div>
                </div>
                <div className="p-5 space-y-4 bg-cream/40">
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-gold flex-shrink-0 flex items-center justify-center text-white text-xs font-serif">
                      A
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 text-sm font-sans text-navy shadow-sm border border-navy/5 max-w-[80%]">
                      Hi! I'm Asha. How can I help you today? Ask me anything
                      about admissions, courses, or campus life!
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-navy rounded-2xl rounded-tr-none px-4 py-3 text-sm font-sans text-white max-w-[80%]">
                      What undergraduate courses do you offer?
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-gold flex-shrink-0 flex items-center justify-center text-white text-xs font-serif">
                      A
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 text-sm font-sans text-navy shadow-sm border border-navy/5 max-w-[80%]">
                      We currently offer these 5 undergraduate programs:
                      <ul className="mt-2 space-y-1.5">
                        {courses.map((course) => (
                          <li
                            key={course.slug}
                            className="flex items-center gap-2"
                          >
                            <GraduationCap
                              className="w-4 h-4 text-gold"
                              strokeWidth={2}
                            />
                            <span>{course.name}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-2">Want details on any program?</div>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-4 border-t border-cream flex gap-3">
                  <div className="flex-1 bg-cream rounded-full px-4 py-2.5 text-sm font-sans text-navy/30 border border-transparent">
                    Type a message…
                  </div>
                  <div className="w-9 h-9 bg-gold rounded-full flex items-center justify-center text-white">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center reveal animate-on-scroll">
          <div className="section-label">Take the First Step</div>
          <h2 className="font-serif text-5xl md:text-6xl text-navy mb-6">
            Your story starts
            <br />
            <em className="text-gold font-light">here.</em>
          </h2>
          <p className="text-muted font-sans text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Join 3,200+ students building careers they're proud of. Admissions
            are limited — secure your seat today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/admissions" className="btn-primary text-base px-8 py-4">
              Apply Now — 2025 Admissions
            </Link>
            <a
              href="https://wa.me/914426212089"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 border border-navy/20 text-navy px-8 py-4 rounded-full font-sans text-base hover:bg-navy hover:text-white transition-all"
            >
              <MessageCircle
                className="w-5 h-5"
                strokeWidth={2}
                style={{ color: "#25D366" }}
              />
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="text-navy/60 font-sans text-base hover:text-navy transition-colors underline underline-offset-4"
            >
              Request a Brochure
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
