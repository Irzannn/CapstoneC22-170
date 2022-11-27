import React from 'react';
import { Link } from 'react-router-dom';

function NavBar () {
  return (
    <header>
      <nav className='navbar navbar-default fixed-top navbar-expand-lg'>
        <div className='container-fluid container navbar_container'>
          <Link className="navbar-brand" to="/">Jahitku</Link>
            <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className='navbar-toggler-icon'></span>
            </button>        
          <div className='collapse navbar-collapse' id="basic-navbar-nav">
            <ul className="nav ms-auto navbar-nav">
              <li><Link className="nav-link" to="/">Home</Link></li>
              <li><Link className="nav-link" to="/features">Features</Link></li>
              <li><Link className="nav-link" to="/about">About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
