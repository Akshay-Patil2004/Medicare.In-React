
import { Link } from "react-router-dom";
import {
  Activity,
  Phone,
  Mail,
  MapPin,
  Calendar,
  ArrowRight,
  Clock,
  ShieldCheck,
  HeartPulse,
  ArrowUpRight,
} from "lucide-react";

function Footer() {
  const specialties = [
    { name: "Cardiology & Cardiac Care", dept: "cardiology" },
    { name: "Neurology & Neurosurgery", dept: "neurology" },
    { name: "Orthopedics & Joint Care", dept: "orthopedics" },
    { name: "Pediatrics & Neonatal Care", dept: "pediatrics" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Medical Services", path: "/services" },
    { name: "Our Doctors", path: "/doctors" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">

        {/* Emergency Banner */}
        {/* <div className="relative -mt-1 overflow-hidden rounded-3xl border border-sky-400/20 bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 p-6 shadow-xl shadow-sky-950/20 sm:p-8 lg:flex lg:items-center lg:justify-between">

          <div className="pointer-events-none absolute -right-10 -top-20 h-56 w-56 rounded-full border-[35px] border-white/5" />

          <div className="relative flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-inner backdrop-blur-sm">
              <HeartPulse className="h-7 w-7" />
            </div>

            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[2px] text-cyan-100">
                Here for you, 24/7
              </p>
              <h2 className="text-xl font-extrabold text-white sm:text-2xl">
                Need Emergency Assistance?
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-sky-100">
                Our emergency care team is ready to help.
              </p>
            </div>
          </div>

          <a
            href="tel:+919876543210"
            className="group relative mt-5 flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white px-5 py-3.5 font-bold text-sky-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-sky-50 hover:shadow-xl active:scale-95 lg:mt-0"
          >
            <Phone className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            <span>+91 98765 43210</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div> */}

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">

          {/* Brand & About */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-4">

            <Link
              to="/"
              className="group inline-flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500 to-teal-500 text-white shadow-lg shadow-sky-500/20 transition-all duration-300 group-hover:rotate-3 group-hover:scale-105">
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <Activity className="relative h-7 w-7 stroke-[2.5]" />
              </div>

              <span className="text-2xl font-extrabold tracking-tight text-white">
                Medi<span className="text-cyan-400">Care</span>
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Delivering compassionate healthcare with advanced medical
              technology and experienced professionals. Your health, comfort,
              and well-being are at the heart of everything we do.
            </p>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-3 transition-colors duration-300 hover:border-teal-500/30">
              <ShieldCheck className="h-5 w-5 shrink-0 text-teal-400" />
              <span className="text-xs font-medium text-slate-300">
                Your health and safety come first
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5 lg:col-span-2">
            <h3 className="text-base font-bold text-white">
              Quick Links
              <span className="mt-2 block h-1 w-10 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400" />
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
                  >
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-cyan-400" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div className="space-y-5 lg:col-span-3">
            <h3 className="text-base font-bold text-white">
              Our Specialties
              <span className="mt-2 block h-1 w-10 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400" />
            </h3>

            <ul className="space-y-3">
              {specialties.map((item) => (
                <li key={item.dept}>
                  <Link
                    to="/appointment"
                    state={{ department: item.dept }}
                    className="group flex items-start gap-3 text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 transition-all duration-300 group-hover:border-sky-500/30 group-hover:bg-sky-500/10">
                      <ArrowRight className="h-3.5 w-3.5 text-slate-500 transition-colors group-hover:text-cyan-400" />
                    </span>
                    <span className="leading-6">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Visiting Hours */}
          <div className="space-y-6 lg:col-span-3">

            <div className="space-y-5">
              <h3 className="text-base font-bold text-white">
                Get In Touch
                <span className="mt-2 block h-1 w-10 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400" />
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-cyan-400">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="pt-1 text-sm leading-6 text-slate-400">
                    123 Health Street, Pune, Maharashtra 411001
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-cyan-400">
                    <Phone className="h-4 w-4" />
                  </span>
                  <a
                    href="tel:+919876543210"
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-400"
                  >
                    +91 98765 43210
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-cyan-400">
                    <Mail className="h-4 w-4" />
                  </span>
                  <a
                    href="mailto:info@medicare.com"
                    className="break-all text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-400"
                  >
                    info@medicare.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Visiting Hours */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <div className="mb-4 flex items-center gap-2">
                <Clock className="h-4 w-4 text-cyan-400" />
                <h4 className="text-sm font-bold text-white">
                  OPD Visiting Hours
                </h4>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-slate-400">Monday - Saturday</span>
                  <span className="text-right font-semibold text-slate-200">
                    8 AM - 9 PM
                  </span>
                </div>

                <div className="border-t border-slate-800" />

                <div className="flex items-start justify-between gap-3">
                  <span className="text-slate-400">Sunday</span>
                  <span className="text-right font-semibold text-teal-400">
                    Emergency 24/7
                  </span>
                </div>
              </div>
            </div>

            {/* Appointment CTA */}
            <Link
              to="/appointment"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-sky-500 hover:to-teal-500 hover:shadow-cyan-900/30 active:scale-95"
            >
              <Calendar className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              Book an Appointment
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 py-6 text-center sm:flex-row sm:text-left">

          <p className="text-xs leading-6 text-slate-500">
            © {new Date().getFullYear()} MediCare Super-Specialty Hospital.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs sm:gap-6">
            <Link
              to="/about"
              className="text-slate-500 transition-colors duration-300 hover:text-cyan-400"
            >
              Privacy Policy
            </Link>

            <Link
              to="/contact"
              className="text-slate-500 transition-colors duration-300 hover:text-cyan-400"
            >
              Contact Support
            </Link>

            <Link
              to="/"
              className="group flex items-center gap-1.5 text-slate-500 transition-colors duration-300 hover:text-cyan-400"
            >
              Back to Home
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
