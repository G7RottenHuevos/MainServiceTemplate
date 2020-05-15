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
                  <h5 className="ItemName">Protective Mask - 50 pcs / box</h5>
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
                    src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_2.jpg"
                    alt="First slide"
                  ></img>
                  <h5 className="ItemName">Disposable Protective Mask</h5>
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
                    src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_3.jpg"
                    alt="First slide"
                  ></img>
                  <h5 className="ItemName">PURELL</h5>
                  <h6 className="Price">$24.99</h6>
                  <span className="checkbox">
                    <input type="checkbox"></input>ADD TO COMPARE
                  </span>
                </div>
              </Col>
              <Col>
                <div className="ItemBox">
                  <img
                    className="Image"
                    src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_4.jpg"
                    alt="First slide"
                  ></img>
                  <h5 className="ItemName">Disposable Mask 3-layer Protective Mask</h5>
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
                    src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_5.jpg"
                    alt="Second slide"
                  />
                  <h5 className="ItemName">Black Mask</h5>
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
                    src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_6.jpg"
                    alt="Second slide"
                  ></img>
                  <h5 className="ItemName">Disposable Gloves</h5>
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
                    src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_7.jpg"
                    alt="Second slide"
                  ></img>
                  <h5 className="ItemName">Silver Antibacterial sanitizer</h5>
                  <h6 className="Price">$33.49</h6>
                  <span className="checkbox">
                    <input type="checkbox"></input>ADD TO COMPARE
                  </span>
                </div>
              </Col>
              <Col>
                <div className="ItemBox">
                  <img
                    className="Image"
                    src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_8.jpg"
                    alt="Second slide"
                  ></img>
                  <h5 className="ItemName">Childrens Protective Mask</h5>
                  <h6 className="Price">$14.99</h6>
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
