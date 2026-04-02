'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4">
      <div className="max-w-lg w-full text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-8">
          <AlertCircle size={60} className="text-red-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Something Went Wrong
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          We encountered an unexpected error. Please try again or contact support
          if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
            <ArrowRight size={20} />
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-gray-300 text-gray-900 font-bold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Go Home
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
