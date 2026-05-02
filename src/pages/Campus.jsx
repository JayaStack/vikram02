import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dumbbell,
  FlaskConical,
  House,
  Laptop,
  Library,
  Monitor,
  Theater,
  UtensilsCrossed,
  ArrowRight,
  MapPin
} from "lucide-react";

const facilities = [
  {
    title: "Smart Classrooms",
    desc: "80+ digital smart classrooms with projection systems, interactive boards, and high-speed Wi-Fi throughout.",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800",
    icon: Monitor,
  },
  {
    title: "Computer Labs",
    desc: "6 dedicated computer labs with 400+ workstations running the latest software stacks for coding and simulations.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800",
    icon: Laptop,
  },
  {
    title: "Science Laboratories",
    desc: "Fully equipped Physics, Chemistry, Biology, and Psychology labs with modern instruments and safety protocols.",
    img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=800",
    icon: FlaskConical,
  },
  {
    title: "Central Library",
    desc: "50,000+ volumes, digital journals, NPTEL access, and quiet reading zones. Open 8am–8pm on weekdays.",
    img: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=800",
    icon: Library,
  },
  {
    title: "Sports Complex",
    desc: "Basketball, volleyball, badminton courts, a 400m athletics track, and a well-equipped gym.",
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800",
    icon: Dumbbell,
  },
  {
    title: "Hostel",
    desc: "Secure, comfortable hostel accommodation for outstation students with CCTV, warden support, and nutritious meals.",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800",
    icon: House,
  },
  {
    title: "Cafeteria",
    desc: "Hygienic food court serving vegetarian and non-vegetarian meals, snacks, and beverages throughout the day.",
    img: "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=800",
    icon: UtensilsCrossed,
  },
  {
    title: "Auditorium",
    desc: "1,500-seat air-conditioned auditorium with professional AV setup for events, seminars, and cultural programmes.",
    img: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=800",
    icon: Theater,
  },
];

const safety = [
  "24×7 CCTV surveillance across campus",
  "Professional security guards at all entry points",
  "Anti-ragging committee with student helpline",
  "Women's internal complaints committee",
  "Emergency medical response team on campus",
  "Safe, lit walkways and parking zones",
];

export default function Campus() {
  const [active, setActive] = useState(0);

  return (
    <div className="overflow-x-hidden font-sans">
      
      {/* ── HERO SECTION ── */}
      <section className="bg-navy/5 pt-16 pb-24 md:pt-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="pr-0 md:pr-12">
            <h1 className="font-sans font-bold text-5xl md:text-7xl text-navy leading-tight tracking-tight mb-6">
              Campus Life
            </h1>
            <p className="text-navy/80 font-sans text-lg leading-relaxed mb-8">
              A 5-acre campus built for modern learners in the heart of Anna Nagar. Experience world-class infrastructure, unwavering safety, and a vibrant community.
            </p>
            <Link
              to="/admissions"
              className="bg-navy text-white px-6 py-4 font-sans font-bold text-sm inline-flex items-center gap-3 hover:bg-navy-light transition-colors"
            >
              Book a campus tour
              <ArrowRight className="w-5 h-5 rounded-full border border-white p-0.5" />
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1920"
              alt="Campus Hero"
              className="w-full object-cover shadow-2xl"
              style={{ minHeight: "400px" }}
            />
          </div>
        </div>
      </section>

      {/* ── FACILITIES INTERACTIVE GALLERY ── */}
      <section className="py-24 bg-white px-6 md:px-12 border-b border-navy/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-sans font-bold text-3xl md:text-4xl text-navy mb-12">
            Infrastructure
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* List */}
            <div className="space-y-3">
              {facilities.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left flex items-center gap-4 p-5 transition-colors border-2 ${active === i ? "bg-navy border-navy text-white" : "bg-navy/5 border-navy/5 hover:border-navy text-navy"}`}
                >
                  <f.icon
                    className={`w-6 h-6 flex-shrink-0 ${active === i ? "text-white" : "text-navy"}`}
                    strokeWidth={1.5}
                  />
                  <div className={`font-sans font-bold text-[15px] tracking-wide ${active === i ? "text-white" : "text-navy"}`}>
                    {f.title}
                  </div>
                  {active === i && (
                    <ArrowRight className="w-5 h-5 ml-auto text-white" strokeWidth={2} />
                  )}
                </button>
              ))}
            </div>

            {/* Detail */}
            <div className="lg:col-span-2">
              <div className="bg-navy/5 border-2 border-navy/10 flex flex-col h-full">
                <div className="h-80 w-full overflow-hidden border-b-2 border-navy/10">
                  <img
                    key={active}
                    src={facilities[active].img}
                    alt={facilities[active].title}
                    className="w-full h-full object-cover animate-fade-in"
                  />
                </div>
                <div className="p-8 md:p-12 flex-grow flex flex-col justify-center bg-white">
                  <div className="flex items-center gap-4 mb-4 text-navy">
                    <h3 className="font-sans font-bold text-3xl">
                      {facilities[active].title}
                    </h3>
                  </div>
                  <p className="text-navy/80 font-sans text-lg leading-relaxed mb-8">
                    {facilities[active].desc}
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ── SAFETY ── */}
      <section className="bg-navy/5 py-24 px-6 md:px-12 border-b border-navy/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-sans font-bold text-3xl md:text-4xl text-navy mb-6">
                Your Safety Matters
              </h2>
              <p className="text-navy/80 font-sans text-lg leading-relaxed mb-10">
                We understand that parents and students want to feel completely safe. Our campus is designed with safety-first infrastructure, professional staff, and highly responsive systems.
              </p>
              <ul className="space-y-4">
                {safety.map((s, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 font-sans font-bold text-[15px] text-navy"
                  >
                    <span className="w-6 h-6 border-2 border-navy flex-shrink-0 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-navy"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=600"
                alt="Campus Safety 1"
                className="w-full h-64 object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600"
                alt="Campus Safety 2"
                className="w-full h-64 object-cover shadow-lg mt-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-navy p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 border-4 border-navy/10 shadow-2xl">
            <div className="flex-1">
              <h2 className="font-sans font-bold text-4xl text-white mb-6">
                Right in the heart of Anna Nagar
              </h2>
              <p className="text-white/80 font-sans text-lg mb-8 leading-relaxed max-w-lg">
                AI, II Street, 9th Main Road, Anna Nagar, Chennai – 600 040<br />
                <span className="font-bold">5 min from Anna Nagar Tower Metro Station</span>
              </p>
              <a
                href="https://maps.google.com/?q=Dr+Vikram+Agarwal+College+of+Arts+and+Science+Chennai"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-navy px-8 py-4 font-sans font-bold text-sm inline-flex items-center gap-3 hover:bg-cream transition-colors"
              >
                Open in Google Maps
                <ArrowRight className="w-5 h-5 rounded-full border border-navy p-0.5" />
              </a>
            </div>
            <div className="w-full md:w-96 h-64 border-2 border-white/20 bg-navy-light">
              <iframe
                title="Campus Location Map"
                src="https://maps.google.com/maps?q=Dr+Vikram+Agarwal+College+of+Arts+and+Science+Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
