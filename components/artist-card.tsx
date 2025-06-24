import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, MessageCircle } from 'lucide-react';
import Image from 'next/image';

interface Artist {
  id: number;
  name: string;
  category: string;
  categories: string[];
  bio: string;
  priceRange: string;
  location: string;
  languages: string[];
  image: string;
  rating: number;
  reviews: number;
}

interface ArtistCardProps {
  artist: Artist;
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
      <CardContent className="p-0">
        <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
          <Image
            src={artist.image}
            alt={artist.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            height={400}
            width ={400}
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-white/90 text-gray-900 hover:bg-white/90">
              {artist.category}
            </Badge>
          </div>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            {/* Header */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {artist.name}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{artist.rating}</span>
                  <span>({artist.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{artist.location}</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-gray-600 text-sm line-clamp-3">
              {artist.bio}
            </p>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {artist.categories.map((cat) => (
                <Badge key={cat} variant="secondary" className="text-xs">
                  {cat}
                </Badge>
              ))}
            </div>

            {/* Languages */}
            <div className="text-sm text-gray-600">
              <span className="font-medium">Languages:</span> {artist.languages.join(', ')}
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between pt-4 border-t">
              <div>
                <div className="text-lg font-semibold text-gray-900">
                  {artist.priceRange}
                </div>
                <div className="text-sm text-gray-600">per event</div>
              </div>
              <Button className="shrink-0">
                <MessageCircle className="w-4 h-4 mr-2" />
                Ask for Quote
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}