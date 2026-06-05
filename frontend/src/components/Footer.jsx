import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: '#f9f9f9', padding: '40px 50px', borderTop: '1px solid #eee', textAlign: 'center' }}>
      <img 
        src="/images/logo.png" 
        alt="Adeoti LLC Logo" 
        style={{ height: '40px', width: 'auto', marginBottom: '20px', opacity: 0.8 }} 
      />
      <p style={{ color: '#666' }}>&copy; {new Date().getFullYear()} Adeoti LLC. All rights reserved.</p>
    </footer>
  );
};

export default Footer;