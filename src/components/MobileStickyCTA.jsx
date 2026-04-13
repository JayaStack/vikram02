import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export default function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-cream/80 shadow-2xl px-4 py-3">
      <div className="flex gap-2.5">
        <Link
          to="/admissions"
          className="flex-1 bg-gold text-white text-sm font-sans font-600 py-3 rounded-full text-center tracking-wide"
        >
          Apply Now
        </Link>
        <a
          href="https://wa.me/914426212089"
          target="_blank"
          rel="noreferrer"
          className="flex-1 border border-navy/20 text-navy text-sm font-sans font-500 py-3 rounded-full text-center flex items-center justify-center gap-2"
        >
          <MessageCircle
            className="w-4 h-4"
            strokeWidth={2}
            style={{ color: "#25D366" }}
          />
          WhatsApp
        </a>
        <Link
          to="/contact"
          className="flex-1 border border-navy/20 text-navy text-sm font-sans font-500 py-3 rounded-full text-center"
        >
          Enquire
        </Link>
      </div>
    </div>
  );
}
