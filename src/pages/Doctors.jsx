import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, UserCheck, RefreshCw } from "lucide-react";
import DoctorCard from "../components/DoctorCard";
import DoctorModal from "../components/DoctorModal";
import TestimonialsSection from "../components/TestimonialsSection";
import ScrollReveal from "../components/ScrollReveal";
import { doctorsData } from "../data/mockData";

function Doctors({ onShowToast }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [activeModalDoctor, setActiveModalDoctor] = useState(null);
  const navigate = useNavigate();

  const departments = [
    "All",
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "General Medicine",
    "Gynecology",
    "Dental Care",
    "Dermatology",
    "Oncology",
    "Ophthalmology",
    "ENT",
    "Gastroenterology",
  ];

  const filteredDoctors = doctorsData.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.speciality.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (doc.qualifications && doc.qualifications.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesDept = selectedDept === "All" || doc.department.toLowerCase() === selectedDept.toLowerCase();

    return matchesSearch && matchesDept;
  });

  const handleBookDoctor = (doc, slot) => {
    const timeSlotMsg = slot ? ` for ${slot}` : "";
    if (onShowToast) onShowToast(`Selected ${doc.name}${timeSlotMsg}. Redirecting to booking...`);
    navigate("/appointment", {
      state: { doctorName: doc.name, department: doc.department?.toLowerCase(), timeSlot: slot },
    });
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-500/30">
            <UserCheck className="w-3.5 h-3.5" /> Our Doctors
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">
            Meet Our Medical Experts
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Over 16+ highly qualified specialists, surgeons, and physicians dedicated to your health.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <ScrollReveal direction="up">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800">
                Medical Professionals
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
                Our Experienced <span className="text-sky-600">Doctors</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Our doctors combine world-class medical expertise with compassionate patient-focused care across all major medical disciplines.
              </p>
            </div>
          </ScrollReveal>

          {/* Search & Filter Box */}
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-4 shadow-xs">
            {/* Search Input */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search doctor name, speciality, or department (e.g. Dr. Rahul, Cardiologist)..."
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

            {/* Department Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
              {departments.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 text-xs font-medium rounded-full shrink-0 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    selectedDept === dept
                      ? "bg-sky-600 text-white shadow-md shadow-sky-600/20 font-semibold"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-sky-300 hover:text-slate-900"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Count Result */}
            <div className="text-center text-xs text-slate-500 pt-1">
              Showing <strong className="text-slate-900">{filteredDoctors.length}</strong> of{" "}
              <strong className="text-slate-900">{doctorsData.length}</strong> medical experts
            </div>
          </div>

          {/* Doctors Grid */}
          {filteredDoctors.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-3xl border border-dashed border-slate-300 space-y-4 max-w-md mx-auto">
              <h3 className="text-lg font-heading font-bold text-slate-900">No doctors match your search criteria</h3>
              <p className="text-xs text-slate-600">Try searching for a different specialist or clear the department filter.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedDept("All");
                }}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-sky-600 text-white shadow-md hover:bg-sky-700 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor, index) => (
                <ScrollReveal key={doctor.id || doctor.name} delay={(index % 3) * 70}>
                  <DoctorCard
                    doctor={doctor}
                    onViewProfile={(doc) => setActiveModalDoctor(doc)}
                    onBookDoctor={(doc) => handleBookDoctor(doc)}
                  />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Patient Testimonials */}
      <TestimonialsSection />

      {/* Doctor Modal */}
      {activeModalDoctor && (
        <DoctorModal
          doctor={activeModalDoctor}
          onClose={() => setActiveModalDoctor(null)}
          onBookDoctor={handleBookDoctor}
        />
      )}
    </>
  );
}

export default Doctors;