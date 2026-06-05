import React, { useState } from 'react';
import { API_URL } from '../config';
import Button from '../components/Button';
import GradientBanner from '../components/GradientBanner';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // A simple Regex pattern to verify standard email format (e.g., user@domain.com)
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous errors

    // 1. Frontend Validation
    if (!formData.name.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill out all fields.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // 2. Proceed to Backend Request
    setStatus('loading');
    
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setStatus('error');
        setErrorMessage('Failed to send message from server.');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Network error. Is the backend running?');
    }
  };

  const inputStyle = { width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'Lato', fontSize: '1rem' };

  return (
    <div style={{ padding: '40px 50px', maxWidth: '800px', margin: '0 auto', minHeight: '60vh' }}>
      <GradientBanner title="Contact Us" subtitle="Let's build something amazing together" />
      
      {status === 'success' ? (
        <div style={{ padding: '40px', background: '#d4edda', color: '#155724', borderRadius: '8px', textAlign: 'center', border: '1px solid #c3e6cb' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Message Sent Successfully!</h3>
          <p style={{ marginBottom: '25px' }}>Thank you for reaching out. We have received your message and will get back to you shortly.</p>
          <Button onClick={() => setStatus('idle')}>Send Another Message</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ background: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          {/* Validation Error Display */}
          {errorMessage && (
            <div style={{ padding: '15px', background: '#f8d7da', color: '#721c24', borderRadius: '4px', marginBottom: '20px', border: '1px solid #f5c6cb' }}>
              {errorMessage}
            </div>
          )}

          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px', color: 'var(--brand-brown)' }}>Your Name</label>
          <input type="text" name="name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={inputStyle} placeholder="Jane Doe" />
          
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px', color: 'var(--brand-brown)' }}>Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={inputStyle} placeholder="jane@example.com" />
          
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px', color: 'var(--brand-brown)' }}>How can we help you?</label>
          <textarea name="message" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{...inputStyle, height: '150px', resize: 'vertical'}} placeholder="Describe your project or inquiry..." />
          
          <Button type="submit" style={{ width: '100%', fontSize: '1.1rem', padding: '15px', opacity: status === 'loading' ? 0.7 : 1 }}>
            {status === 'loading' ? 'Sending Message...' : 'Send Message'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default Contact;