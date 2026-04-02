'use client';

import { SAMPLE_TESTIMONIALS } from '@/lib/constants';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % SAMPLE_TESTIMONIALS.length
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + SAMPLE_TESTIMONIALS.length) % SAMPLE_TESTIMONIALS.length
    );
  };

  const currentTestimonial = SAMPLE_TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Real reviews from real customers
          </p>
        </div>

        {/* Carousel */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-card">
          {/* Star Rating */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
              <Star
                key={i}
                size={20}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-2xl font-semibold text-gray-900 mb-8 leading-relaxed">
            "{currentTestimonial.text}"
          </p>

          {/* Customer Info */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
              {currentTestimonial.avatar}
            </div>
            <div>
              <p className="font-bold text-gray-900">
                {currentTestimonial.name}
              </p>
              <p className="text-gray-600">{currentTestimonial.location}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 mt-8 pt-8 border-t border-gray-200">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-gray-900" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-gray-900" />
            </button>

            {/* Indicators */}
            <div className="flex gap-2 ml-auto">
              {SAMPLE_TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
