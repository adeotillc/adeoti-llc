import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button'; // Ensure this path correctly points to your Button component

const CallToActionSection = () => {
    return (
        <section style={{
            padding: '80px 50px',
            textAlign: 'center',
            backgroundColor: 'white',
            boxShadow: '0 10px 30px rgba(0,0,0,0.03)', // A very soft shadow to lift it off the background
            margin: '60px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
            }}>
            <h2 style={{
            color: 'var(--brand-brown)',
            fontSize: 'clamp(2rem, 4vw, 2.5rem)', // Fluid typography: scales dynamically based on screen size
            fontWeight: '900',
            marginBottom: '15px'
            }}>
            Let's take your design project far
            </h2>

            <p style={{
                color: '#666',
                fontSize: '1.1rem',
                maxWidth: '600px',
                marginBottom: '35px',
                lineHeight: '1.6'
            }}>
                Ready to elevate your brand? Partner with our expert team to build digital experiences that drive real growth.
            </p>
            
            {/* 
                Using React Router's Link instead of a standard <a> tag prevents 
                the page from reloading, keeping the SPA (Single Page Application) fast.
            */}
            <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Button style={{ padding: '15px 40px', fontSize: '1.1rem' }}>Contact Us</Button>
            </Link>
        </section>


    );
};

export default CallToActionSection;