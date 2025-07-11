import React from 'react'
import '../contact/cstyle.css'
import image from '../../assets/images/contact_img.jpeg'



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
        
    </section>
      </>
  )
}

export default Contact