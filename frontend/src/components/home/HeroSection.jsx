import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

// 1. IMPORT THE IMAGE HERE
import heroBgImage from '../../assets/hero.jpg'; 

const HeroSection = () => {
  const heroStyle = {
    // 2. INJECT IT INTO THE BACKGROUND URL
    background: `linear-gradient(to right, rgba(138, 125, 114, 0.95), rgba(93, 64, 55, 0.85)), url(${heroBgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '120px 50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '75vh',
  };

  return (
    <section style={heroStyle}>
      <p style={{ textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>
        What we are known for
      </p>
      <h1 style={{ fontSize: '3.5rem', fontWeight: '900', maxWidth: '600px', lineHeight: '1.2', marginBottom: '20px' }}>
        Let's Solve Your Design and Marketing Problems with Our Expertise Skills.
      </h1>
      <p style={{ maxWidth: '500px', marginBottom: '30px', opacity: 0.9 }}>
        A solid creative agency that builds exceptional brands, applications, marketing strategies, and digital experiences.
      </p>
      <Button>Explore</Button>
    </section>
  );
};

export default HeroSection;