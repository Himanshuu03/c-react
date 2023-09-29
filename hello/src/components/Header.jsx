import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';
function Header(props) {
  return (
    <div className=''>
        <ul>
            <li><a href='.' className="text-decoration-none">
              <Link
              className="text-light text-decoration-none"
              to="/">
                Home
              </Link>
              </a></li>
            <li>
              <a href='.' className="text-decoration-none">
                <Link 
                className="text-light text-decoration-none"
                to="/about-us">
                Aboutus
                </Link>
                </a>
              </li>
            <li>
              <a href='.' className="text-decoration-none">
                <Link 
                className="text-light text-decoration-none"
                to="/services">
              Services
                </Link>
              </a>
              </li>
            <li><a href='.' className="text-decoration-none">
              <Link 
              className="text-light text-decoration-none"
              to="/faq">
                FAQ
              </Link>
              </a></li>
            <li><a href='.' className="text-decoration-none">
              <Link 
              className="text-light text-decoration-none"
              to="/contact">
              Contactus
              </Link>
              </a></li>
        </ul>
    </div>
  )
}

export default Header