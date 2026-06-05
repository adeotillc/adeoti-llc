import React from 'react';

const GradientBanner = ({ title, subtitle }) => {
  const bannerStyle = {
    background: 'var(--brand-gradient)',
    color: 'white',
    padding: '30px 20px',
    borderRadius: '40px', // Creates the pill/curved shape seen in the design
    textAlign: 'center',
    margin: '60px auto 40px',
    maxWidth: '900px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  };

  return (
    <div style={bannerStyle}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: '900' }}>{title}</h2>
      {subtitle && <p style={{ marginTop: '10px', fontSize: '1rem' }}>{subtitle}</p>}
    </div>
  );
};

export default GradientBanner;