import { Link } from "react-router-dom";
import { courses } from "../constants/courses";
import { ArrowRight } from "lucide-react";

export default function Courses() {
  return (
    <div className="overflow-x-hidden font-sans">
      
      {/* ── HERO SECTION ── */}
      <section className="bg-navy/5 pt-16 pb-24 md:pt-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="pr-0 md:pr-12">
            <div className="text-gold text-xs font-sans font-bold tracking-[0.2em] uppercase mb-4">
              Academics
            </div>
            <h1 className="font-sans font-bold text-5xl md:text-7xl text-navy leading-tight tracking-tight mb-6">
              Our Programs
            </h1>
            <p className="text-navy/80 font-sans text-lg leading-relaxed mb-8">
              Explore our undergraduate programs designed for strong academic outcomes and professional excellence. Join a curriculum built for the future.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000"
              alt="Courses Hero"
              className="w-full object-cover shadow-2xl"
              style={{ minHeight: "240px" }}
            />
          </div>
        </div>
      </section>

      {/* ── COURSE GRID ── */}
      <section className="py-24 bg-white px-6 md:px-12 border-b border-navy/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12 border-b-2 border-navy/5 pb-6">
            <h2 className="font-sans font-bold text-2xl text-navy uppercase tracking-tight">
              Undergraduate Programs
            </h2>
            <div className="text-sm font-sans font-bold text-navy/40 tracking-widest uppercase">
              {courses.length} Programs
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((c) => (
              <Link
                key={c.slug}
                to={`/courses/${c.slug}`}
                className="group flex flex-col border-2 border-navy/10 bg-white hover:border-navy transition-all p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-navy/5 -mr-12 -mt-12 rotate-45 group-hover:bg-navy transition-colors duration-500"></div>
                
                <h3 className="font-sans font-bold text-2xl text-navy mb-6 leading-tight group-hover:text-navy-light transition-colors">
                  {c.name}
                </h3>
                <p className="font-sans text-[15px] text-navy/70 leading-relaxed mb-10 flex-grow">
                  {c.shortDescription}
                </p>
                <div className="pt-6 border-t-2 border-navy/5">
                  <span className="inline-flex items-center gap-3 text-navy font-sans font-bold text-xs tracking-widest uppercase hover:gap-4 transition-all">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-navy/5 py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-navy/10 p-10 md:p-16 text-center shadow-xl">
            <h3 className="font-sans font-bold text-4xl text-navy mb-6">
              Find Your Path
            </h3>
            <p className="text-navy/70 font-sans text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Not sure which program suits you? Our expert counsellors can help you decide based on your interests and career goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-navy text-white px-8 py-4 font-sans font-bold text-sm tracking-wide flex items-center justify-center gap-3 hover:bg-navy-light transition-all"
              >
                Chat with Counselor
                <ArrowRight className="w-5 h-5 rounded-full border border-white p-0.5" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white text-navy border-2 border-navy px-8 py-4 font-sans font-bold text-sm tracking-wide flex items-center justify-center gap-3 hover:bg-navy hover:text-white transition-all"
              >
                Book Session
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
