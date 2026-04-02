import { HOW_IT_WORKS_STEPS } from '@/lib/constants';
import { CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-white px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get quality service in just 4 simple steps. From browsing to
            completion, we make it seamless.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {HOW_IT_WORKS_STEPS.map((stepItem, index) => (
            <div key={stepItem.step} className="relative">
              {/* Card */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 shadow-subtle hover:shadow-card transition-all duration-300">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold mb-4 text-lg">
                  {stepItem.step}
                </div>

                {/* Step Icon */}
                <div className="text-5xl mb-4">{stepItem.icon}</div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {stepItem.title}
                </h3>

                {/* Step Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              {/* Arrow Connector */}
              {index < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-3xl text-blue-600">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
          <div className="flex gap-4">
            <CheckCircle className="flex-shrink-0 text-blue-600" size={24} />
            <div>
              <h4 className="font-bold text-gray-900 mb-2">
                Why Choose Cudago?
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ All professionals are verified and background-checked</li>
                <li>✓ Secure payment and protection guarantee</li>
                <li>✓ Book same-day or schedule in advance</li>
                <li>✓ 24/7 customer support available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
