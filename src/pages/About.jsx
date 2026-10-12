
import { Activity } from "lucide-react";

function AboutSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-100 py-16 sm:py-20">

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

        {/* LEFT SIDE - Image Animation */}
        <div className="about-image relative">
          {/* Decorative Background */}
          <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-3xl border-l-4 border-t-4 border-sky-400/70"></div>

          {/* Hospital Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-blue-900/10 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/20">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1153&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="MediCare Hospital"
              className="h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[400px] lg:h-[460px]"
            />

            {/* Image Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-transparent"></div>
          </div>

          {/* Decorative Badge */}
          <div className="absolute -bottom-5 right-4 rounded-2xl border border-sky-100 bg-white px-5 py-4 shadow-lg sm:right-8">
            <p className="text-2xl font-extrabold text-blue-700">
              24/7
            </p>
            <p className="text-xs font-medium text-slate-500">
              Care & Support
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Text Animation */}
        <div className="about-text pt-4 lg:pt-0">

          {/* Badge */}
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700 shadow-sm">
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
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Experienced Doctors",
              "Modern Medical Facilities",
              "Patient-Centered Care",
              "24/7 Emergency Support",
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-blue-700"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-blue-700">
                  <Activity className="h-3.5 w-3.5" />
                </span>
                {feature}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
