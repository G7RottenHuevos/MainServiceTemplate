import React from "react";
import Similar from "../src/Component/Similar_Items_Demo.js";
import AlsoBought from "../src/Component/Customers_Also_Bought.js";
import { Nav } from "react-bootstrap";

import "../src/styles/App.scss";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "similar",
    };
    this.clickSimilar = this.clickSimilar.bind(this);
    this.clickAlso = this.clickAlso.bind(this);
  }

  clickSimilar() {
    this.setState((state) => ({
      currentTab: "similar",
    }));
    console.log(this.state.currentTab);
  }
  clickAlso() {
    this.setState((state) => ({
      currentTab: "almost",
    }));
    console.log(this.state.currentTab);
  }

  render() {
    return (
      <div className="App">
        <header className="Title">RECOMMENDED FOR YOU</header>
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link onClick={this.clickSimilar}>Similar Items </Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={this.clickAlso}>
            <Nav.Link>Customers Also Bought</Nav.Link>
          </Nav.Item>
          <Nav.Item></Nav.Item>
        </Nav>
        {this.state.currentTab === "similar" ? <Similar /> : <AlsoBought />}
        <div className="LowerBox">
          <button id="Button3">Shop All Similar Items</button>
          <div className="ADD_SELECTED_TO_CART">
            <div className="ADD_SELECT_LEFT">
              <img
                className="Image_Small"
                src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
                alt="First slide"
              />
              <div id="SUMMARY">
                50 Pcs 3 Layer Disposible Face Masks Tie-on Earloop/Elastic
              </div>
            </div>
            <div className="ADD_SELECT_RIGHT">
              <div id="SELECTED_ITEMS">0 Selected Items</div>
              <div id="Price">$33.48</div>
            </div>
            <button id="Button4">ADD SELECTED TO CART</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
