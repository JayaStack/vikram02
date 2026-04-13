import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const allCourses = [
  {
    slug: "bsc-cs-ai",
    name: "B.Sc Computer Science — AI & Data Science",
    dept: "Science",
    level: "UG",
    duration: "3 Years",
    seats: 60,
    tag: "Hot",
    desc: "Specialised in Artificial Intelligence, Machine Learning, and Data Science with hands-on lab projects.",
  },
  {
    slug: "bsc-cs-cyber",
    name: "B.Sc Computer Science — Cyber Security",
    dept: "Science",
    level: "UG",
    duration: "3 Years",
    seats: 40,
    tag: "New",
    desc: "In-depth cybersecurity training covering ethical hacking, network security, and digital forensics.",
  },
  {
    slug: "bca",
    name: "BCA — Computer Applications",
    dept: "Science",
    level: "UG",
    duration: "3 Years",
    seats: 60,
    tag: null,
    desc: "Broad foundation in computer applications, programming, and software development.",
  },
  {
    slug: "bsc-psychology",
    name: "B.Sc Psychology",
    dept: "Science",
    level: "UG",
    duration: "3 Years",
    seats: 40,
    tag: null,
    desc: "Study human behaviour, clinical psychology, and counselling with modern lab facilities.",
  },
  {
    slug: "bcom-fintechai",
    name: "B.Com FinTech & AI",
    dept: "Commerce",
    level: "UG",
    duration: "3 Years",
    seats: 40,
    tag: "New",
    desc: "Commerce meets technology — learn financial technology, AI in banking, and digital payments.",
  },
  {
    slug: "bcom-honours",
    name: "B.Com Honours",
    dept: "Commerce",
    level: "UG",
    duration: "3 Years",
    seats: 60,
    tag: "Hot",
    desc: "Advanced commerce curriculum with deep focus on accounting, finance, and business law.",
  },
  {
    slug: "bcom-general",
    name: "B.Com General",
    dept: "Commerce",
    level: "UG",
    duration: "3 Years",
    seats: 80,
    tag: null,
    desc: "Comprehensive commerce education with electives in banking, taxation, and accounting.",
  },
  {
    slug: "bba",
    name: "BBA — Business Administration",
    dept: "Management",
    level: "UG",
    duration: "3 Years",
    seats: 60,
    tag: "Hot",
    desc: "Leadership, strategy, and business operations — groom yourself for corporate and entrepreneurial roles.",
  },
  {
    slug: "ba-business-economics",
    name: "B.A. Business Economics",
    dept: "Arts",
    level: "UG",
    duration: "3 Years",
    seats: 40,
    tag: null,
    desc: "Blend of economics, business analytics, and policy studies for a modern economy.",
  },
  {
    slug: "msc-cs",
    name: "M.Sc Computer Science",
    dept: "Science",
    level: "PG",
    duration: "2 Years",
    seats: 30,
    tag: null,
    desc: "Advanced research-focused computer science with specialisations in AI, cloud, and software engineering.",
  },
  {
    slug: "mcom",
    name: "M.Com Commerce",
    dept: "Commerce",
    level: "PG",
    duration: "2 Years",
    seats: 30,
    tag: null,
    desc: "In-depth postgraduate study in finance, accounting, and business management.",
  },
  {
    slug: "msc-psychology",
    name: "M.Sc Applied Psychology",
    dept: "Science",
    level: "PG",
    duration: "2 Years",
    seats: 20,
    tag: null,
    desc: "Postgraduate programme in applied and clinical psychology with research opportunities.",
  },
];

const depts = ["All", "Science", "Commerce", "Management", "Arts"];
const levels = ["All", "UG", "PG"];

export default function Courses() {
  const [activeDept, setActiveDept] = useState("All");
  const [activeLevel, setActiveLevel] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = allCourses.filter((c) => {
    const deptOk = activeDept === "All" || c.dept === activeDept;
    const levelOk = activeLevel === "All" || c.level === activeLevel;
    const searchOk =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.dept.toLowerCase().includes(search.toLowerCase());
    return deptOk && levelOk && searchOk;
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <div className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-80" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-gold text-xs font-sans tracking-[0.2em] uppercase mb-3">
            Academics
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">
            Our Programs
          </h1>
          <p className="text-white/50 font-sans text-lg max-w-xl">
            20+ industry-aligned UG & PG programs across Arts, Science,
            Commerce, and Management.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 md:top-20 bg-white/90 backdrop-blur-md border-b border-navy/5 z-30 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
          {/* Search */}
          <div className="relative w-full md:w-72">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search programs..."
              className="w-full bg-cream border border-navy/10 rounded-full pl-10 pr-4 py-2.5 text-sm font-sans text-navy outline-none focus:border-gold/40 transition-colors"
            />
          </div>

          {/* Dept filter */}
          <div className="flex gap-2 flex-wrap">
            {depts.map((d) => (
              <button
                key={d}
                onClick={() => setActiveDept(d)}
                className={`px-4 py-2 rounded-full text-xs font-sans font-600 tracking-wide transition-all ${activeDept === d ? "bg-navy text-white" : "bg-cream text-navy/60 hover:text-navy"}`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Level filter */}
          <div className="flex gap-2 md:ml-auto">
            {levels.map((l) => (
              <button
                key={l}
                onClick={() => setActiveLevel(l)}
                className={`px-4 py-2 rounded-full text-xs font-sans font-600 transition-all ${activeLevel === l ? "bg-gold text-white" : "border border-navy/10 text-navy/60 hover:text-navy"}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-6 text-sm font-sans text-muted">
          Showing <strong className="text-navy">{filtered.length}</strong>{" "}
          programs
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <Link
              key={c.slug}
              to={`/courses/${c.slug}`}
              className="group bg-white rounded-2xl p-6 border border-navy/5 hover:border-gold/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-2">
                  <span
                    className={`text-[10px] font-sans font-600 tracking-widest uppercase px-3 py-1 rounded-full ${c.level === "PG" ? "bg-purple-50 text-purple-700" : "bg-gold/10 text-gold-dark"}`}
                  >
                    {c.level}
                  </span>
                  {c.tag && (
                    <span
                      className={`text-[10px] font-sans font-600 tracking-widest uppercase px-3 py-1 rounded-full ${c.tag === "Hot" ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-700"}`}
                    >
                      {c.tag}
                    </span>
                  )}
                </div>
                <svg
                  className="w-4 h-4 text-navy/20 group-hover:text-gold transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </div>

              <h3 className="font-serif text-xl text-navy font-600 mb-2 leading-snug">
                {c.name}
              </h3>
              <p className="text-muted text-sm font-sans leading-relaxed mb-5">
                {c.desc}
              </p>

              <div className="flex items-center gap-4 text-xs font-sans text-navy/50 border-t border-cream pt-4">
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {c.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {c.seats} seats
                </span>
                <span className="ml-auto font-600 text-gold-dark">
                  {c.dept}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Search
              className="w-12 h-12 text-navy/30 mx-auto mb-4"
              strokeWidth={2}
            />
            <div className="font-serif text-2xl text-navy/40 mb-2">
              No programs found
            </div>
            <div className="text-muted text-sm font-sans">
              Try adjusting your filters
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="bg-navy/5 border-t border-navy/5 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="font-serif text-3xl text-navy mb-3">
            Not sure which program suits you?
          </h3>
          <p className="text-muted font-sans mb-8">
            Our AI counsellor Asha can help you decide in 2 minutes, or speak
            with a human counsellor.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary">Chat with Asha →</button>
            <Link to="/contact" className="btn-outline-dark">
              Book Counselling Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
