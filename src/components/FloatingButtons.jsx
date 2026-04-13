import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { FaWhatsapp, FaRobot } from "react-icons/fa";

const initialMessages = [
  {
    from: "ai",
    text: "Hi! I'm Asha, your AI counsellor. How can I help you today?",
  },
];

const quickReplies = [
  "Tell me about courses",
  "Admissions process",
  "Fee structure",
  "Campus facilities",
];

const aiResponses = {
  "Tell me about courses":
    "We offer 20+ UG & PG programs in Arts, Science, Commerce & Management. Popular picks: B.Sc Computer Science, B.Com FinTech & AI, BBA, and B.Sc Psychology. Want details on any specific program?",
  "Admissions process":
    "Admissions are open! Here's how it works:\n1. Fill out the online application\n2. Submit documents\n3. Counselling & seat allotment\n4. Fee payment & enrolment\n\nShall I connect you to the admissions team?",
  "Fee structure":
    "Fees vary by program. Most UG programs range from ₹15,000–₹35,000/year. Scholarships are available for merit and EWS students. Would you like to speak with a counsellor for a detailed breakup?",
  "Campus facilities":
    "Our campus has state-of-the-art smart classrooms, computer labs, science labs, a well-stocked library, sports facilities, hostel for women, and a dedicated placement cell.",
};

export default function FloatingButtons() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (chatOpen)
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatOpen]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = { from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    setTimeout(() => {
      const response =
        aiResponses[text] ||
        "That's a great question! For detailed information, please call us at 044-26212089 or fill out our enquiry form. Would you like me to help with something else?";
      setMessages((prev) => [...prev, { from: "ai", text: response }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-24 md:bottom-8 right-5 z-50 flex flex-col items-end gap-3">
      {/* Chat Widget */}
      {chatOpen && (
        <div className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-navy/5 overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-navy px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-white font-serif font-600">
                A
              </div>
              <div>
                <div className="text-white text-sm font-sans font-600">
                  Asha — AI Counsellor
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/50 text-xs font-sans">
                    Online now
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-white/40 hover:text-white transition-colors p-1"
            >
              <X className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto px-4 py-4 space-y-3 bg-cream/40">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] text-sm font-sans rounded-2xl px-3.5 py-2.5 leading-relaxed whitespace-pre-line ${
                    msg.from === "user"
                      ? "bg-navy text-white rounded-br-sm"
                      : "bg-white text-navy shadow-sm border border-navy/5 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-navy shadow-sm border border-navy/5 rounded-2xl rounded-bl-sm px-3.5 py-2.5">
                  <div className="flex gap-1 items-center h-4">
                    <div
                      className="w-1.5 h-1.5 bg-navy/30 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-1.5 h-1.5 bg-navy/30 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-1.5 h-1.5 bg-navy/30 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="px-4 py-2 flex gap-2 overflow-x-auto border-t border-cream">
            {quickReplies.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="flex-shrink-0 text-xs font-sans px-3 py-1.5 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-cream flex gap-2">
            <input
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(inputVal)}
              placeholder="Type a message..."
              className="flex-1 text-sm font-sans bg-cream rounded-full px-4 py-2 outline-none border border-transparent focus:border-gold/40 transition-colors placeholder-navy/30"
            />
            <button
              onClick={() => sendMessage(inputVal)}
              className="w-9 h-9 bg-gold rounded-full flex items-center justify-center text-white hover:bg-gold-dark transition-colors flex-shrink-0"
            >
              <Send className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="w-14 h-14 bg-navy rounded-full shadow-xl flex items-center justify-center hover:bg-navy-light transition-all hover:-translate-y-0.5 animate-pulse2 relative"
        aria-label="AI Counsellor Chat"
      >
        {chatOpen ? (
          <X className="w-6 h-6 text-white" strokeWidth={2} />
        ) : (
          <FaRobot className="w-6 h-6 text-white" strokeWidth={2} />
        )}
        {!chatOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full border-2 border-white text-[8px] flex items-center justify-center text-white font-bold">
            1
          </span>
        )}
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/914426212089?text=Hi%2C%20I%27m%20interested%20in%20admissions%20at%20Adarsh%20Institute"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:-translate-y-0.5 transition-all"
        style={{ background: "#25D366" }}
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7 text-white" strokeWidth={2} />
      </a>
    </div>
  );
}
