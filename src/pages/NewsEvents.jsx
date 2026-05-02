import { useState } from "react";
import { Link } from "react-router-dom";
import { Newspaper, ArrowRight } from "lucide-react";
import { COLLEGE_NAME } from "../constants/college";
import { ADMISSION_YEAR } from "../constants/site";

const allItems = [
  {
    id: 1,
    type: "News",
    category: "Accreditation",
    title: `${COLLEGE_NAME} Receives NAAC A++ Re-accreditation with CGPA 3.59`,
    date: `March 15, ${ADMISSION_YEAR}`,
    img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800",
    excerpt:
      "The National Assessment and Accreditation Council has awarded the institute its highest grade — A++ — making it one of the top-ranked autonomous colleges in Tamil Nadu.",
    featured: true,
  },
  {
    id: 2,
    type: "Event",
    category: "Placement",
    title: `Campus Recruitment Drive ${ADMISSION_YEAR} — Zoho, Freshworks & TCS on Campus`,
    date: `April 5, ${ADMISSION_YEAR}`,
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
    excerpt:
      "3 major tech companies conducted on-campus recruitment drives this season with a combined offer count of 140+ students.",
    featured: false,
  },
  {
    id: 3,
    type: "Event",
    category: "Academic",
    title: `Annual Cultural Festival "AAKASH ${ADMISSION_YEAR}" — Register Now`,
    date: `April 20, ${ADMISSION_YEAR}`,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800",
    excerpt:
      "Our annual inter-collegiate cultural festival returns with dance, drama, music, fine arts, and literary events. Registrations close April 18.",
    featured: false,
  },
  {
    id: 4,
    type: "News",
    category: "Programs",
    title: `Program Spotlight: B.Com – Accounting & Finance Admissions Open for ${ADMISSION_YEAR}`,
    date: `March 1, ${ADMISSION_YEAR}`,
    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800",
    excerpt:
      "The college announces admissions for B.Com – Accounting & Finance with an updated curriculum in accounting, auditing, and financial analytics.",
    featured: false,
  },
  {
    id: 5,
    type: "Event",
    category: "Workshop",
    title:
      "AI & Data Science Workshop by IIT Madras Alumni — Free for Students",
    date: `April 28, ${ADMISSION_YEAR}`,
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800",
    excerpt:
      "A full-day hands-on workshop on Python, Machine Learning basics, and career paths in AI. Limited seats — register via the student portal.",
    featured: false,
  },
  {
    id: 6,
    type: "News",
    category: "Achievement",
    title: "Student Team Wins National Hackathon at IIT Bombay",
    date: `February 20, ${ADMISSION_YEAR}`,
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800",
    excerpt: `A 4-member team from B.Sc – Psychology and BBA – Business Administration clinched first place at the Smart India Hackathon ${ADMISSION_YEAR}, beating 300+ teams from across the country.`,
    featured: false,
  },
];

const categories = [
  "All",
  "News",
  "Event",
  "Placement",
  "Academic",
  "Achievement",
];

export default function NewsEvents() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? allItems
      : allItems.filter(
          (i) => i.type === activeFilter || i.category === activeFilter,
        );

  const featured = allItems.find((i) => i.featured);
  const rest = filtered.filter((i) => !i.featured);

  return (
    <div className="overflow-x-hidden font-sans">
      
      {/* ── HERO SECTION ── */}
      <section className="bg-navy/5 pt-16 pb-24 md:pt-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="pr-0 md:pr-12">
            <div className="text-gold text-xs font-sans font-bold tracking-[0.2em] uppercase mb-4">
              Stay Updated
            </div>
            <h1 className="font-sans font-bold text-5xl md:text-7xl text-navy leading-tight tracking-tight mb-6">
              News & Events
            </h1>
            <p className="text-navy/80 font-sans text-lg leading-relaxed mb-8">
              The latest from {COLLEGE_NAME} — achievements, events, launches, and campus happenings. Stay connected with our vibrant community.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000"
              alt="News Hero"
              className="w-full object-cover shadow-2xl"
              style={{ minHeight: "400px" }}
            />
          </div>
        </div>
      </section>

      {/* ── FEATURED ITEM ── */}
      {featured && (
        <section className="py-24 bg-white px-6 md:px-12 border-b border-navy/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-sm font-sans font-bold tracking-widest uppercase text-navy/40 mb-8">
              Featured Story
            </h2>
            <div className="grid md:grid-cols-2 bg-navy/5 border-2 border-navy/10 group overflow-hidden">
              <div className="relative h-80 md:h-auto overflow-hidden">
                <img
                  src={featured.img}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 flex gap-3">
                  <span className="bg-navy text-white text-[10px] font-sans font-bold tracking-widest uppercase px-4 py-1.5">
                    {featured.type}
                  </span>
                  <span className="bg-white text-navy text-[10px] font-sans font-bold tracking-widest uppercase px-4 py-1.5 border border-navy/10">
                    {featured.category}
                  </span>
                </div>
              </div>
              <div className="p-10 md:p-16 flex flex-col justify-center bg-white">
                <div className="text-[11px] font-sans font-bold uppercase tracking-widest text-navy/40 mb-4">
                  {featured.date}
                </div>
                <h3 className="font-sans font-bold text-3xl text-navy leading-tight mb-6">
                  {featured.title}
                </h3>
                <p className="text-navy/70 font-sans text-lg leading-relaxed mb-10">
                  {featured.excerpt}
                </p>
                <button className="bg-navy text-white px-8 py-4 font-sans font-bold text-sm inline-flex items-center gap-3 w-max hover:bg-navy-light transition-all">
                  Read Full Story
                  <ArrowRight className="w-5 h-5 rounded-full border border-white p-0.5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── FILTERS + GRID ── */}
      <section className="py-24 bg-navy/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Filters */}
          <div className="flex gap-4 flex-wrap mb-16">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveFilter(c)}
                className={`px-6 py-3 font-sans font-bold text-[11px] tracking-widest uppercase transition-all border-2 ${activeFilter === c ? "bg-navy border-navy text-white shadow-lg" : "bg-white border-navy/10 text-navy/60 hover:border-navy hover:text-navy"}`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((item) => (
              <article
                key={item.id}
                className="flex flex-col group border-2 border-navy/10 bg-white hover:border-navy transition-all overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-5 left-5 flex gap-2">
                    <span
                      className={`text-[9px] font-sans font-bold tracking-widest uppercase px-3 py-1.5 ${item.type === "News" ? "bg-navy text-white" : "bg-white text-navy border border-navy/10"}`}
                    >
                      {item.type}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="text-[10px] font-sans font-bold uppercase tracking-widest text-navy/40 mb-3">
                    {item.date} · {item.category}
                  </div>
                  <h3 className="font-sans font-bold text-xl text-navy leading-snug mb-4 group-hover:text-navy-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-navy/70 font-sans text-[15px] leading-relaxed line-clamp-3 mb-8 flex-grow">
                    {item.excerpt}
                  </p>
                  <button className="text-navy font-sans font-bold text-xs tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all border-b-2 border-navy/5 w-max pb-1">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-32 border-2 border-dashed border-navy/10">
              <Newspaper
                className="w-16 h-16 text-navy/10 mx-auto mb-6"
                strokeWidth={1.5}
              />
              <div className="font-sans font-bold text-2xl text-navy/30 tracking-tight">
                No items found in this category
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER CTA ── */}
      <section className="bg-white py-24 px-6 md:px-12 border-t border-navy/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sans font-bold text-4xl text-navy mb-6">
            Never miss an update
          </h2>
          <p className="text-navy/70 font-sans text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Get the latest news, events, and scholarship announcements delivered directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-navy/5 border-2 border-navy/10 px-6 py-4 text-sm font-sans text-navy outline-none focus:border-navy transition-colors"
            />
            <button className="bg-navy text-white px-8 py-4 font-sans font-bold text-sm tracking-wide flex items-center justify-center gap-3 hover:bg-navy-light transition-all whitespace-nowrap">
              Subscribe
              <ArrowRight className="w-5 h-5 rounded-full border border-white p-0.5" />
            </button>
          </form>
          <p className="text-navy/40 text-[10px] font-sans font-bold uppercase tracking-widest mt-6">
            We'll contact you with important updates only
          </p>
        </div>
      </section>

    </div>
  );
}
