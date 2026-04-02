import { Service } from '@/lib/services';
import { Star, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-card transition-all duration-300 flex flex-col h-full">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center text-4xl">
        📦
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 flex-1">
          {service.description}
        </p>

        {/* Stats */}
        <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
          {/* Price Range */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Price Range</span>
            <span className="font-bold text-gray-900">
              ${service.priceRange.min} - ${service.priceRange.max}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i < Math.floor(service.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {service.rating} ({service.reviewCount} reviews)
            </span>
          </div>

          {/* Professionals */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users size={16} />
            <span>{service.professionals} professionals</span>
          </div>
        </div>

        {/* Verification Badge & CTA */}
        <div className="flex items-center justify-between">
          {service.verified && (
            <div className="flex items-center gap-1 text-green-600 text-sm font-semibold">
              <CheckCircle size={16} />
              Verified
            </div>
          )}
          <Link
            href={`/services/${service.id}`}
            className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Book Now →
          </Link>
        </div>
      </div>
    </div>
  );
}
