import React, {useEffect, useState} from 'react'
import heroData from './heroData'
import '../hero/herostyle.css'
import serviceData from '../service/serviceData';
import Testimonial from '../about/Testimonials';
import Box from '../hero/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import image1 from '../../assets/images/image1.jpg'



const Hero = () => {
    const [currentSlide, setCurrentSlide] =useState(0)
    const slideLength =heroData.length
    let scrollSlide = true;
     let slideInterval;

     function scroll(){
       slideInterval = setInterval(nextSlide, 5000)
     }

     useEffect(()=>{
      if(scrollSlide){
        scroll()
      }
       return ()=>clearInterval(slideInterval)
   }, [currentSlide])

   const nextSlide=()=>{
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 :
        currentSlide + 1)
   }
   const prevSlide=()=>{
    setCurrentSlide(currentSlide === 0 ? slideLength - 1:
        currentSlide - 1)
   }



    useEffect(()=>{
       setCurrentSlide(0)
    }, [])

  return (
    <div className='homeContainer'>
    <section className='heroSection'id='Home'>
     <div className="heroWrapper">

     {heroData.map((data,index)=>(
       <div className={index === currentSlide ? "heroSlide current" :"heroSlide"}  key={index}>
           
           {index === currentSlide && (
                <>
                  <img className='bgImages' src={data.bgImage} alt={data.alt} />
                  <div className="hero-overlay">
                  <div className="hero-content">
                  <h1>{data.heroHeader}</h1>
                  <p>{data.heroText}</p>
                  <div className="btn">
                  <button className='button'>Contact Us</button>
                  </div>
                  </div>
                  </div>
                  </>
                         
           )}
       
        </div>
))}

     <div className="sliderButtons">
     <FontAwesomeIcon icon={ faArrowLeft} className='icon'onClick={prevSlide}/>
     <FontAwesomeIcon icon={ faArrowRight} className='icon' onClick={nextSlide}/>
     
     </div>
     </div>
    </section>


{/* Another section   */}
<div className='homeContainer margin'>

<section className="Box" style={{backgroundColor :"red"}}>
  
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
    
    
<section className='about-page'id='About'>
        

    <div className="aboutBox">
    <div class="col-2">    
    <h4 style = {{color:'green'}}>About Us</h4>
        
    <h2  style = {{marginBottom:'3px',wordSpacing:'10px'}}>AT MM&EE Logistics, </h2> 
    <p>
   we provide a portfolio of full logistic solutions in Nigeria which includes, 
      but not limited to International and Domestic express delivery, 
      Freight Forwarding, Integrated Logistics Solutions, Information and
       Document Management Solutions, Warehousing, Packaging Services, 
       Food Delivery, Agriculture Logistics and E-commerce Solutions.
    </p>

<button className='button'><a href="#">Learn More</a></button>

            
                          
    </div> 

   <div className="right-about">      
   <img src={image1} alt="image" className="bigImg"/>            
   </div>
    </div>



    
</section>

</div>


{/* Another section */}

<section className="serviceContainer margin" id='Services'>
      <div className="serviceTop">
      <h2 style = {{wordSpacing :'10px'}}>OUR SERVICES</h2>
        <h3>Trusted For Our Services</h3>
        <p style = {{wordSpacing :'10px'}}>MM & EE Logistics can help you with the following services  </p>
      </div>
        

        <div className="serviceWrapper">
        
            {serviceData.map((data)=> (
         <div className="card">
              
    {/* <div className="content">              */}
      <div className="service-img">
        <img src={data.bgImage} alt="" />
    </div>
                
      <h4>{data.name}</h4>
       {/* <p>{data.text}</p>       */}
      {/* </div> */}
           
                
      </div>
                
             ))
            }
        </div>
      
</section>
</div>
  )
}

export default Hero