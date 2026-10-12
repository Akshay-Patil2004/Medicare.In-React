import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Calendar,
  CheckCircle2,
  ClipboardList,
  Printer,
  User,
  Mail,
  Phone,
  AlertCircle,
  RefreshCcw,
} from "lucide-react";
import { doctorsData, servicesData } from "../data/mockData";
import ScrollReveal from "../components/ScrollReveal";

function Appointment({ onShowToast }) {
  const location = useLocation();
  const prefilledState = location.state || {};

  const todayStr = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: (prefilledState.department || "").toLowerCase(),
    doctor: prefilledState.doctorName || "",
    date: todayStr,
    time: prefilledState.timeSlot || "10:00 AM",
    message: prefilledState.message || "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");

  useEffect(() => {
    if (prefilledState.department || prefilledState.doctorName || prefilledState.message) {
      setFormData((prev) => ({
        ...prev,
        department: (prefilledState.department || prev.department).toLowerCase(),
        doctor: prefilledState.doctorName || prev.doctor,
        time: prefilledState.timeSlot || prev.time,
        message: prefilledState.message || prev.message,
      }));
    }
  }, [prefilledState]);

  const filteredDoctorsList = doctorsData.filter((doc) => {
    if (!formData.department) return true;
    return doc.department.toLowerCase() === formData.department.toLowerCase();
  });

  const timeSlotsPills = [
    { value: "09:00 AM", label: "09:00 AM" },
    { value: "10:00 AM", label: "10:00 AM" },
    { value: "11:30 AM", label: "11:30 AM" },
    { value: "02:00 PM", label: "02:00 PM" },
    { value: "03:30 PM", label: "03:30 PM" },
    { value: "05:00 PM", label: "05:00 PM" },
    { value: "06:30 PM", label: "06:30 PM" },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Patient name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email address is required";
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      newErrors.phone = "Valid 10-digit phone number is required";
    }
    if (!formData.department) newErrors.department = "Please select a department";
    if (!formData.date) newErrors.date = "Please select a date";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const randomTicket = "MC-" + Math.floor(100000 + Math.random() * 900000);
    setTicketNumber(randomTicket);
    setSubmitted(true);
    if (onShowToast) onShowToast(`Appointment Confirmed! Ticket #${randomTicket}`);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-500/30">
            <Calendar className="w-3.5 h-3.5" /> Online Booking
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white">
            Book Your Medical Visit
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Schedule a consultation with our experienced doctors and specialists online instantly.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Benefit Details & Live Preview (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal direction="left">
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800">
                    Easy Scheduling
                  </span>
                  <h2 className="text-3xl font-heading font-extrabold text-slate-900">
                    Schedule Your <span className="text-sky-600">Visit Today</span>
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Fill out the interactive appointment form to receive instant confirmation and ticket receipt.
                  </p>
                </div>
              </ScrollReveal>

              {/* Benefits list */}
              <div className="space-y-4">
                <ScrollReveal direction="left" delay={100}>
                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/60 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">50+ Board Certified Doctors</h3>
                      <p className="text-xs text-slate-600 mt-0.5">Access specialists across 16 medical departments.</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={200}>
                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/60 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Instant Slot Reservation</h3>
                      <p className="text-xs text-slate-600 mt-0.5">Choose your preferred doctor, date, and live time slot.</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={300}>
                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/60 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">24/7 Priority Emergency Desk</h3>
                      <p className="text-xs text-slate-600 mt-0.5">Emergency medical response team on standby round-the-clock.</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Live Selection Summary */}
              <ScrollReveal direction="up" delay={400}>
                <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-3 shadow-xl">
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                    <ClipboardList className="w-5 h-5 text-sky-400" />
                    <h4 className="font-heading font-bold text-base">Live Selection Summary</h4>
                  </div>
                  <div className="space-y-2 text-xs text-slate-300">
                    <p>
                      <strong className="text-white">Department:</strong>{" "}
                      {formData.department ? formData.department.toUpperCase() : "Select Department Below"}
                    </p>
                    <p>
                      <strong className="text-white">Doctor:</strong> {formData.doctor || "Any Available Specialist"}
                    </p>
                    <p>
                      <strong className="text-white">Date & Time:</strong> {formData.date} at {formData.time}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Form Container (7 cols) */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl">
              {submitted ? (
                /* Ticket Confirmation */
                <div className="text-center space-y-6 py-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
                      Appointment Confirmed!
                    </h2>
                    <span className="inline-block mt-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-sky-100 text-sky-800 border border-sky-300">
                      Ticket #{ticketNumber}
                    </span>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-slate-200 text-left space-y-2.5 text-xs text-slate-700 font-medium shadow-xs">
                    <p><strong className="text-slate-900">Patient Name:</strong> {formData.name}</p>
                    <p><strong className="text-slate-900">Doctor:</strong> {formData.doctor || "Assigned Specialist"}</p>
                    <p><strong className="text-slate-900">Department:</strong> {formData.department.toUpperCase()}</p>
                    <p><strong className="text-slate-900">Date & Time:</strong> {formData.date} ({formData.time})</p>
                    <p><strong className="text-slate-900">Contact:</strong> {formData.phone} | {formData.email}</p>
                    {formData.message && (
                      <p><strong className="text-slate-900">Note:</strong> {formData.message}</p>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto">
                    A confirmation SMS & Email have been sent. Please arrive 15 minutes prior to your slot time with previous medical records.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print Ticket</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          department: "",
                          doctor: "",
                          date: todayStr,
                          time: "10:00 AM",
                          message: "",
                        });
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      <RefreshCcw className="w-4 h-4" />
                      <span>Book Another Visit</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Booking Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Patient Information */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                      1. Patient Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Patient Name *</label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            name="name"
                            placeholder="e.g. Ramesh Kumar"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                              errors.name ? "border-rose-400 bg-rose-50/50" : "border-slate-200"
                            }`}
                          />
                        </div>
                        {errors.name && (
                          <p className="text-[11px] text-rose-500 flex items-center gap-1 font-medium mt-1">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="email"
                            name="email"
                            placeholder="ramesh@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                              errors.email ? "border-rose-400 bg-rose-50/50" : "border-slate-200"
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-[11px] text-rose-500 flex items-center gap-1 font-medium mt-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Phone Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="tel"
                            name="phone"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className={`w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                              errors.phone ? "border-rose-400 bg-rose-50/50" : "border-slate-200"
                            }`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-[11px] text-rose-500 flex items-center gap-1 font-medium mt-1">
                            <AlertCircle className="w-3 h-3" /> {errors.phone}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Medical Department *</label>
                        <select
                          name="department"
                          value={formData.department}
                          onChange={(e) => {
                            handleChange(e);
                            setFormData((prev) => ({ ...prev, doctor: "", department: e.target.value.toLowerCase() }));
                          }}
                          required
                          className={`w-full px-3.5 py-2.5 text-xs rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                            errors.department ? "border-rose-400 bg-rose-50/50" : "border-slate-200"
                          }`}
                        >
                          <option value="">Select Department</option>
                          {servicesData.map((s) => (
                            <option key={s.id} value={s.category.toLowerCase()}>
                              {s.category}
                            </option>
                          ))}
                        </select>
                        {errors.department && (
                          <p className="text-[11px] text-rose-500 flex items-center gap-1 font-medium mt-1">
                            <AlertCircle className="w-3 h-3" /> {errors.department}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Doctor & Time Selection */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                      2. Doctor & Time Selection
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Preferred Doctor Specialist</label>
                        <select
                          name="doctor"
                          value={formData.doctor}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                        >
                          <option value="">Any Available Specialist</option>
                          {filteredDoctorsList.map((doc) => (
                            <option key={doc.id} value={doc.name}>
                              {doc.name} ({doc.speciality})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">Appointment Date *</label>
                        <input
                          type="date"
                          name="date"
                          min={todayStr}
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>
                    </div>

                    {/* Time Slot Pills */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700">Select Available Time Slot *</label>
                      <div className="flex flex-wrap gap-2">
                        {timeSlotsPills.map((slot) => (
                          <button
                            key={slot.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, time: slot.value })}
                            className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all ${
                              formData.time === slot.value
                                ? "bg-sky-600 text-white border-sky-600 shadow-xs font-semibold"
                                : "bg-white text-slate-700 border-slate-200 hover:border-sky-300 hover:bg-sky-50/50"
                            }`}
                          >
                            {slot.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">Health Concern / Additional Notes</label>
                      <textarea
                        name="message"
                        rows="3"
                        placeholder="Briefly describe your symptoms or reason for visit..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Confirm & Request Appointment Ticket</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Appointment;