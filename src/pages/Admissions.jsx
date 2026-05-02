import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CreditCard,
  FileCheck2,
  FileText,
  GraduationCap,
  Handshake,
  Target,
  ArrowRight
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
    <div className="overflow-x-hidden font-sans">
      
      {/* ── HERO SECTION ── */}
      <section className="bg-navy/5 pt-16 pb-24 md:pt-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="pr-0 md:pr-12">
            <div className="text-gold text-xs font-sans font-bold tracking-[0.2em] uppercase mb-4">
              Admissions {ADMISSION_YEAR_RANGE}
            </div>
            <h1 className="font-sans font-bold text-5xl md:text-7xl text-navy leading-tight tracking-tight mb-6">
              Begin Your Journey
            </h1>
            <p className="text-navy/80 font-sans text-lg leading-relaxed mb-8">
              Experience a simple, transparent, and student-first admissions process. Apply online in minutes and join a community dedicated to academic excellence.
            </p>
            <a
              href="#"
              className="bg-navy text-white px-8 py-4 font-sans font-bold text-sm inline-flex items-center gap-3 hover:bg-navy-light transition-colors"
            >
              Start Application
              <ArrowRight className="w-5 h-5 rounded-full border border-white p-0.5" />
            </a>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000"
              alt="Admissions Hero"
              className="w-full object-cover shadow-2xl"
              style={{ minHeight: "400px" }}
            />
          </div>
        </div>
      </section>

      {/* ── IMPORTANT DATES ── */}
      <section className="bg-white py-12 px-6 border-b border-navy/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-sans font-bold text-sm tracking-widest uppercase text-navy/60 mb-10">
            Important Dates
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {importantDates.map((d, i) => (
              <div key={i} className="text-center p-4 border-l-2 border-navy/10 hover:border-navy transition-colors">
                <div className="text-[10px] font-sans font-bold uppercase tracking-widest text-navy/40 mb-2">
                  {d.event}
                </div>
                <div className="font-sans font-bold text-navy text-sm">
                  {d.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="py-24 bg-navy/5 px-6 md:px-12 border-b border-navy/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-sans font-bold text-3xl md:text-4xl text-navy mb-12">
            Admission Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div
                key={i}
                className="flex flex-col group border-2 border-navy/10 bg-white hover:border-navy transition-all p-8 relative"
              >
                <div className="absolute top-6 right-8 text-4xl font-sans font-bold text-navy/5 group-hover:text-navy/10 transition-colors">
                  {s.num}
                </div>
                <div className="mb-6 text-navy group-hover:scale-110 transition-transform origin-left">
                  <s.icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans font-bold text-xl text-navy mb-4">
                  {s.title}
                </h3>
                <p className="font-sans text-[15px] text-navy/80 leading-relaxed flex-grow">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ + ENQUIRY ── */}
      <section className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            
            {/* FAQ */}
            <div>
              <h2 className="font-sans font-bold text-3xl text-navy mb-10">
                Common Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="border-2 border-navy/5 hover:border-navy/10 transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-sans font-bold text-navy hover:bg-navy/5 transition-colors"
                    >
                      {faq.q}
                      <ArrowRight className={`w-4 h-4 text-navy transition-transform ${openFaq === i ? "rotate-90" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5 text-sm font-sans text-navy/70 leading-relaxed border-t border-navy/5 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Enquiry Form */}
            <div>
              <div className="bg-navy/5 border-2 border-navy/10 p-10">
                <h2 className="font-sans font-bold text-3xl text-navy mb-8">
                  Get in Touch
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-sans font-bold text-navy/60 uppercase tracking-widest ml-1">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border-2 border-navy/10 px-4 py-4 text-sm font-sans text-navy outline-none focus:border-navy transition-colors"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-sans font-bold text-navy/60 uppercase tracking-widest ml-1">
                        Phone Number *
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border-2 border-navy/10 px-4 py-4 text-sm font-sans text-navy outline-none focus:border-navy transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-sans font-bold text-navy/60 uppercase tracking-widest ml-1">
                      Email Address
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      className="w-full bg-white border-2 border-navy/10 px-4 py-4 text-sm font-sans text-navy outline-none focus:border-navy transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-sans font-bold text-navy/60 uppercase tracking-widest ml-1">
                      Program of Interest
                    </label>
                    <div className="relative">
                      <select
                        name="program"
                        value={form.program}
                        onChange={handleChange}
                        className="w-full bg-white border-2 border-navy/10 px-4 py-4 text-sm font-sans text-navy outline-none focus:border-navy transition-colors appearance-none"
                      >
                        <option value="">Select a program...</option>
                        <option>B.A – English</option>
                        <option>B.Sc – Psychology</option>
                        <option>BBA – Business Administration</option>
                        <option>B.Com – General</option>
                        <option>B.Com – Accounting & Finance</option>
                        <option>Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-navy/40">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-sans font-bold text-navy/60 uppercase tracking-widest ml-1">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full bg-white border-2 border-navy/10 px-4 py-4 text-sm font-sans text-navy outline-none focus:border-navy transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-navy text-white w-full py-5 font-sans font-bold text-sm tracking-wide flex items-center justify-center gap-3 hover:bg-navy-light transition-all"
                  >
                    Submit Enquiry
                    <ArrowRight className="w-5 h-5 rounded-full border border-white p-0.5" />
                  </button>
                  <p className="text-navy/40 text-[10px] font-sans font-bold text-center uppercase tracking-widest">
                    We'll contact you within 24 hours
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
