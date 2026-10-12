import { useState, useEffect } from "react";
import { X, Star, Briefcase, CreditCard, Calendar, CheckCircle2 } from "lucide-react";

function DoctorModal({ doctor, onClose, onBookDoctor }) {
  const [selectedSlot, setSelectedSlot] = useState("10:00 AM");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!doctor) return null;

  const timeSlots = ["09:30 AM", "10:30 AM", "11:30 AM", "02:30 PM", "04:30 PM", "06:00 PM"];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-fadeIn overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-doctor-name"
    >
      <div
        className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative p-6 sm:p-8 space-y-6 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close doctor modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pt-2">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top border-2 border-sky-100 shadow-md shrink-0"
          />
          <div className="text-center sm:text-left space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified Specialist
            </span>
            <h2 id="modal-doctor-name" className="text-2xl font-heading font-bold text-slate-900">
              {doctor.name}
            </h2>
            <p className="text-sm font-medium text-sky-600">{doctor.speciality}</p>
            {doctor.qualifications && (
              <p className="text-xs text-slate-500">{doctor.qualifications}</p>
            )}

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                {doctor.rating} ({doctor.reviewsCount} reviews)
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700">
                <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                {doctor.experience} Exp
              </span>
              {doctor.consultationFee && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-sky-50 text-sky-800 border border-sky-200">
                  <CreditCard className="w-3.5 h-3.5 text-sky-500" />
                  {doctor.consultationFee} Fee
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
              Doctor Biography & Clinical Focus
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{doctor.bio}</p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-3">
            <h3 className="text-xs font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-sky-600" /> Available Consultation Schedule
            </h3>
            <p className="text-xs text-slate-600">
              OPD Hours: <strong className="text-slate-900">{doctor.timing}</strong> ({doctor.availability})
            </p>

            <div className="text-xs font-semibold text-slate-700 pt-1">
              Select Preferred Time Slot for Today:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all ${
                    selectedSlot === slot
                      ? "bg-sky-600 text-white border-sky-600 shadow-xs"
                      : "bg-white text-slate-700 border-slate-200 hover:border-sky-300 hover:bg-sky-50/50"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
          <button
            type="button"
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold rounded-xl bg-sky-600 hover:bg-sky-700 text-white shadow-md transition-colors active:scale-95"
            onClick={() => {
              onClose();
              if (onBookDoctor) onBookDoctor(doctor, selectedSlot);
            }}
          >
            Confirm & Book with {doctor.name.split(" ")[1] || "Doctor"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoctorModal;
