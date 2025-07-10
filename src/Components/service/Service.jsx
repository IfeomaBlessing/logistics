import React,{useState} from 'react'
import '../service/sstyle.css'
import serviceData from './serviceData'
import Faq from './Faq'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const Service = () => {
  const [accordion, setAccordion] =useState(null)
  const handleAccordion =(currAccordion)=>{
     if (accordion === currAccordion){
      return setAccordion(null)
     }else{
      setAccordion(currAccordion)
     }

  }
  

  return (
    <div className='page'> 

<section className="Header flex">


<p style={{color:"white"}}>MM&EE Logistics</p>
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
        <div className="right-about col-2">
          <img src={x.bgImage} alt="service" className="bigImg" />
        </div>

        <div className="col-2">
          <h3 style={{ marginBottom: '1rem', wordSpacing: '6px' }}>
          {x.name}
          </h3>

          <p>{x.text}</p>

        </div>
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