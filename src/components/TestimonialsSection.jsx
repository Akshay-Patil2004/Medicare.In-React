
import { useState, useEffect } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { testimonialsData } from "../data/mockData";

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const totalTestimonials = testimonialsData.length;

  // Add the first testimonial at the end for infinite looping
  const slides =
    totalTestimonials > 1
      ? [...testimonialsData, testimonialsData[0]]
      : testimonialsData;

  // Automatically move to the next testimonial
  useEffect(() => {
    if (isPaused || totalTestimonials <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, totalTestimonials]);

  // When the cloned last slide finishes, return to the real first slide
  const handleTransitionEnd = () => {
    if (currentIndex === totalTestimonials && totalTestimonials > 1) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  // Enable animation again after the invisible reset
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  }, [isTransitioning]);

  // Go to the next testimonial
  const handleNext = () => {
    if (totalTestimonials <= 1) return;

    if (currentIndex === totalTestimonials) {
      setIsTransitioning(false);
      setCurrentIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrentIndex(1);
        });
      });

      return;
    }

    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Go to the previous testimonial
  const handlePrev = () => {
    if (totalTestimonials <= 1) return;

    if (currentIndex === 0) {
      // Instantly move to the cloned slide at the end
      setIsTransitioning(false);
      setCurrentIndex(totalTestimonials);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrentIndex(totalTestimonials - 1);
        });
      });

      return;
    }

    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Click a pagination dot
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  if (totalTestimonials === 0) return null;

  // Show the correct dot even when the cloned slide is visible
  const activeDot =
    currentIndex === totalTestimonials ? 0 : currentIndex;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 sm:py-24">

      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl space-y-4 text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-widest text-sky-700 shadow-sm">
            <HeartHandshake className="h-4 w-4" />
            Patient Stories
            <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            What Our{" "}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Patients Say
            </span>
          </h2>

          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600" />

          <p className="mx-auto max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Every smile tells a story. Read about the experiences of patients
            who trusted MediCare Hospital with their health and recovery.
          </p>
        </div>

        {/* Infinite testimonial carousel */}
        <div
          className="relative mx-auto max-w-4xl px-1 sm:px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
          aria-roledescription="carousel"
          aria-label="Patient testimonials"
        >

          {/* Slider viewport */}
          <div className="overflow-hidden rounded-[2rem] p-1">

            {/* Moving track */}
            <div
              onTransitionEnd={handleTransitionEnd}
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-700 ease-in-out motion-reduce:transition-none"
                  : "transition-none"
              }`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {slides.map((testimonial, index) => {
                const isClone =
                  totalTestimonials > 1 &&
                  index === totalTestimonials;

                return (
                  <article
                    key={`${testimonial.id || testimonial.name}-${index}`}
                    aria-hidden={
                      isClone
                        ? currentIndex !== totalTestimonials
                        : index !== currentIndex
                    }
                    aria-roledescription="slide"
                    aria-label={`${(index % totalTestimonials) + 1} of ${totalTestimonials}`}
                    className="w-full shrink-0 p-2 sm:p-3"
                  >

                    {/* Testimonial card */}
                    <div className="group relative flex h-full min-h-[410px] flex-col overflow-hidden rounded-[1.75rem] border border-white bg-white/95 p-6 shadow-[0_20px_60px_-20px_rgba(37,99,235,0.22)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_-20px_rgba(79,70,229,0.25)] sm:min-h-[390px] sm:p-9 lg:p-10">

                      {/* Top gradient strip */}
                      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600" />

                      {/* Soft card glow */}
                      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky-100/70 blur-3xl transition-colors duration-500 group-hover:bg-indigo-100/80" />

                      {/* Quote icon */}
                      <div className="absolute right-5 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-50 sm:right-8 sm:top-8 sm:h-16 sm:w-16">
                        <Quote className="h-8 w-8 text-sky-300 transition-transform duration-300 group-hover:scale-110 group-hover:text-indigo-400" />
                      </div>

                      {/* Patient experience label */}
                      <div className="relative z-10 mb-6 flex items-center gap-2">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-md shadow-sky-200">
                          <ShieldCheck className="h-5 w-5" />
                        </span>

                        <div>
                          <p className="text-sm font-bold text-slate-800">
                            Patient Experience
                          </p>
                          <p className="text-xs text-slate-500">
                            Care that makes a difference
                          </p>
                        </div>
                      </div>

                      {/* Star rating */}
                      <div className="relative z-10 mb-5 flex items-center gap-1">
                        {Array.from({
                          length: Math.min(
                            5,
                            Math.max(0, testimonial.rating || 5)
                          ),
                        }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="h-5 w-5 fill-amber-400 text-amber-400 drop-shadow-sm"
                          />
                        ))}

                        <span className="ml-2 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700">
                          {testimonial.rating || 5}.0 / 5
                        </span>
                      </div>

                      {/* Patient comment */}
                      <blockquote className="relative z-10 flex-1">
                        <p className="text-base font-medium leading-8 text-slate-700 sm:text-lg sm:leading-9">
                          &ldquo;{testimonial.comment}&rdquo;
                        </p>
                      </blockquote>

                      {/* Patient details */}
                      <div className="relative z-10 mt-7 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">

                        <div className="flex min-w-0 items-center gap-4">

                          <div className="shrink-0 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 p-[3px] shadow-lg shadow-sky-100">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              loading="lazy"
                              className="h-14 w-14 rounded-full border-2 border-white object-cover sm:h-16 sm:w-16"
                            />
                          </div>

                          <div className="min-w-0">
                            <h3 className="truncate text-base font-extrabold text-slate-900 sm:text-lg">
                              {testimonial.name}
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                              {testimonial.location}
                            </p>

                            <p className="mt-1 text-xs font-semibold text-sky-700">
                              Treated for {testimonial.treatment}
                            </p>
                          </div>
                        </div>

                        {/* Care badge */}
                        <div className="flex w-fit shrink-0 items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">
                          <HeartHandshake className="h-4 w-4" />
                          Patient Care
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Previous button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={totalTestimonials <= 1}
            aria-label="Previous testimonial"
            className="absolute -left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-sky-100 bg-white text-sky-700 shadow-lg shadow-sky-200/60 transition-all duration-300 hover:scale-110 hover:border-sky-600 hover:bg-gradient-to-r hover:from-sky-600 hover:to-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 sm:-left-2 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={totalTestimonials <= 1}
            aria-label="Next testimonial"
            className="absolute -right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-sky-100 bg-white text-sky-700 shadow-lg shadow-sky-200/60 transition-all duration-300 hover:scale-110 hover:border-sky-600 hover:bg-gradient-to-r hover:from-sky-600 hover:to-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 sm:-right-2 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex flex-col items-center gap-4 pt-1">

          <div className="flex items-center justify-center gap-2">
            {testimonialsData.map((testimonial, index) => (
              <button
                key={testimonial.id || `${testimonial.name}-${index}`}
                type="button"
                onClick={() => handleDotClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={activeDot === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                  activeDot === index
                    ? "w-9 bg-gradient-to-r from-sky-500 to-indigo-600 shadow-md shadow-sky-200"
                    : "w-2.5 bg-slate-300 hover:bg-sky-300"
                }`}
              />
            ))}
          </div>

          <p className="text-xs font-bold tracking-[0.18em] text-slate-400">
            {String(activeDot + 1).padStart(2, "0")} /{" "}
            {String(totalTestimonials).padStart(2, "0")} PATIENT STORIES
          </p>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;