import React, { useContext } from 'react';
import { ItemContext } from './itemContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const SelectedItem = ({ price }) => {
  const purchase = useContext(ItemContext);

  return (
    <Container className="footer-container">
      <Row className="item-row">
        <Col>
          <div>
            <img
              className="small-image"
              src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
              alt={`${purchase.selectedItem.itemName}`}
            />
            <div id="name">{purchase.selectedItem.itemName}</div>
          </div>
        </Col>
        <Col lg={2}>
          <button>{purchase.count} Selected Items</button>
        </Col>
        <Col lg={1}>
          <div>${purchase.total}</div>
        </Col>
        <Col lg={3}>
          <button>ADD SELECTED TO CART</button>
        </Col>
      </Row>
    </Container>
  );
};
export default SelectedItem;
