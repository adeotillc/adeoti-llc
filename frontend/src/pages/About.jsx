import React from 'react';
import GradientBanner from '../components/GradientBanner';
import CallToActionSection from '../components/home/CallToActionSection';

const About = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '0 20px',
    lineHeight: '1.9',
    fontSize: '1.15rem',
    color: '#333'
  };

  return (
    <div>
      {/* Added the banner for site-wide consistency */}
      <GradientBanner 
        title="About Adeoti LLC | Expert Digital Solutions in Osun Nigeria" 
        subtitle="Bridging the gap between brilliant ideas and digital reality" 
      />

      <div style={containerStyle}>
        <h2 style={{ color: 'var(--brand-brown)', fontSize: '2.2rem', marginBottom: '20px' }}>Our Mission</h2>
        <p style={{ marginBottom: '30px' }}>
          At Adeoti LLC, we believe that design is not just about how something looks, but how it works. 
          Founded in the heart of Osogbo, we set out to provide businesses in Nigeria with world-class digital 
          experiences that drive growth, efficiency, and real-world results.
        </p>

        <h2 style={{ color: 'var(--brand-brown)', fontSize: '2.2rem', marginBottom: '20px' }}>Why Choose Us?</h2>
        <p style={{ marginBottom: '20px' }}>
          We don't just build websites; we build partnerships. Our process is rooted in data-driven 
          strategies and human-centric design. We understand the unique challenges of the local market 
          while maintaining global standards of excellence.
        </p>
        
        <ul style={{ marginBottom: '40px', paddingLeft: '20px' }}>
          <li style={{ marginBottom: '10px' }}><strong>Local Expertise:</strong> Deep understanding of the Osun digital landscape.</li>
          <li style={{ marginBottom: '10px' }}><strong>Cutting Edge Tech:</strong> Modern stack (React, Node, MongoDB) for scalable products.</li>
          <li style={{ marginBottom: '10px' }}><strong>Results-Oriented:</strong> We focus on your ROI, not just lines of code.</li>
        </ul>

        <h2 style={{ color: 'var(--brand-brown)', fontSize: '2.2rem', marginBottom: '20px' }}>Our Vision</h2>
        <p style={{ marginBottom: '40px' }}>
          To be the leading digital agency in Africa, empowering SMEs and enterprises to scale their 
          reach through innovative technology and creative design.
        </p>
      </div>

      <CallToActionSection />
    </div>
  );
};

export default About;