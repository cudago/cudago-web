import Link from 'next/link';
import { Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
              <span>✓</span>
              Cudago
            </div>
            <p className="text-gray-400">
              Connecting people with trusted, verified professionals for
              household services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Cleaning
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Cooking
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Childcare
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest updates about new services and special offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Cudago. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
