import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import heroData from './heroData'
import '../hero/herostyle.css'
import serviceData from '../service/serviceData';
import Box from '../hero/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import image1 from '../../assets/images/abt_img.jpg'
import { motion } from 'framer-motion';



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
    <section className='heroSection'>
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
                  <a href="tel:+12465734" className="button">Contact Us</a>
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
<div className='homeContainer '>

<section className="Box section-p" >
  
 <div className="Box-container">
 {Box.map((x)=> (                
                <div className="Box-content">
                   <FontAwesomeIcon icon={x.icon} className ="icons" />
                  
                   <div className="content">
                   <h4>{x.header}</h4>
                    <p style={{ whiteSpace: 'pre-line' }}>{x.text}</p>
                   </div>
                  </div>
         ))
        }
 </div>
</section>
    
    
<section className='heroAbout section-p'>
        

    <div className="homeAbout flex" style={{marginBottom:'2.5rem'}}>
    <div class="col-2">    
            

    <h3  style = {{marginBottom:'5px',wordSpacing:'10px'}}>AT Global Logistics, </h3> 
    <p>
   we provide a portfolio of full logistic solutions in Nigeria which includes, 
      but not limited to International and Domestic express delivery, 
      Freight Forwarding, Integrated Logistics Solutions, Information and
       Document Management Solutions, Warehousing, Packaging Services, 
       Food Delivery, Agriculture Logistics and E-commerce Solutions.
    </p>

    <Link to="/About" className="button"style={{ padding: '0.5rem 2rem' }}>Learn More</Link>

            
    </div> 

   <div className="right-about">      
   <img src={image1} alt="image" className="bigImg"/>    

   </div>
    </div>



    
</section>

</div>


{/* Another section */}

<section className="serviceContainer margin">
  <h2>Trusted For Our Services</h2>

  <div className="serviceWrapper flex">
    {serviceData.map((data, index) => (
      <motion.div
        className="card"
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="service-img">
          <img src={data.bgImage} alt="" className="miniImg" />
        </div>
        <p>{data.name}</p>
      </motion.div>
    ))}
  </div>
</section>


<section className='contact flex section-p'>
  
  <div className='col1 flex' style={{width:"60%"}}>
    <div>
      <h3 >LOOKING FOR THE BEST LOGISTICS SERVICES?</h3>
    <div className="dash-wrapper"style={{marginTop:"1.3rem"}}>
    <div className="dash"></div>
    <p style={{marginLeft:"0.6rem"}}>We make your cargo transport simple, contact us today.</p>
    </div>
    </div>
  

  </div>

  <div className='col2'>

  <a href="tel:+2347033827430" className="button">Contact Us Today</a>
  </div>
</section>



</div>
  )
}

export default Hero