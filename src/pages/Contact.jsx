import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Send, ExternalLink } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-500/30">
            <Mail className="w-3.5 h-3.5" /> Contact Us
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">
            Get In Touch With Us
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            We're here to answer your questions and assist you 24/7.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Info (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal direction="left">
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800">
                    Contact Information
                  </span>
                  <h2 className="text-3xl font-heading font-extrabold text-slate-900">
                    We're Here to <span className="text-sky-600">Help</span>
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Have questions about our services or need help scheduling an appointment? Contact our dedicated hospital team.
                  </p>
                </div>
              </ScrollReveal>

              {/* Items List */}
              <div className="space-y-4">
                <ScrollReveal direction="left" delay={100}>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/60 hover:bg-sky-50/50 transition-colors shadow-xs">
                    <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-slate-900 text-base">Our Address</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                        123 Health Street, Pune, Maharashtra 411001
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={200}>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/60 hover:bg-sky-50/50 transition-colors shadow-xs">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-slate-900 text-base">Phone Numbers</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                        <a href="tel:+919876543210" className="hover:text-sky-600 transition-colors">+91 98765 43210</a> <br />
                        <a href="tel:+919123456789" className="hover:text-sky-600 transition-colors">+91 91234 56789</a>
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={300}>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/60 hover:bg-sky-50/50 transition-colors shadow-xs">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-slate-900 text-base">Email Address</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                        <a href="mailto:info@medicare.com" className="hover:text-sky-600 transition-colors">info@medicare.com</a> <br />
                        <a href="mailto:support@medicare.com" className="hover:text-sky-600 transition-colors">support@medicare.com</a>
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={400}>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/60 hover:bg-sky-50/50 transition-colors shadow-xs">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-slate-900 text-base">Working Hours</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                        Monday - Sunday: Open 24 Hours
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Right Form Box (7 cols) */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl">
              {sent ? (
                <div className="text-center py-12 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-heading font-extrabold text-slate-900">Message Sent!</h2>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you for contacting us. Our reception desk will respond to your inquiry shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="px-6 py-3 rounded-xl bg-sky-600 text-white font-semibold text-xs shadow-md hover:bg-sky-700 transition-colors active:scale-95"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-heading font-bold text-slate-900 pb-2 border-b border-slate-200">
                    Send Us a Message
                  </h2>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Subject *</label>
                    <input
                      type="text"
                      placeholder="Enter subject"
                      required
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Message *</label>
                    <textarea
                      rows="4"
                      placeholder="Write your message..."
                      required
                      className="w-full p-3 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="bg-gradient-to-br from-slate-900 to-sky-950 rounded-3xl p-8 sm:p-12 text-white text-center space-y-4 shadow-xl relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-500/30 mx-auto flex items-center justify-center">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-white">MediCare Super-Specialty Hospital</h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
                123 Health Street, Near City Center, Pune, Maharashtra 411001
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors active:scale-95"
              >
                <span>Open Location in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default Contact;