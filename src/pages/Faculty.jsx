import { useState } from "react";
import { ArrowRight } from "lucide-react";

const faculty = [
  {
    name: "Dr. S. Rajalakshmi",
    category: "B.Sc – Psychology",
    qual: "Ph.D – IIT Madras",
    exp: "18 yrs",
    specialisation: "Machine Learning, Data Analytics",
  },
  {
    name: "Prof. K. Venkatesh",
    category: "BBA – Business Administration",
    qual: "M.Tech – NIT Trichy",
    exp: "12 yrs",
    specialisation: "Cyber Security, Cloud Computing",
  },
  {
    name: "Dr. P. Anandhi",
    category: "B.Com – General",
    qual: "Ph.D – University of Madras",
    exp: "22 yrs",
    specialisation: "Financial Accounting, Taxation",
  },
  {
    name: "Prof. R. Suresh Kumar",
    category: "B.Com – Accounting & Finance",
    qual: "M.Com, M.Phil",
    exp: "15 yrs",
    specialisation: "Banking Management, Corporate Law",
  },
  {
    name: "Dr. N. Priyanka",
    category: "BBA – Business Administration",
    qual: "Ph.D – Anna University",
    exp: "14 yrs",
    specialisation: "HR Management, Organisational Behaviour",
  },
  {
    name: "Prof. A. Balasubramanian",
    category: "BBA – Business Administration",
    qual: "MBA – IIM Kozhikode",
    exp: "10 yrs",
    specialisation: "Marketing, Business Strategy",
  },
  {
    name: "Dr. V. Meenakshi",
    category: "B.Sc – Psychology",
    qual: "Ph.D – Madras University",
    exp: "20 yrs",
    specialisation: "Applied Psychology, Counselling",
  },
  {
    name: "Prof. C. Rajaram",
    category: "B.A – English",
    qual: "M.A., M.Phil – English",
    exp: "16 yrs",
    specialisation: "English Literature, Communication Skills",
  },
];

const categories = [
  "All",
  "B.A – English",
  "B.Sc – Psychology",
  "BBA – Business Administration",
  "B.Com – General",
  "B.Com – Accounting & Finance",
];

export default function Faculty() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filtered =
    selectedCategory === "All"
      ? faculty
      : faculty.filter((f) => f.category === selectedCategory);

  return (
    <div className="overflow-x-hidden font-sans">
      
      {/* ── HERO SECTION ── */}
      <section className="bg-navy/5 pt-16 pb-24 md:pt-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="pr-0 md:pr-12">
            <div className="text-gold text-xs font-sans font-bold tracking-[0.2em] uppercase mb-4">
              Our Team
            </div>
            <h1 className="font-sans font-bold text-5xl md:text-7xl text-navy leading-tight tracking-tight mb-6">
              Expert Faculty
            </h1>
            <p className="text-navy/80 font-sans text-lg leading-relaxed mb-8">
              140+ faculty members with industry experience, PhD qualifications, and a passion for teaching. Our team is dedicated to nurturing the next generation of leaders.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000"
              alt="Faculty Hero"
              className="w-full object-cover shadow-2xl"
              style={{ minHeight: "400px" }}
            />
          </div>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="bg-navy py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              ["140+", "Faculty Members"],
              ["78%", "PhD Qualified"],
              ["12 yrs", "Avg. Experience"],
            ].map(([v, l]) => (
              <div key={l} className="p-6 border-x border-white/10 hover:bg-white/5 transition-colors">
                <div className="font-sans font-bold text-4xl text-white mb-2">
                  {v}
                </div>
                <div className="text-white/50 text-[11px] font-sans font-bold uppercase tracking-widest">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section className="py-24 bg-white px-6 md:px-12 border-b border-navy/10">
        <div className="max-w-7xl mx-auto">
          
          {/* Filter */}
          <div className="flex gap-4 flex-wrap mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-sans font-bold text-[11px] tracking-widest uppercase transition-all border-2 ${selectedCategory === category ? "bg-navy border-navy text-white shadow-lg" : "bg-white border-navy/10 text-navy/60 hover:border-navy hover:text-navy"}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filtered.map((f, i) => (
              <div
                key={i}
                className="flex flex-col group border-2 border-navy/10 bg-white hover:border-navy transition-all p-8 relative"
              >
                <div className="w-8 h-[2px] bg-navy/20 mb-6 group-hover:w-full group-hover:bg-navy transition-all duration-500" />
                <div className="text-[10px] text-navy/40 font-bold uppercase tracking-widest mb-3 font-sans">
                  {f.category}
                </div>
                <h3 className="font-sans font-bold text-xl text-navy mb-3 group-hover:text-navy-light transition-colors">
                  {f.name}
                </h3>
                <div className="text-sm text-navy font-bold mb-4 font-sans border-b border-navy/5 pb-4">
                  {f.qual} · {f.exp}
                </div>
                <p className="text-navy/70 text-[15px] font-sans leading-relaxed flex-grow">
                  {f.specialisation}
                </p>
                <div className="mt-8 pt-6 border-t-2 border-navy/5 opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-navy font-sans font-bold text-[10px] tracking-widest uppercase flex items-center gap-2">
                     Expert Profile <ArrowRight className="w-3 h-3" />
                   </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
