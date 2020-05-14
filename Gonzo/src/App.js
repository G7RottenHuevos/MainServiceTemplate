import React from 'react';
import ReactDOM from 'react-dom';
import ReviewLinks from './Components/ReviewLinks.jsx';
import BottomDescription from './Components/BottomDescriptionBox.jsx';
import Shipping from './Components/Shipping';
import TopDescription from './Components/TopDescription.jsx';
import Style from './Style.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      masks: [],
      
    }
    // bind 
    this.moreItems = this.moreItems.bind(this);
  }
  // function definitions
  moreItems = () => {
    alert("Log in required!");
  }

  render() {
    return (
      <div>
        <TopDescription />
        <ReviewLinks onclick={this.moreItems}/>
        <Shipping /> 
        <BottomDescription />
      </div>
    )
  }
}

export default App;
// add
