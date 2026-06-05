import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const Portfolio = () => {
  return (
    <div>
      <SectionHeader title="Welcome to Adeoti LLC" subtitle="Let's Solve Your Design and Marketing Problems" />
      <div style={{ textAlign: 'center' }}>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Portfolio;