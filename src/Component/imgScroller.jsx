import React from 'react';

class Scroller extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      image: props.image,
      images: props.images
    }
  }

  componentDidMount() {
  }

  handleHover(index) {
    this.setState({image: this.state.images[index]})
  }

  render() {
    return (
      <table id='carousel-app'>
      <thead id='main-image'>
        <tr>
          <td id='HeaderImg'>
            <img src={this.state.image} alt={this.state.images[0]} className='imgHead'></img>
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




    );
  }
};

export default Scroller;