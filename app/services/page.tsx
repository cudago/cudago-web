'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { SERVICES_DATA, Service } from '@/lib/services';
import { SERVICE_CATEGORIES } from '@/lib/constants';
import { Search, Filter } from 'lucide-react';

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'rating' | 'price-low' | 'price-high'>(
    'rating'
  );

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let results: Service[] = SERVICES_DATA;

    // Filter by category
    if (selectedCategory !== 'all') {
      results = results.filter((s) => s.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.description.toLowerCase().includes(query)
      );
    }

    // Sort
    if (sortBy === 'rating') {
      results.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'price-low') {
      results.sort((a, b) => a.priceRange.min - b.priceRange.min);
    } else if (sortBy === 'price-high') {
      results.sort((a, b) => b.priceRange.max - a.priceRange.max);
    }

    return results;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <div className="bg-gradient-to-b from-blue-50 to-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Browse Services
            </h1>
            <p className="text-xl text-gray-600">
              Find trusted professionals for any service you need
            </p>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-8 sticky top-16 z-40">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6 flex gap-2">
              <div className="flex-1 relative">
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Filters Row */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Category Filter */}
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                >
                  <option value="all">All Categories</option>
                  {SERVICE_CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Filter */}
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(
                      e.target.value as 'rating' | 'price-low' | 'price-high'
                    )
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                >
                  <option value="rating">Highest Rating</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Results Info */}
            <div className="mb-8 flex items-center gap-2 text-gray-600">
              <Filter size={20} />
              <span>
                Showing {filteredServices.length} service
                {filteredServices.length !== 1 ? 's' : ''}
              </span>
            </div>

            {/* Services Grid */}
            {filteredServices.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  No services found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
