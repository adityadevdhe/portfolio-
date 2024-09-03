import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Navbar = () => {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="nav-wrapper">
      <div className="nav-left">
       <div className="name">
        Portfolio
       </div>
       <Toggle/>
      </div>
      <div className="nav-right">
          <div className="list">
            <ul>
                  
                <Link spy={true} smooth={true} to='/' style={{textDecoration:'none'}}>
                
                 <li className='navn' style={{color:darkMode ? "white": "" }}>Home</li>
                 </Link>
                 
                
                <Link spy={true} smooth={true} to='/skills'style={{textDecoration:'none'}}>
                <li className='navn'style={{color:darkMode ? "white": "" }}>Skills</li>
                </Link>
                
                
                <Link spy={true} smooth={true} to='/contact'style={{textDecoration:'none'}}>
                <li className='navn'style={{color:darkMode ? "white": "" }}>Contact Me</li>
                </Link>
                
                
               
               
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Navbar;