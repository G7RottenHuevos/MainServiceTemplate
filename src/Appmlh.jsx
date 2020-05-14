import React from 'react';
import axios from 'axios';
import Scroller from './Component/imgScroller';
import './Appmlh.css'; 
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currImage: 'https://i.imgur.com/zM0MQFD.jpg',
      images: [
        'https://i.imgur.com/zM0MQFD.jpg',
        'https://i.imgur.com/R9JVRsP.jpg',
        'https://i.imgur.com/wuuIRSv.jpg',
        'https://i.imgur.com/0i8iBU7.jpg'
      ]
    }
    this.getImages = this.getImages.bind(this);
  }

  componentDidMount() {
    this.getImages();
  }
  //TODO: Attach axios request to state and render it on-load.
  getImages() {
    axios.get('/api/carousel')
    .then(res => {
      this.setState({images: res.data});
      console.log(this.state.images);
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <Scroller images={this.state.images} image={this.state.currImage}/>
      </div>
    );
  }
}

export default App;
