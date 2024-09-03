import React from 'react';
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Sidebar from '../../img/drive.png';
import port from '../../img/Portfolio.png';
import 'swiper/css';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import Marquee from "react-fast-marquee";

const Portfolio = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return (
    <div className='portfolio'>
        <span style={{color: darkMode ? "white" : ""}} className='m'>Recent Projects</span>
        <span className='s'>Portfolio</span>
        
        <div className="container">
            <div className="component">
            <a href="https://darling-bienenstitch-636c44.netlify.app">
            <img src={Sidebar} alt="" />
            </a>
             
            </div>
            <div className="component">
                <img src={port} alt="" />
            </div>
        </div>
    </div>
  );
};

export default Portfolio;