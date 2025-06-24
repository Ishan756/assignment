import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, Music, User, Users } from 'lucide-react';
import Image from 'next/image';

const categories = [
  {
    id: 'singers',
    name: 'Singers',
    description: 'Professional vocalists for all occasions',
    icon: Mic,
    count: '2,500+',
    color: 'bg-purple-100 text-purple-600',
    image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'dancers',
    name: 'Dancers',
    description: 'Contemporary and classical performers',
    icon: Users,
    count: '1,800+',
    color: 'bg-emerald-100 text-emerald-600',
    image: 'https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'speakers',
    name: 'Speakers',
    description: 'Keynote and motivational speakers',
    icon: User,
    count: '800+',
    color: 'bg-orange-100 text-orange-600',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'djs',
    name: 'DJs',
    description: 'Electronic music and event specialists',
    icon: Music,
    count: '1,200+',
    color: 'bg-blue-100 text-blue-600',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export default function CategoryCards() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Find Artists by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through our carefully curated selection of professional performers
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.id} href={`/artists?category=${category.name}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                      <Image
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        height={70}
                        width={0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-sm font-medium">{category.count} Artists</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${category.color}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {category.name}
                        </h3>
                      </div>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}