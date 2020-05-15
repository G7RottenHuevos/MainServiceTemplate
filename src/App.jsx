import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import axios from 'axios';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      autofill:[],
    }
  }

  autofill() {
    axios
      .get("/api/autofill")
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        this.setState({ header: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.autofill();
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
