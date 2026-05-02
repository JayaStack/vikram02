import { ArrowRight, Target, Sparkles, Building2, BookOpen, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { COLLEGE_NAME } from "../constants/college";
import { ADMISSION_YEAR } from "../constants/site";

const values = [
  {
    title: "Excellence",
    desc: "We hold ourselves to the highest academic and personal standards in everything we do.",
    icon: Target,
  },
  {
    title: "Empowerment",
    desc: "We believe education is the greatest equaliser — giving every student the tools to shape their future.",
    icon: Users,
  },
  {
    title: "Innovation",
    desc: "Our curriculum evolves with industry. We introduce new-age programs before they become mainstream.",
    icon: Sparkles,
  },
  {
    title: "Integrity",
    desc: "Transparency and trust are foundational — with students, parents, and the wider community.",
    icon: Globe,
  },
];

const milestones = [
  { year: "1978", event: "Founded by the Punjab Association in Anna Nagar, Chennai" },
  { year: "1995", event: "Granted Autonomous Status by University of Madras" },
  { year: "2008", event: "NAAC Accreditation — A Grade (First Cycle)" },
  { year: "2015", event: "NAAC Re-accreditation — A Grade (Second Cycle)" },
  { year: "2022", event: "NAAC Re-accreditation — A++ Grade, CGPA 3.59 (Third Cycle)" },
  { year: `${ADMISSION_YEAR}`, event: "Transition to co-educational institute; AI & FinTech programs launched" },
];

const leadership = [
  {
    name: "Dr. Shirline David",
    role: "Principal",
    quote: "Guided by our motto—Perfection, Perseverance, and Purity—we shape leaders of tomorrow.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600"
  },
  {
    name: "Prof. R. Krishnamurthy",
    role: "Dean — Academics",
    quote: "Every curriculum decision is made with the student's career outcome as the north star.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600"
  },
  {
    name: "Dr. Meena Venkataraman",
    role: "Dean — Research",
    quote: `Research at ${COLLEGE_NAME} bridges academic rigour with real-world relevance.`,
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600"
  },
];

export default function About() {
  return (
    <div className="overflow-x-hidden font-sans">
      {/* ── HERO SECTION ── */}
      <section className="bg-navy/5 pt-16 pb-24 md:pt-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="pr-0 md:pr-12">
            <h1 className="font-sans font-bold text-5xl md:text-7xl text-navy leading-tight tracking-tight mb-6">
              Our Story
            </h1>
            <p className="text-navy/80 font-sans text-lg leading-relaxed mb-8">
              From a single building in Anna Nagar to one of Tamil Nadu's most respected autonomous institutions — our story is built on purpose. We shape exceptional graduates ready to face the world.
            </p>
            <Link
              to="/courses"
              className="bg-navy text-white px-6 py-4 font-sans font-bold text-sm inline-flex items-center gap-3 hover:bg-navy-light transition-colors"
            >
              Explore our programmes
              <ArrowRight className="w-5 h-5 rounded-full border border-white p-0.5" />
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=800"
              alt="About Hero"
              className="w-full object-cover shadow-2xl"
              style={{ minHeight: "400px" }}
            />
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-20 bg-white px-6 md:px-12 border-b border-navy/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="p-10 border-2 border-navy/10 bg-navy/5 flex flex-col justify-center">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-navy mb-6">
              Our Mission
            </h2>
            <p className="text-navy/80 font-sans text-lg leading-relaxed">
              To provide quality higher education that fosters intellectual growth, ethical values, and professional competence — enabling students to contribute meaningfully to society and lead with confidence in a complex, interconnected world.
            </p>
          </div>
          <div className="p-10 bg-navy text-white flex flex-col justify-center">
            <h2 className="font-sans font-bold text-3xl md:text-4xl mb-6">
              Our Vision
            </h2>
            <p className="text-white/80 font-sans text-lg leading-relaxed">
              To be a nationally recognised institution of academic excellence that nurtures critical thinkers, innovators, and leaders — graduates who are not just career-ready but life-ready.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 bg-navy/5 px-6 md:px-12 border-b border-navy/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-sans font-bold text-3xl md:text-4xl text-navy mb-12">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col group border-2 border-navy/10 bg-white hover:border-navy transition-colors p-8">
                <div className="mb-6 text-navy group-hover:scale-110 transition-transform origin-left">
                  <v.icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans font-bold text-xl text-navy mb-4">{v.title}</h3>
                <p className="font-sans text-sm text-navy/80 leading-relaxed flex-grow">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-20 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-navy mb-12 text-center">
            Our Milestones
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m, i) => (
              <div key={i} className="border-t-4 border-navy pt-6 pb-4 group hover:bg-navy/5 px-4 transition-colors">
                <div className="font-sans font-bold text-4xl text-navy/20 mb-2 group-hover:text-navy transition-colors">
                  {m.year}
                </div>
                <div className="text-navy font-sans text-[15px] font-medium leading-relaxed">
                  {m.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="bg-navy/5 py-20 px-6 md:px-12 border-t border-navy/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-navy mb-12 text-center">
            The People Who Lead
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((l, i) => (
              <div key={i} className="flex flex-col group border border-navy/5 bg-white hover:shadow-xl transition-all duration-300">
                <div className="h-72 w-full overflow-hidden bg-navy/10">
                  <img
                    src={l.img}
                    alt={l.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-center border-t border-navy/5">
                  <h3 className="font-sans font-bold text-2xl text-navy mb-1">
                    {l.name}
                  </h3>
                  <div className="text-sm font-sans font-bold tracking-widest uppercase text-navy/60 mb-6">
                    {l.role}
                  </div>
                  <p className="text-navy/80 text-sm font-sans italic leading-relaxed border-l-2 border-navy/20 pl-4">
                    "{l.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
