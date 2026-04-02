import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SignUpForm from '@/components/SignUpForm';
import { CheckCircle } from 'lucide-react';

export default function SignUpPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <span className="text-3xl">✓</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create Your Account
            </h1>
            <p className="text-gray-600">
              Join Cudago and get access to verified professionals
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-blue-50 rounded-lg p-4 mb-8 space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">Book services instantly</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">Verified professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">Secure payments</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-subtle">
            <SignUpForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
