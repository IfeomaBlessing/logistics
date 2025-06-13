import React from 'react';
import '../footer/fstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="col">
        <h4>Contact</h4>
        <p>
          <strong>Address</strong>: Whitehouse Marina close, Suite 23, Lagos
        </p>
        <p>
          <strong>Phone</strong>: 012567965, +14386434576
        </p>
        <p>
          <strong>Email</strong>: classicmenwears@gmail.com
        </p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FontAwesomeIcon  />
            <FontAwesomeIcon  />
            <FontAwesomeIcon  />
            <FontAwesomeIcon  />
            <FontAwesomeIcon  />
          </div>
        </div>
      </div>
      <div className="col">
        <h4>About</h4>
        <p>About Us</p>
        <p>Delivery Information</p>
        <p>Terms & Conditions</p>
        
      </div>
      <div className="col">
        <h4>Work Hours</h4>
        <p>Mon - Fri : 8AM - 5PM</p>
        <p>Sat : 9AM - 2PM </p>
        <p>Are you in need of logisitcs services?</p>

        <button>Contact Us</button>
      </div>
      <hr />
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()}, MM & EE Logistics - Support. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;