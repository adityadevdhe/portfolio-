import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import vector2 from '../../img/b1.png';

import FloatingDiv from '../FloatingDiv/FloatingDiv';
import c from '../../img/c.png';
import s from '../../img/star.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import Fade from 'react-reveal/Fade';

const Intro = () => {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;


  const transition={duration:2,type:'spring'}
  return (
    <div className='intro' id='home'>
        <div className="i-left">
          <div className="i-name">
            <span style={{color: darkMode ? "white" : ""}}>Hii there, I'm</span>
            <Fade top>
            <span>Aditya Devdhe</span>
            </Fade>
            
            <span className='pa'>A Full-stack developer with high level skills in development </span>
          
          </div>
            <div className="i-icons">
              <a href="https://github.com/adityadevdhe">
                <img src={Github} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/aditya-devdhe-a132191b5">
              <img src={Linkedin} alt="" />
              </a>
              <a href="https://instagram.com/imadidevdhe?igshid=ZmZhODViOGI=">
              <img src={Instagram} alt="" />
              </a>
              
            </div>
        </div>
        <div className="i-right" >
    
          <img src={vector2} alt="" className='photo'/>
          <div 
          style={{top: '50%',left:'150%'}}
          className="floating-div a"
          >
            
            <FloatingDiv img={s} txt1="Graphic" txt2="Designer"/>
            
          </div>
          <div style={{top: '4%',left:'65%'}}
          className="floating-div">
            <Fade right>
            <FloatingDiv img={c} txt1="Web" txt2="Developer"/>
            </Fade>
            
          </div>
          <div style={{top: '55%',left:'-10%'}}
          className="floating-div">
            <Fade left>
            <FloatingDiv img={s} txt1="Graphic" txt2="Designer"/>
            </Fade>
            
          </div>
          <div className='blur' style={{background:"rgb(238 210 255)"}}></div>
          <div className='blur' style={{background:'#C1F5FF', top:'13rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
          
        </div>
    </div>
  );
};

export default Intro;