import React from 'react'
import '../contact/cstyle.css'
import image from '../../assets/images/contact_img.jpeg'
import  Form  from './Form'
import { motion } from 'framer-motion';



const Contact = () => {
  return (
          <>
          <section id="contact" className='about-page section-p'>
        

          <div className="aboutBox flex" style={{ alignItems: 'flex-start' }}>
  <motion.div
    className="col1"
    style={{ width: '45%' }}
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <img src={image} alt="image" className="bigImg" style={{ width: '100%' }} />
  </motion.div>

  <motion.div
    className="col2"
    style={{ width: '45%' }}
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <h3>GET IN TOUCH</h3>
    <p>Please don't hesitate to contact us</p>
    <Form />
  </motion.div>
</div>

    </section>
      </>
  )
}

export default Contact