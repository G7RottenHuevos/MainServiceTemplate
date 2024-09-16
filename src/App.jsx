import React from 'react';
import { Nav } from 'react-bootstrap';
import CustomersAlsoBought from './Component/CustomersAlsoBought/CustomersAlsoBought.jsx';
import SimilarItems from './Component/SimilarItems/Similar-Items.jsx';

import '../src/styles/App.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'similar',
      siData: [],
      cabData: [],
      selectedItems: 0,
      addToCompare: 0,
    };
    this.clickSimilar = this.clickSimilar.bind(this);
    this.clickAlso = this.clickAlso.bind(this);
  }

  clickSimilar() {
    this.setState((state) => ({
      currentTab: 'similar',
    }));
    console.log(this.state.currentTab);
  }
  clickAlso() {
    this.setState((state) => ({
      currentTab: 'almost',
    }));
    console.log(this.state.currentTab);
  }

  render() {
    return (
      <div className="App">
        <header className="title">RECOMMENDED FOR YOU</header>
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link onClick={this.clickSimilar}>Similar Items </Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={this.clickAlso}>
            <Nav.Link>Customers Also Bought</Nav.Link>
          </Nav.Item>
          <Nav.Item></Nav.Item>
        </Nav>
        {this.state.currentTab === 'similar' ? (
          <SimilarItems />
        ) : (
          <CustomersAlsoBought />
        )}
      </div>
    );
  }
}

export default Main;
