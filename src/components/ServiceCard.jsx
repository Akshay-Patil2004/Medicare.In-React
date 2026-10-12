
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bookmark,
  Clock,
  ArrowRight,
  Stethoscope,
  CheckCircle,
  HeartPulse,
} from "lucide-react";

function ServiceCard({ service, onViewDetails, onBook }) {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = (e) => {
    e.stopPropagation();
    setBookmarked((prev) => !prev);
  };

  return (
    <article
      className="group relative isolate flex h-full min-w-0 flex-col
      overflow-hidden rounded-3xl border border-sky-100 bg-white
      shadow-[0_5px_25px_-12px_rgba(15,23,42,0.15)]
      transition-all duration-500 ease-out
      hover:-translate-y-2 hover:border-sky-300
      hover:shadow-[0_22px_45px_-15px_rgba(14,165,233,0.25)]"
    >
      {/* Bottom-to-Top Blue Hover Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0
        translate-y-full rounded-3xl
        bg-gradient-to-t from-sky-400/70 via-blue-200/50 to-white/20
        transition-transform duration-700 ease-in-out
        group-hover:translate-y-0"
      />

      {/* Bookmark Button */}
      <button
        type="button"
        onClick={toggleBookmark}
        aria-label={bookmarked ? "Remove bookmark" : "Save service"}
        title={bookmarked ? "Remove bookmark" : "Save service"}
        className={`absolute right-5 top-5 z-30 flex h-10 w-10
        items-center justify-center rounded-full border shadow-sm
        backdrop-blur-md transition-all duration-300 hover:scale-110 ${
          bookmarked
            ? "border-amber-200 bg-amber-50 text-amber-500"
            : "border-white/70 bg-white/95 text-slate-500 hover:border-sky-300 hover:text-sky-600"
        }`}
      >
        <Bookmark
          className={`h-[18px] w-[18px] transition-transform duration-300 ${
            bookmarked ? "fill-amber-500 text-amber-500" : ""
          }`}
        />
      </button>

      {/* Service Image */}
      <div className="relative z-10 px-3 pt-3">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-sky-50">
          {service.image ? (
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="h-full w-full object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-110"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center
              bg-gradient-to-br from-sky-100 via-blue-100 to-cyan-50
              text-blue-700 transition-colors duration-500
              group-hover:from-sky-200 group-hover:to-blue-200"
            >
              {service.icon || <Stethoscope className="h-12 w-12" />}
            </div>
          )}

          {/* Image Overlay */}
          <div
            className="absolute inset-0
            bg-gradient-to-t from-slate-950/60 via-slate-900/5 to-transparent
            transition-all duration-500
            group-hover:from-blue-950/65"
          />

          {/* Category Badge - Bottom Left */}
          <span
            className="absolute bottom-3 left-3 z-10
            inline-flex max-w-[60%] items-center gap-1.5
            truncate rounded-full border border-white/70
            bg-white/95 px-3 py-1.5 text-[11px] font-bold
            text-sky-800 shadow-md backdrop-blur-md
            transition-colors duration-300
            group-hover:bg-sky-50"
          >
            <HeartPulse className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">
              {service.tag || "Specialist Care"}
            </span>
          </span>

          {/* Price Badge - Bottom Right */}
          {service.price && (
            <span
              className="absolute bottom-3 right-3 z-10
              inline-flex max-w-[45%] items-center justify-center
              overflow-hidden text-ellipsis whitespace-nowrap
              rounded-full border border-white/30
              bg-emerald-600 px-3 py-1.5
              text-xs font-extrabold text-white shadow-lg"
              title={String(service.price)}
            >
              {service.price}
            </span>
          )}
        </div>
      </div>

      {/* Service Details */}
      <div className="relative z-10 flex flex-1 flex-col p-5">
        {/* Timing */}
        {service.timing && (
          <div
            className="mb-3 inline-flex w-fit max-w-full items-center gap-2
            rounded-lg bg-sky-50 px-2.5 py-1.5 text-xs
            font-semibold text-sky-700 transition-colors duration-300
            group-hover:bg-white/80"
          >
            <Clock className="h-3.5 w-3.5 shrink-0 text-sky-600" />
            <span className="truncate">{service.timing}</span>
          </div>
        )}

        {/* Service Title */}
        <h3
          className="line-clamp-2 min-h-[3.5rem]
          text-lg font-extrabold leading-7 tracking-tight
          text-slate-900 transition-colors duration-300
          group-hover:text-blue-800"
        >
          {service.title}
        </h3>

        {/* Decorative Line */}
        <div
          className="my-3 h-1 w-10 shrink-0 rounded-full
          bg-gradient-to-r from-blue-600 to-cyan-400
          transition-all duration-500 group-hover:w-20"
        />

        {/* Description */}
        <p
          className="line-clamp-3 min-h-[4.5rem]
          text-sm leading-6 text-slate-600
          transition-colors duration-300
          group-hover:text-slate-700"
        >
          {service.description}
        </p>

        {/* Treatments */}
        {service.treatments?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {service.treatments.slice(0, 3).map((treatment, index) => (
              <span
                key={`${treatment}-${index}`}
                className="inline-flex max-w-full items-center gap-1.5
                rounded-lg border border-slate-200/80
                bg-white/75 px-2.5 py-1.5
                text-[11px] font-medium text-slate-600
                transition-all duration-300
                group-hover:border-sky-200 group-hover:bg-white/90
                group-hover:text-sky-800"
              >
                <CheckCircle
                  className="h-3 w-3 shrink-0 text-emerald-500"
                />
                <span className="break-words">{treatment}</span>
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons - Always at Bottom */}
        <div className="mt-auto grid grid-cols-2 gap-2.5 pt-6">
          {/* View Details */}
          <button
            type="button"
            onClick={() => onViewDetails?.(service)}
            className="inline-flex min-w-0 items-center justify-center
            rounded-xl border border-sky-200 bg-white/90
            px-2 py-3 text-xs font-bold text-sky-800
            transition-all duration-300
            hover:border-blue-600 hover:bg-blue-600 hover:text-white
            focus:outline-none focus-visible:ring-2
            focus-visible:ring-sky-500 active:scale-95"
          >
            <span className="truncate">View Details</span>
          </button>

          {/* Book Appointment */}
          <Link
            to="/appointment"
            state={{
              department: service.category
                ? service.category.toLowerCase()
                : "",
            }}
            onClick={(e) => {
              if (onBook) {
                e.preventDefault();
                onBook(service);
              }
            }}
            className="inline-flex min-w-0 items-center justify-center
            gap-1 rounded-xl bg-gradient-to-r
            from-blue-700 to-sky-600 px-2 py-3
            text-xs font-bold text-white
            shadow-md shadow-sky-600/15
            transition-all duration-300
            hover:from-blue-800 hover:to-sky-700 hover:shadow-lg
            focus:outline-none focus-visible:ring-2
            focus-visible:ring-sky-500 active:scale-95"
          >
            <span className="truncate">Book Now</span>
            <ArrowRight
              className="h-3.5 w-3.5 shrink-0
              transition-transform duration-300
              group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
