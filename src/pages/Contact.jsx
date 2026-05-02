import { useState } from "react";
import { CircleCheck, Mail, MapPin, MessageCircle, Phone, ArrowRight } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", phone: "", email: "", subject: "", message: "" });
  };

  const contactCards = [
    {
      icon: Phone,
      title: "Call Us",
      lines: ["044 – 2621 2089", "044 – 4602 7711"],
      action: { label: "Call Now", href: "tel:04426212089" },
    },
    {
      icon: Mail,
      title: "Email Us",
      lines: ["admissions@aias.edu.in", "info@aias.edu.in"],
      action: { label: "Send Email", href: "mailto:admissions@aias.edu.in" },
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      lines: ["Available 9am – 6pm", "Mon – Sat"],
      action: { label: "Chat Now", href: "https://wa.me/914426212089" },
    },
    {
      icon: MapPin,
      title: "Visit Us",
      lines: ["AI, II Street, 9th Main Road", "Anna Nagar, Chennai – 600 040"],
      action: {
        label: "Get Directions",
        href: "https://maps.google.com/?q=Dr+Vikram+Agarwal+College+of+Arts+and+Science+Chennai",
      },
    },
  ];

  return (
    <div className="overflow-x-hidden font-sans">
      
      {/* ── HERO SECTION ── */}
      <section className="bg-navy/5 pt-16 pb-24 md:pt-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="pr-0 md:pr-12">
            <div className="text-gold text-xs font-sans font-bold tracking-[0.2em] uppercase mb-4">
              Contact Us
            </div>
            <h1 className="font-sans font-bold text-5xl md:text-7xl text-navy leading-tight tracking-tight mb-6">
              We'd love to hear from you.
            </h1>
            <p className="text-navy/80 font-sans text-lg leading-relaxed mb-8">
              Whether you have questions about admissions, courses, or just want to visit our campus — we're here to help you every step of the way.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1000"
              alt="Contact Hero"
              className="w-full object-cover shadow-2xl"
              style={{ minHeight: "400px" }}
            />
          </div>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="py-24 bg-white px-6 md:px-12 border-b border-navy/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((c, i) => (
              <div
                key={i}
                className="flex flex-col group border-2 border-navy/10 bg-navy/5 hover:border-navy hover:bg-white transition-all p-8"
              >
                <div className="mb-6 text-navy group-hover:scale-110 transition-transform origin-left">
                  <c.icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans font-bold text-xl text-navy mb-4">
                  {c.title}
                </h3>
                <div className="space-y-1 mb-8 flex-grow">
                  {c.lines.map((l) => (
                    <div key={l} className="text-navy/70 font-sans text-[15px] leading-relaxed">
                      {l}
                    </div>
                  ))}
                </div>
                <a
                  href={c.action.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-navy font-sans font-bold text-xs tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all border-b-2 border-navy/5 w-max pb-1"
                >
                  {c.action.label} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="py-24 bg-navy/5 px-6 md:px-12 border-b border-navy/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            
            {/* Form */}
            <div className="bg-white border-2 border-navy/10 p-10">
              <h2 className="font-sans font-bold text-3xl text-navy mb-8">
                Send us a Message
              </h2>
              {sent ? (
                <div className="text-center py-16">
                  <CircleCheck
                    className="w-16 h-16 text-navy mx-auto mb-6"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-sans font-bold text-2xl text-navy mb-4">
                    Message Received!
                  </h3>
                  <p className="text-navy/70 font-sans text-lg mb-10">
                    Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="bg-navy text-white px-8 py-4 font-sans font-bold text-sm tracking-wide flex items-center justify-center gap-3 hover:bg-navy-light transition-all"
                  >
                    Send Another
                    <ArrowRight className="w-5 h-5 rounded-full border border-white p-0.5" />
                  </button>
                </div>
              ) : (
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
                        className="w-full bg-navy/5 border-2 border-navy/10 px-4 py-4 text-sm font-sans text-navy outline-none focus:border-navy transition-colors"
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
                        className="w-full bg-navy/5 border-2 border-navy/10 px-4 py-4 text-sm font-sans text-navy outline-none focus:border-navy transition-colors"
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
                      className="w-full bg-navy/5 border-2 border-navy/10 px-4 py-4 text-sm font-sans text-navy outline-none focus:border-navy transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-sans font-bold text-navy/60 uppercase tracking-widest ml-1">
                      Subject
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full bg-navy/5 border-2 border-navy/10 px-4 py-4 text-sm font-sans text-navy outline-none focus:border-navy transition-colors appearance-none"
                      >
                        <option value="">Select a topic...</option>
                        <option>Admissions Enquiry</option>
                        <option>Course Information</option>
                        <option>Fee Structure</option>
                        <option>Campus Visit</option>
                        <option>Placement Cell</option>
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
                      rows={4}
                      className="w-full bg-navy/5 border-2 border-navy/10 px-4 py-4 text-sm font-sans text-navy outline-none focus:border-navy transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-navy text-white w-full py-5 font-sans font-bold text-sm tracking-wide flex items-center justify-center gap-3 hover:bg-navy-light transition-all"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5 rounded-full border border-white p-0.5" />
                  </button>
                  <p className="text-navy/40 text-[10px] font-sans font-bold text-center uppercase tracking-widest">
                    We respond within 24 hours. No spam.
                  </p>
                </form>
              )}
            </div>

            {/* Office Hours + Departments */}
            <div className="space-y-10">
              
              <div className="bg-white border-2 border-navy/10 p-10">
                <h3 className="font-sans font-bold text-2xl text-navy mb-8 uppercase tracking-tight">
                  Office Hours
                </h3>
                <div className="space-y-4">
                  {[
                    ["Monday – Friday", "8:30 AM – 5:00 PM"],
                    ["Saturday", "9:00 AM – 1:00 PM"],
                    ["Sunday", "Closed"],
                  ].map(([day, time]) => (
                    <div
                      key={day}
                      className="flex justify-between items-center text-[15px] font-sans border-b-2 border-navy/5 py-3 last:border-0"
                    >
                      <span className="text-navy/60 font-bold">{day}</span>
                      <span
                        className={`font-bold ${day === "Sunday" ? "text-red-500" : "text-navy"}`}
                      >
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border-2 border-navy/10 p-10">
                <h3 className="font-sans font-bold text-2xl text-navy mb-8 uppercase tracking-tight">
                  Department Contacts
                </h3>
                <div className="grid gap-6">
                  {[
                    {
                      dept: "Admissions Office",
                      email: "admissions@aias.edu.in",
                      phone: "044-26212089",
                    },
                    {
                      dept: "Academic Section",
                      email: "academics@aias.edu.in",
                      phone: "044-26212090",
                    },
                    {
                      dept: "Placement Cell",
                      email: "placements@aias.edu.in",
                      phone: "044-26212091",
                    },
                    {
                      dept: "Hostel Office",
                      email: "hostel@aias.edu.in",
                      phone: "044-26212092",
                    },
                  ].map((d) => (
                    <div
                      key={d.dept}
                      className="border-l-4 border-navy/10 pl-6 py-1 hover:border-navy transition-colors"
                    >
                      <div className="font-sans font-bold text-navy text-[15px] mb-2 uppercase tracking-wide">
                        {d.dept}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                        <a
                          href={`mailto:${d.email}`}
                          className="text-navy/60 font-sans text-sm font-bold hover:text-navy transition-colors"
                        >
                          {d.email}
                        </a>
                        <a
                          href={`tel:${d.phone}`}
                          className="text-navy/60 font-sans text-sm font-bold hover:text-navy transition-colors"
                        >
                          {d.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy p-10 border-4 border-navy/10 shadow-xl">
                <div className="text-gold text-[10px] font-sans font-bold tracking-[0.2em] uppercase mb-4">
                  Fastest Response
                </div>
                <h3 className="font-sans font-bold text-3xl text-white mb-4">
                  Chat on WhatsApp
                </h3>
                <p className="text-white/70 font-sans text-[15px] mb-8 leading-relaxed">
                  Get answers in minutes. Our counsellors respond within 30 minutes during office hours.
                </p>
                <a
                  href="https://wa.me/914426212089?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20admissions"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-navy px-8 py-4 font-sans font-bold text-sm inline-flex items-center gap-3 hover:bg-cream transition-colors"
                >
                  <MessageCircle className="w-5 h-5" strokeWidth={2} />
                  Open WhatsApp
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
