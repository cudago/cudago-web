import { TRUST_STATS } from '@/lib/constants';
import { Shield, Award, Users } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Millions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Cudago for their
            household service needs.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {TRUST_STATS.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200"
            >
              <div className="text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Shield size={32} className="text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                100% Verified
              </h3>
              <p className="text-gray-600">
                Every professional undergoes thorough background checks and
                identity verification.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Award size={32} className="text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                Top-rated professionals with proven track records and customer
                satisfaction ratings.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Users size={32} className="text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Our dedicated support team is always available to help you with
                any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
