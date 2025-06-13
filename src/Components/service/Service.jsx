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
    <div> 

    <section className="serviceContainer section-p" id='Services'>
      <div className="serviceTop">
      <h4>OUR SERVICES</h4>
        <h2>Trusted For Our Services</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, sapiente. Nulla nesciunt quam, ut optio magnam quis!
          Magnam, aliquam id. 
          Magnam ab ut perferendis libero quod error accusantium fuga eveniet.  </p>
      </div>
        

        <div className="serviceWrapper">
        
            {serviceData.map((data)=> (
         <div className="card">
              
                      <div className="content">
                        <div className="service-img">
                        <img src={data.bgImage} alt="" />
                        </div>
                
                       <h4>{data.name}</h4>
                       <p>{data.text}</p>      
               </div>
           
                    
           </div>
                
             ))
            }
        </div>
      
    </section>

    <section className="FAQ section-p">
    <h2>Frequently Asked Questions</h2>
    
     <div className="accordion-container">
     {Faq.map((x, currAccordion)=> (                
                   <div className="wrapper">
                   <div className={accordion === currAccordion ?"question active":"question"} onClick={()=>handleAccordion(currAccordion)}>
                     <h3>{x.question}</h3>
                     <div className="Acc-Icons">
                      {accordion === currAccordion ?(<FontAwesomeIcon icon={ faPlus}/>): (<FontAwesomeIcon icon={ faMinus} />)}
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

export default Service