import React from "react";
import Similar from "../src/Component/Similar_Items_Demo.js";
import AlsoBought from "../src/Component/Customers_Also_Bought.js";
import { Nav } from "react-bootstrap";
import axios from 'axios';

import "../src/styles/App.scss";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "similar",
      similarItemsData: [],
      customersAlsoBoughtData: [],
      mainItemPrice: "$35.32",
      selectedItems: 0,
      addToCompare: 0,
    };
    this.clickSimilar = this.clickSimilar.bind(this);
    this.clickAlso = this.clickAlso.bind(this);
    this.shopAllSimilarItems = this.shopAllSimilarItems.bind(this);
    this.selectedItems = this.selectedItems.bind(this);
    this.AddSelectedToCart = this.AddSelectedToCart.bind(this);
  }
  componentDidMount() {
    axios.get('/similar')
      .then(res => {
        const similarItemsData = res.data;
        console.log(similarItemsData);
        this.setState({ similarItemsData });
      })
  }

  clickSimilar() {
    this.setState((state) => ({
      currentTab: "similar",
    }));
    console.log(this.state.similarItemsData);
  }
  clickAlso() {
    this.setState((state) => ({
      currentTab: "almost",
    }));
    console.log(this.state.currentTab);
  }
  shopAllSimilarItems() {
    console.log("You are now shopping for similar items");
  }
  selectedItems(e) {
    console.log("You are now selecting items");
  }
  AddSelectedToCart() {
    console.log("You've added selected to cart");
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
        {this.state.currentTab === "similar" ? (
          <Similar shopAllSimilarItems={this.shopAllSimilarItems} />
        ) : (
          <AlsoBought
            selectedItems={this.selectedItems}
            AddSelectedToCart={this.AddSelectedToCart}
            price={this.state.mainItemPrice}
          />
        )}
      </div>
    );
  }
}

export default Main;
