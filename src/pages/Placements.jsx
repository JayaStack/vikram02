import { Link } from "react-router-dom";
import {
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  Handshake,
  Mic,
  ArrowRight
} from "lucide-react";

const placementStats = [
  { value: "94%", label: "Placement Rate", sub: "2024 batch" },
  { value: "₹6.2L", label: "Highest Package", sub: "Per annum" },
  { value: "₹3.8L", label: "Average Package", sub: "Per annum" },
  { value: "250+", label: "Recruiting Companies", sub: "Active partners" },
];

const testimonials = [
  {
    name: "Kavya Sundaresan",
    batch: "B.Sc – Psychology 2024",
    company: "Freshworks",
    package: "₹5.4 LPA",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200",
    quote:
      "The placement cell coached us from resume writing to mock GDs. I had 3 offers before graduation.",
  },
  {
    name: "Mohammed Imran",
    batch: "BBA – Business Administration 2024",
    company: "HDFC Bank",
    package: "₹4.2 LPA",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    quote:
      "The personality development workshops and aptitude training were genuinely transformative.",
  },
  {
    name: "Nithya Krishnan",
    batch: "B.Com – General 2023",
    company: "Deloitte",
    package: "₹5.8 LPA",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200",
    quote:
      "I was shortlisted from campus for Deloitte USI. The rigorous training here made the difference.",
  },
  {
    name: "Arun Balaji",
    batch: "B.Com – Accounting & Finance 2024",
    company: "TCS",
    package: "₹3.6 LPA",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    quote:
      "TCS conducted an on-campus drive. I cracked it in one attempt — thanks to mock tests here.",
  },
];

const recruiters = [
  { name: "TCS", sector: "IT" },
  { name: "Infosys", sector: "IT" },
  { name: "Wipro", sector: "IT" },
  { name: "Cognizant", sector: "IT" },
  { name: "HCL", sector: "IT" },
  { name: "IBM", sector: "IT" },
  { name: "Accenture", sector: "Consulting" },
  { name: "Deloitte", sector: "Consulting" },
  { name: "KPMG", sector: "Consulting" },
  { name: "HDFC Bank", sector: "Banking" },
  { name: "Axis Bank", sector: "Banking" },
  { name: "ICICI Bank", sector: "Banking" },
  { name: "Zoho", sector: "Product" },
  { name: "Freshworks", sector: "Product" },
  { name: "TVS", sector: "Manufacturing" },
  { name: "Murugappa Group", sector: "Conglomerate" },
  { name: "Capgemini", sector: "IT" },
  { name: "Mphasis", sector: "IT" },
];

const programs = [
  {
    icon: BookOpen,
    title: "Aptitude & Reasoning",
    desc: "Structured training for quantitative aptitude, logical reasoning, and verbal ability from Year 1.",
  },
  {
    icon: Mic,
    title: "Communication Skills",
    desc: "Group discussions, public speaking workshops, and language labs to build professional communication.",
  },
  {
    icon: Briefcase,
    title: "Mock Interviews",
    desc: "HR and technical mock interviews with detailed feedback from industry professionals.",
  },
  {
    icon: Building2,
    title: "Industry Visits",
    desc: "Regular visits to corporate offices and factories to understand real workplace environments.",
  },
  {
    icon: Handshake,
    title: "Industry Mentors",
    desc: "Each department has a panel of industry mentors who provide career guidance and connect students to opportunities.",
  },
  {
    icon: BarChart3,
    title: "Internship Support",
    desc: "The placement cell facilitates internship placements in Summer between Years 2 and 3.",
  },
];

const yearwiseData = [
  { year: "2022", placed: 87, total: 310, avg: "3.2L", highest: "5.6L" },
  { year: "2023", placed: 91, total: 340, avg: "3.5L", highest: "5.8L" },
  { year: "2024", placed: 94, total: 380, avg: "3.8L", highest: "6.2L" },
];

export default function Placements() {
  return (
    <div className="overflow-x-hidden font-sans">
      
      {/* ── HERO SECTION ── */}
      <section className="bg-navy/5 pt-16 pb-24 md:pt-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="pr-0 md:pr-12">
            <h1 className="font-sans font-bold text-5xl md:text-7xl text-navy leading-tight tracking-tight mb-6">
              Career Outcomes
            </h1>
            <p className="text-navy/80 font-sans text-lg leading-relaxed mb-8">
              Our placement cell works year-round to ensure every student leaves prepared for a career, not just a degree. Join the 94% of graduates who successfully secure placements.
            </p>
            <Link
              to="/admissions"
              className="bg-navy text-white px-6 py-4 font-sans font-bold text-sm inline-flex items-center gap-3 hover:bg-navy-light transition-colors"
            >
              Start your journey
              <ArrowRight className="w-5 h-5 rounded-full border border-white p-0.5" />
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800"
              alt="Placements Hero"
              className="w-full object-cover shadow-2xl"
              style={{ minHeight: "400px" }}
            />
          </div>
        </div>
      </section>

      {/* ── STAT PILLARS ── */}
      <section className="bg-white py-12 px-6 border-b border-navy/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {placementStats.map((s, i) => (
              <div
                key={i}
                className="text-center border-r-2 border-navy/10 last:border-0 px-4"
              >
                <div className="font-sans font-bold text-5xl md:text-6xl text-navy mb-2">
                  {s.value}
                </div>
                <div className="text-navy font-sans font-bold text-[15px] uppercase tracking-wide mb-1">
                  {s.label}
                </div>
                <div className="text-navy/60 text-xs font-sans uppercase tracking-widest">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YEAR-WISE CHART ── */}
      <section className="bg-navy/5 py-24 px-6 md:px-12 border-b border-navy/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-sans font-bold text-3xl md:text-4xl text-navy mb-12">
            Placement Performance
          </h2>
          <div className="bg-white border-2 border-navy/10 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-navy/10 bg-navy/5">
                  <th className="text-left px-8 py-6 text-xs font-sans font-bold text-navy tracking-widest uppercase">
                    Year
                  </th>
                  <th className="text-left px-8 py-6 text-xs font-sans font-bold text-navy tracking-widest uppercase">
                    Students Placed
                  </th>
                  <th className="text-left px-8 py-6 text-xs font-sans font-bold text-navy tracking-widest uppercase">
                    Placement %
                  </th>
                  <th className="text-left px-8 py-6 text-xs font-sans font-bold text-navy tracking-widest uppercase">
                    Average Package
                  </th>
                  <th className="text-left px-8 py-6 text-xs font-sans font-bold text-navy tracking-widest uppercase">
                    Highest Package
                  </th>
                </tr>
              </thead>
              <tbody>
                {yearwiseData.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-navy/10 last:border-0 hover:bg-navy/5 transition-colors"
                  >
                    <td className="px-8 py-6 font-sans text-2xl text-navy font-bold">
                      {row.year}
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-1 max-w-32 bg-navy/10 h-2">
                          <div
                            className="bg-navy h-2 transition-all"
                            style={{
                              width: `${(row.placed / row.total) * 100}%`,
                            }}
                          />
                        </div>
                        <span className="text-navy font-sans text-[15px] font-bold">
                          {row.placed}/{row.total}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="bg-navy text-white font-sans font-bold text-sm px-4 py-1.5 inline-block">
                        {row.placed}%
                      </span>
                    </td>
                    <td className="px-8 py-6 text-navy font-sans text-xl font-bold">
                      {row.avg}
                    </td>
                    <td className="px-8 py-6 text-navy font-sans text-xl font-bold">
                      {row.highest}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── TRAINING PROGRAMS ── */}
      <section className="bg-white py-24 px-6 md:px-12 border-b border-navy/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-sans font-bold text-3xl md:text-4xl text-navy mb-12">
            Pre-Placement Training
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <div
                key={i}
                className="flex flex-col group border-2 border-navy/10 bg-navy/5 hover:border-navy hover:bg-white transition-all p-8"
              >
                <div className="mb-6 text-navy group-hover:scale-110 transition-transform origin-left">
                  <p.icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans font-bold text-xl text-navy mb-4">
                  {p.title}
                </h3>
                <p className="font-sans text-[15px] text-navy/80 leading-relaxed flex-grow">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECRUITERS ── */}
      <section className="bg-navy/5 py-24 px-6 md:px-12 border-b border-navy/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-sans font-bold text-3xl md:text-4xl text-navy mb-12">
            Our Recruiters
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {recruiters.map((r, i) => (
              <div
                key={i}
                className="group bg-white border-2 border-navy/10 px-6 py-4 hover:border-navy transition-colors min-w-[140px] text-center"
              >
                <div className="font-sans font-bold text-navy mb-1 text-[15px]">
                  {r.name}
                </div>
                <div className="text-[11px] font-sans text-navy/60 uppercase tracking-widest font-bold">
                  {r.sector}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white py-24 px-6 md:px-12 border-b border-navy/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-sans font-bold text-3xl md:text-4xl text-navy mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-navy/5 p-8 border border-navy/10 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-14 h-14 object-cover border-2 border-navy"
                  />
                  <div>
                    <div className="font-sans font-bold text-navy text-[15px]">
                      {t.name}
                    </div>
                    <div className="text-navy/60 text-[11px] font-sans uppercase tracking-widest font-bold mt-1">
                      {t.batch}
                    </div>
                  </div>
                </div>
                <p className="text-navy/80 text-[15px] font-sans italic leading-relaxed mb-8 flex-grow">
                  "{t.quote}"
                </p>
                <div className="border-t-2 border-navy/10 pt-5 flex items-center justify-between">
                  <span className="text-navy font-sans font-bold text-sm">
                    {t.company}
                  </span>
                  <span className="text-navy font-sans font-bold">
                    {t.package}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy py-24 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-sans font-bold text-4xl text-white mb-6">
            Your placement journey starts at admission
          </h2>
          <p className="text-white/80 font-sans text-lg mb-10">
            We start training from Semester 1. The sooner you join, the better prepared you'll be.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/admissions"
              className="bg-white text-navy px-8 py-4 font-sans font-bold text-sm inline-flex items-center gap-3 hover:bg-cream transition-colors"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 rounded-full border border-navy p-0.5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 font-sans font-bold text-sm inline-flex items-center hover:bg-white/10 transition-colors"
            >
              Talk to Placement Cell
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
