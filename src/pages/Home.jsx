import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  Briefcase,
  Building2,
  GraduationCap,
  MessageCircle,
  Search,
  ArrowRight,
  Menu,
} from "lucide-react";
import { COLLEGE_NAME } from "../constants/college";
import { courses } from "../constants/courses";

/* ── helpers ── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("is-visible"),
        ),
      { threshold: 0.1 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);

          const startTime = performance.now();

          const animate = (time) => {
            const progress = Math.min((time - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.floor(eased * end);

            setCount(value);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration, started]);

  return [count, ref];
}

/* ── data ── */
const stats = [
  { 
    value: "3,200+", 
    label: "Students Enrolled", 
    icon: GraduationCap, 
    img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600",
    description: "Of our research has been assessed to be 'world leading' or 'internationally excellent' in the Research Excellence Framework",
    moreInfo: "Our research-intensive environment ensures that students are at the forefront of discovery. We collaborate with global partners to solve real-world problems, from climate change to public health."
  },
  { 
    value: "94%", 
    label: "Placement Rate", 
    icon: Briefcase, 
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600",
    description: `${COLLEGE_NAME} is ranked 74th in the world and top 10 in all major league tables.`,
    moreInfo: "Our graduates are highly sought after by top employers worldwide. We provide extensive career support, including internships, networking events, and one-on-one coaching to ensure our students are job-ready."
  },
  { 
    value: "250+", 
    label: "Recruiter Partners", 
    icon: Building2, 
    img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=600",
    description: "in the region by top 100 graduate employers",
    moreInfo: "We maintain strong relationships with over 250 leading companies across various industries. These partnerships provide our students with exclusive access to job opportunities, projects, and mentorship."
  },
];

const campusCards = [
  {
    url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600",
    label: "Visit Campus",
    link: "/campus",
  },
  {
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600",
    label: "About " + COLLEGE_NAME,
    link: "/about",
  },
  {
    url: "https://designcollaborative.com/wp-content/uploads/2024/02/11.16.22_066-scaled.webp",
    label: "Open Days",
    link: "/admissions",
  },
  {
    url: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=600",
    label: "Accommodation",
    link: "/campus",
  },
];

/* ── component ── */
export default function Home() {
  useScrollReveal();
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (i) => {
    setExpanded(prev => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <div className="overflow-x-hidden font-sans">
      


      {/* ── HERO SECTION ── */}
      <section className="bg-navy/5 pt-16 pb-24 md:pt-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="pr-0 md:pr-12">
            <h1 className="font-sans font-bold text-5xl md:text-7xl text-navy leading-tight tracking-tight mb-6">
              Challenge the<br />Conventional
            </h1>
            <p className="text-navy/80 font-sans text-lg leading-relaxed mb-8">
              Climate crisis, AI risks, Geopolitical instability and Economic inequality are all real challenges facing our society. Our degrees provide you with the future-ready skills to tackle these issues, allowing you to lead, influence and shape not just your future career, but the future of our world.
            </p>
            <Link
              to="/courses"
              className="bg-navy text-white px-6 py-4 font-sans font-bold text-sm inline-flex items-center gap-3 hover:bg-navy-light transition-colors"
            >
              Discover courses at {COLLEGE_NAME}
              <ArrowRight className="w-5 h-5 rounded-full border border-white p-0.5" />
            </Link>
          </div>
          <div className="relative">
            {/* Using a visually complex placeholder image for the collage effect */}
            <img
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800"
              alt="Hero Collage"
              className="w-full object-cover shadow-2xl"
              style={{ minHeight: "400px" }}
            />
          </div>
        </div>
      </section>

      {/* ── WHY US (STATS) ── */}
      <section className="py-20 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-sans font-bold text-2xl md:text-3xl text-navy mb-12">
            Why {COLLEGE_NAME}?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="flex flex-col border border-navy/5 hover:shadow-lg transition-all duration-300 bg-navy"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={stat.img}
                    alt={stat.label}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="text-white p-8 flex-grow flex flex-col justify-center">
                  <div className="text-6xl font-bold font-sans mb-6 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm font-sans text-white leading-relaxed">
                      {stat.description}
                    </p>
                    {expanded[i] && (
                      <p className="text-sm font-sans text-white/70 leading-relaxed animate-fade-in border-t border-white/10 pt-4">
                        {stat.moreInfo}
                      </p>
                    )}
                  </div>
                  <button 
                    onClick={() => toggleExpand(i)}
                    className="mt-6 text-xs underline underline-offset-4 text-white/50 hover:text-white transition-colors self-start uppercase tracking-widest font-bold"
                  >
                    ({expanded[i] ? "Read less" : "Read more"})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSE SEARCH ── */}
      <section className="bg-navy/5 py-16 px-6 md:px-12 border-y border-navy/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-sans font-bold text-2xl text-navy mb-4">
            Search for a course
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow flex items-center border-2 border-navy bg-navy/5">
              <span className="pl-4 text-navy"><Search className="w-5 h-5" /></span>
              <input
                type="text"
                placeholder="Search for a course or enter keyword..."
                className="w-full bg-transparent p-4 outline-none text-navy placeholder:text-navy/60 font-medium"
              />
            </div>
            <div className="relative">
               <select className="border-2 border-navy bg-navy/5 p-4 w-full md:w-64 text-navy font-medium outline-none appearance-none cursor-pointer">
                 <option>Study level</option>
                 <option>Undergraduate</option>
                 <option>Postgraduate</option>
                 <option>Diploma</option>
               </select>
               <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-navy">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
               </div>
            </div>
            <button className="bg-navy text-white px-8 py-4 font-bold flex items-center justify-center gap-3 whitespace-nowrap hover:bg-navy-light transition-colors">
              Find your course
              <ArrowRight className="w-5 h-5 rounded-full border border-white p-0.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ── VISUAL NAVIGATION CARDS ── */}
      <section className="py-20 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campusCards.map((card, i) => (
              <Link key={i} to={card.link} className="flex flex-col group h-[400px]">
                <div className="flex-grow overflow-hidden">
                  <img
                    src={card.url}
                    alt={card.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="bg-navy text-white p-5 flex items-center justify-between">
                  <span className="font-bold text-sm tracking-wide">{card.label}</span>
                  <ArrowRight className="w-6 h-6 rounded-full border border-white p-1 group-hover:bg-white group-hover:text-navy transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEXT BLOCK ── */}
      <section className="py-24 bg-navy/5 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6 text-navy font-sans text-[17px] leading-[1.8] max-w-4xl">
            <p>
              Founded in 1965, {COLLEGE_NAME} is the youngest member of the Russell Group and renowned for seeking out and addressing complex global challenges with era-defining innovative thinking. A connected ecosystem of staff, students and alumni, the University fosters transformative learning, interdisciplinary collaboration and bold industry partnerships across state-of-the-art facilities in the UK and global satellite hubs.
            </p>
            <p>
              Here, spirited thinkers push boundaries, experiment, and challenge convention to create a better world.
            </p>
            <p>
              This is {COLLEGE_NAME}.
            </p>
            <p>
              This is Beyond.
            </p>
          </div>
          <div className="mt-10">
            <Link
              to="/admissions"
              className="bg-navy text-white px-6 py-4 font-bold inline-flex items-center gap-3 hover:bg-navy-light transition-colors"
            >
              Study here
              <ArrowRight className="w-5 h-5 rounded-full border border-white p-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTED PROGRAM (IFP Equivalent) ── */}
      <section className="bg-cream text-navy border-t border-navy/5">
        {/* We use an inline style closely resembling the peach color in the template, 
            since it's a specific block design and doesn't break global themes. 
            Alternatively, we could use bg-gold/50, but let's closely match the layout requested. */}
        <div className="grid md:grid-cols-2 min-h-[500px]">
          <div className="p-12 md:p-24 flex flex-col justify-center">
            <h2 className="font-sans font-bold text-4xl md:text-5xl leading-tight mb-6 max-w-lg">
              Join the {COLLEGE_NAME}<br />International<br />Foundation<br />Programme (IFP)
            </h2>
            <p className="font-sans text-[17px] leading-relaxed mb-8 max-w-md text-navy/90 font-medium">
              Begin your journey to a top university with the {COLLEGE_NAME} IFP. Gain the skills, knowledge, and confidence needed for your academic success.
            </p>
            <Link
              to="/admissions"
              className="bg-navy text-white px-6 py-4 font-bold inline-flex items-center gap-3 w-max hover:bg-navy-light transition-colors"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 rounded-full border border-white p-0.5" />
            </Link>
          </div>
          <div className="relative group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800"
              alt="Campus Life"
              className="w-full h-full object-cover"
            />
            {/* Carousel Arrow Controls Mockup */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-navy/80 text-white flex items-center justify-center hover:bg-navy transition-colors">
               <ArrowRight className="w-6 h-6 rotate-180" />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-navy/80 text-white flex items-center justify-center hover:bg-navy transition-colors">
               <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
