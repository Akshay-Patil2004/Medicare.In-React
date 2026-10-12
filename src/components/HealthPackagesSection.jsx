
import { Link } from "react-router-dom";
import {
  FlaskConical,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  HeartPulse,
} from "lucide-react";
import { healthPackages } from "../data/mockData";

function HealthPackagesSection() {
  return (
    <section className="relative isolate overflow-hidden border-y border-sky-100 bg-gradient-to-br from-sky-50 via-white to-blue-50 py-16 sm:py-24">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl space-y-12 px-4 sm:px-6 sm:space-y-16 lg:px-8">

        {/* Section Heading */}
        <div className="health-heading mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            Preventive Care
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Health Checkup
            <span className="mt-1 block bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500 bg-clip-text text-transparent">
              Packages
            </span>
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-1 w-12 rounded-full bg-blue-700" />
            <span className="h-1 w-6 rounded-full bg-sky-400" />
            <span className="h-1 w-2 rounded-full bg-cyan-300" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Take charge of your health with thoughtfully designed screening
            packages for early detection, preventive care, and peace of mind.
          </p>
        </div>

        {/* Health Packages Grid */}
        <div className="grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {healthPackages.map((pkg, index) => (
            <article
              key={pkg.id}
              style={{ "--card-index": index }}
              className={`health-package group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-3xl transition-all duration-500 ease-out ${
                pkg.popular
                  ? "border-2 border-sky-400 bg-white shadow-[0_15px_40px_-15px_rgba(14,165,233,0.30)] hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_25px_50px_-15px_rgba(14,165,233,0.35)]"
                  : "border border-slate-200/80 bg-white/90 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.20)] hover:-translate-y-2 hover:border-sky-300 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.22)]"
              }`}
            >
              {/* Animated Background Overlay */}
              <div className="pointer-events-none absolute inset-0 z-0 translate-y-full bg-gradient-to-t from-sky-100/90 via-blue-50/60 to-white/10 transition-transform duration-700 ease-in-out group-hover:translate-y-0" />

              {/* Top Accent Line */}
              <div
                className={`relative z-10 h-1.5 w-full origin-left transition-transform duration-500 group-hover:scale-x-100 ${
                  pkg.popular
                    ? "bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400"
                    : "scale-x-50 bg-gradient-to-r from-sky-400 to-cyan-300 group-hover:scale-x-100"
                }`}
              />

              {/* Most Popular Badge */}
              {pkg.popular && (
                <div className="relative z-10 flex justify-center">
                  <span className="inline-flex -mt-px items-center gap-1.5 rounded-b-xl bg-gradient-to-r from-blue-700 to-sky-500 px-4 py-2 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package Content */}
              <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">

                {/* Discount and Test Count */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center rounded-lg border border-rose-100 bg-rose-50 px-2.5 py-1.5 text-[11px] font-bold text-rose-700 transition-colors duration-300 group-hover:border-rose-200 group-hover:bg-rose-100">
                    {pkg.discount}
                  </span>

                  <span className="inline-flex max-w-full items-center gap-1.5 rounded-lg border border-sky-100 bg-sky-50 px-2.5 py-1.5 text-[11px] font-bold text-sky-800 transition-all duration-300 group-hover:border-sky-300 group-hover:bg-white">
                    <FlaskConical className="h-3.5 w-3.5 shrink-0 text-sky-600" />
                    <span>{pkg.testsCount}</span>
                  </span>
                </div>

                {/* Package Icon */}
                <div
                  className={`mt-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 ${
                    pkg.popular
                      ? "bg-gradient-to-br from-blue-700 to-sky-500 text-white shadow-lg shadow-sky-500/20"
                      : "border border-sky-100 bg-sky-50 text-sky-700 group-hover:bg-white"
                  }`}
                >
                  <HeartPulse className="h-6 w-6" />
                </div>

                {/* Package Name and Description */}
                <div className="mt-5">
                  <h3 className="text-lg font-extrabold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-800 sm:text-xl">
                    {pkg.name}
                  </h3>

                  <p className="mt-2 min-h-[4.5rem] text-xs leading-6 text-slate-500">
                    {pkg.description}
                  </p>
                </div>

                {/* Package Pricing */}
                <div className="mt-5 rounded-2xl border border-sky-100/80 bg-white/80 p-4 transition-all duration-300 group-hover:border-sky-200 group-hover:bg-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                    Package Price
                  </p>

                  <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="break-words text-2xl font-extrabold tracking-tight text-blue-800 sm:text-3xl">
                      {pkg.price}
                    </span>

                    {pkg.originalPrice && (
                      <span className="text-sm font-medium text-slate-400 line-through">
                        {pkg.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    Preventive health screening
                  </div>
                </div>

                {/* Included Tests / Features */}
                <div className="mt-6">
                  <p className="mb-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-800">
                    What's Included
                  </p>

                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={`${pkg.id}-${idx}`}
                        className="flex items-start gap-2.5 text-xs leading-5 text-slate-600 transition-all duration-300 group-hover:text-slate-700"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 transition-colors duration-300 group-hover:bg-emerald-100">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Button */}
                <div className="mt-auto pt-7">
                  <Link
                    to="/appointment"
                    state={{
                      message: `Interested in booking health package: ${pkg.name} (${pkg.price})`,
                    }}
                    className={`group/btn flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-xs font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 active:scale-95 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-blue-700 to-sky-500 text-white shadow-md shadow-sky-600/20 hover:from-blue-800 hover:to-sky-600 hover:shadow-lg"
                        : "border border-sky-200 bg-white text-sky-800 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                    }`}
                  >
                    <span>Book Package</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default HealthPackagesSection;
