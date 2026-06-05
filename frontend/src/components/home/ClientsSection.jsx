import React from 'react';
import GradientBanner from '../GradientBanner';

const ClientsSection = () => {
// Replace these with the actual filenames of the logos in your public/images folder
  const clients = [
    { id: 1, name: 'Hatel Phones & Gadgets', logo: '/images/hatel.jpg' },
    { id: 2, name: 'Kuranga Foundation', logo: '/images/kuranga.jpg' },
    { id: 3, name: 'PEPNET', logo: '/images/pepnet.jpg' },
    { id: 4, name: 'Extreme Classic', logo: '/images/extreme.jpg' },
    { id: 5, name: 'HRi', logo: '/images/hri.png' },
  ];

  return (
    <section style={{ padding: '0 50px 60px', backgroundColor: 'var(--bg-light)' }}>

      <GradientBanner title="Brands We Have Served" subtitle="Brands that Trust Us" />
    {/* Exact text replicated from the 2023 historical design */}


      {/* 
        Using Flexbox here instead of Grid. 
        Why? Because logos often have different widths. Flexbox with 'center' alignment 
        allows them to naturally flow and space themselves evenly, wrapping to a new line 
        only if the screen gets too small.
      */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '40px', // Creates even spacing between the logos
        maxWidth: '1000px',
        margin: '0 auto', // Centers the entire block on ultra-wide screens
        padding: '20px 0'
      }}>
        {clients.map((client) => (
          <img 
            key={client.id}
            src={client.logo} 
            alt={`${client.name} logo`} 
            style={{ 
              maxWidth: '140px', // Restricts massive logos from breaking the layout
              maxHeight: '70px', // Keeps tall logos from looking disproportionate
              objectFit: 'contain', // Ensures the whole logo is visible without cropping
              filter: 'grayscale(100%) opacity(70%)', // Mutes the logos to match the theme
              transition: 'all 0.3s ease', // Smooth animation
              cursor: 'pointer'
            }}
            // The Hover Effect: Removes the grayscale filter to reveal the brand's true colors
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'grayscale(0%) opacity(100%)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'grayscale(100%) opacity(70%)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        ))}
      </div>
    </section>


  );
};

export default ClientsSection;