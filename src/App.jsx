import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
     <div>
      <Header />
     </div>
    );
  }
}

export default App;
