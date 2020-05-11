import React from 'react';

const Scroller = (props) => {
  console.log('Props : ', props.images);
  return (
    <td>
      {props.images.map((val, index) => {
        return props.images[index] = <img src={val} alt={index} key={index} className='img'></img>
      })}
    </td>
  );
};

export default {
  Scroller
};