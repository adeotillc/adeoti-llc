import React from 'react';
import GradientBanner from '../GradientBanner';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Moses Abolade',
      role: 'CEO, PEPNET',
      text: 'Adeoti LLC transformed our online presence. Their design team is top-notch and delivered a brand identity that perfectly captures our mission. Our conversion rates have increased significantly since the redesign.',
      img: '/images/moses.jpg'
    },
    {
      id: 2,
      name: 'Olawale Afolabi',
      role: 'Marketing Director',
      text: 'The marketing strategies provided by the team resulted in a 40% increase in our ROI. They are highly professional, data-driven, and incredibly creative. They understood our vision perfectly.',
      img: '/images/olawale.jpg'
    },
    {
      id: 3,
      name: 'Hakeem Kuranga',
      role: 'Founder, Kuranga Hakeem Foundation',
      text: 'Working with Adeoti LLC was a seamless experience from start to finish. They built a robust website that handles our heavy traffic flawlessly. I highly recommend their development services.',
      img: '/images/kuranga.jpg'
    }
  ];

// An inline component to generate the 5 gold stars dynamically
  const StarRating = () => (
    <div style={{ display: 'flex', gap: '4px', marginBottom: '15px', color: '#FFD700' }}>
      {[...Array(5)].map((_, index) => (
        <svg key={index} width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192z"/>
        </svg>
      ))}
    </div>

);

  return (
    <section style={{ padding: '0 50px 60px', backgroundColor: 'var(--bg-light)' }}>


      {/* 
        Using CSS Grid to ensure the cards stretch evenly. 
        minmax(300px, 1fr) ensures they never get too squished on mobile devices.
      */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {testimonials.map((t) => (
          <div key={t.id} style={{ 
            background: 'white', 
            padding: '35px 30px', 
            borderRadius: '12px', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)', 
            display: 'flex', 
            flexDirection: 'column' 
          }}>
            <StarRating />
            
            {/* The flex: 1 on the paragraph pushes the profile block to the bottom even if quotes are different lengths */}
            <p style={{ fontStyle: 'normal', marginBottom: '30px', color: '#666', lineHeight: '1.8', flex: 1 }}>
              "{t.text}"
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
              <img 
                src={t.img} 
                alt={t.name} 
                // Production safeguard: If the image is missing, show a generated avatar
                onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${t.name}&background=cda274&color=fff`; }}
                style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} 
              />
              <div>
                <h4 style={{ color: 'var(--brand-brown)', margin: 0, fontSize: '1.1rem' }}>{t.name}</h4>
                <span style={{ fontSize: '0.85rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {t.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>


  );
};

export default TestimonialsSection;