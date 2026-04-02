import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6 border border-blue-200">
          <Zap size={16} className="text-blue-600" />
          <span className="text-sm font-semibold text-blue-600">
            Get verified help in 10 minutes
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          On-Demand Services from
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
            {' '}
            Trusted Professionals
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Connect with verified, background-checked professionals for cleaning,
          cooking, childcare, and more. Book instantly, pay securely, and enjoy
          peace of mind.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Book Now
            <ArrowRight size={20} />
          </Link>
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-200 text-gray-900 font-bold rounded-lg hover:bg-gray-300 transition-colors"
          >
            Explore Services
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>50K+ Verified Professionals</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span>4.8 Star Average Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔒</span>
            <span>100% Background Checked</span>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-b from-blue-100 to-transparent rounded-3xl aspect-video flex items-center justify-center border border-blue-200">
            <div className="text-center">
              <div className="text-6xl mb-4">👥</div>
              <p className="text-gray-600 font-semibold">
                Browse 50K+ Verified Professionals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
