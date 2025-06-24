import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-emerald-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
       
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>Trusted by 10,000+ Event Planners</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Book Amazing
                <span className="text-purple-600 block">Performers</span>
                <span className="text-emerald-600">Effortlessly</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Connect with talented singers, dancers, DJs, and speakers for your next event. 
                Professional artists, verified profiles, seamless booking experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/artists">
                  Explore Artists
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/onboard">Join as Artist</Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="font-semibold text-gray-900">5,000+</div>
                  <div className="text-sm text-gray-600">Active Artists</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-emerald-600" />
                <div>
                  <div className="font-semibold text-gray-900">50,000+</div>
                  <div className="text-sm text-gray-600">Events Booked</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-orange-500" />
                <div>
                  <div className="font-semibold text-gray-900">4.9/5</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional performer on stage"
                className="w-full h-full object-cover"
                height={40}
                width={40}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Premium Quality</div>
                  <div className="text-sm text-gray-600">Verified Artists</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}