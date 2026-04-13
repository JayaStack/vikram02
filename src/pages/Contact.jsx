import { useState } from "react";
import { CircleCheck, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

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
        href: "https://maps.google.com/?q=Anna+Adarsh+College+Chennai",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-gold text-xs font-sans tracking-[0.2em] uppercase mb-3">
            Get In Touch
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">
            We'd love to
            <br />
            <em className="font-light">hear from you.</em>
          </h1>
          <p className="text-white/50 font-sans text-lg max-w-xl">
            Whether you have questions about admissions, courses, or just want
            to visit campus — we're here.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {contactCards.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-navy/5 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <c.icon className="w-6 h-6 text-gold mb-4" strokeWidth={2} />
              <h3 className="font-serif text-lg text-navy font-600 mb-2">
                {c.title}
              </h3>
              {c.lines.map((l) => (
                <div key={l} className="text-muted text-sm font-sans">
                  {l}
                </div>
              ))}
              <a
                href={c.action.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-gold font-sans text-sm font-600 hover:text-gold-dark transition-colors"
              >
                {c.action.label} →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Form + Info */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-white rounded-2xl p-10 border border-navy/5">
            <div className="section-label">Quick Enquiry</div>
            <h2 className="font-serif text-3xl text-navy mb-8">
              Send us a message
            </h2>
            {sent ? (
              <div className="text-center py-12">
                <CircleCheck
                  className="w-12 h-12 text-emerald-600 mx-auto mb-4"
                  strokeWidth={2}
                />
                <h3 className="font-serif text-2xl text-navy mb-2">
                  Message Received!
                </h3>
                <p className="text-muted font-sans mb-6">
                  Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-outline-dark"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-sans font-600 text-navy/50 uppercase tracking-wider block mb-1.5">
                      Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full bg-cream border border-navy/10 rounded-xl px-4 py-3 text-sm font-sans text-navy outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-sans font-600 text-navy/50 uppercase tracking-wider block mb-1.5">
                      Phone *
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="Mobile number"
                      className="w-full bg-cream border border-navy/10 rounded-xl px-4 py-3 text-sm font-sans text-navy outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-sans font-600 text-navy/50 uppercase tracking-wider block mb-1.5">
                    Email
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-cream border border-navy/10 rounded-xl px-4 py-3 text-sm font-sans text-navy outline-none focus:border-gold/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-sans font-600 text-navy/50 uppercase tracking-wider block mb-1.5">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-cream border border-navy/10 rounded-xl px-4 py-3 text-sm font-sans text-navy outline-none focus:border-gold/50 transition-colors"
                  >
                    <option value="">Select a topic...</option>
                    <option>Admissions Enquiry</option>
                    <option>Course Information</option>
                    <option>Fee Structure</option>
                    <option>Campus Visit</option>
                    <option>Placement Cell</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-sans font-600 text-navy/50 uppercase tracking-wider block mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full bg-cream border border-navy/10 rounded-xl px-4 py-3 text-sm font-sans text-navy outline-none focus:border-gold/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full py-4 text-base"
                >
                  Send Message →
                </button>
                <p className="text-center text-muted text-xs font-sans">
                  We respond within 24 hours. No spam.
                </p>
              </form>
            )}
          </div>

          {/* Office Hours + Departments */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-navy/5">
              <h3 className="font-serif text-2xl text-navy mb-6">
                Office Hours
              </h3>
              <div className="space-y-3">
                {[
                  ["Monday – Friday", "8:30 AM – 5:00 PM"],
                  ["Saturday", "9:00 AM – 1:00 PM"],
                  ["Sunday", "Closed"],
                ].map(([day, time]) => (
                  <div
                    key={day}
                    className="flex justify-between items-center text-sm font-sans border-b border-cream py-2 last:border-0"
                  >
                    <span className="text-navy/70">{day}</span>
                    <span
                      className={`font-600 ${day === "Sunday" ? "text-red-400" : "text-navy"}`}
                    >
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-navy/5">
              <h3 className="font-serif text-2xl text-navy mb-6">
                Department Contacts
              </h3>
              <div className="space-y-4">
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
                    className="border-b border-cream pb-4 last:border-0 last:pb-0"
                  >
                    <div className="font-sans font-600 text-navy text-sm">
                      {d.dept}
                    </div>
                    <div className="flex gap-4 mt-1">
                      <a
                        href={`mailto:${d.email}`}
                        className="text-gold text-xs font-sans hover:text-gold-dark transition-colors"
                      >
                        {d.email}
                      </a>
                      <a
                        href={`tel:${d.phone}`}
                        className="text-muted text-xs font-sans hover:text-navy transition-colors"
                      >
                        {d.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy rounded-2xl p-8">
              <div className="text-gold text-xs font-sans tracking-widest uppercase mb-3">
                Fastest Response
              </div>
              <h3 className="font-serif text-2xl text-white mb-2">
                Chat on WhatsApp
              </h3>
              <p className="text-white/50 text-sm font-sans mb-5">
                Get answers in minutes. Our counsellors respond within 30
                minutes during office hours.
              </p>
              <a
                href="https://wa.me/914426212089?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20admissions"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-sans font-600 hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={2} />
                Open WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
