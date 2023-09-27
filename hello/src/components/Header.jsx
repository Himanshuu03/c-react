import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';
function Header(props) {
  return (
    <div className=''>
        <ul>
            <li><a href='.'>
              <Link to="/">
                Home
              </Link>
              </a></li>
            <li>
              <a href='.'>
                <Link to="/about-us">
                Aboutus
                </Link>
                </a>
              </li>
            <li><a href='.'>Services</a></li>
            <li><a href='.'>FAQ</a></li>
            <li><a href='.'>Contactus</a></li>
        </ul>
    </div>
  )
}

export default Header