import React from 'react'
import "../about/about.css"
import image1 from '../../assets/images/abtImg.webp'
import Choose from '../about/choose';

const About = () => {
  return (

    <>
      <div className='page'>
    <section className="Header flex">

    <p style={{color:"white"}}> MM&EE Logistics</p>
    <h2 style={{color:"white"}}>ABOUT US</h2>
   
    </section>


    <section>
    <div className="homeAbout flex margin" style={{marginBottom:'2.5rem'}}>

     <div className="right-about">      
   <img src={image1} alt="image" className="bigImg"/>            
   </div> 

    <div class="col-2">    

        
    <h3  style = {{marginBottom:'3px',wordSpacing:'10px'}}>AT MM&EE Logistics, </h3> 
    <p>
   we provide a portfolio of full logistic solutions in Nigeria which includes, 
      but not limited to International and Domestic express delivery, 
      Freight Forwarding, Integrated Logistics Solutions, Information and
       Document Management Solutions, Warehousing, Packaging Services, 
       Food Delivery, Agriculture Logistics and E-commerce Solutions.
    </p>


            
                          
    </div> 

 
    </div>
    
    </section>

    <section className='aboutContent section section-p'>
       <h3 >THEY SAY IT CAN'T BE DONE, WE SAY IT WILL BE DONE</h3>
       <p>When you work with MM&EE Logistics, you can be rest assured that we will never leave  a 
        shipment behind! We will do whatever it takes to meet your business unique needs and offer exquisite service.
       </p>
 
    </section>


    <section className=''>
           
           <div className="homeAbout flex margin" style={{marginBottom:'2.5rem'}}>

           <div class="col-2">    
       
               
       <h2  style = {{marginBottom:'30px',wordSpacing:'10px'}}>UNMATCHED EXPERIENCE AND COMMITMENT </h2> 
       <p>
         Above anything else, MM&EE Logisitcs is committed to excellent service and prompt transportation. 
         We take pride in being your trusted source for all your logisitcs needs.
              <br />
         Our goal is for our work and dedication to speak for themselves. We have been in busisness for 
         years and still retain the same drivers and customers since our beginnings, and we are proud of it.
       </p>
                  
       </div> 
       

            <div className="right-about col-2">  
            <p>
                You will receive prompt, professional, considerate and careful service and it is our guarantee that every transportation is managed and organised with the highest level of security and quality.
                <br />
                Our experience in the logistics field has given us the experience needed to ensure your satisfaction everytime.
       </p>
                <div className="miniImage flex">
                <img src={image1} alt="image" className="bigImg"/>   
                <img src={image1} alt="image" className="bigImg"/>   
                  </div>         
          </div> 
       
         
       
        
           </div>
           
    </section>


    <div className='homeContainer '>

    <section className="Box section-p">
  <div className="Box-container chooseUs">
    {Choose.map((x, index) => (                
      <div className="Box-content chooseUs" key={index}>
        
        {/* ✅ Render react-feather icon directly */}
        <div className="icons" style={{ marginBottom: "0.5rem" }}>
          {x.icon}
        </div>

        <div className="content" style={{ marginLeft: '0' }}>
          <h4>{x.header}</h4>
        </div>

      </div>
    ))}
  </div>
    </section>

    


</div>
    </div>
    </>
  )
}

export default About;