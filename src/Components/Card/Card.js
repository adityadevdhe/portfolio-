import React from 'react';
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.emoji} alt="" />
      <span>{props.heading}</span>
      <span>{props.detail}</span>
    </div>
  );
};

export default Card;