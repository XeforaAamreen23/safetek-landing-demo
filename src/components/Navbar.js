import React from 'react';
import './Navabar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          <div className="logo">
            <img src="/images/safeteek-logo.svg" alt="Your Logo" />
          </div>
        </Link>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='/' className='nav-links'>
              Home
            </Link>
          </li>
          
          {/* <li className='nav-item'>
            <Link to='/about' className='nav-links'>
              About Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/service-page' className='nav-links'>
            Servicee page
            </Link>
          </li> */}
          {/* <li className='nav-item'><a className='nav-links' href="#Our_Services_offering">Our Offering</a></li> */}
				
          <li className='nav-item'><a className='nav-links' href="#About_Us">About Us</a></li>  

          <li className='nav-item'><a className='nav-links' href="#Our_Services_offering">Services</a></li>				
          
          <li className='nav-item'><a className='nav-links' href="#contained-buttons">Contact</a></li>
			
					
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
