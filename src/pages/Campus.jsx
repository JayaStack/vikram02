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
    img: "https://images.unsplash.com/photo-1532094349884-543559059e1d?q=80&w=800",
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
  const ActiveIcon = facilities[active].icon;

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1920"
          alt="Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-16">
          <div className="text-gold text-xs font-sans tracking-[0.2em] uppercase mb-3">
            Campus Life
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">
            A space built for
            <br />
            <em className="font-light">modern learners</em>
          </h1>
          <p className="text-white/60 font-sans text-lg max-w-xl">
            5-acre campus in the heart of Anna Nagar with world-class
            infrastructure, safety, and community.
          </p>
        </div>
      </div>

      {/* Facilities Interactive Gallery */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <div className="section-label">Infrastructure</div>
          <h2 className="section-heading">
            Every corner is designed <em className="font-light">for you</em>
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* List */}
          <div className="space-y-2">
            {facilities.map((f, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left flex items-center gap-4 p-4 rounded-xl transition-all ${active === i ? "bg-navy text-white shadow-lg" : "bg-white hover:bg-cream border border-navy/5"}`}
              >
                <f.icon
                  className="w-5 h-5 text-gold flex-shrink-0"
                  strokeWidth={2}
                />
                <div>
                  <div
                    className={`font-sans font-600 text-sm ${active === i ? "text-white" : "text-navy"}`}
                  >
                    {f.title}
                  </div>
                </div>
                {active === i && (
                  <svg
                    className="w-4 h-4 text-gold ml-auto"
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
                )}
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl overflow-hidden border border-navy/5 h-full">
              <div className="relative h-72">
                <img
                  key={active}
                  src={facilities[active].img}
                  alt={facilities[active].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                <div className="absolute bottom-5 left-6 flex items-center gap-2">
                  <ActiveIcon className="w-6 h-6 text-gold" strokeWidth={2} />
                  <h3 className="font-serif text-2xl text-white font-600">
                    {facilities[active].title}
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-muted font-sans leading-relaxed text-base">
                  {facilities[active].desc}
                </p>
                <div className="mt-6 flex gap-3">
                  <Link to="/admissions" className="btn-primary text-sm">
                    Apply to Join
                  </Link>
                  <Link to="/contact" className="btn-outline-dark text-sm">
                    Book a Campus Visit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Safety */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">Your Safety Matters</div>
              <h2 className="section-heading mb-6">
                A campus where you feel <em className="font-light">at home</em>
              </h2>
              <p className="text-muted font-sans leading-relaxed mb-8">
                We understand that parents and students want to feel completely
                safe. Our campus is designed with safety-first infrastructure,
                professional staff, and responsive systems.
              </p>
              <ul className="space-y-3">
                {safety.map((s, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm font-sans text-navy/80"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex-shrink-0 flex items-center justify-center">
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
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=600"
                alt=""
                className="rounded-2xl h-56 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600"
                alt=""
                className="rounded-2xl h-56 w-full object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-navy rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <div className="text-gold text-xs font-sans tracking-[0.2em] uppercase mb-3">
                Location
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                Right in the heart of
                <br />
                <em>Anna Nagar, Chennai</em>
              </h2>
              <p className="text-white/50 font-sans mb-6">
                AI, II Street, 9th Main Road, Anna Nagar, Chennai – 600 040
                <br />5 min from Anna Nagar Tower Metro Station
              </p>
              <a
                href="https://maps.google.com/?q=Anna+Adarsh+College+Chennai"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-full text-sm font-sans font-600 hover:bg-gold-dark transition-all"
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Open in Google Maps
              </a>
            </div>
            <div className="w-full md:w-80 h-48 bg-white/10 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white/40 font-sans text-sm">
                <svg
                  className="w-10 h-10 mx-auto mb-2 text-white/20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                Interactive map
                <br />
                loads on site
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
