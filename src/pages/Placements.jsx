import { Link } from "react-router-dom";
import {
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  Handshake,
  Mic,
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
    batch: "B.Sc CS 2024",
    company: "Freshworks",
    package: "₹5.4 LPA",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200",
    quote:
      "The placement cell coached us from resume writing to mock GDs. I had 3 offers before graduation.",
  },
  {
    name: "Mohammed Imran",
    batch: "BBA 2024",
    company: "HDFC Bank",
    package: "₹4.2 LPA",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    quote:
      "The personality development workshops and aptitude training were genuinely transformative.",
  },
  {
    name: "Nithya Krishnan",
    batch: "B.Com Honours 2023",
    company: "Deloitte",
    package: "₹5.8 LPA",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200",
    quote:
      "I was shortlisted from campus for Deloitte USI. The rigorous training here made the difference.",
  },
  {
    name: "Arun Balaji",
    batch: "BCA 2024",
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
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        <div
          className="absolute right-0 bottom-0 w-1/3 h-full opacity-5"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800)",
            backgroundSize: "cover",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-gold text-xs font-sans tracking-[0.2em] uppercase mb-3">
            Career Outcomes
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-5">
            94% of our graduates
            <br />
            <em className="font-light text-gold">get placed.</em>
          </h1>
          <p className="text-white/50 font-sans text-lg max-w-xl">
            Our placement cell works year-round to ensure every student leaves
            Adarsh with a career, not just a degree.
          </p>
        </div>
      </div>

      {/* Stat Pillars */}
      <div className="bg-white border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {placementStats.map((s, i) => (
              <div
                key={i}
                className="text-center border-r border-navy/5 last:border-0"
              >
                <div className="font-serif text-5xl md:text-6xl text-navy font-600 mb-1">
                  {s.value}
                </div>
                <div className="text-navy font-sans font-600 text-sm mb-0.5">
                  {s.label}
                </div>
                <div className="text-muted text-xs font-sans">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Year-wise chart */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="section-label text-center">Track Record</div>
        <h2 className="section-heading text-center mb-12">
          Placement performance <em className="font-light">over the years</em>
        </h2>
        <div className="bg-white rounded-2xl border border-navy/5 overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-cream">
                <th className="text-left px-8 py-5 text-xs font-sans font-600 text-navy/40 tracking-widest uppercase">
                  Year
                </th>
                <th className="text-left px-8 py-5 text-xs font-sans font-600 text-navy/40 tracking-widest uppercase">
                  Students Placed
                </th>
                <th className="text-left px-8 py-5 text-xs font-sans font-600 text-navy/40 tracking-widest uppercase">
                  Placement %
                </th>
                <th className="text-left px-8 py-5 text-xs font-sans font-600 text-navy/40 tracking-widest uppercase">
                  Average Package
                </th>
                <th className="text-left px-8 py-5 text-xs font-sans font-600 text-navy/40 tracking-widest uppercase">
                  Highest Package
                </th>
              </tr>
            </thead>
            <tbody>
              {yearwiseData.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-cream last:border-0 hover:bg-cream/50 transition-colors"
                >
                  <td className="px-8 py-5 font-serif text-2xl text-navy font-600">
                    {row.year}
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 max-w-32 bg-cream rounded-full h-2">
                        <div
                          className="bg-gold rounded-full h-2 transition-all"
                          style={{
                            width: `${(row.placed / row.total) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="text-navy font-sans text-sm font-600">
                        {row.placed}/{row.total}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="bg-emerald-50 text-emerald-700 font-sans font-600 text-sm px-3 py-1 rounded-full">
                      {row.placed}%
                    </span>
                  </td>
                  <td className="px-8 py-5 text-navy font-serif text-xl font-600">
                    {row.avg}
                  </td>
                  <td className="px-8 py-5 text-gold font-serif text-xl font-600">
                    {row.highest}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Training Programs */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-label">Pre-Placement Training</div>
            <h2 className="section-heading">
              We prepare you <em className="font-light">from Day 1</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <div
                key={i}
                className="bg-cream rounded-2xl p-6 hover:bg-navy hover:text-white transition-all group"
              >
                <p.icon className="w-6 h-6 text-gold mb-4" strokeWidth={2} />
                <h3 className="font-serif text-xl text-navy group-hover:text-white font-600 mb-2">
                  {p.title}
                </h3>
                <p className="text-muted group-hover:text-white/60 text-sm font-sans leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recruiters */}
      <div className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-label">Our Recruiters</div>
            <h2 className="section-heading">
              250+ companies trust Adarsh graduates
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {recruiters.map((r, i) => (
              <div
                key={i}
                className="group bg-white border border-navy/5 rounded-xl px-5 py-3 hover:border-gold/40 hover:shadow-md transition-all"
              >
                <div className="font-sans font-600 text-navy/70 text-sm group-hover:text-navy">
                  {r.name}
                </div>
                <div className="text-[10px] font-sans text-muted uppercase tracking-wider">
                  {r.sector}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Testimonials */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-label">Success Stories</div>
            <h2 className="section-heading">
              From campus <em className="font-light">to career</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-cream rounded-2xl p-6 border border-navy/5 hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white"
                  />
                  <div>
                    <div className="font-sans font-600 text-navy text-sm">
                      {t.name}
                    </div>
                    <div className="text-muted text-xs font-sans">
                      {t.batch}
                    </div>
                  </div>
                </div>
                <p className="text-muted text-sm font-sans italic leading-relaxed mb-5">
                  "{t.quote}"
                </p>
                <div className="border-t border-navy/5 pt-4 flex items-center justify-between">
                  <span className="text-navy font-sans font-600 text-sm">
                    {t.company}
                  </span>
                  <span className="text-gold font-serif font-600">
                    {t.package}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-navy py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-white mb-4">
            Your placement journey starts at admission
          </h2>
          <p className="text-white/50 font-sans mb-8">
            We start training from Semester 1. The sooner you join, the better
            prepared you'll be.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions" className="btn-primary">
              Apply Now →
            </Link>
            <Link to="/contact" className="btn-outline">
              Talk to Placement Cell
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
