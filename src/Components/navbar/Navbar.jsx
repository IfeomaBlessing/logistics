
import React, {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import '../navbar/navstyle.css'
import logo from '../../assets/logo.png'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = ({scroll}) => {
       
    const [clicked, setClicked] = useState(false);
    const clickMenu =()=> {setClicked(!clicked)}

    
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
 
        <>      
         
         <header className={`${isHome ? (scroll ? 'header scroll' : 'header') : 'header scroll'}`}>
           <div className='logo'>
               <img src={logo} alt='logo'/> 
            </div>
            
         <nav className="flex">
    
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
           <li>
                        <Link to= "/" className='navlink'
      
                         onClick ={clickMenu} >
                          Home</Link>
                    </li>
                           <li>
                        <Link  to="/About" className= 'navlink'
                        onClick ={clickMenu}>
                          About</Link>
                    </li>
    
                    <li>
                        <Link to="/Services" className='navlink'
              
                        onClick ={clickMenu}>
                          Services</Link>
                    </li>
    
                    <li>
                    <a href="#contact" className= "navlink">Contact</a>

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