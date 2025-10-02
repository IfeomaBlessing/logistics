import React,{useState} from 'react'
import '../service/sstyle.css'
import serviceData from './serviceData'
import Faq from './Faq'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';


const Service = () => {
  const [accordion, setAccordion] =useState(null)
  const handleAccordion =(currAccordion)=>{
     if (accordion === currAccordion){
      return setAccordion(null)
     }else{
      setAccordion(currAccordion)
     }

  }

  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
  
  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
  

  return (
    <div className='page'> 

<section className="Header flex">


<p style={{color:"white"}}>Global Logistics</p>
<h2 style={{color:"white"}}>OUR SERVICES</h2>


</section>

<section>
  {serviceData.map((x, index) => (
    <article
      key={index}
      style={{
        backgroundColor: index % 2 !== 0 ? 'var(--greyBg)' : 'transparent',
        padding: '1.5rem 0',
      }}
    >
      <div
        className="homeAbout flex margin"
        style={{
          flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <motion.div
          className="right-about col-2"
          variants={index % 2 === 0 ? slideLeft : slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={x.bgImage} alt="service" className="service-img" />
        </motion.div>

        <motion.div
          className="col-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 style={{ marginBottom: '1rem', wordSpacing: '6px' }}>
            {x.name}
          </h3>
          <p>{x.text}</p>
        </motion.div>
      </div>
    </article>
  ))}
</section>



    <section className="FAQ section-p">
     <div className="accordion-container">
     {Faq.map((x, currAccordion)=> (                
                   <div className="wrapper">
                   <div className={accordion === currAccordion ?"question active":"question"} onClick={()=>handleAccordion(currAccordion)}>
                     <p>{x.question}</p>
                     <div className="Acc-Icons">
                      {accordion === currAccordion ?(<FontAwesomeIcon icon={ faMinus}/>): (<FontAwesomeIcon icon={ faPlus} />)}
                     </div>
                    
                   </div>
                   <div className={accordion === currAccordion ?"showAnswer":"answer"}>
                     <p>{x.answer}</p>
                   </div>
                 </div>
             
              
             ))
            }
     </div>
    </section>

    
    </div>
  )
}

export default Service;