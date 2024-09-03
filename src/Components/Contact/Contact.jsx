import React from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Contact = () => {
  const form = useRef();
  const [done,setDone]=useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gwlhwta', 'template_62px2c6', form.current, '4GZiqw1v6aRR-4H8Q')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return (
    <div className='contact' id='contact'>
        <div className="w-left">
          <div className="awesome con">
          <span style={{color: darkMode ? "white" : ""}} className='m' >Get in Touch</span>
          <span className='s' >Contact Me</span>
          </div>
          <div
          className='blur s-blur'
          style={{background:"#ABF1FF94"}}
          >

          </div>
        </div>
        <div className="c-right">
           <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='user_name' className='user' placeholder='Name' />
            <input type="email" name='user_email' className='user' placeholder='Email' />
            <textarea name="message" className='user' placeholder='Message'></textarea>
            <input type="submit" value="Send" className='button sub' />
            <span>{done && "Thanks for contacting me I will reach you out soon !"}</span>
            <div
             className='blur c-blur1'
             style={{background:"var(--purple )"}}
            ></div>
           </form>
        </div>
    </div>
  );
};

export default Contact;