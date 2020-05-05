import React from "react";
import Similar from "../src/Component/Similar_Items_Demo.js";
import AlsoBought from "../src/Component/Customers_Also_Bought.js";
import { Nav } from "react-bootstrap";

import "../src/styles/App.scss";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: true,
      tab1: <Similar />,
      tab2: <AlsoBought />,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      currentTab: !state.currentTab,
    }));
    console.log(this.state.currentTab);
  }

  render() {
    return (
      <div className="App">
        <header className="Title">RECOMMENDED FOR YOU</header>
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link onClick={this.handleClick}>Similar Items </Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={this.handleClick}>
            <Nav.Link >
              Customers Also Bought
            </Nav.Link>
          </Nav.Item>
          <Nav.Item></Nav.Item>
        </Nav>
        <div className="LowerBox">
          <button id="Button3">Shop All Similar Items</button>
        </div>
      </div>
    );
  }
}

export default Main;
