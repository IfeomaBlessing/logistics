import React from 'react'
import "../about/about.css"
import image1 from '../../assets/images/image1.jpg'
import Testimonial from './Testimonials'
import Box from '../hero/Box';
import serviceData from '../service/serviceData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  return (

    <>
      <div className='about-page margin'id='About'>
        <h2 className='aboutHeader'>Who We Are</h2>

    <section className="aboutBox">
    <div class="col-2">    
      
        <div className="banner">
    <strong>MM&EE Logistics</strong> provides a portfolio of full logistic solutions in Nigeria which includes, 
      but not limited to International and Domestic express delivery, 
      Freight Forwarding, Integrated Logistics Solutions, Information and
       Document Management Solutions, Warehousing, Packaging Services, 
       Food Delivery, Agriculture Logistics and E-commerce Solutions.

</div>                
                          
    </div> 

   <div className="right-about">      
   <img src={image1} alt="image" className="bigImg"/>            
   </div>
    </section>



    <section className="Box">
      <h2 className='box'>Why Choose Us</h2>
 <div className="Box-container">
 {Box.map((x)=> (                
                <div className="Box-content">
                   <FontAwesomeIcon icon={x.icon} className ="icons" />
                  
                   <div className="content">
                   <h2>{x.header}</h2>
                    <p>{x.text}</p>
                   </div>
                  </div>
         ))
        }
 </div>
</section>
    
    </div>
    </>
  )
}

export default About