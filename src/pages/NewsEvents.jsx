import { useState } from "react";
import { Link } from "react-router-dom";
import { Newspaper } from "lucide-react";
import { COLLEGE_NAME } from "../constants/college";

const allItems = [
  {
    id: 1,
    type: "News",
    category: "Accreditation",
    title: `${COLLEGE_NAME} Receives NAAC A++ Re-accreditation with CGPA 3.59`,
    date: "March 15, 2025",
    img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800",
    excerpt:
      "The National Assessment and Accreditation Council has awarded the institute its highest grade — A++ — making it one of the top-ranked autonomous colleges in Tamil Nadu.",
    featured: true,
  },
  {
    id: 2,
    type: "Event",
    category: "Placement",
    title: "Campus Recruitment Drive 2025 — Zoho, Freshworks & TCS on Campus",
    date: "April 5, 2025",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
    excerpt:
      "3 major tech companies conducted on-campus recruitment drives this season with a combined offer count of 140+ students.",
    featured: false,
  },
  {
    id: 3,
    type: "Event",
    category: "Academic",
    title: 'Annual Cultural Festival "AAKASH 2025" — Register Now',
    date: "April 20, 2025",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800",
    excerpt:
      "Our annual inter-collegiate cultural festival returns with dance, drama, music, fine arts, and literary events. Registrations close April 18.",
    featured: false,
  },
  {
    id: 4,
    type: "News",
    category: "Programs",
    title:
      "Program Spotlight: B.Com – Accounting & Finance Admissions Open for 2025",
    date: "March 1, 2025",
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
    date: "April 28, 2025",
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
    date: "February 20, 2025",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800",
    excerpt:
      "A 4-member team from B.Sc – Psychology and BBA – Business Administration clinched first place at the Smart India Hackathon 2025, beating 300+ teams from across the country.",
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
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-gold text-xs font-sans tracking-[0.2em] uppercase mb-3">
            Stay Updated
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">
            News &amp; Events
          </h1>
          <p className="text-white/50 font-sans text-lg max-w-xl">
            The latest from {COLLEGE_NAME} — achievements, events, launches, and
            campus happenings.
          </p>
        </div>
      </div>

      {/* Featured */}
      {featured && (
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="section-label mb-6">Featured</div>
          <div className="bg-white rounded-3xl overflow-hidden border border-navy/5 grid md:grid-cols-2 hover:shadow-xl transition-all">
            <div className="relative h-72 md:h-auto">
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-5 left-5 flex gap-2">
                <span className="bg-gold text-white text-[10px] font-sans font-600 tracking-widest uppercase px-3 py-1 rounded-full">
                  {featured.type}
                </span>
                <span className="bg-navy text-white text-[10px] font-sans tracking-widest uppercase px-3 py-1 rounded-full">
                  {featured.category}
                </span>
              </div>
            </div>
            <div className="p-10 flex flex-col justify-center">
              <div className="text-muted text-xs font-sans mb-4">
                {featured.date}
              </div>
              <h2 className="font-serif text-3xl text-navy font-600 leading-snug mb-4">
                {featured.title}
              </h2>
              <p className="text-muted font-sans text-sm leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <button className="self-start btn-primary">Read More →</button>
            </div>
          </div>
        </div>
      )}

      {/* Filters + Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveFilter(c)}
              className={`px-4 py-2 rounded-full text-xs font-sans font-600 transition-all ${activeFilter === c ? "bg-navy text-white" : "bg-white border border-navy/10 text-navy/60 hover:text-navy"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-navy/5 hover:-translate-y-1 hover:shadow-xl transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    className={`text-[10px] font-sans font-600 tracking-widest uppercase px-2.5 py-1 rounded-full ${item.type === "News" ? "bg-navy text-white" : "bg-gold text-white"}`}
                  >
                    {item.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-muted text-xs font-sans mb-2">
                  {item.date} · {item.category}
                </div>
                <h3 className="font-serif text-lg text-navy font-600 leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-muted text-sm font-sans leading-relaxed line-clamp-2 mb-5">
                  {item.excerpt}
                </p>
                <button className="text-gold font-sans text-sm font-600 hover:text-gold-dark transition-colors flex items-center gap-1">
                  Read More <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Newspaper
              className="w-12 h-12 text-navy/30 mx-auto mb-4"
              strokeWidth={2}
            />
            <div className="font-serif text-2xl text-navy/40">
              No items in this category
            </div>
          </div>
        )}
      </div>

      {/* Newsletter CTA */}
      <div className="bg-white border-t border-cream py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="section-label">Stay Updated</div>
          <h2 className="font-serif text-3xl text-navy mb-4">
            Never miss an update
          </h2>
          <p className="text-muted font-sans mb-8">
            Get the latest news, events, and scholarship announcements in your
            inbox.
          </p>
          <div className="flex gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-cream border border-navy/10 rounded-full px-5 py-3 text-sm font-sans text-navy outline-none focus:border-gold/50 transition-colors"
            />
            <button className="btn-primary flex-shrink-0">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
