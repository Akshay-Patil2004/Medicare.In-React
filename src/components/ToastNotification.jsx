import { CheckCircle2, X } from "lucide-react";

function ToastNotification({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-800 flex items-center gap-3 max-w-sm animate-fadeIn">
      <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <div className="text-xs sm:text-sm font-medium pr-2 text-slate-200">{message}</div>
      <button
        type="button"
        onClick={onClose}
        className="w-6 h-6 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors shrink-0 ml-auto"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export default ToastNotification;
