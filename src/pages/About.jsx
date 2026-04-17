import { Sparkles, Target } from "lucide-react";
import { COLLEGE_NAME } from "../constants/college";
import { ADMISSION_YEAR } from "../constants/site";

const values = [
  {
    title: "Excellence",
    desc: "We hold ourselves to the highest academic and personal standards in everything we do.",
  },
  {
    title: "Empowerment",
    desc: "We believe education is the greatest equaliser — giving every student the tools to shape their future.",
  },
  {
    title: "Innovation",
    desc: "Our curriculum evolves with industry. We introduce new-age programs before they become mainstream.",
  },
  {
    title: "Integrity",
    desc: "Transparency and trust are foundational — with students, parents, and the wider community.",
  },
];

const milestones = [
  {
    year: "1978",
    event: "Founded by the Punjab Association in Anna Nagar, Chennai",
  },
  { year: "1995", event: "Granted Autonomous Status by University of Madras" },
  { year: "2008", event: "NAAC Accreditation — A Grade (First Cycle)" },
  { year: "2015", event: "NAAC Re-accreditation — A Grade (Second Cycle)" },
  {
    year: "2022",
    event: "NAAC Re-accreditation — A++ Grade, CGPA 3.59 (Third Cycle)",
  },
  {
    year: `${ADMISSION_YEAR}`,
    event:
      "Transition to co-educational institute; AI & FinTech programs launched",
  },
];

const leadership = [
  {
    name: "Dr. Shirline David",
    role: "Principal",
    quote:
      "Guided by our motto—Perfection, Perseverance, and Purity—we shape leaders of tomorrow.",
  },
  {
    name: "Prof. R. Krishnamurthy",
    role: "Dean — Academics",
    quote:
      "Every curriculum decision is made with the student's career outcome as the north star.",
  },
  {
    name: "Dr. Meena Venkataraman",
    role: "Dean — Research",
    quote: `Research at ${COLLEGE_NAME} bridges academic rigour with real-world relevance.`,
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-gold text-xs font-sans tracking-[0.2em] uppercase mb-3">
            Our Story
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-5 max-w-2xl">
            46 years of shaping
            <br />
            <em className="font-light">exceptional graduates</em>
          </h1>
          <p className="text-white/50 font-sans text-lg max-w-xl">
            From a single building in Anna Nagar to one of Tamil Nadu's most
            respected autonomous institutions — our story is built on purpose.
          </p>
        </div>
      </div>

      {/* Mission + Vision */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-10 border border-navy/5">
            <div className="w-10 h-10 bg-gold/15 text-gold rounded-xl flex items-center justify-center mb-5">
              <Target className="w-5 h-5" strokeWidth={2} />
            </div>
            <h2 className="font-serif text-3xl text-navy mb-4">Our Mission</h2>
            <p className="text-muted font-sans leading-relaxed">
              To provide quality higher education that fosters intellectual
              growth, ethical values, and professional competence — enabling
              students to contribute meaningfully to society and lead with
              confidence in a complex, interconnected world.
            </p>
          </div>
          <div className="bg-navy rounded-2xl p-10">
            <div className="w-10 h-10 bg-gold/20 text-gold rounded-xl flex items-center justify-center mb-5">
              <Sparkles className="w-5 h-5" strokeWidth={2} />
            </div>
            <h2 className="font-serif text-3xl text-white mb-4">Our Vision</h2>
            <p className="text-white/60 font-sans leading-relaxed">
              To be a nationally recognised institution of academic excellence
              that nurtures critical thinkers, innovators, and leaders —
              graduates who are not just career-ready but life-ready.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label">What We Stand For</div>
            <h2 className="section-heading">Our core values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="group text-center p-8">
                <div className="w-14 h-14 rounded-full border-2 border-gold/20 text-gold font-serif text-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all">
                  {i + 1}
                </div>
                <h3 className="font-serif text-xl text-navy mb-3">{v.title}</h3>
                <p className="text-muted text-sm font-sans leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-cream py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label">Legacy</div>
            <h2 className="section-heading">Our milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-navy/10 -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-4 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}
                >
                  <div
                    className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}`}
                  >
                    <div className="font-serif text-3xl text-gold font-600">
                      {m.year}
                    </div>
                    <div className="text-navy font-sans text-sm mt-1">
                      {m.event}
                    </div>
                  </div>
                  <div className="hidden md:block w-3 h-3 bg-gold rounded-full flex-shrink-0 ring-4 ring-gold/20" />
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label">Leadership</div>
            <h2 className="section-heading">The people who lead</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {leadership.map((l, i) => (
              <div
                key={i}
                className="text-center max-w-sm mx-auto space-y-3 group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-[1px] bg-gold mx-auto mb-3" />
                <h3 className="font-serif text-xl text-navy font-600">
                  {l.name}
                </h3>
                <div className="text-gold text-xs font-sans tracking-widest uppercase">
                  {l.role}
                </div>
                <p className="text-muted text-sm font-sans italic leading-relaxed">
                  "{l.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
