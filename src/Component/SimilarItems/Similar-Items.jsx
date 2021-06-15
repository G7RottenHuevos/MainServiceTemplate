import React, { useContext } from 'react';
import Product from '../Products.jsx';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SelectedItem from '../SelectedItem';
import { ItemContext } from '../itemContext';

const SimilarItems = () => {
  const purchase = useContext(ItemContext);

  return (
    <Container className="carousel-container">
      <Carousel interval={null}>
        <Carousel.Item>
          <Container>
            <Row>
              {purchase.similarItems1.map((item, key) => (
                <Product item={item} key={key} row={purchase.similarItems1} />
              ))}
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              {purchase.similarItems2.map((item, key) => (
                <Product item={item} key={key} row={purchase.similarItems2} />
              ))}
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
      <SelectedItem
      // price={this.state.overallPrice}
      // name={this.state.nameOfItem}
      // image={this.state.imageOfItem}
      // count={this.state.count}
      //   AddSelectedToCart={this.AddSelectedToCart}
      ></SelectedItem>
    </Container>
  );
};
export default SimilarItems;
