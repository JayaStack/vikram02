import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { COLLEGE_NAME } from "../constants/college";

const navLinks = [
  { label: "About", href: "/about" },
  {
    label: "Academics",
    children: [
      { label: "All Courses", href: "/courses" },
      { label: "Faculty", href: "/faculty" },
    ],
  },
  { label: "Placements", href: "/placements" },
  { label: "Campus", href: "/campus" },
  { label: "Admissions", href: "/admissions" },
  { label: "News & Events", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navBg = "bg-white/95 backdrop-blur-md shadow-sm border-b border-cream";
  const textColor = "text-navy";
  const logoColor = "text-navy";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/images/android-chrome-192x192.png"
              alt="College Logo"
              className="w-10 h-10 object-contain"
            />
            <div className="min-w-0">
              <div
                className={`hidden sm:block font-serif text-lg font-600 leading-tight transition-colors max-w-[220px] truncate ${logoColor}`}
              >
                {COLLEGE_NAME}
              </div>
              <div
                className="hidden sm:block font-sans text-[10px] tracking-[0.15em] uppercase transition-colors max-w-[220px] truncate text-gold"
              >
                Arts and Science
              </div>
              <div
                className={`sm:hidden font-sans text-sm font-700 tracking-[0.12em] uppercase transition-colors ${logoColor}`}
              >
                DVACAS
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 ml-6 xl:ml-8">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-sans font-500 transition-all hover:bg-white/10 ${textColor}`}
                  >
                    {link.label}
                    <svg
                      className="w-3.5 h-3.5 mt-0.5 opacity-60"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div className="absolute top-full left-0 w-full h-3" />

                  <div className="absolute top-full left-0 pt-2 z-50 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                    <div className="w-44 bg-white rounded-2xl shadow-xl border border-navy/5 py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-navy/80 hover:text-navy hover:bg-cream font-sans transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-sans font-500 transition-all hover:bg-white/10 ${textColor} ${location.pathname === link.href ? "opacity-100" : "opacity-80 hover:opacity-100"}`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center ml-4">
            <Link
              to="/admissions"
              className="px-5 py-2 rounded-full bg-[#C9973A] text-white font-medium hover:scale-105 transition"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-navy hover:bg-cream"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-white border-t border-cream px-4 py-4 space-y-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <div className="px-4 py-2 text-xs font-sans font-600 tracking-widest uppercase text-gold">
                  {link.label}
                </div>
                {link.children.map((child) => (
                  <Link
                    key={child.label}
                    to={child.href}
                    className="block px-6 py-2.5 text-sm text-navy/80 font-sans hover:text-navy"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="block px-4 py-2.5 text-sm text-navy font-sans font-500 rounded-xl hover:bg-cream"
              >
                {link.label}
              </Link>
            ),
          )}
          <div className="pt-3 border-t border-cream">
            <Link
              to="/admissions"
              className="block text-center bg-gold text-white px-6 py-3 rounded-full text-sm font-sans font-600"
            >
              Apply Now →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
