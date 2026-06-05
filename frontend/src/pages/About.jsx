import React from 'react';
import GradientBanner from '../components/GradientBanner';
import CallToActionSection from '../components/home/CallToActionSection';
import TeamSection from '../components/home/TeamSection'; // Importing the team!

const About = () => {
  const pageContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 50px 60px',
    lineHeight: '1.8',
    color: 'var(--text-dark)'
  };

  const values = [
    { id: 1, title: 'Local Expertise', desc: 'Deep understanding of the Osun digital landscape and local consumer behavior.', icon: '🌍' },
    { id: 2, title: 'Cutting Edge Tech', desc: 'We utilize a modern stack (React, Node, MongoDB) to build scalable, robust products.', icon: '💻' },
    { id: 3, title: 'Results-Oriented', desc: 'We focus entirely on your ROI, conversion rates, and growth—not just lines of code.', icon: '📈' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', minHeight: '100vh' }}>
      <GradientBanner 
        title="About Adeoti LLC" 
        subtitle="Bridging the gap between brilliant ideas and digital reality in Osogbo" 
      />

      <div style={pageContainerStyle}>
        
        {/* MISSION & VISION - 2 Column Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '40px', 
          marginBottom: '80px' 
        }}>
          {/* Mission Card (White) */}
          <div style={{ background: 'white', padding: '50px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: 'var(--brand-brown)', fontSize: '2.2rem', marginBottom: '20px', fontWeight: '900' }}>
              Our Mission
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#555' }}>
              At Adeoti LLC, we believe that design is not just about how something looks, but how it works. 
              Founded in the heart of Osogbo, we set out to provide businesses in Nigeria with world-class digital 
              experiences that drive growth, efficiency, and real-world results.
            </p>
          </div>

          {/* Vision Card (Gradient) */}
          <div style={{ background: 'var(--brand-gradient)', color: 'white', padding: '50px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: 'white', fontSize: '2.2rem', marginBottom: '20px', fontWeight: '900' }}>
              Our Vision
            </h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
              To be the leading digital agency in Africa, empowering SMEs and enterprises to scale their 
              reach through innovative technology, creative design, and data-driven marketing strategies.
            </p>
          </div>
        </div>

        {/* WHY CHOOSE US - 3 Column Grid */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ color: 'var(--brand-brown)', fontSize: '2.5rem', fontWeight: '900', marginBottom: '15px' }}>
            Why Choose Us?
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: '#666' }}>
            We don't just build websites; we build partnerships. Our process is rooted in human-centric design.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '30px',
          marginBottom: '60px'
        }}>
          {values.map(val => (
            <div key={val.id} style={{ 
              background: 'white', 
              padding: '40px 30px', 
              borderRadius: '12px', 
              boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{val.icon}</div>
              <h3 style={{ color: 'var(--brand-brown)', fontSize: '1.3rem', marginBottom: '15px' }}>{val.title}</h3>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TEAM SECTION INJECTED HERE */}
      <TeamSection />

      {/* CALL TO ACTION */}
      <CallToActionSection />
    </div>
  );
};

export default About;