
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Activity,
  Menu,
  X,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect page scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Navigation links
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/doctors", label: "Doctors" },
    { path: "/appointment", label: "Appointment" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-sky-100 bg-white/95 py-0 shadow-md shadow-slate-900/5 backdrop-blur-xl"
          : "border-white/70 bg-white/85 py-0 shadow-sm backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="group flex shrink-0 items-center gap-2.5 rounded-xl p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          {/* Logo Icon */}
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-500 text-white shadow-lg shadow-sky-500/20 transition-all duration-300 group-hover:rotate-3 group-hover:scale-105 group-hover:shadow-sky-500/35">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <Activity className="relative h-6 w-6 stroke-[2.5]" />
          </div>

          {/* Brand Name */}
          <div className="leading-tight">
            <span className="block text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
              Medi<span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">Care</span>
            </span>

            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[2px] text-slate-500 sm:text-[10px]">
              Healthcare Excellence
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-slate-50/80 p-1.5 shadow-inner md:flex lg:gap-1.5">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative rounded-full px-3 py-2 text-sm transition-all duration-300 lg:px-4 ${
                  isActive
                    ? "bg-gradient-to-r from-sky-600 to-cyan-600 font-semibold text-white shadow-md shadow-sky-600/20"
                    : "font-medium text-slate-600 hover:bg-white hover:text-sky-700 hover:shadow-sm"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Desktop Appointment Button */}
          <Link
            to="/appointment"
            className="group hidden items-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-sky-700 hover:to-teal-600 hover:shadow-xl hover:shadow-sky-600/25 active:scale-95 sm:inline-flex lg:px-5"
          >
            <Calendar className="h-4 w-4 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110" />
            <span>Book Visit</span>
            <ArrowUpRight className="h-4 w-4 opacity-70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition-all duration-300 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 active:scale-95 md:hidden"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="block transition-transform duration-300">
              {mobileMenuOpen ? (
                <X className="h-5 w-5 rotate-0" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out md:hidden ${
          mobileMenuOpen
            ? "grid-rows-[1fr] border-t border-sky-100 opacity-100"
            : "grid-rows-[0fr] border-t border-transparent opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="space-y-1 bg-white/95 px-4 pb-5 pt-3 backdrop-blur-xl sm:px-6">

            {navItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  transitionDelay: mobileMenuOpen
                    ? `${index * 35}ms`
                    : "0ms",
                }}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-all duration-300 ${
                    mobileMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-2 opacity-0"
                  } ${
                    isActive
                      ? "bg-gradient-to-r from-sky-50 to-cyan-50 font-bold text-sky-700 ring-1 ring-sky-100"
                      : "font-medium text-slate-600 hover:translate-x-1 hover:bg-slate-50 hover:text-sky-700"
                  }`
                }
              >
                {item.label}
                <ArrowUpRight className="h-4 w-4 opacity-40" />
              </NavLink>
            ))}

            {/* Mobile Appointment Button */}
            <div className="pt-3">
              <Link
                to="/appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition-all duration-300 hover:from-sky-700 hover:to-teal-600 active:scale-[0.98]"
              >
                <Calendar className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                Book Appointment
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
