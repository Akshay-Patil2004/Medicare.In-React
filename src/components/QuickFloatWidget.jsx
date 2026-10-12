import { useState, useEffect } from "react";
import { MessageSquare, PhoneCall, CheckCircle2, X, Send } from "lucide-react";

function QuickFloatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      setInquirySent(true);
      setTimeout(() => {
        setInquirySent(false);
        setIsOpen(false);
        setName("");
        setPhone("");
      }, 2500);
    }
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 w-[calc(100vw-2rem)] max-w-sm sm:w-96 overflow-hidden mb-4 animate-fadeIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-600 to-cyan-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              <h4 className="font-heading font-bold text-sm">Quick Inquiry / Call Back</h4>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close inquiry widget"
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-5">
            {inquirySent ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Request Submitted!</h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  Our hospital reception desk will call you back within 5 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <p className="text-xs text-slate-600">
                  Need urgent doctor advice or booking guidance? Enter your details:
                </p>
                <div>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Call Back</span>
                </button>
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 font-semibold text-xs border border-rose-200 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
                  <span>Emergency: +91 98765 43210</span>
                </a>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="24/7 Quick Support inquiry form"
        title="24/7 Quick Support"
        className="group flex items-center gap-2.5 bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white px-4 py-3 rounded-full shadow-xl shadow-sky-600/30 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="text-xs font-bold font-heading pr-1">24/7 Support</span>
      </button>
    </div>
  );
}

export default QuickFloatWidget;
