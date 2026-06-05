import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <div style={{ padding: '100px 20px', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '6rem', color: 'var(--brand-gold)', fontWeight: '900', lineHeight: '1' }}>404</h1>
      <h2 style={{ fontSize: '2rem', color: 'var(--brand-brown)', marginBottom: '20px' }}>Page Not Found</h2>
      <p style={{ color: '#666', marginBottom: '40px', maxWidth: '400px' }}>
        Oops! The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
      </p>
      <Link to="/">
        <Button>Return to Homepage</Button>
      </Link>
    </div>
  );
};

export default NotFound;
