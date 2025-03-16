import { Hero } from '@/components/home/Hero';
import { FeaturedTemplates } from '@/components/home/FeaturedTemplates';
import { StatsBar } from '@/components/home/StatsBar';
import { Testimonials } from '@/components/home/Testimonials';
import { RecentPosts } from '@/components/home/RecentPosts';
import { Newsletter } from '@/components/home/Newsletter';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Templates Section */}
      <FeaturedTemplates />
      
      {/* Statistics Bar */}
      <StatsBar />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Recent Blog Posts */}
      <RecentPosts />
      
      {/* Newsletter Section */}
      <Newsletter />
    </>
  );
}
