import React from 'react';
import '../footer/fstyle.css';
import { } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer>
      <section className='flex section-p'>


      <div className="col">
               <img src={logo} alt='logo' style={{width:"150px", height:""}}/> 
      </div>

      <div className="col">
        <h4>Global Logistics Ltd</h4>
        <p>Arteta court, island</p>
        <p>global@gmail.com</p>
      </div>

      <div className="col">
        <h4>Business Hours</h4>
        <p>Mon - Fri : 8AM - 5PM</p>
        <p>Sat : 9AM - 2PM </p>
        </div>


         <div className='col'>
         <a href="tel:+2347033827430" className="button">Contact Us</a>
      </div>

      </section>
   

       <section className='footer'>
       <div className="copyright">
        <p>&copy; Global Logistics - Support. All rights reserved.</p>
      </div>
       </section>
    
    </footer>
  );
};

export default Footer;