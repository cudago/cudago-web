import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4">
      <div className="max-w-lg w-full text-center">
        <div className="text-8xl font-bold text-gray-200 mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
            <ArrowRight size={20} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-gray-300 text-gray-900 font-bold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Browse Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
