import React from 'react';
import '../footer/fstyle.css';
import { } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <section className='flex section-p' style={{background:"lightBlue"}}>


      <div className="col">
        <h4>LOGO HERE</h4>
      </div>

      <div className="col">
        <h4>MM&EE Logistics Ltd</h4>
        <p>Ajose Adeogun street, Victoria island, Lagos, Nigeria</p>
        <p>MM&EE@email.com</p>
      </div>

      <div className="col">
        <h4>Business Hours</h4>
        <p>Mon - Fri : 8AM - 5PM</p>
        <p>Sat : 9AM - 2PM </p>
        </div>


         <div className='col'>
        <button className='button'><a href="#">Contact Us</a></button>
      </div>

      </section>
   

       <section style={{background:"green"}}>
       <div className="copyright">
        <p>&copy; {new Date().getFullYear()}, MM & EE Logistics - Support. All rights reserved.</p>
      </div>
       </section>
    
    </footer>
  );
};

export default Footer;