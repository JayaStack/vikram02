import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { COLLEGE_NAME } from "../constants/college";

const footerLinks = {
  Academics: [
    { label: "All Courses", href: "/courses" },
    { label: "Faculty", href: "/faculty" },
    { label: "Research & Development", href: "/about" },
    { label: "Add-on Programs", href: "/courses" },
  ],
  "Campus Life": [
    { label: "Infrastructure", href: "/campus" },
    { label: "Placements", href: "/placements" },
    { label: "Sports & Clubs", href: "/campus" },
    { label: "Hostel", href: "/campus" },
  ],
  Admissions: [
    { label: "Apply Now", href: "/admissions" },
    { label: "Eligibility", href: "/admissions" },
    { label: "Important Dates", href: "/admissions" },
    { label: "Fee Structure", href: "/admissions" },
  ],
  "Quick Links": [
    { label: "About Us", href: "/about" },
    { label: "News & Events", href: "/news" },
    { label: "Contact Us", href: "/contact" },
    { label: "Alumni", href: "/about" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center font-serif font-700 text-gold text-lg">
                D
              </div>
              <div>
                <div className="font-serif text-xl font-600 text-white">
                  {COLLEGE_NAME}
                </div>
                <div className="text-gold text-[10px] tracking-[0.2em] uppercase font-sans">
                  Arts and Science
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm font-sans leading-relaxed max-w-xs">
              NAAC A++ accredited autonomous college affiliated to University of
              Madras. Empowering students since 1978.
            </p>
            <div className="mt-6 space-y-2 text-sm font-sans text-white/50">
              <div className="flex items-start gap-2">
                <MapPin
                  className="w-4 h-4 text-gold mt-0.5 flex-shrink-0"
                  strokeWidth={2}
                />
                AI, II Street, 9th Main Road, Anna Nagar, Chennai – 600 040
              </div>
              <div className="flex items-center gap-2">
                <Phone
                  className="w-4 h-4 text-gold flex-shrink-0"
                  strokeWidth={2}
                />
                044 – 2621 2089
              </div>
              <div className="flex items-center gap-2">
                <Mail
                  className="w-4 h-4 text-gold flex-shrink-0"
                  strokeWidth={2}
                />
                admissions@aias.edu.in
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {["f", "in", "yt", "ig"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all text-xs font-sans"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div className="text-white/30 text-[10px] font-sans tracking-[0.2em] uppercase mb-4">
                {category}
              </div>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-white text-sm font-sans transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-sans text-white/30">
          <div>
            © {new Date().getFullYear()} {COLLEGE_NAME}. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Grievance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
