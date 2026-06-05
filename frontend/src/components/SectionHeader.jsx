import React from 'react';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div style={{ textAlign: 'center', margin: '40px 0' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--brand-brown)' }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: '#666', marginTop: '10px' }}>{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;