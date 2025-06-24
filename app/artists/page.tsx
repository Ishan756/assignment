"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/navbar';
import ArtistCard from '@/components/artist-card';
import ArtistFilters from '@/components/artist-filters';
import artistsData from '@/data/artists.json';

interface FilterState {
  categories: string[];
  locations: string[];
  priceRanges: string[];
}

export default function ArtistsPage() {
  const searchParams = useSearchParams();
  const [filteredArtists, setFilteredArtists] = useState(artistsData);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    locations: [],
    priceRanges: []
  });

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters(prev => ({
        ...prev,
        categories: [category]
      }));
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = artistsData;

    if (filters.categories.length > 0) {
      filtered = filtered.filter(artist => 
        filters.categories.some(cat => artist.categories.includes(cat))
      );
    }

    if (filters.locations.length > 0) {
      filtered = filtered.filter(artist => 
        filters.locations.includes(artist.location)
      );
    }

    if (filters.priceRanges.length > 0) {
      filtered = filtered.filter(artist => {
        return filters.priceRanges.some(range => {
          const [minStr, maxStr] = range.replace('$', '').split('-');
          const min = parseInt(minStr);
          const max = maxStr === '+' ? Infinity : parseInt(maxStr);
          
          const artistRange = artist.priceRange.replace('$', '').split('-');
          const artistMin = parseInt(artistRange[0]);
          const artistMax = parseInt(artistRange[1]);
          
          return (artistMin >= min && artistMin <= max) || 
                 (artistMax >= min && artistMax <= max) ||
                 (artistMin <= min && artistMax >= max);
        });
      });
    }

    setFilteredArtists(filtered);
  }, [filters]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Artist
          </h1>
          <p className="text-xl text-gray-600">
            Browse through our curated selection of professional performers
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
       
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <ArtistFilters 
              onFilterChange={handleFilterChange}
              totalResults={filteredArtists.length}
            />
          </div>

          <div className="lg:col-span-3">
            {filteredArtists.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredArtists.map((artist) => (
                  <ArtistCard key={artist.id} artist={artist} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.816-6.25-2.177C4.47 12.5 4 11.79 4 11V6a8.01 8.01 0 018-8c4.418 0 8 3.582 8 8v5c0 .79-.47 1.5-1.75 1.823A7.962 7.962 0 0112 15z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No artists found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}