import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Used to highlight the active link

  // Helper function to close menu when a link is clicked on mobile
  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* 
        Injecting scoped styles for media queries. 
        This keeps our component completely self-contained!
      */}
      <style>{`
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 50px;
          background-color: #ffffff;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .nav-logo {
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--brand-brown);
          text-decoration: none;
          letter-spacing: -0.5px;
        }

        .desktop-menu {
          display: flex;
          gap: 30px;
          list-style: none;
          align-items: center;
          margin: 0;
        }

        .nav-link {
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-dark);
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: var(--brand-gold);
        }

        .nav-link.active {
          color: var(--brand-gold);
        }

        .hamburger-btn {
          display: none;
          background: none;
          border: none;
          color: var(--brand-brown);
          cursor: pointer;
          padding: 5px;
        }

        .mobile-menu {
          display: none;
        }

        /* --- MOBILE RESPONSIVENESS --- */
        @media (max-width: 768px) {
          .navbar-container {
            padding: 15px 25px;
          }
          
          .desktop-menu {
            display: none; /* Hide desktop links on mobile */
          }

          .hamburger-btn {
            display: block; /* Show hamburger button on mobile */
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #ffffff;
            box-shadow: 0 10px 15px rgba(0,0,0,0.05);
            padding: 20px;
            list-style: none;
            gap: 20px;
            text-align: center;
            border-top: 1px solid #f0f0f0;
          }
        }
      `}</style>

      <nav className="navbar-container">
        {/* Logo Section */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          {/* Replace text with your logo image */}
          <img 
            src="/images/logo.png" 
            alt="Adeoti LLC Logo" 
            style={{ height: '50px', width: 'auto', objectFit: 'contain' }} 
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="desktop-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                style={link.special ? { color: 'var(--brand-gold)', border: '2px solid var(--brand-gold)', padding: '5px 15px', borderRadius: '20px' } : {}}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button 
          className="hamburger-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {/* SVG Hamburger Icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              // X icon when open
              <><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></>
            ) : (
              // Three lines when closed
              <><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></>
            )}
          </svg>
        </button>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <ul className="mobile-menu">
            {navLinks.map((link) => (
              <li key={`mobile-${link.name}`}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={closeMenu}
                  style={link.special ? { color: 'var(--brand-gold)', fontWeight: '900' } : {}}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;