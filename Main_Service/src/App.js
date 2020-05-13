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
      questions: [],
      answers: []
    }
    // bind 
    // this.reviewHandler = this.reviewHandler.bind(this);
  }
  // function definitions
  // reviewHandler = () => {
  //   alert("Log in required!");
  // }

  render() {
    return (
      <div>
        <TopDescription />
        <ReviewLinks />
        <Shipping /> 
        <BottomDescription />
      </div>
    )
  }
}

export default App;
// add
