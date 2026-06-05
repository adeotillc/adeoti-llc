import React from 'react';
import GradientBanner from '../components/GradientBanner';
import CallToActionSection from '../components/home/CallToActionSection';

const Portfolio = () => {
  // Extended array of projects for the dedicated portfolio page
  // Replace these Unsplash URLs with your local '/images/project-name.jpg' paths later!
  const projects = [
    { id: 1, img: '/images/project_hatel.jpg', title: 'Hatel E-Commerce Platform', category: 'Web Development' },
    { id: 2, img: '/images/project_kuranga.jpg', title: 'Kuranga Campaign Website', category: 'Web Development' },
    { id: 3, img: '/images/project_pepnet.jpg', title: 'PEPNET Branding Project', category: 'Branding' },{ id: 4, img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80', title: 'University Portal System', category: 'Web Application' },
  ];

  return (
    <div style={{ paddingBottom: '60px' }}>
      <div style={{ padding: '0 50px' }}>
        <GradientBanner 
          title="Our Portfolio" 
          subtitle="A showcase of our recent digital transformations and creative projects" 
        />

        {/* 
          CSS GRID: repeat(auto-fit, minmax(320px, 1fr)) 
          This forces columns to be at least 320px wide. If there's extra space, it divides it equally.
          If the screen shrinks below 320px, it perfectly stacks them in 1 column. 
        */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '40px', 
          maxWidth: '1200px', 
          margin: '0 auto 60px' 
        }}>
          {projects.map(p => (
            <div 
              key={p.id} 
              style={{ 
                borderRadius: '12px', 
                overflow: 'hidden', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                backgroundColor: 'white',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              // Inline hover effects!
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
              }}
            >
              <img 
                src={p.img} 
                alt={p.title} 
                style={{ 
                  width: '100%', 
                  height: '250px', 
                  objectFit: 'cover', 
                  display: 'block' 
                }} 
              />
              <div style={{ padding: '25px' }}>
                <p style={{ 
                  color: 'var(--brand-gold)', 
                  fontSize: '0.85rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px', 
                  marginBottom: '8px', 
                  fontWeight: 'bold' 
                }}>
                  {p.category}
                </p>
                <h3 style={{ color: 'var(--brand-brown)', fontSize: '1.4rem', marginBottom: '0' }}>
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Convert impressed visitors into leads right at the bottom! */}
      <CallToActionSection />
    </div>
  );
};

export default Portfolio;