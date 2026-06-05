import React from 'react';

const Button = ({ children, onClick, type = "button" }) => {
  const buttonStyle = {
    background: 'var(--brand-gradient)',
    color: 'white',
    padding: '10px 24px',
    border: 'none',
    borderRadius: '4px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease',
  };

  return (
    <button style={buttonStyle} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;