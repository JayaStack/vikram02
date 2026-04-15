import { useParams, Link } from "react-router-dom";
import { Building2, Clock3, Users } from "lucide-react";
import { courses } from "../constants/courses";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen bg-cream pt-32 px-6">
        <div className="max-w-3xl mx-auto bg-white border border-navy/5 rounded-2xl p-8 text-center">
          <h1 className="font-serif text-3xl text-navy mb-3">Course Not Found</h1>
          <p className="text-muted font-sans mb-6">
            The requested program is unavailable. Please explore the available
            programs below.
          </p>
          <Link to="/courses" className="btn-primary inline-block">
            View All Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-navy pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-sans mb-6 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            All Programs
          </Link>
          <div className="flex gap-2 mb-4">
            <span className="bg-gold/20 text-gold text-xs font-sans tracking-widest uppercase px-3 py-1 rounded-full">
              UG
            </span>
            <span className="bg-white/10 text-white/60 text-xs font-sans tracking-widest uppercase px-3 py-1 rounded-full">
              {course.department}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4 max-w-3xl">
            {course.name}
          </h1>
          <div className="flex flex-wrap gap-6 text-white/50 text-sm font-sans">
            <span className="inline-flex items-center gap-2">
              <Clock3 className="w-4 h-4" strokeWidth={2} />
              {course.duration}
            </span>
            <span className="inline-flex items-center gap-2">
              <Users className="w-4 h-4" strokeWidth={2} />
              {course.seats} seats
            </span>
            <span className="inline-flex items-center gap-2">
              <Building2 className="w-4 h-4" strokeWidth={2} />
              {course.affiliation}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <div className="bg-white rounded-2xl p-8 border border-navy/5">
              <h2 className="font-serif text-2xl text-navy mb-4">
                Program Overview
              </h2>
              <p className="text-muted font-sans leading-relaxed">
                {course.shortDescription}
              </p>
            </div>

            {/* Eligibility */}
            <div className="bg-white rounded-2xl p-8 border border-navy/5">
              <h2 className="font-serif text-2xl text-navy mb-5">
                Eligibility Criteria
              </h2>
              <div className="flex items-start gap-3 text-sm font-sans text-navy/80">
                <span className="w-5 h-5 rounded-full bg-gold/15 text-gold flex-shrink-0 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                {course.eligibility}
              </div>
            </div>

            {/* Curriculum */}
            <div className="bg-white rounded-2xl p-8 border border-navy/5">
              <h2 className="font-serif text-2xl text-navy mb-6">
                Program Highlights
              </h2>
              <div className="space-y-4">
                {course.highlights.map((highlight, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="bg-navy/5 text-navy/60 text-xs font-sans font-600 px-3 py-1.5 rounded-full block text-center">
                        Highlight {i + 1}
                      </span>
                    </div>
                    <div className="flex-1 pt-1 text-sm font-sans text-muted border-l border-dashed border-navy/10 pl-5">
                      {highlight}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Paths */}
            <div className="bg-white rounded-2xl p-8 border border-navy/5">
              <h2 className="font-serif text-2xl text-navy mb-5">
                Career Opportunities
              </h2>
              <div className="flex flex-wrap gap-3">
                {course.careers.map((c) => (
                  <span
                    key={c}
                    className="bg-cream text-navy font-sans text-sm px-4 py-2 rounded-full border border-navy/10"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Placement stats */}
            <div className="bg-navy rounded-2xl p-6 text-white">
              <div className="text-gold text-xs font-sans tracking-widest uppercase mb-4">
                Placement Stats
              </div>
              <div className="space-y-4">
                <div>
                  <div className="font-serif text-3xl font-600 text-gold">
                    {course.placementRate}
                  </div>
                  <div className="text-white/50 text-xs font-sans">
                    Placement Rate
                  </div>
                </div>
                <div>
                  <div className="font-serif text-3xl font-600 text-white">
                    {course.avgPackage}
                  </div>
                  <div className="text-white/50 text-xs font-sans">
                    Average Package
                  </div>
                </div>
                <div>
                  <div className="text-white/50 text-xs font-sans uppercase tracking-widest mb-2">
                    Top Recruiters
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {course.topRecruiters.map((r) => (
                      <span
                        key={r}
                        className="bg-white/10 text-white/70 text-xs font-sans px-2.5 py-1 rounded-full"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Fees */}
            <div className="bg-gold/10 border border-gold/20 rounded-2xl p-6">
              <div className="text-gold-dark text-xs font-sans tracking-widest uppercase mb-2">
                Annual Fee
              </div>
              <div className="font-serif text-3xl text-navy font-600">
                {course.fee}
              </div>
              <div className="text-muted text-xs font-sans mt-1">
                Scholarships available for merit & EWS
              </div>
            </div>

            {/* Apply CTA */}
            <div className="bg-white border border-navy/5 rounded-2xl p-6 space-y-3">
              <Link
                to="/admissions"
                className="block text-center btn-primary w-full"
              >
                Apply Now →
              </Link>
              <button className="block text-center w-full border border-navy/20 text-navy px-6 py-3 rounded-full text-sm font-sans font-500 hover:bg-navy hover:text-white transition-all">
                Talk to Counsellor
              </button>
              <Link
                to="/contact"
                className="block text-center text-gold font-sans text-sm hover:text-gold-dark transition-colors"
              >
                Download Brochure ↓
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
