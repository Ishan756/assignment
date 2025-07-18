import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import CategoryCards from '@/components/category-cards';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CategoryCards />
      <Footer/>
    </main>
  );
}