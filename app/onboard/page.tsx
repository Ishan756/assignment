"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { CheckCircle, Upload, User, MapPin, DollarSign, Globe } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  bio: z.string().min(50, 'Bio must be at least 50 characters'),
  categories: z.array(z.string()).min(1, 'Select at least one category'),
  languages: z.array(z.string()).min(1, 'Select at least one language'),
  feeRange: z.string().min(1, 'Select a fee range'),
  location: z.string().min(2, 'Location is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
});

type FormData = z.infer<typeof formSchema>;

const categories = ['Singer', 'Dancer', 'DJ', 'Speaker', 'Songwriter', 'Guitarist', 'Music Producer', 'Choreographer', 'Performance Artist', 'Workshop Facilitator', 'Author', 'Event Coordinator'];
const languages = ['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Mandarin', 'Japanese', 'Korean', 'Arabic', 'Russian', 'Hindi'];
const feeRanges = ['$200-500', '$500-1000', '$1000-2000', '$2000-5000', '$5000+'];

export default function OnboardPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      bio: '',
      categories: [],
      languages: [],
      feeRange: '',
      location: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = (data: FormData) => {
  
    console.log('Form submitted:', { ...data, categories: selectedCategories, languages: selectedLanguages });
    setIsSubmitted(true);
    
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    const updated = checked 
      ? [...selectedCategories, category]
      : selectedCategories.filter(c => c !== category);
    setSelectedCategories(updated);
    form.setValue('categories', updated);
  };

  const handleLanguageChange = (language: string, checked: boolean) => {
    const updated = checked 
      ? [...selectedLanguages, language]
      : selectedLanguages.filter(l => l !== language);
    setSelectedLanguages(updated);
    form.setValue('languages', updated);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Card className="text-center">
            <CardContent className="pt-8 pb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Application Submitted Successfully!
              </h1>
              <p className="text-gray-600 mb-8">
                Thank you for joining Artistly! We&apos;ll review your application and get back to you within 2-3 business days.
              </p>
              <div className="space-y-4">
                <Button asChild className="w-full sm:w-auto">
                  <a href="/">Return to Homepage</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Join as an Artist
          </h1>
          <p className="text-xl text-gray-600">
            Create your profile and start connecting with event planners
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Basic Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input placeholder="City, State" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Professional Bio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your experience, style, and what makes you unique as a performer..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
          
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Categories (Select all that apply)</Label>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) => handleCategoryChange(category, !!checked)}
                        />
                        <Label htmlFor={`category-${category}`} className="text-sm cursor-pointer">
                          {category} 
                        </Label>
                      </div>
                    ))}
                  </div>
                  {form.formState.errors.categories && (
                    <p className="text-sm text-red-600">{form.formState.errors.categories.message}</p>
                  )}
                </div>

            
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Languages Spoken</Label>
                  <div className="grid sm:grid-cols-4 gap-3">
                    {languages.map((language) => (
                      <div key={language} className="flex items-center space-x-2">
                        <Checkbox
                          id={`language-${language}`}
                          checked={selectedLanguages.includes(language)}
                          onCheckedChange={(checked) => handleLanguageChange(language, !!checked)}
                        />
                        <Label htmlFor={`language-${language}`} className="text-sm cursor-pointer">
                          {language}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {form.formState.errors.languages && (
                    <p className="text-sm text-red-600">{form.formState.errors.languages.message}</p>
                  )}
                </div>

                <FormField
                  control={form.control}
                  name="feeRange"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fee Range per Event</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your fee range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {feeRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Profile Image (Optional)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    Drag and drop your profile image here, or click to browse
                  </p>
                  <p className="text-xs text-gray-500">
                    PNG, JPG up to 5MB
                  </p>
                  <Button type="button" variant="outline" className="mt-4">
                    Choose File
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button type="submit" size="lg" className="w-full sm:w-auto px-8">
                Submit Application
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}