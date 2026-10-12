import { useEffect } from "react";
import { X, Star, Clock, CreditCard, CheckCircle2, Calendar } from "lucide-react";

function ServiceModal({ service, onClose, onBook }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-fadeIn overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div
        className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative p-6 sm:p-8 space-y-6 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close service modal"
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-slate-900/40 hover:bg-slate-900/60 text-white flex items-center justify-center backdrop-blur-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="relative rounded-2xl overflow-hidden aspect-21/9 bg-slate-100 shadow-inner">
          {service.image ? (
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-sky-500 to-cyan-600 flex items-center justify-center text-white text-3xl font-bold font-heading">
              {service.title}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-sky-500 text-white shadow-xs">
              {service.tag || service.category}
            </span>
            <h2 id="modal-service-title" className="text-xl sm:text-2xl font-heading font-bold text-white">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Meta Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-b border-slate-100 pb-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            {service.rating} ({service.reviewsCount} reviews)
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium bg-sky-50 text-sky-800 border border-sky-200">
            <Clock className="w-3.5 h-3.5 text-sky-500" />
            {service.timing}
          </span>
          {service.price && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
              <CreditCard className="w-3.5 h-3.5 text-emerald-500" />
              {service.price}
            </span>
          )}
        </div>

        {/* Body Content */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              Department Overview
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {service.details || service.description}
            </p>
          </div>

          {service.treatments && (
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Treatments & Key Procedures
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.treatments.map((treatment, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-slate-700 font-medium bg-slate-50 p-2.5 rounded-xl border border-slate-200/60"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{treatment}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
          <button
            type="button"
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
            onClick={onClose}
          >
            Close
          </button>
          <button
            type="button"
            className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold rounded-xl bg-sky-600 hover:bg-sky-700 text-white shadow-md transition-colors flex items-center justify-center gap-2 active:scale-95"
            onClick={() => {
              onClose();
              if (onBook) onBook(service);
            }}
          >
            <Calendar className="w-4 h-4" />
            <span>Book Service Consultation</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceModal;
