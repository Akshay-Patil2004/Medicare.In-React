import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { faqData } from "../data/mockData";

function FaqSection() {
  const [openId, setOpenId] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Appointments", "Emergency", "Insurance", "Diagnostics", "Visiting Hours"];

  const filteredFaqs = selectedCategory === "All"
    ? faqData
    : faqData.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-700">
            <HelpCircle className="w-3.5 h-3.5" /> Help & FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
            Frequently Asked <span className="text-sky-600">Questions</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Find quick answers regarding hospital admissions, appointments, insurance policies, and medical services.
          </p>
        </div>

        {/* Category Pills Scrollable Row */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full shrink-0 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                selectedCategory === cat
                  ? "bg-sky-600 text-white shadow-md shadow-sky-600/20 font-semibold"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-sky-300 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-sky-300 shadow-md ring-1 ring-sky-300"
                    : "bg-white border-slate-200 hover:border-slate-300 shadow-xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-semibold text-slate-900 hover:text-sky-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? "bg-sky-100 text-sky-600" : "bg-slate-100 text-slate-500"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-5 pb-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1 animate-fadeIn"
                  >
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
