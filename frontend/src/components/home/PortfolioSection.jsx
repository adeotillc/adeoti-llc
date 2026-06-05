import React from 'react';
import GradientBanner from '../GradientBanner';
import Button from '../Button';
import { Link } from 'react-router-dom';


const PortfolioSection = () => {

  const projects = [
    { id: 1, img: '/images/project_hatel.jpg', title: 'Hatel E-Commerce Platform', category: 'Web Development' },
    { id: 2, img: '/images/project_kuranga.jpg', title: 'Kuranga Campaign Website', category: 'Web Development' },
    { id: 3, img: '/images/project_pepnet.jpg', title: 'PEPNET Branding Project', category: 'Branding' },
    // Add more projects to see the grid expand automatically!
    ];

  return (
    <section style={{ padding: '0 50px', marginBottom: '60px' }}>

      <GradientBanner title="Portfolio Showcase" subtitle="Projects We Have Handled and Delivered" />

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px', 
        justifyContent: 'center' 
      }}>
        {projects.map(p => (
          <div key={p.id} style={{ 
            borderRadius: '12px', 
            overflow: 'hidden', 
            boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
            position: 'relative',
            backgroundColor: 'white' // Fallback color
          }}>
            <img 
              src={p.img} 
              alt={p.title} 
              style={{ 
                width: '100%', 
                height: '280px', // Fixed height ensures the grid looks uniform
                objectFit: 'cover', // Prevents image distortion
                display: 'block' 
              }} 
            />
            {/* A subtle label beneath the image */}
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: 'var(--brand-brown)', fontSize: '1.2rem', marginBottom: '5px' }}>{p.title}</h3>
              <p style={{ color: '#888', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{p.category}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Optional: Centered Call to Action for the portfolio page */}
      {/* <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link to="/portfolio"><Button>View Full Portfolio</Button></Link>
      </div> */}
    </section>


  );
};

export default PortfolioSection;