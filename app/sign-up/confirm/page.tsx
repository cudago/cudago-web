import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, Mail } from 'lucide-react';

export default function ConfirmPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-8">
            <CheckCircle size={60} className="text-green-600" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Account Created!
          </h1>

          {/* Message */}
          <p className="text-gray-600 mb-8">
            We&apos;ve sent a confirmation email to your address. Please check your inbox
            and verify your email to get started.
          </p>

          {/* Email Verification Card */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <Mail size={32} className="mx-auto mb-4 text-blue-600" />
            <p className="text-sm text-gray-700 font-semibold">
              Check your email for the verification link
            </p>
          </div>

          {/* Steps */}
          <div className="text-left bg-gray-50 rounded-lg p-6 mb-8 space-y-4">
            <h3 className="font-semibold text-gray-900 mb-4">What&apos;s Next?</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <p className="text-sm text-gray-700">Check your email inbox</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <p className="text-sm text-gray-700">Click the verification link</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <p className="text-sm text-gray-700">Start booking services!</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Link
              href="/services"
              className="block w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              Browse Services
            </Link>
            <Link
              href="/"
              className="block w-full px-6 py-3 border border-gray-300 text-gray-900 font-bold rounded-lg hover:bg-gray-50 transition-colors text-center"
            >
              Back to Home
            </Link>
          </div>

          {/* Resend Link */}
          <p className="text-sm text-gray-600 mt-8">
            Didn&apos;t receive an email?{' '}
            <button className="text-blue-600 font-semibold hover:underline">
              Resend confirmation
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
