"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Mic, Users, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-purple-600 rounded-lg">
              <Mic className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Artistly</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/artists" className="text-gray-700 hover:text-purple-600 transition-colors">
              Find Artists
            </Link>
            <Link href="/onboard" className="text-gray-700 hover:text-purple-600 transition-colors">
              Join as Artist
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-purple-600 transition-colors">
              Dashboard
            </Link>
         
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
    
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/artists" 
                className="text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Find Artists
              </Link>
              <Link 
                href="/onboard" 
                className="text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Join as Artist
              </Link>
              <Link 
                href="/dashboard" 
                className="text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Button asChild className="w-full">
                <Link href="/onboard" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}