import React from 'react'
import './Services.css';
import heartemoji from '../../img/design.png';
import glasses from '../../img/CP.png';
import humble from '../../img/development.png';
import Card from '../Card/Card';
import Resume from './resume.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import Fade from 'react-reveal/Fade';

const Services = () => {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className='services'id='services'>
        <div className="awesome">
         <span style={{color: darkMode ? "white" : ""}} className='m'>My</span>
         <span className='s'>Skills</span>
         
         <a href={Resume} download>
         <button className='button s-button'> <span className='cvn' >Download CV</span></button>
         </a>
         <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
        </div>
        <div className="cards">
           <div style={{left:'24rem'}}>
            <Fade right>
              <Card 
            emoji={heartemoji}
            heading={'Design'}
            detail={'Figma Gimp '}
            />
            </Fade>
            
           
            
           </div>
           <div style={{top:'12rem',left:'-4rem'}}>
            <Fade left>
            <Card
            emoji={humble}
            heading={'Back-end'}
            detail={'NodeJS ExpressJS EtherJS '}
            />
            </Fade>
            
           </div>
           <div style={{top:'19rem', left:'15rem'}}>
            <Fade>
            <Card
            emoji={glasses}
            heading={"Front-end"}
            detail={"ReactJS HTML CSS JS "}
            />
            </Fade>
            
           </div>
           <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  );
};

export default Services;