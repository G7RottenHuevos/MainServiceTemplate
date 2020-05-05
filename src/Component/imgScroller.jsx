import React from 'react';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';

const images = [];
images.push(img1, img2, img3, img4, img5 ,img6);


let imageHead = <img src= {images[0]} alt={images[1]} className='imgHead'></img>

const imageDivs = images.map((val, index) => {
  return index = <img src={val} alt='index' key={index} className='img'></img>;
});

class Scroller extends React.Component {
  // Request API for images
  // Create an array of the images
  // export that array

  render() {
    return (
      <td>
        {imageDivs}
      </td>
    );
  }
}

export default {
  Scroller,
  imageDivs,
  images,
  imageHead
};