import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CreditCard,
  FileCheck2,
  FileText,
  GraduationCap,
  Handshake,
  Target,
} from "lucide-react";
import { ADMISSION_YEAR, ADMISSION_YEAR_RANGE } from "../constants/site";

const steps = [
  {
    num: "01",
    title: "Online Application",
    desc: "Fill out the application form on our portal. Takes less than 10 minutes. Upload your Class X and XI/XII marksheets.",
    icon: FileText,
  },
  {
    num: "02",
    title: "Document Verification",
    desc: "Submit original documents for verification at the admissions desk or upload scanned copies online.",
    icon: FileCheck2,
  },
  {
    num: "03",
    title: "AI Counselling Session",
    desc: "Meet our AI counsellor Asha or a human counsellor to confirm your program selection and clear doubts.",
    icon: Handshake,
  },
  {
    num: "04",
    title: "Seat Allotment",
    desc: "Seats are allotted based on merit and program availability. You'll receive an email and WhatsApp confirmation.",
    icon: Target,
  },
  {
    num: "05",
    title: "Fee Payment",
    desc: "Pay the first instalment online or at the college cashier. Scholarships are applied at this stage.",
    icon: CreditCard,
  },
  {
    num: "06",
    title: "Enrolment Complete",
    desc: "Welcome to the college! Collect your student ID, course materials, and join the orientation program.",
    icon: GraduationCap,
  },
];

const importantDates = [
  { event: "Application Portal Opens", date: `March 14, ${ADMISSION_YEAR}` },
  {
    event: "Last Date for Applications",
    date: `June 15, ${ADMISSION_YEAR}`,
  },
  { event: "Document Verification", date: `June 16–30, ${ADMISSION_YEAR}` },
  { event: "First Allotment List", date: `July 5, ${ADMISSION_YEAR}` },
  { event: "Fee Payment Deadline", date: `July 15, ${ADMISSION_YEAR}` },
  { event: "Classes Commence", date: `August 1, ${ADMISSION_YEAR}` },
];

const faqs = [
  {
    q: "Is the college co-educational?",
    a: `Yes, the institute now welcomes both male and female students across all programs from the ${ADMISSION_YEAR_RANGE} academic year.`,
  },
  {
    q: "What documents are required for admission?",
    a: "Class X marksheet, Class XII marksheet, Transfer Certificate, Community Certificate (if applicable), passport-size photos, and Aadhaar card.",
  },
  {
    q: "Are scholarships available?",
    a: "Yes. Merit scholarships for students above 80% aggregate, and government scholarships for SC/ST/BC/EBC/MBC/DNC categories are available.",
  },
  {
    q: "Can I apply online from outside Chennai?",
    a: "Yes. The entire admission process including document verification can be done online. You only need to visit campus on the first day of classes.",
  },
  {
    q: "What is the medium of instruction?",
    a: "English is the primary medium of instruction. Tamil-medium support is available for select undergraduate programs.",
  },
];

export default function Admissions() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our admissions team will contact you within 24 hours.");
    setForm({ name: "", phone: "", email: "", program: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light" />
        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-10"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-gold text-xs font-sans tracking-[0.2em] uppercase mb-3">
            Admissions {ADMISSION_YEAR_RANGE}
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-5">
            Begin Your Journey
          </h1>
          <p className="text-white/50 font-sans text-lg max-w-xl mb-8">
            Simple, transparent, and student-first admissions process. Apply
            online in minutes.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gold text-white px-8 py-3.5 rounded-full font-sans font-600 text-sm hover:bg-gold-dark transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Start Application →
          </a>
        </div>
      </div>

      {/* Important Dates */}
      <div className="bg-gold/10 border-y border-gold/15">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="text-gold-dark text-xs font-sans tracking-[0.2em] uppercase mb-5 text-center">
            Important Dates
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {importantDates.map((d, i) => (
              <div key={i} className="text-center">
                <div className="text-xs font-sans text-muted mb-1">
                  {d.event}
                </div>
                <div className="font-serif text-navy font-600 text-sm">
                  {d.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <div className="section-label">Admission Process</div>
          <h2 className="section-heading">
            Six simple steps to <em className="font-light">enrolment</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-navy/5 hover:border-gold/30 hover:-translate-y-1 hover:shadow-xl transition-all group relative"
            >
              <div className="absolute top-4 right-6 text-5xl font-serif text-navy/50 blur-[1px] group-hover:text-navy/50 transition-all duration-300">
                {s.num}
              </div>
              <div className="flex items-start justify-between mb-5">
                <s.icon className="w-6 h-6 text-gold" strokeWidth={2} />
              </div>
              <h3 className="font-serif text-xl text-navy font-600 mb-3">
                {s.title}
              </h3>
              <p className="text-muted text-sm font-sans leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ + Enquiry Form */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* FAQ */}
            <div>
              <div className="section-label">FAQ</div>
              <h2 className="section-heading mb-8">Common questions</h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="border border-navy/5 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-sans font-600 text-navy hover:bg-cream transition-colors"
                    >
                      {faq.q}
                      <svg
                        className={`w-4 h-4 text-gold flex-shrink-0 ml-3 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
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
                    {openFaq === i && (
                      <div className="px-5 pb-4 text-sm font-sans text-muted leading-relaxed border-t border-cream">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Enquiry Form */}
            <div>
              <div className="section-label">Quick Enquiry</div>
              <h2 className="section-heading mb-8">Get in touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-sans font-600 text-navy/60 uppercase tracking-wider block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-cream border border-navy/10 rounded-xl px-4 py-3 text-sm font-sans text-navy outline-none focus:border-gold/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-sans font-600 text-navy/60 uppercase tracking-wider block mb-1.5">
                      Phone *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-cream border border-navy/10 rounded-xl px-4 py-3 text-sm font-sans text-navy outline-none focus:border-gold/50 transition-colors"
                      placeholder="Mobile number"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-sans font-600 text-navy/60 uppercase tracking-wider block mb-1.5">
                    Email
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full bg-cream border border-navy/10 rounded-xl px-4 py-3 text-sm font-sans text-navy outline-none focus:border-gold/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-sans font-600 text-navy/60 uppercase tracking-wider block mb-1.5">
                    Program of Interest
                  </label>
                  <select
                    name="program"
                    value={form.program}
                    onChange={handleChange}
                    className="w-full bg-cream border border-navy/10 rounded-xl px-4 py-3 text-sm font-sans text-navy outline-none focus:border-gold/50 transition-colors"
                  >
                    <option value="">Select a program...</option>
                    <option>B.A – English</option>
                    <option>B.Sc – Psychology</option>
                    <option>BBA – Business Administration</option>
                    <option>B.Com – General</option>
                    <option>B.Com – Accounting & Finance</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-sans font-600 text-navy/60 uppercase tracking-wider block mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-cream border border-navy/10 rounded-xl px-4 py-3 text-sm font-sans text-navy outline-none focus:border-gold/50 transition-colors resize-none"
                    placeholder="Any specific questions..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full text-base py-4"
                >
                  Submit Enquiry →
                </button>
                <p className="text-muted text-xs font-sans text-center">
                  We'll contact you within 24 hours. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
