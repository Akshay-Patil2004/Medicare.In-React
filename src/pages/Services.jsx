import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, Stethoscope, PhoneCall, Activity, RefreshCw } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import ServiceModal from "../components/ServiceModal";
import HealthPackagesSection from "../components/HealthPackagesSection";
import HealthCalculator from "../components/HealthCalculator";
import FaqSection from "../components/FaqSection";
import ScrollReveal from "../components/ScrollReveal";
import { servicesData } from "../data/mockData";


function Services({ onShowToast }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [activeModalService, setActiveModalService] = useState(null);
  const navigate = useNavigate();

  const tags = [
    "All",
    "Heart Care",
    "Brain & Spine",
    "Bone & Joint",
    "Child Care",
    "Primary Care",
    "24/7 Response",
    "Women Health",
    "Dental Health",
    "Specialist Care",
    "Diagnostics",
  ];

  const filteredServices = servicesData.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.treatments?.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesTag = selectedTag === "All" || service.tag.toLowerCase() === selectedTag.toLowerCase();

    return matchesSearch && matchesTag;
  });

  const handleBookService = (service) => {
    if (onShowToast) onShowToast(`Booked consultation request for ${service.title}`);
    navigate("/appointment", { state: { department: service.category ? service.category.toLowerCase() : "" } });
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-500/30">
            <Stethoscope className="w-3.5 h-3.5" /> Our Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">
            Comprehensive Healthcare Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Explore 16+ specialized medical departments equipped with advanced diagnostic and treatment technology.
          </p>
        </div>
      </section>

      {/* Main Services Search & Filter Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <ScrollReveal direction="up">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800">
                Medical Departments
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
                Specialized Care Under <span className="text-sky-600">One Roof</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Our experienced medical team provides specialized healthcare across multiple departments with personalized care plans.
              </p>
            </div>
          </ScrollReveal>

          {/* Filter & Search Bar Box */}
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-4 shadow-xs">
            {/* Search Input */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search service, treatment, or condition (e.g. ECG, MRI, Asthma)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-10 py-3.5 text-sm rounded-2xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-xs"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search input"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter Tags Pill Row */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 text-xs font-medium rounded-full shrink-0 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    selectedTag === tag
                      ? "bg-sky-600 text-white shadow-md shadow-sky-600/20 font-semibold"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-sky-300 hover:text-slate-900"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Count Result */}
            <div className="text-center text-xs text-slate-500 pt-1">
              Showing <strong className="text-slate-900">{filteredServices.length}</strong> of{" "}
              <strong className="text-slate-900">{servicesData.length}</strong> medical services
            </div>
          </div>

          {/* Cards Grid or No Results */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-3xl border border-dashed border-slate-300 space-y-4 max-w-md mx-auto">
              <h3 className="text-lg font-heading font-bold text-slate-900">No services matched your search</h3>
              <p className="text-xs text-slate-600">Try searching for a different symptom or reset the category filter.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTag("All");
                }}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-sky-600 text-white shadow-md hover:bg-sky-700 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredServices.map((service, index) => (
                <ScrollReveal key={service.id || service.title} delay={(index % 4) * 60}>
                  <ServiceCard
                    service={service}
                    onViewDetails={(s) => setActiveModalService(s)}
                    onBook={handleBookService}
                  />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Health Checkup Packages */}
      <HealthPackagesSection />

      {/* Health Calculator */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <HealthCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* 24/7 Emergency Call Out */}
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center shrink-0">
              <Activity className="w-7 h-7 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400">24/7 Emergency Care</span>
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white">Need Immediate Medical Help?</h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Our emergency department and cardiac ICU units are open 24 hours a day, 7 days a week.
              </p>
            </div>
          </div>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg transition-colors text-sm shrink-0 active:scale-95"
          >
            <PhoneCall className="w-4 h-4 animate-pulse" />
            <span>Call Emergency Hotline</span>
          </a>
        </div>
      </section>

      {/* Service Detail Modal */}
      {activeModalService && (
        <ServiceModal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
          onBook={handleBookService}
        />
      )}
    </>
  );
}

export default Services;
