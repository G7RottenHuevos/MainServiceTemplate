import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AlsoBought() {
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
                  <h5 className="ItemName">
                    CustomerAlsoBought: ItemName 1
                  </h5>
                  <h6 className="Price">$29.93</h6>
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
                  <h5 className="ItemName">
                  CustomerAlsoBought: ItemName 2
                  </h5>
                  <h6 className="Price">$23.34</h6>
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
                  <h5 className="ItemName">
                  CustomerAlsoBought: ItemName 3
                  </h5>
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
                  <h5 className="ItemName">
                  CustomerAlsoBought: ItemName 4
                  </h5>
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
                  <h5 className="ItemName">
                  CustomerAlsoBought: ItemName 5
                  </h5>
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
                  <h5 className="ItemName">
                  CustomerAlsoBought: ItemName 6
                  </h5>
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
                  <h5 className="ItemName">
                  CustomerAlsoBought: ItemName 7
                  </h5>
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
                  <h5 className="ItemName">
                  CustomerAlsoBought: ItemName 8
                  </h5>
                  <h6 className="Price">$33.49</h6>
                  <span className="checkbox">
                    <input type="checkbox"></input>ADD TO COMPARE
                  </span>
                </div>
                {/* <a
                  class="carousel-control-prev"
                  href="#slide"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="false"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#slide"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="false"
                  ></span>
                  <span class="sr-only">Next</span>
                </a> */}
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
