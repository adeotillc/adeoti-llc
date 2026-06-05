import React from 'react';
import SectionHeader from '../SectionHeader';

const ServicesSection = () => {
    const cardStyle = {
        background: 'white',
        padding: '40px 30px',
        borderRadius: '8px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        flex: 1, // Allows cards to grow and fill available space equally
        minWidth: '250px',
    };

    return (
        <section style={{ padding: '60px 50px', backgroundColor: 'var(--bg-light)' }}>
            <SectionHeader
                title="How can we help you?"
                subtitle="We offer diverse services tailored to your needs"
            />

            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div style={cardStyle}>
                    <h3 style={{ color: 'var(--brand-brown)', marginBottom: '15px' }}>Design</h3>
                    <p>We help create tangible relationships between brands and users through stunning and creative visual design. Our visual stamp is your world footprint.</p>
                </div>
                <div style={cardStyle}>
                    <h3 style={{ color: 'var(--brand-brown)', marginBottom: '15px' }}>Development</h3>
                    <p>We create user-friendly, modern and responsive websites for mobile screens. We build responsively to optimize function and performance.</p>
                </div>
                <div style={cardStyle}>
                    <h3 style={{ color: 'var(--brand-brown)', marginBottom: '15px' }}>Marketing</h3>
                    <p>We will bring online exposure you need to succeed. We will do social media marketing within your budget.</p>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;