import React from 'react';  
import IMAGES from './Gallery';
import Gallery from 'react-grid-gallery';
import '../Appmlh.css';  

class Popup extends React.Component {  
  render() {  
    return (  
      <div className='popup'>  
        <div className='popup\_inner'>  
          <h1>
            <Gallery images={IMAGES} />
          </h1>  
          <button onClick={this.props.closePopup}>close me</button>  
        </div>  
      </div>  
    );  
  }  
}  

export default Popup; 