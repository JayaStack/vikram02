import { useParams, Link } from "react-router-dom";
import { Building2, Clock3, Users, ArrowRight, ArrowLeft, Download, MessageCircle } from "lucide-react";
import { courses } from "../constants/courses";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen bg-navy/5 pt-32 px-6 flex items-center justify-center">
        <div className="max-w-xl w-full bg-white border-4 border-navy/10 p-12 text-center shadow-2xl">
          <h1 className="font-sans font-bold text-4xl text-navy mb-4">
            Program Not Found
          </h1>
          <p className="text-navy/60 font-sans text-lg mb-10">
            The requested course is currently unavailable or may have been moved.
          </p>
          <Link to="/courses" className="bg-navy text-white px-8 py-4 font-sans font-bold text-sm tracking-wide inline-flex items-center gap-3 hover:bg-navy-light transition-all">
            <ArrowLeft className="w-5 h-5" />
            View All Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden font-sans">
      
      {/* ── HERO SECTION ── */}
      <section className="bg-navy/5 pt-16 pb-24 md:pt-24 md:pb-32 px-6 md:px-12 border-b border-navy/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="pr-0 md:pr-12">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-navy/40 hover:text-navy text-xs font-bold font-sans uppercase tracking-widest mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Programs
            </Link>
            <div className="flex gap-3 mb-6">
              <span className="bg-navy text-white text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1">
                UG
              </span>
              <span className="bg-navy/10 text-navy text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1">
                {course.department}
              </span>
            </div>
            <h1 className="font-sans font-bold text-4xl md:text-6xl text-navy leading-tight tracking-tight mb-8">
              {course.name}
            </h1>
            <div className="flex flex-wrap gap-8">
              {[
                { icon: Clock3, label: course.duration },
                { icon: Users, label: `${course.seats} Seats` },
                { icon: Building2, label: course.affiliation },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-navy font-bold">
                  <item.icon className="w-5 h-5 text-gold" strokeWidth={2} />
                  <span className="text-sm uppercase tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000"
              alt={course.name}
              className="w-full object-cover shadow-2xl"
              style={{ minHeight: "350px" }}
            />
          </div>
        </div>
      </section>

      {/* ── CONTENT SECTION ── */}
      <section className="py-24 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Overview */}
              <div className="bg-white border-2 border-navy/10 p-10">
                <h2 className="font-sans font-bold text-3xl text-navy mb-6 uppercase tracking-tight">
                  Program Overview
                </h2>
                <p className="text-navy/70 font-sans text-lg leading-relaxed">
                  {course.shortDescription}
                </p>
              </div>

              {/* Eligibility */}
              <div className="bg-white border-2 border-navy/10 p-10">
                <h2 className="font-sans font-bold text-3xl text-navy mb-8 uppercase tracking-tight">
                  Eligibility Criteria
                </h2>
                <div className="flex items-start gap-4 p-6 bg-navy/5 border-l-4 border-navy">
                  <div className="text-navy font-sans text-lg font-bold leading-relaxed">
                    {course.eligibility}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-white border-2 border-navy/10 p-10">
                <h2 className="font-sans font-bold text-3xl text-navy mb-10 uppercase tracking-tight">
                  Program Highlights
                </h2>
                <div className="space-y-6">
                  {course.highlights.map((highlight, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-6 items-start pb-6 border-b-2 border-navy/5 last:border-0 last:pb-0">
                      <div className="min-w-[140px]">
                        <span className="bg-navy text-white text-[10px] font-sans font-bold px-4 py-1.5 uppercase tracking-widest block text-center">
                          Point {i + 1}
                        </span>
                      </div>
                      <div className="text-navy/70 font-sans text-[16px] leading-relaxed">
                        {highlight}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Careers */}
              <div className="bg-white border-2 border-navy/10 p-10">
                <h2 className="font-sans font-bold text-3xl text-navy mb-8 uppercase tracking-tight">
                  Career Opportunities
                </h2>
                <div className="flex flex-wrap gap-4">
                  {course.careers.map((c) => (
                    <span
                      key={c}
                      className="bg-navy/5 text-navy font-sans font-bold text-xs px-6 py-3 border-2 border-navy/10 uppercase tracking-widest"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Placement Stats */}
              <div className="bg-navy p-10 border-4 border-navy/10 shadow-xl">
                <div className="text-gold text-[10px] font-sans font-bold tracking-[0.2em] uppercase mb-8">
                  Placement Success
                </div>
                <div className="space-y-10">
                  <div className="border-b border-white/10 pb-6">
                    <div className="font-sans font-bold text-5xl text-white mb-2">
                      {course.placementRate}
                    </div>
                    <div className="text-white/40 text-[11px] font-sans font-bold uppercase tracking-widest">
                      Placement Rate
                    </div>
                  </div>
                  <div className="border-b border-white/10 pb-6">
                    <div className="font-sans font-bold text-4xl text-white mb-2">
                      {course.avgPackage}
                    </div>
                    <div className="text-white/40 text-[11px] font-sans font-bold uppercase tracking-widest">
                      Average Package
                    </div>
                  </div>
                  <div>
                    <div className="text-gold text-[11px] font-sans font-bold uppercase tracking-widest mb-6">
                      Top Recruiters
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {course.topRecruiters.map((r) => (
                        <span
                          key={r}
                          className="bg-white/10 text-white text-[10px] font-sans font-bold px-3 py-1.5 uppercase tracking-tight"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Fee Block */}
              <div className="bg-white border-2 border-navy/10 p-10">
                <div className="text-navy/40 text-[11px] font-sans font-bold uppercase tracking-widest mb-4">
                  Annual Tuition Fee
                </div>
                <div className="font-sans font-bold text-4xl text-navy mb-4">
                  {course.fee}
                </div>
                <p className="text-navy/60 text-xs font-sans font-medium leading-relaxed">
                  * Scholarships available for merit and economically weaker sections.
                </p>
              </div>

              {/* CTA Block */}
              <div className="space-y-4">
                <Link
                  to="/admissions"
                  className="bg-navy text-white w-full py-5 font-sans font-bold text-sm tracking-wide flex items-center justify-center gap-3 hover:bg-navy-light transition-all"
                >
                  Apply Online
                  <ArrowRight className="w-5 h-5 rounded-full border border-white p-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-navy border-2 border-navy w-full py-5 font-sans font-bold text-sm tracking-wide flex items-center justify-center gap-3 hover:bg-navy hover:text-white transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Talk to Counsellor
                </Link>
                <a
                  href="#"
                  className="text-navy font-sans font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 py-4 hover:text-gold transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Brochure
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
