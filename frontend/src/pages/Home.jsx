import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import PortfolioSection from '../components/home/PortfolioSection';
import TestimonialSection from '../components/home/TestimonialSection';
import BlogPreviewSection from '../components/home/BlogPreviewSection';
import TeamSection from '../components/home/TeamSection';
import Button from '../components/Button';
import CallToActionSection from '../components/home/CallToActionSection';
import ClientsSection from '../components/home/ClientsSection';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <HeroSection />
      
      <ServicesSection />

      <PortfolioSection />

      <TestimonialSection />

      <CallToActionSection />

      <BlogPreviewSection />

      <ClientsSection />


      <TeamSection />

      {/* Final SEO Banner */}
      <section style={{ background: '#8a7d72', color: 'white', textAlign: 'center', padding: '80px 20px', marginTop: '40px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '900' }}>Social Media Marketing Experts in Osun</h2>
      </section>

    </div>
    
  );
};

export default Home;