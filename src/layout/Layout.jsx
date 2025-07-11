import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import Hero from '../Components/hero/Hero'
import Navbar from '../Components/navbar/Navbar'
import Service from '../Components/service/Service'
import Contact from '../Components/contact/Contact'
import Footer from '../Components/footer/Footer'
import About from "../Components/about/About"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Layout=()=> {
    const [scroll, setScroll] = useState(false)
     
    const handleNavbar =()=>{
      if(window.scrollY > 0){
        setScroll(true)
      }else{
        setScroll(false)
      }
    }
    window.addEventListener("scroll", handleNavbar)
  return (
    <>
    <Navbar scroll={scroll}/>
      
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
    </Routes>

   
       <Contact/>
       {/* WhatsApp Chat Icon */}
<a
  href="https://wa.me/2348055844640"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
>

     <FontAwesomeIcon icon={ faWhatsapp} className='icon'/>
</a>
      <Footer/>
    </>
  )
}

export default Layout
