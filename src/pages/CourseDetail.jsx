import { useParams, Link } from "react-router-dom";
import { Building2, Clock3, Users } from "lucide-react";

const courseData = {
  bcom: {
    name: "B.Com",
    dept: "Commerce",
    level: "UG",
    duration: "3 Years (6 Semesters)",
    seats: 80,
    affiliation: "University of Madras",
    overview:
      "A foundational commerce program focused on accounting, finance, taxation, and business law. Students gain practical knowledge through case studies and project-based learning for careers in corporate finance and banking.",
    eligibility: [
      "Pass in Class XII in any stream",
      "Minimum 50% aggregate marks (45% for SC/ST)",
      "Admission based on merit and seat availability",
    ],
    curriculum: [
      {
        sem: "Sem I–II",
        topics:
          "Financial Accounting, Business Economics, Business Law, English",
      },
      {
        sem: "Sem III–IV",
        topics: "Corporate Accounting, Cost Accounting, Banking, Taxation",
      },
      {
        sem: "Sem V–VI",
        topics: "Auditing, Financial Management, Entrepreneurship, Project",
      },
    ],
    careers: [
      "Accountant",
      "Tax Associate",
      "Banking Executive",
      "Finance Analyst",
      "Entrepreneur",
    ],
    fees: "₹22,000 / year",
    placementRate: "92%",
    avgPackage: "₹3.9 LPA",
    topRecruiters: ["HDFC Bank", "Axis Bank", "Deloitte", "TCS", "ICICI"],
  },
  bba: {
    name: "BBA",
    dept: "Management",
    level: "UG",
    duration: "3 Years (6 Semesters)",
    seats: 60,
    affiliation: "University of Madras",
    overview:
      "BBA develops strong business fundamentals in management, marketing, operations, and leadership. The program combines classroom learning with practical exposure through presentations, case studies, and internships.",
    eligibility: [
      "Pass in Class XII in any stream",
      "Minimum 50% aggregate marks (45% for SC/ST)",
      "Admission based on merit and seat availability",
    ],
    curriculum: [
      {
        sem: "Sem I–II",
        topics:
          "Principles of Management, Business Communication, Economics, Accounting",
      },
      {
        sem: "Sem III–IV",
        topics:
          "Marketing, Human Resources, Statistics, Organizational Behaviour",
      },
      {
        sem: "Sem V–VI",
        topics: "Operations, Strategy, Entrepreneurship, Internship + Project",
      },
    ],
    careers: [
      "Business Analyst",
      "Marketing Executive",
      "HR Associate",
      "Operations Coordinator",
      "Management Trainee",
    ],
    fees: "₹24,000 / year",
    placementRate: "93%",
    avgPackage: "₹4.1 LPA",
    topRecruiters: ["Accenture", "HDFC Bank", "Deloitte", "Cognizant", "TVS"],
  },
  "bsc-computer-science": {
    name: "B.Sc Computer Science",
    dept: "Science",
    level: "UG",
    duration: "3 Years (6 Semesters)",
    seats: 60,
    affiliation: "University of Madras",
    overview:
      "A core computer science program covering programming, data structures, databases, networking, and software engineering. Students build practical coding and problem-solving skills through labs, mini-projects, and internships.",
    eligibility: [
      "Pass in Class XII with Mathematics/Computer Science",
      "Minimum 50% aggregate marks (45% for SC/ST)",
      "Admission based on merit and seat availability",
    ],
    curriculum: [
      {
        sem: "Sem I-II",
        topics: "Programming in C, Python, Mathematics, Digital Fundamentals",
      },
      {
        sem: "Sem III-IV",
        topics:
          "Data Structures, Java, DBMS, Operating Systems, Web Development",
      },
      {
        sem: "Sem V-VI",
        topics:
          "Computer Networks, Software Engineering, Electives, Project + Internship",
      },
    ],
    careers: [
      "Software Developer",
      "Full-Stack Developer",
      "QA Engineer",
      "System Analyst",
      "Technical Support Engineer",
    ],
    fees: "₹28,000 / year",
    placementRate: "95%",
    avgPackage: "₹5.2 LPA",
    topRecruiters: ["TCS", "Infosys", "Zoho", "Wipro", "Freshworks", "HCL"],
  },
  bca: {
    name: "BCA",
    dept: "Science",
    level: "UG",
    duration: "3 Years (6 Semesters)",
    seats: 60,
    affiliation: "University of Madras",
    overview:
      "BCA offers a strong application-oriented curriculum in programming, software development, and database technologies. The program prepares students for IT services, product companies, and startup roles.",
    eligibility: [
      "Pass in Class XII in any stream",
      "Minimum 50% aggregate marks (45% for SC/ST)",
      "Admission based on merit and seat availability",
    ],
    curriculum: [
      {
        sem: "Sem I-II",
        topics:
          "Programming in C, Computer Fundamentals, Mathematics, Office Tools",
      },
      {
        sem: "Sem III-IV",
        topics: "Java, DBMS, Data Structures, Web Technologies",
      },
      {
        sem: "Sem V-VI",
        topics: "Mobile App Development, Cloud Basics, Internship + Project",
      },
    ],
    careers: [
      "Software Developer",
      "Web Developer",
      "Application Support Engineer",
      "Database Administrator",
      "UI Developer",
    ],
    fees: "₹26,000 / year",
    placementRate: "93%",
    avgPackage: "₹4.3 LPA",
    topRecruiters: ["Cognizant", "TCS", "Wipro", "Infosys", "HCL"],
  },
  "ba-english": {
    name: "BA English",
    dept: "Arts",
    level: "UG",
    duration: "3 Years (6 Semesters)",
    seats: 40,
    affiliation: "University of Madras",
    overview:
      "BA English strengthens language, literature, and critical analysis skills. Students explore global literature, communication, and writing practices useful for media, education, and corporate communication careers.",
    eligibility: [
      "Pass in Class XII in any stream",
      "Minimum 50% aggregate marks (45% for SC/ST)",
      "Admission based on merit and seat availability",
    ],
    curriculum: [
      {
        sem: "Sem I-II",
        topics: "British Literature, Grammar, Spoken English, Language Skills",
      },
      {
        sem: "Sem III-IV",
        topics: "American Literature, Indian Writing in English, Linguistics",
      },
      {
        sem: "Sem V-VI",
        topics: "Literary Criticism, Communication, Journalism Basics, Project",
      },
    ],
    careers: [
      "Content Writer",
      "Editor",
      "Teacher",
      "Communications Executive",
      "Media Professional",
    ],
    fees: "₹20,000 / year",
    placementRate: "90%",
    avgPackage: "₹3.6 LPA",
    topRecruiters: [
      "Sutherland",
      "Tech Mahindra",
      "Byju's",
      "HCL",
      "Infosys BPM",
    ],
  },
};

const defaultCourse = {
  name: "Course Details",
  dept: "Science",
  level: "UG",
  duration: "3 Years",
  seats: 60,
  affiliation: "University of Madras",
  overview:
    "This program provides a comprehensive foundation in the subject area with industry-relevant curriculum and excellent placement support.",
  eligibility: [
    "Pass in Class XII with relevant subjects",
    "Minimum 50% aggregate marks",
  ],
  curriculum: [
    { sem: "Sem I–II", topics: "Foundation courses and core subjects" },
    { sem: "Sem III–IV", topics: "Intermediate specialisation and electives" },
    { sem: "Sem V–VI", topics: "Advanced topics, internship and project" },
  ],
  careers: ["Industry Professional", "Researcher", "Entrepreneur"],
  fees: "On Request",
  placementRate: "92%",
  avgPackage: "₹4.5 LPA",
  topRecruiters: ["TCS", "Infosys", "Wipro", "HCL", "Deloitte"],
};

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courseData[slug] || {
    ...defaultCourse,
    name:
      slug?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) ||
      "Course Details",
  };

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
              {course.level}
            </span>
            <span className="bg-white/10 text-white/60 text-xs font-sans tracking-widest uppercase px-3 py-1 rounded-full">
              {course.dept}
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
                {course.overview}
              </p>
            </div>

            {/* Eligibility */}
            <div className="bg-white rounded-2xl p-8 border border-navy/5">
              <h2 className="font-serif text-2xl text-navy mb-5">
                Eligibility Criteria
              </h2>
              <ul className="space-y-3">
                {course.eligibility.map((e, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm font-sans text-navy/80"
                  >
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
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum */}
            <div className="bg-white rounded-2xl p-8 border border-navy/5">
              <h2 className="font-serif text-2xl text-navy mb-6">
                Curriculum Highlights
              </h2>
              <div className="space-y-4">
                {course.curriculum.map((c, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="bg-navy/5 text-navy/60 text-xs font-sans font-600 px-3 py-1.5 rounded-full block text-center">
                        {c.sem}
                      </span>
                    </div>
                    <div className="flex-1 pt-1 text-sm font-sans text-muted border-l border-dashed border-navy/10 pl-5">
                      {c.topics}
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
                {course.fees}
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
