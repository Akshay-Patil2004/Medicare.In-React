import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Sparkles,
  Calendar,
  Search,
  Phone,
  ArrowRight,
  ShieldCheck,
  Activity,
  Award,
  Stethoscope,
  Clock,
  UserCheck,
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import DoctorCard from "../components/DoctorCard";
import ServiceModal from "../components/ServiceModal";
import DoctorModal from "../components/DoctorModal";
import HealthCalculator from "../components/HealthCalculator";
import HealthPackagesSection from "../components/HealthPackagesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import ScrollReveal from "../components/ScrollReveal";
import { servicesData, doctorsData, blogArticles } from "../data/mockData";

import facility1 from "../assets/facilities/facility1.jpg";
import facility2 from "../assets/facilities/facility2.jpg";
import facility3 from "../assets/facilities/facility3.jpg";
import facility4 from "../assets/facilities/facility4.jpg";
import facility5 from "../assets/facilities/facility5.jpg";
import facility6 from "../assets/facilities/facility6.jpg";


import heroVideo from "../assets/videos/hospital-hero.mp4";

const facilities = [
  {
    title: "50+ Expert Doctors",
    description: "Multi-specialty board certified doctors with decades of clinical excellence.",
    image: facility1,
    imageAlt: "Expert hospital doctor consulting a patient",
  },
  {
    title: "Advanced 3T MRI & CT",
    description: "State-of-the-art diagnostic imaging and pathology labs operating 24/7.",
    image: facility2,
    imageAlt: "Modern hospital room and medical facilities",
  },
  {
    title: "Patient-Centered Care",
    description: "Individualized treatment plans, compassionate staff, and dedicated recovery suites.",
    image: facility3,
    imageAlt: "Hospital care team supporting a patient",
  },
  {
    title: "24/7 Emergency & ICU",
    description: "Level-1 trauma response team and mobile ICU ambulances ready round-the-clock.",
    image: facility4,
    imageAlt: "Emergency hospital service and ambulance care",
  },
  {
    title: "Robotic Surgery Suite",
    description: "High-precision minimally invasive surgeries with faster recovery and less pain.",
    image: facility5,
    imageAlt: "Advanced hospital diagnostic laboratory",
  },
  {
    title: "NABH Accredited Safety",
    description: "Highest international standards of hygiene, infection control, and patient safety.",
    image: facility6,
    imageAlt: "Clean hospital patient room",
  },
];

function Home({ onShowToast }) {
  const [activeModalService, setActiveModalService] = useState(null);
  const [activeModalDoctor, setActiveModalDoctor] = useState(null);
  const navigate = useNavigate();

  const [typedText, setTypedText] = useState("");
  useEffect(() => {
    const phrases = ["Our Highest Priority.", "Our Lifetime Commitment.", "In Safe Expert Hands."];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId = null;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypedText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
      }

      let delta = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentPhrase.length) {
        delta = 2200; // Pause at full phrase
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delta = 400;
      }

      timeoutId = setTimeout(type, delta);
    };

    timeoutId = setTimeout(type, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  const featuredServices = servicesData.slice(0, 8);
  const featuredDoctors = doctorsData.slice(0, 6);

  const handleBookService = (service) => {
    if (onShowToast) onShowToast(`Booked consultation request for ${service.title}`);
    navigate("/appointment", { state: { department: service.category ? service.category.toLowerCase() : "" } });
  };

  const handleBookDoctor = (doc, slot) => {
    const timeSlotMsg = slot ? ` for ${slot}` : "";
    if (onShowToast) onShowToast(`Selected ${doc.name}${timeSlotMsg}. Redirecting to booking...`);
    navigate("/appointment", {
      state: { doctorName: doc.name, department: doc.department?.toLowerCase(), timeSlot: slot }
    });
  };

  return (
    <>


      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-sky-100 py-16 sm:py-20 lg:py-24">

        {/* Background Video */}
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        {/* Premium Blue Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-sky-50/90 to-cyan-50/75" />

        {/* Soft Decorative Background */}
        <div className="pointer-events-none absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 -z-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />

        {/* Main Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">

            {/* Left Content */}
            <div className="space-y-6 text-center lg:col-span-7 lg:text-left">

              {/* Hospital Badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-bold tracking-wide text-sky-800 shadow-sm backdrop-blur-md sm:text-sm">
                <Sparkles className="h-4 w-4 text-cyan-600" />
                Multi-Specialty Hospital & Research Center
              </span>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
                Your Health,

                <span className="block whitespace-nowrap">
                  <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-teal-500 bg-clip-text text-transparent">
                    {typedText}
                  </span>
                  <span className="ml-1 inline-block h-[0.85em] w-[3px] animate-pulse bg-cyan-500" />
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
                Providing world-class medical care with 16+ departments, 50+ expert
                doctors, advanced surgical technology, and 24/7 emergency support
                for you and your family.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row lg:justify-start">

                <Link
                  to="/appointment"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-sky-600/25 transition-all duration-300 hover:-translate-y-1 hover:from-sky-700 hover:to-teal-600 hover:shadow-xl hover:shadow-sky-600/30 active:scale-95 sm:w-auto"
                >
                  <Calendar className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  Book Appointment
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/services"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-sky-200 bg-white/90 px-7 py-4 text-base font-bold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-sky-50 hover:text-sky-700 hover:shadow-md active:scale-95 sm:w-auto"
                >
                  <Search className="h-5 w-5 text-cyan-600" />
                  Explore Our Services
                </Link>

              </div>

              {/* Trust Statistics */}
              <div className="grid grid-cols-3 gap-3 border-t border-sky-200/80 pt-6 text-center lg:text-left">

                <div className="rounded-xl px-2 py-3 transition-colors duration-300 hover:bg-white/70">
                  <h4 className="text-2xl font-extrabold text-sky-700 sm:text-3xl">
                    50+
                  </h4>
                  <p className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">
                    Expert Doctors
                  </p>
                </div>

                <div className="rounded-xl px-2 py-3 transition-colors duration-300 hover:bg-white/70">
                  <h4 className="text-2xl font-extrabold text-sky-700 sm:text-3xl">
                    100K+
                  </h4>
                  <p className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">
                    Patients Served
                  </p>
                </div>

                <div className="rounded-xl px-2 py-3 transition-colors duration-300 hover:bg-white/70">
                  <h4 className="text-2xl font-extrabold text-teal-600 sm:text-3xl">
                    24/7
                  </h4>
                  <p className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">
                    Emergency Care
                  </p>
                </div>

              </div>
            </div>

            {/* Right Emergency Card */}
            <div className="lg:col-span-5">
              <div className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-6 shadow-[0_25px_70px_-20px_rgba(14,116,144,0.25)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-20px_rgba(14,116,144,0.35)] sm:p-8">

                {/* Card Accent */}
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-sky-500 via-cyan-400 to-teal-400" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-100/70 blur-3xl transition-colors duration-500 group-hover:bg-sky-200/80" />

                {/* Emergency Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-rose-100 bg-gradient-to-br from-rose-50 to-orange-50 text-rose-500 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Activity className="h-8 w-8 stroke-[2.5]" />
                </div>

                {/* Card Content */}
                <div className="relative mt-6 space-y-4">

                  <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-700">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-rose-500" />
                    24/7 Emergency Care
                  </span>

                  <h2 className="text-2xl font-extrabold leading-snug text-slate-900 sm:text-3xl">
                    Immediate Medical Assistance
                  </h2>

                  <p className="text-sm leading-7 text-slate-600 sm:text-base">
                    Quick access to emergency medical assistance, ambulance
                    services, cardiac care, and critical trauma support.
                  </p>

                </div>

                {/* Emergency Call Button */}
                <a
                  href="tel:+919876543210"
                  className="relative mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:from-sky-800 hover:to-cyan-800 hover:shadow-sky-800/25 active:scale-[0.98] sm:text-base"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    <Phone className="h-5 w-5 text-rose-300" />
                  </span>

                  <span className="text-left">
                    <span className="block text-xs font-medium text-slate-300">
                      Emergency Helpline
                    </span>
                    <span>+91 98765 43210</span>
                  </span>

                  <ArrowRight className="ml-auto h-5 w-5 text-cyan-300 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                {/* Bottom Note */}
                <div className="relative mt-5 flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-teal-600" />
                  Your health and safety come first
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Featured Services Grid */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal direction="up">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800">
                <Stethoscope className="w-3.5 h-3.5" /> Our Departments
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
                Featured Healthcare <span className="text-sky-600">Services</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Discover our specialized medical departments equipped with advanced diagnostic and therapeutic care.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <ScrollReveal key={service.id || service.title} delay={index * 50}>
                <ServiceCard
                  service={service}
                  onViewDetails={(s) => setActiveModalService(s)}
                  onBook={handleBookService}
                />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all text-sm active:scale-95"
            >
              <span>View All 16 Medical Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* About setion --- Who We Are */}

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50/60 to-blue-50/70 py-16 sm:py-20">

        {/* Soft Background Glow */}
        <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-sky-100/50 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

          {/* LEFT SIDE - Hospital Image */}
          <div className="about-image relative">

            {/* Decorative Corner */}
            <div className="absolute -left-3 -top-3 z-0 h-28 w-28 rounded-tl-3xl border-l-4 border-t-4 border-sky-300/70 sm:-left-4 sm:-top-4" />

            {/* Hospital Image */}
            <div className="relative z-10 overflow-hidden rounded-3xl border border-white/80 bg-white p-1.5 shadow-xl shadow-sky-900/10 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/15">

              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1153&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="MediCare Hospital"
                loading="lazy"
                className="h-[300px] w-full rounded-[1.3rem] object-cover transition-transform duration-700 ease-in-out hover:scale-105 sm:h-[400px] lg:h-[460px]"
              />

              {/* Light Image Overlay */}
              <div className="pointer-events-none absolute inset-1.5 rounded-[1.3rem] bg-gradient-to-t from-blue-950/20 via-transparent to-transparent" />
            </div>

            {/* 24/7 Care Badge */}
            <div className="absolute -bottom-5 right-3 z-20 rounded-2xl border border-sky-100/80 bg-white/95 px-5 py-4 shadow-lg shadow-sky-900/10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 sm:right-8 sm:px-6">

              <p className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-2xl font-extrabold text-transparent">
                24/7
              </p>

              <p className="mt-1 text-xs font-medium text-slate-500">
                Care & Support
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - About Content */}
          <div className="about-text pt-4 lg:pt-0">

            {/* About Badge */}
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700 shadow-sm shadow-sky-100/50">

              <Activity className="h-4 w-4 text-sky-600" />

              About Us
            </span>

            {/* Heading */}
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">

              About{" "}

              <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500 bg-clip-text text-transparent">
                MediCare Hospital
              </span>
            </h1>

            {/* Heading Underline */}
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-sky-500 to-blue-600" />

            {/* Description */}
            <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Compassionate care. Advanced technology. Better health for
              generations. We are committed to providing quality healthcare
              with experienced doctors, modern facilities, and personalized
              attention for every patient.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Our mission is to make reliable, accessible, and patient-centered
              healthcare available to every family.
            </p>

            {/* Features */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">

              {[
                "Experienced Doctors",
                "Modern Medical Facilities",
                "Patient-Centered Care",
                "24/7 Emergency Support",
              ].map((feature) => (
                <div
                  key={feature}
                  className="group flex items-center gap-3 rounded-xl border border-sky-100/70 bg-white/70 px-3 py-3 text-sm font-medium text-slate-700 shadow-sm shadow-sky-900/[0.02] transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:text-blue-700 hover:shadow-md hover:shadow-sky-100/70"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100/80 text-blue-700 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">

                    <Activity className="h-3.5 w-3.5" />

                  </span>

                  <span>{feature}</span>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 py-16 sm:py-24">

        {/* Background Decorations */}
        <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-3xl text-center">

              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <ShieldCheck className="h-4 w-4 text-sky-600" />
                Why Choose Us
              </span>

              <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Healthcare That Puts{" "}
                <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500 bg-clip-text text-transparent">
                  You First
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Discover a better healthcare experience with modern medical
                infrastructure, advanced technology, and compassionate care
                designed around your needs.
              </p>

              <div className="mx-auto mt-6 flex items-center justify-center gap-2">
                <span className="h-1 w-12 rounded-full bg-blue-700" />
                <span className="h-1 w-6 rounded-full bg-sky-400" />
                <span className="h-1 w-2 rounded-full bg-cyan-300" />
              </div>

            </div>
          </ScrollReveal>

          {/* Facility Cards */}
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {facilities.map((facility, index) => (
              <ScrollReveal
                key={facility.title}
                direction={index % 2 === 0 ? "up" : "down"}
                delay={index * 100}
              >
                <article
                  className="group relative isolate h-full overflow-hidden rounded-3xl
            border border-sky-100 bg-white shadow-sm
            transition-all duration-500 ease-out
            hover:-translate-y-2 hover:border-sky-300
            hover:shadow-[0_20px_45px_-15px_rgba(14,165,233,0.25)]"
                >

                  {/* Light Blue Overlay: Bottom to Top */}
                  <div
                    className="pointer-events-none absolute inset-0 z-0 translate-y-full
              rounded-3xl bg-gradient-to-t from-blue-200/60
              via-sky-100/50 to-white/20
              transition-transform duration-700 ease-in-out
              group-hover:translate-y-0"
                  />

                  {/* Image */}
                  <div className="relative z-10 overflow-hidden p-3 pb-0">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-sky-50">

                      <img
                        src={facility.image}
                        alt={facility.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-110"
                      />

                      {/* Image Blue Tint */}
                      <div
                        className="absolute inset-0 bg-gradient-to-t
                  from-blue-950/50 via-transparent to-sky-400/10
                  opacity-70 transition-all duration-500
                  group-hover:from-blue-800/50
                  group-hover:via-sky-500/10
                  group-hover:to-cyan-300/20
                  group-hover:opacity-100"
                      />

                      {/* Number Badge */}
                      <span
                        className="absolute left-3 top-3 flex h-10 w-10
                  items-center justify-center rounded-xl
                  border border-white/50 bg-white/90
                  text-sm font-extrabold text-blue-700 shadow-md
                  backdrop-blur-md transition-all duration-300
                  group-hover:scale-110 group-hover:bg-blue-600
                  group-hover:text-white"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 p-5 pt-5 sm:p-6">

                    <h3
                      className="text-xl font-bold tracking-tight text-slate-900
                transition-colors duration-300
                group-hover:text-blue-800"
                    >
                      {facility.title}
                    </h3>

                    <p
                      className="mt-3 text-sm leading-7 text-slate-600
                transition-colors duration-300
                group-hover:text-slate-700"
                    >
                      {facility.description}
                    </p>

                    {/* Bottom Accent */}
                    <div className="mt-5 flex items-center justify-between">

                      <span
                        className="h-1 w-12 rounded-full bg-gradient-to-r
                  from-blue-700 to-sky-400
                  transition-all duration-500
                  group-hover:w-24"
                      />

                      <ShieldCheck
                        className="h-5 w-5 text-sky-500/70
                  transition-all duration-300
                  group-hover:scale-110 group-hover:text-blue-700"
                      />

                    </div>

                  </div>
                </article>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>


      {/* Health Checkup Packages */}
      <ScrollReveal direction="up">
        <HealthPackagesSection />
      </ScrollReveal>

      {/* Featured Doctors */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 py-16 sm:py-24">

        {/* Background Decorations */}
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <ScrollReveal direction="up">
            <div className="specialists-heading mx-auto max-w-3xl text-center">

              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <UserCheck className="h-4 w-4 text-sky-600" />
                Our Specialists
              </span>

              <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Meet Our Medical
                <span className="mt-1 block bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500 bg-clip-text text-transparent">
                  Experts
                </span>
              </h2>

              {/* Animated Underline */}
              <div className="specialists-underline mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400" />

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Meet our experienced doctors and senior surgeons, committed to
                delivering expert treatment with compassion and personalized care.
              </p>

            </div>
          </ScrollReveal>

          {/* Doctor Cards */}
          <div className="grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {featuredDoctors.map((doctor, index) => (
              <ScrollReveal
                key={doctor.id || doctor.name}
                direction="up"
                delay={index * 100}
              >
                <div className="specialist-card h-full">
                  <DoctorCard
                    doctor={doctor}
                    onViewProfile={(doc) => setActiveModalDoctor(doc)}
                    onBookDoctor={handleBookDoctor}
                  />
                </div>
              </ScrollReveal>
            ))}

          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col items-center gap-4 pt-2 text-center">

            <p className="text-sm text-slate-500">
              Looking for the right specialist for your healthcare needs?
            </p>

            <Link
              to="/doctors"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-700 to-sky-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition-all duration-300 hover:-translate-y-1 hover:from-blue-800 hover:to-sky-600 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 active:scale-95 sm:px-8"
            >
              <UserCheck className="h-4 w-4" />

              <span>Meet All 16 Doctors &amp; Specialists</span>

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>

        </div>
      </section>


      {/* Interactive Health BMI Calculator */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <HealthCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsSection />

      {/* Medical Articles */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal direction="up">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800">
                <Award className="w-3.5 h-3.5" /> Health Insights
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900">
                Latest Medical <span className="text-sky-600">Articles & Advice</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Stay informed with expert wellness tips, medical news, and healthy lifestyle guidance from our doctors.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogArticles.map((art, index) => (
              <ScrollReveal key={art.id} delay={index * 80}>
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between group h-full">
                  <div>
                    <div className="relative aspect-16/9 bg-slate-100 overflow-hidden">
                      <img
                        src={art.image}
                        alt={art.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-sky-600 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-xs">
                        {art.category}
                      </span>
                    </div>

                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-sky-500" />
                          {art.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {art.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-heading font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                        {art.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {art.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      <span>Read Full Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* Modals */}
      {activeModalService && (
        <ServiceModal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
          onBook={handleBookService}
        />
      )}

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

export default Home;
