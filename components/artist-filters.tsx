"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, X } from 'lucide-react';

interface FilterState {
  categories: string[];
  locations: string[];
  priceRanges: string[];
}

interface ArtistFiltersProps {
  onFilterChange: (filters: FilterState) => void;
  totalResults: number;
}

const categories = ['Singer', 'Dancer', 'DJ', 'Speaker'];
const locations = ['Los Angeles, CA', 'Miami, FL', 'New York, NY', 'San Francisco, CA', 'Nashville, TN', 'Austin, TX', 'Chicago, IL', 'Seattle, WA'];
const priceRanges = ['$0-500', '$500-1000', '$1000-2000', '$2000+'];

export default function ArtistFilters({ onFilterChange, totalResults }: ArtistFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    locations: [],
    priceRanges: []
  });
  const [isOpen, setIsOpen] = useState(false);

  const updateFilters = (key: keyof FilterState, value: string, checked: boolean) => {
    const newFilters = { ...filters };
    if (checked) {
      newFilters[key] = [...newFilters[key], value];
    } else {
      newFilters[key] = newFilters[key].filter(item => item !== value);
    }
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters = { categories: [], locations: [], priceRanges: [] };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters = filters.categories.length > 0 || filters.locations.length > 0 || filters.priceRanges.length > 0;

  return (
    <div className="space-y-4">
     
      <div className="lg:hidden">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full justify-center"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filters {hasActiveFilters && `(${filters.categories.length + filters.locations.length + filters.priceRanges.length})`}
        </Button>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {totalResults} artists found
        </p>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            <X className="w-4 h-4 mr-1" />
            Clear all
          </Button>
        )}
      </div>

      <Card className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Filters</h3>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>  
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-900">Category</Label>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category}`}
                      checked={filters.categories.includes(category)}
                      onCheckedChange={(checked) => 
                        updateFilters('categories', category, !!checked)
                      }
                    />
                    <Label
                      htmlFor={`category-${category}`}
                      className="text-sm text-gray-700 cursor-pointer"
                    >
                      {category} 
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-900">Location</Label>
              <div className="space-y-2">
                {locations.map((location) => (
                  <div key={location} className="flex items-center space-x-2">
                    <Checkbox
                      id={`location-${location}`}
                      checked={filters.locations.includes(location)}
                      onCheckedChange={(checked) => 
                        updateFilters('locations', location, !!checked)
                      }
                    />
                    <Label
                      htmlFor={`location-${location}`}
                      className="text-sm text-gray-700 cursor-pointer"
                    >
                      {location}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-900">Price Range</Label>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <div key={range} className="flex items-center space-x-2">
                    <Checkbox
                      id={`price-${range}`}
                      checked={filters.priceRanges.includes(range)}
                      onCheckedChange={(checked) => 
                        updateFilters('priceRanges', range, !!checked)
                      }
                    />
                    <Label
                      htmlFor={`price-${range}`}
                      className="text-sm text-gray-700 cursor-pointer"
                    >
                      {range}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}