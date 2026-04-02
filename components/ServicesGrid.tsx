import Link from 'next/link';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of professional services tailored to your
            needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {SERVICE_CATEGORIES.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-8 border border-gray-200 shadow-subtle hover:shadow-card hover:border-blue-300 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-6xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 min-h-12">
                {service.description}
              </p>

              {/* CTA Link */}
              <Link
                href={`/services?category=${service.id}`}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
              >
                Explore
                <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>

        {/* Browse All CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse All Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
