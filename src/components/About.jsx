import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <nav className="nav">
        <NavLink to="/about" activeClassName="active">
          <button type="button" aria-label="About Us">About Us</button>
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          <button type="button" aria-label="Contact Us">Contact Us</button>
        </NavLink>
        <NavLink to="/privacy-policy" activeClassName="active">
          <button type="button" aria-label="Privacy Policy">Privacy Policy</button>
        </NavLink>
        <NavLink to="/terms-conditions" activeClassName="active">
          <button type="button" aria-label="Terms and Conditions">Terms and Conditions</button>
        </NavLink>
        <NavLink to="/products" activeClassName="active">
          <button type="button" aria-label="Products">Products</button>
        </NavLink>
      </nav>
      <main>
      
      </main>
    </div>
  );
};

export default About;
