import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpeg';
import { Link } from 'react-router-dom';

function Navbar() {
  const [activeLink, setActiveLink] = useState('Home'); // Track the active link
  const [sidebarOpen, setSidebarOpen] = useState(false); // Track the sidebar state

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName); // Update the active link
    setSidebarOpen(false); // Close sidebar on link click
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle sidebar visibility
  };

  return (
    <>
      <div className='navbar'>
        <Link to='/'><img className='logo-img' src={logo} alt="logo" /></Link>
        <div className='navbar-center'>
          <Link to='/' onClick={() => handleLinkClick('Home')}>
            <a href="#" className={activeLink === 'Home' ? 'active' : ''}>Home</a>
          </Link>
          <a href="#about" className={activeLink === 'About Us' ? 'active' : ''} onClick={() => handleLinkClick('About Us')}>About Us</a>
          <Link to='/committee' className={activeLink === 'Committee' ? 'active' : ''} onClick={() => handleLinkClick('Committee')}>Committee</Link>
          <Link to='/call-for-papers' className={activeLink === 'Call for papers' ? 'active' : ''} onClick={() => handleLinkClick('Call for papers')}>Call for papers</Link>
          <Link to='/registration' className={activeLink === 'Registration' ? 'active' : ''} onClick={() => handleLinkClick('Registration')}>Registration</Link>
          <Link to='/footer' className={activeLink === 'Contact Us' ? 'active' : ''} onClick={() => handleLinkClick('Contact Us')}>Contact Us</Link>
        </div>
        <div className="navbar-right">
          <button onClick={toggleSidebar}>☰</button> {/* Sidebar button */}
        </div>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className='sidebar'>
          <button className='close-btn' onClick={toggleSidebar}>×</button>
          <Link to='/' onClick={() => handleLinkClick('Home')}>Home</Link>
          <a href="#about" onClick={() => handleLinkClick('About Us')}>About Us</a>
          <Link to='/committee' onClick={() => handleLinkClick('Committee')}>Committee</Link>
          <Link to='/call-for-papers' onClick={() => handleLinkClick('Call for papers')}>Call for papers</Link>
          <Link to='/registration' onClick={() => handleLinkClick('Registration')}>Registration</Link>
          <Link to='/footer' onClick={() => handleLinkClick('Contact Us')}>Contact Us</Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
