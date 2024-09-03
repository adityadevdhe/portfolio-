import React from 'react';
import './Footer.css';
import wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';

const Footer = () => {
  return (
    <div className='footer'>
        <img src={wave} alt="" style={{width:'100%'}}/>
        <div className="f-content">
            <span>adityadevdhe82@gmail.com</span>
            <div className="f-icons">
            <a href="https://github.com/adityadevdhe">
            <Github color='white' size='3rem'/>
            </a> 
            <a href="https://www.facebook.com/aditya.devadhe.7">
            <Facebook color='white' size='3rem'/>  
            </a> 
            <a href="https://instagram.com/imadidevdhe?igshid=ZmZhODViOGI=">
            <Insta color='white' size='3rem' />  
            </a> 
            </div>
            <span>Thanks for visiting my website</span>
            
            
        </div>
    </div>
  );
};

export default Footer;