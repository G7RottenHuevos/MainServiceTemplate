import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SimilarItems(props) {
  return (
    <div className="OuterBox">
      <Carousel interval={null}>
        <Carousel.Item>
          <Container>
            <Row>
              <Col>
                <div className="ItemBox">
                  <img
                    className="Image"
                    src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
                    alt="First slide"
                  />
                  <h5 className="ItemName">Similar Items: ItemName 1</h5>
                  <h6 className="Price">$29.99</h6>
                  <span className="checkbox">
                    <input type="checkbox"></input>ADD TO COMPARE
                  </span>
                </div>
              </Col>
              <Col>
                <div className="ItemBox">
                  <img
                    className="Image"
                    src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
                    alt="First slide"
                  ></img>
                  <h5 className="ItemName">Similar Items: ItemName 2</h5>
                  <h6 className="Price">$29.99</h6>
                  <span className="checkbox">
                    <input type="checkbox"></input>ADD TO COMPARE
                  </span>
                </div>
              </Col>
              <Col>
                <div className="ItemBox">
                  <img
                    className="Image"
                    src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
                    alt="First slide"
                  ></img>
                  <h5 className="ItemName">Similar Items: ItemName 3</h5>
                  <h6 className="Price">$23.99</h6>
                  <span className="checkbox">
                    <input type="checkbox"></input>ADD TO COMPARE
                  </span>
                </div>
              </Col>
              <Col>
                <div className="ItemBox">
                  <img
                    className="Image"
                    src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
                    alt="First slide"
                  ></img>
                  <h5 className="ItemName">Similar Items: ItemName 4</h5>
                  <h6 className="Price">$33.49</h6>
                  <span className="checkbox">
                    <input type="checkbox"></input>ADD TO COMPARE
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              <Col>
                <div className="ItemBox">
                  <img
                    className="Image"
                    src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
                    alt="Second slide"
                  />
                  <h5 className="ItemName">Similar Items: ItemName 5</h5>
                  <h6 className="Price">$29.99</h6>
                  <span className="checkbox">
                    <input type="checkbox"></input>ADD TO COMPARE
                  </span>
                </div>
              </Col>
              <Col>
                <div className="ItemBox">
                  <img
                    className="Image"
                    src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
                    alt="Second slide"
                  ></img>
                  <h5 className="ItemName">Similar Items: ItemName 6</h5>
                  <h6 className="Price">$29.99</h6>
                  <span className="checkbox">
                    <input type="checkbox"></input>ADD TO COMPARE
                  </span>
                </div>
              </Col>
              <Col>
                <div className="ItemBox">
                  <img
                    className="Image"
                    src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
                    alt="Second slide"
                  ></img>
                  <h5 className="ItemName">Similar Items: ItemName 7</h5>
                  <h6 className="Price">$23.99</h6>
                  <span className="checkbox">
                    <input type="checkbox"></input>ADD TO COMPARE
                  </span>
                </div>
              </Col>
              <Col>
                <div className="ItemBox">
                  <img
                    className="Image"
                    src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
                    alt="Second slide"
                  ></img>
                  <h5 className="ItemName">Similar Items: ItemName 1 8</h5>
                  <h6 className="Price">$33.49</h6>
                  <span className="checkbox">
                    <input type="checkbox"></input>ADD TO COMPARE
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
      <div className="LowerBox">
        <button id="Button3" onClick={props.shopAllSimilarItems}>
          Shop All Similar Items
        </button>
      </div>
    </div>
  );
}
