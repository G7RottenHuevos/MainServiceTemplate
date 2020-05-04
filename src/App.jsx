import React from 'react';
import imgScroller from './Component/imgScroller';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currImage: imgScroller.imageHead
    }
    this.handleHover.bind(this);
  }

  componentDidMount() {

  }

  handleHover(imgHovered) {
    console.log('Hovered Over Image File');
    this.setState({currImage: imgHovered});
  };

  render() {
    return (
      <div className="App">
        <table id='carousel-app'>
          <thead id='main-image'>
            <tr>
              <td id='HeaderImg'>
                {this.state.currImage}
              </td>
            </tr>
          </thead>
          <tbody id='imgList'>
            <tr id='imgbuttons'>
              <imgScroller.Scroller />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
