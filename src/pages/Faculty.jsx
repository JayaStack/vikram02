import { useState } from "react";

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
    <div className="min-h-screen bg-cream">
      <div className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-gold text-xs font-sans tracking-[0.2em] uppercase mb-3">
            Our Team
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">
            Expert Faculty
          </h1>
          <p className="text-white/50 font-sans text-lg max-w-xl">
            140+ faculty members with industry experience, PhD qualifications,
            and a passion for teaching.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gold">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              ["140+", "Faculty Members"],
              ["78%", "PhD Qualified"],
              ["12 yrs", "Avg. Experience"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="font-serif text-3xl text-white font-600">
                  {v}
                </div>
                <div className="text-white/70 text-sm font-sans">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Filter */}
        <div className="flex gap-2 flex-wrap mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-sans font-600 transition-all ${selectedCategory === category ? "bg-navy text-white" : "bg-white border border-navy/10 text-navy/60 hover:text-navy"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-navy/5 hover:border-gold/30 hover:-translate-y-1 hover:shadow-xl transition-all h-full"
            >
              <div className="w-6 h-[1px] bg-gold mb-3" />
              <div className="text-xs text-gold uppercase tracking-widest mb-2 font-sans">
                {f.category}
              </div>
              <h3 className="font-serif text-lg text-navy font-600 mb-1">
                {f.name}
              </h3>
              <div className="text-sm text-gold-dark mb-2 font-sans">
                {f.qual} · {f.exp}
              </div>
              <p className="text-muted text-sm font-sans">{f.specialisation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
