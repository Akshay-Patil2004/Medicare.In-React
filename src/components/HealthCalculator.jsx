import { useState } from "react";
import { Link } from "react-router-dom";
import { Activity, Stethoscope, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";

function HealthCalculator() {
  const [height, setHeight] = useState(170); // cm
  const [weight, setWeight] = useState(68); // kg
  const [age, setAge] = useState(30);

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  let category = "Normal Weight";
  let statusBadgeStyle = "bg-emerald-50 text-emerald-700 border-emerald-200";
  let recommendation = "Great job! Maintain your balanced diet, regular exercise, and schedule annual preventive health checkups.";
  let suggestedDepartment = "General Medicine";

  if (bmi < 18.5) {
    category = "Underweight";
    statusBadgeStyle = "bg-amber-50 text-amber-700 border-amber-200";
    recommendation = "Consider consulting a clinical nutritionist to design a calorie-dense nutrient-rich meal plan.";
    suggestedDepartment = "General Medicine";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal Weight";
    statusBadgeStyle = "bg-emerald-50 text-emerald-700 border-emerald-200";
    recommendation = "Your BMI is in the healthy optimal zone. Keep up your active lifestyle!";
    suggestedDepartment = "General Medicine";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
    statusBadgeStyle = "bg-amber-50 text-amber-700 border-amber-200";
    recommendation = "We recommend a routine lipid check, 30 mins of daily cardio exercise, and consulting a health counselor.";
    suggestedDepartment = "Cardiology";
  } else {
    category = "Obese";
    statusBadgeStyle = "bg-rose-50 text-rose-700 border-rose-200";
    recommendation = "Higher risk for metabolic and cardiovascular conditions. We suggest a comprehensive heart and diabetes evaluation.";
    suggestedDepartment = "Cardiology";
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-slate-800 space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-500/30">
          <Activity className="w-3.5 h-3.5" /> Interactive Tool
        </span>
        <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
          Instant BMI & Health Risk Check
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm">
          Calculate your Body Mass Index (BMI) and receive instant personalized medical guidance.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Area (7 cols) */}
        <div className="lg:col-span-7 space-y-6 bg-slate-800/60 p-6 rounded-2xl border border-slate-700/60">
          {/* Height Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-medium">
              <label className="text-slate-300">Height (cm):</label>
              <span className="text-sky-400 font-bold font-mono text-base">{height} cm</span>
            </div>
            <input
              type="range"
              min="120"
              max="220"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
            />
          </div>

          {/* Weight Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-medium">
              <label className="text-slate-300">Weight (kg):</label>
              <span className="text-sky-400 font-bold font-mono text-base">{weight} kg</span>
            </div>
            <input
              type="range"
              min="35"
              max="160"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
            />
          </div>

          {/* Age Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-medium">
              <label className="text-slate-300">Age (years):</label>
              <span className="text-sky-400 font-bold font-mono text-base">{age} yrs</span>
            </div>
            <input
              type="range"
              min="10"
              max="90"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
            />
          </div>
        </div>

        {/* Result Card (5 cols) */}
        <div className="lg:col-span-5 bg-white text-slate-900 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center space-y-4">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-sky-50 to-sky-100 border-4 border-sky-500 flex flex-col items-center justify-center shadow-inner">
            <span className="text-3xl font-extrabold font-heading text-sky-600 leading-none">{bmi}</span>
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">BMI Score</span>
          </div>

          <div className={`px-4 py-1.5 rounded-full text-xs font-bold border ${statusBadgeStyle}`}>
            Status: {category}
          </div>

          <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
            {recommendation}
          </p>

          <Link
            to="/appointment"
            state={{ department: suggestedDepartment.toLowerCase() }}
            className="w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
          >
            <Stethoscope className="w-4 h-4" />
            <span>Consult {suggestedDepartment} Specialist</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HealthCalculator;
