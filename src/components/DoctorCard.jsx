import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Star, Clock, Calendar, Briefcase, Award } from "lucide-react";

function DoctorCard({ doctor, onViewProfile, onBookDoctor }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const doctorPhoto = doctor.image || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80";

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-sky-200/80 transition-all duration-300 overflow-hidden flex flex-col justify-between group relative">
      {/* Favorite Heart Button */}
      <button
        type="button"
        onClick={toggleLike}
        aria-label={liked ? "Remove from saved doctors" : "Save doctor to favorites"}
        title={liked ? "Saved to favorites" : "Save doctor"}
        className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 ${
          liked
            ? "bg-rose-50 text-rose-500 border border-rose-200 shadow-xs scale-105"
            : "bg-white/80 text-slate-400 hover:text-rose-500 hover:bg-white border border-slate-200/60"
        }`}
      >
        <Heart className={`w-4 h-4 ${liked ? "fill-rose-500 text-rose-500" : ""}`} />
      </button>

      <div>
        {/* Doctor Photo Header */}
        <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
          <img
            src={doctorPhoto}
            alt={doctor.name}
            loading="lazy"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />

          <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md text-sky-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-sky-100 flex items-center gap-1.5 shadow-xs">
            <Clock className="w-3 h-3 text-sky-500" />
            <span>{doctor.availability || "Available Today"}</span>
          </span>
        </div>

        {/* Doctor Content Info */}
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1 bg-amber-50 text-amber-800 font-semibold px-2 py-0.5 rounded-md border border-amber-200/60">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{doctor.rating || 4.9}</span>
            </div>
            <span className="text-slate-500">({doctor.reviewsCount || 120}+ reviews)</span>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
              {doctor.name}
            </h3>
            <p className="text-sm font-medium text-sky-600 mt-0.5">{doctor.speciality}</p>
          </div>

          {doctor.qualifications && (
            <p className="text-xs text-slate-500 flex items-center gap-1 line-clamp-1">
              <Award className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{doctor.qualifications}</span>
            </p>
          )}

          {/* Meta Tags */}
          <div className="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-100">
            <span className="flex items-center gap-1">
              <Briefcase className="w-3.5 h-3.5 text-slate-400" />
              {doctor.experience || "10+ Yrs"} Exp
            </span>
            {doctor.consultationFee && (
              <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                {doctor.consultationFee}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-5 pt-0 grid grid-cols-2 gap-2.5">
        <button
          type="button"
          onClick={() => (onViewProfile ? onViewProfile(doctor) : null)}
          className="w-full text-xs font-semibold py-2.5 px-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          View Profile
        </button>

        <Link
          to="/appointment"
          state={{ doctorName: doctor.name, department: doctor.department?.toLowerCase() }}
          onClick={(e) => {
            if (onBookDoctor) {
              e.preventDefault();
              onBookDoctor(doctor);
            }
          }}
          className="w-full text-xs font-semibold py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 active:scale-95"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Visit</span>
        </Link>
      </div>
    </div>
  );
}

export default DoctorCard;
