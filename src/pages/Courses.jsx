import { Link } from "react-router-dom";

const allCourses = [
  {
    slug: "bcom",
    name: "B.Com",
    desc: "Build strong fundamentals in accounting, finance, and business law.",
  },
  {
    slug: "bba",
    name: "BBA",
    desc: "Learn business strategy, leadership, and practical management skills.",
  },
  {
    slug: "bsc-computer-science",
    name: "B.Sc Computer Science",
    desc: "Master programming, software engineering, and core computer science concepts.",
  },
  {
    slug: "bca",
    name: "BCA",
    desc: "Gain hands-on expertise in applications, databases, and full-stack development.",
  },
  {
    slug: "ba-english",
    name: "BA English",
    desc: "Develop advanced communication, literary analysis, and critical thinking skills.",
  },
];

export default function Courses() {
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
            Explore our top 5 undergraduate programs designed for strong
            academic and career outcomes.
          </p>
        </div>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-6 text-sm font-sans text-muted">
          Showing <strong className="text-navy">{allCourses.length}</strong>{" "}
          programs
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCourses.map((c) => (
            <Link
              key={c.slug}
              to={`/courses/${c.slug}`}
              className="group bg-white rounded-2xl p-6 border border-navy/5 hover:border-gold/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-serif text-xl text-navy font-600 mb-3 leading-snug">
                {c.name}
              </h3>
              <p className="text-muted text-sm font-sans leading-relaxed mb-5">
                {c.desc}
              </p>
              <div className="pt-3 border-t border-cream">
                <span className="inline-flex items-center gap-2 text-gold-dark font-sans text-sm font-600">
                  View Details
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
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
