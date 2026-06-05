import React from 'react';
import GradientBanner from '../GradientBanner';

const TeamSection = () => {
// Replace the 'img' paths with the actual filenames of the photos in your public/images folder
const teamMembers = [
  {
    id: 1,
    name: 'Lukman Adeoti',
    role: 'Founder & CEO',
    img: '/images/lukman.jpg', // Ensure this exists in your public folder
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: 2,
    name: 'Rukayat Adekola',
    role: 'Head of Marketing',
    img: '/images/rukayat.jpg',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: 3,
    name: 'Abiodun Adebisi',
    role: 'Head of Operations',
    img: '/images/abiodun.jpg',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: 4,
    name: 'Samuel Idowu',
    role: 'Marketing Strategist',
    img: '/images/samuel.jpg',
    socials: { linkedin: '#', twitter: '#' }
  }
  ];


// A tiny reusable component for the social icons to keep the main code clean
const SocialIcon = ({ href, type }) => {
  const isLinkedIn = type === 'linkedin';

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ 
        color: 'var(--brand-gold)', 
        display: 'inline-flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: '#f9f9f9',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => { 
        e.currentTarget.style.backgroundColor = 'var(--brand-gold)'; 
        e.currentTarget.style.color = 'white'; 
      }}
      onMouseLeave={(e) => { 
        e.currentTarget.style.backgroundColor = '#f9f9f9'; 
        e.currentTarget.style.color = 'var(--brand-gold)'; 
      }}
    >
      {isLinkedIn ? (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ) : (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      )}
    </a>
  );


  };

return (
  <section style={{ padding: '0 50px 60px' }}>

    <GradientBanner title="Our Wonderful Team" subtitle="We are Here to Serve You Better" />


    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
      {teamMembers.map((member) => (
        <div key={member.id} style={{ 
          background: 'white', 
          borderRadius: '12px', 
          overflow: 'hidden', 
          boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* 1. The Headshot */}
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img 
              src={member.img} 
              alt={member.name} 
              onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=cda274&color=fff&size=250`; }}
              style={{ 
                width: '100%', 
                height: '300px', 
                objectFit: 'cover', 
                display: 'block' 
              }} 
            />
          </div>

          {/* 2. The Content (Name, Role, Socials) */}
          <div style={{ padding: '25px 20px' }}>
            <h3 style={{ color: 'var(--brand-brown)', fontSize: '1.4rem', marginBottom: '5px' }}>{member.name}</h3>
            <p style={{ color: '#888', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
              {member.role}
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
              {member.socials.linkedin && <SocialIcon href={member.socials.linkedin} type="linkedin" />}
              {member.socials.twitter && <SocialIcon href={member.socials.twitter} type="twitter" />}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>


  );
};

export default TeamSection;