import React, {Component} from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from './Components/Container';
import './PaulApp.css';

class PaulApp extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
      <div>
        <div
      className="App">
      <Container/>
      </div>
      </div>
    );
  }
}

export default PaulApp;
