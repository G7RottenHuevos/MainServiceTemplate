import React from 'react';
import Popup from './Popup';

class Scroller extends React.Component {
  constructor(props) { 
    super(props)
    this.state ={
      image: props.image,
      images: props.images,
      Show: false
    };
    this.testModal = this.testModal.bind(this);

  };

  componentDidMount() {
    setInterval(this.testModal, 2000);
  };

  testModal() {
    console.log(this.state.Show);
  }

  handleHover(index) {
    this.setState({image: this.state.images[index]});
  };

  togglePopup() {  
    this.setState({Show: !this.state.Show});  
  } 

  render() {
    return (
      <div>
          <table id='carousel-app'>
          <thead id='main-image'>
            <tr>
              <td id='HeaderImg'>
                <img src={this.state.image} alt={this.state.images[0]} className='imgHead' onClick={this.togglePopup.bind(this)}></img> 
              </td>
            </tr>
          </thead>
          <tbody id='imgList'>
            <tr id='imgbuttons'>
              <td>
              {this.state.images.map((val, index) => {
                return <img src={val} alt={index} key={index} className='img' onMouseEnter={this.handleHover.bind(this, index)}></img>;
              })}
              </td>
            </tr>
          </tbody>
        </table>
        {this.state.Show ?  
          <Popup  
                    text='Click "Close Button" to hide popup'  
                    closePopup={this.togglePopup.bind(this)}  
          />
          : console.log('null', null)
        }
      </div>
    );
  };
};

export default Scroller;