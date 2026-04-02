'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  SignUpFormData,
  validateSignUpForm,
  validatePassword,
} from '@/lib/schemas';
import { Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react';

export default function SignUpForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<
    'weak' | 'medium' | 'strong' | null
  >(null);

  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setFormData({ ...formData, password });

    if (password) {
      const validation = validatePassword(password);
      setPasswordStrength(validation.strength);
    } else {
      setPasswordStrength(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    // Validate form
    const validation = validateSignUpForm(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message and redirect
      router.push('/sign-up/confirm');
    } catch (error) {
      setErrors({
        submit: 'An error occurred. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrengthColor = (strength: string | null) => {
    switch (strength) {
      case 'weak':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'strong':
        return 'bg-green-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Fields */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
              errors.firstName
                ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            }`}
            placeholder="John"
          />
          {errors.firstName && (
            <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.firstName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
              errors.lastName
                ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            }`}
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
            errors.email
              ? 'border-red-500 focus:ring-1 focus:ring-red-500'
              : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
          }`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.email}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handlePasswordChange}
            className={`w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none transition-colors ${
              errors.password
                ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            }`}
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Password Strength Indicator */}
        {formData.password && (
          <div className="mt-2">
            <div className="flex items-center gap-2 mb-1">
              <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all ${getPasswordStrengthColor(
                    passwordStrength
                  )}`}
                  style={{
                    width:
                      passwordStrength === 'weak'
                        ? '33%'
                        : passwordStrength === 'medium'
                          ? '66%'
                          : '100%',
                  }}
                />
              </div>
              <span className="text-xs font-semibold text-gray-600 capitalize">
                {passwordStrength || 'weak'}
              </span>
            </div>
            <p className="text-xs text-gray-600">
              Must contain uppercase, lowercase, numbers, and 8+ characters
            </p>
          </div>
        )}

        {errors.password && (
          <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.password}
          </p>
        )}
      </div>

      {/* Confirm Password Field */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-900 mb-2">
          Confirm Password
        </label>
        <div className="relative">
          <input
            id="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className={`w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none transition-colors ${
              errors.confirmPassword
                ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            }`}
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            aria-label={
              showConfirmPassword ? 'Hide password' : 'Show password'
            }
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {formData.password === formData.confirmPassword &&
          formData.confirmPassword && (
            <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
              <CheckCircle size={14} />
              Passwords match
            </p>
          )}

        {errors.confirmPassword && (
          <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.confirmPassword}
          </p>
        )}
      </div>

      {/* Terms Checkbox */}
      <div className="flex items-start gap-3">
        <input
          id="agreeToTerms"
          type="checkbox"
          checked={formData.agreeToTerms}
          onChange={(e) =>
            setFormData({ ...formData, agreeToTerms: e.target.checked })
          }
          className="mt-1 w-4 h-4 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
        />
        <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
          I agree to the{' '}
          <Link href="#" className="text-blue-600 hover:underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>
        </label>
      </div>
      {errors.agreeToTerms && (
        <p className="text-sm text-red-600 flex items-center gap-1 -mt-4">
          <AlertCircle size={14} />
          {errors.agreeToTerms}
        </p>
      )}

      {/* Submit Error */}
      {errors.submit && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
          <AlertCircle size={20} />
          {errors.submit}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
      >
        {isLoading ? 'Creating Account...' : 'Create Account'}
      </button>

      {/* Sign In Link */}
      <p className="text-center text-gray-600">
        Already have an account?{' '}
        <Link href="#" className="text-blue-600 font-semibold hover:underline">
          Sign In
        </Link>
      </p>
    </form>
  );
}
