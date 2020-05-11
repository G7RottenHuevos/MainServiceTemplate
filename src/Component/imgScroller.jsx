import React from 'react';

const Scroller = (props) => {
  console.log('Props : ', props.images);
  return (
    props.images.map((val, index) => {
      return props.images[index] = 
        <img src={val} alt={index} key={index} className='img'onMouseEnter={props.hovered}></img>
    })
  );
};

export default {
  Scroller
};