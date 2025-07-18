import React from 'react'
import '../contact/cstyle.css'
import image from '../../assets/images/contact_img.jpeg'
import  Form  from './Form'


const Contact = () => {
  return (
          <>
          <section id="contact" className='about-page margin'>
        

        <div className="aboutBox flex" style={{alignItems:'flex-start'}}>
        <div class="col1" style={{width :"45%"}}>    
    
    <img src={image} alt="image" className="bigImg"style={{width :"100%"}}/>                  
        </div> 
    
       <div className="col2" style={{width :"45%"}}>  
       <h3>GET IN TOUCH</h3>
       <p>Please don't hesitate to contact us</p>    
       <Form/>
        
       </div>
        </div> 
        
    </section>
      </>
  )
}

export default Contact