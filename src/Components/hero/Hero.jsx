import React, {useEffect, useState} from 'react'
import heroData from './heroData'
import '../hero/herostyle.css'
import serviceData from '../service/serviceData';
import Testimonial from '../about/Testimonials';
import Box from '../hero/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faPhone} from '@fortawesome/free-solid-svg-icons';
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

<section className="Box" >
  
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
    
    
<section className='heroAbout'>
        

    <div className="homeAbout flex" style={{marginBottom:'2.5rem'}}>
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

<button className='button' ><a href="#">Learn More</a></button>

            
                          
    </div> 

   <div className="right-about">      
   <img src={image1} alt="image" className="bigImg"/>            
   </div>
    </div>



    
</section>

</div>


{/* Another section */}

<section className="serviceContainer margin">
      <div className="serviceTop">
      <h2 style = {{wordSpacing :'10px'}}>OUR SERVICES</h2>
        <h3>Trusted For Our Services</h3>
        <p style = {{wordSpacing :'10px'}}>MM & EE Logistics can help you with the following services  </p>
      </div>
        

        <div className="serviceWrapper flex">
        
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

<section className="truck-wrapper ">
  <div className="truck-image"></div>
</section>

<section className='contact flex section-p'>
  
  <div className='col1 flex' style={{width:"60%"}}>
    <div className="icons">
      <FontAwesomeIcon icon={faPhone}/>
 
    </div>

    <div style={{marginLeft:"1.3rem"}}>
    <h3 >LOOKING FOR THE BEST LOGISTICS SERVICES?</h3>
    <div className="dash-wrapper"style={{marginTop:"1.3rem"}}>
    <div className="dash"></div>
    <p style={{marginLeft:"1.3rem"}}>We make your cargo transport simple, contact us today.</p>
    </div>
    </div>

  </div>

  <div className='col2'>
    <button className='button'><a href="#">Contact us today</a></button>
  </div>
</section>


{/* <section className='about-page margin'>
        

    <div className="aboutBox flex" style={{alignItems:'flex-start'}}>
    <div class="col1" style={{width :"45%"}}>    

    <img src={image1} alt="image" className="bigImg"style={{width :"100%"}}/>                  
    </div> 

   <div className="col2" style={{width :"45%"}}>  
   <h3>GET IN TOUCH</h3>
   <p>Please don't hesitate to contact us</p>    
           <form action="#" style={{marginTop:"10px"}}>

           <div className='t-form'>
           <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            
           </div>
            <input type="text" placeholder='Subject' />
        
            
            <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
            <button className='button'>Submit</button>
           </form>
   </div>
    </div> 
    
</section> */}
</div>
  )
}

export default Hero