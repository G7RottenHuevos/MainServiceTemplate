import React, { useContext } from 'react';
import Product from '../Products.jsx';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SelectedItem from '../SelectedItem';
import { ItemContext } from '../itemContext';

const CustomersAlsoBought = () => {
  const purchase = useContext(ItemContext);

  return (
    <Container className="carousel-container">
      <Carousel interval={null}>
        <Carousel.Item>
          <Container>
            <Row>
              {purchase.CustomerAlsoBought1.map((item, key) => (
                <Product
                  row={purchase.CustomerAlsoBought1}
                  item={item}
                  key={key}
                />
              ))}
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              {purchase.CustomerAlsoBought2.map((item, key) => (
                <Product
                  item={item}
                  key={key}
                  row={purchase.CustomerAlsoBought2}
                />
              ))}
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
      <SelectedItem
      // price={this.state.overallPrice}
      // name={this.state.nameOfItem}
      // image={this.state.imageOfItem}
      // count={count}
      //   AddSelectedToCart={this.AddSelectedToCart}
      ></SelectedItem>
    </Container>
  );
};


export default CustomersAlsoBought;
