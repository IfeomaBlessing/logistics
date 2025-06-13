
import React, {useState} from 'react'
import {Link} from 'react-scroll'
import '../navbar/navstyle.css'
import logo from '../../assets/real-log.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = ({scroll}) => {
       
    const [clicked, setClicked] = useState(false);
    const clickMenu =()=> {setClicked(!clicked)}
  return (
 
        <>      
         <header className={scroll ? 'header scrolled' : 'header'} >
           <div className='logo'>
               <img src={logo} alt='logo'/> 
            </div>
            
         <nav>
    
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
           <li>
                        <Link to= "Home" className='navlink'
                        // activeClass='activeLink'
                         onClick ={clickMenu} >
                          Home</Link>
                    </li>
                           <li>
                        <Link to="About" className= 'navlink'
                        // activeClass='activeLink'
                        onClick ={clickMenu}>
                          About</Link>
                    </li>
    
                    <li>
                        <Link to="Services" className='navlink'
                        // activeClass='activeLink'
                        onClick ={clickMenu}>
                          Services</Link>
                    </li>
    
                    <li>
                        <Link to="Contact" className= 'navlink'
                        // activeClass='activeLink'
                         onClick ={clickMenu}>
                          Contact</Link>
                    </li>
    
            </ul>
    
            <div className='Menu' onClick={clickMenu}>
              <div className='icons'>
              {clicked ?  (<FontAwesomeIcon icon={faTimes} /> ) :
          (<FontAwesomeIcon icon={faBars}/>)}
              </div>
           
            </div>
    
         </nav>
         </header>
           
        </>
    
      );
    }

export default Navbar;