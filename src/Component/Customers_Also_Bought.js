import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// export default function AlsoBought(props) { //functional component
class AlsoBought extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          ItemName: "CustomerAlsoBought: ItemName 1",
          Price: "$29.93",
          isChecked: false,
        },
        {
          id: 2,
          ItemName: "CustomerAlsoBought: ItemName 2",
          Price: "$23.99",
          isChecked: false,
        },
        {
          id: 3,
          ItemName: "CustomerAlsoBought: ItemName 3",
          Price: "$33.49",
          isChecked: false,
        },
        {
          id: 4,
          ItemName: "CustomerAlsoBought: ItemName 4",
          Price: "$39.93",
          isChecked: false,
        },
        {
          id: 5,
          ItemName: "CustomerAlsoBought: ItemName 5",
          Price: "$295.93",
          isChecked: false,
        },
        {
          id: 6,
          ItemName: "CustomerAlsoBought: ItemName 6",
          Price: "$233.99",
          isChecked: false,
        },
        {
          id: 7,
          ItemName: "CustomerAlsoBought: ItemName 7",
          Price: "$333.49",
          isChecked: false,
        },
        {
          id: 8,
          ItemName: "CustomerAlsoBought: ItemName 8",
          Price: "$391.93",
          isChecked: false,
        },
      ],
      checkedBoxes: 0,
      overallPrice: "$0",
    };
    // this.clicked = this.clicked.bind(this);
  }
  //  handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  render() {
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
                    <h5 className="ItemName">{this.state.items[0].ItemName}</h5>
                    <h6 className="Price">{this.state.items[0].Price}</h6>
                    <span className="checkbox">
                      <input
                        type="checkbox"
                        value={this.state.items[0].isChecked}
                      ></input>
                      Select
                    </span>
                  </div>
                </Col>
                <Col>
                  <div className="ItemBox">
                    <img
                      className="Image"
                      src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
                      alt="First slide"
                    />
                    <h5 className="ItemName">{this.state.items[1].ItemName}</h5>
                    <h6 className="Price">{this.state.items[1].Price}</h6>
                    <span className="checkbox">
                      <input
                        type="checkbox"
                        value={this.state.items[1].isChecked}
                      ></input>
                      Select
                    </span>
                  </div>
                </Col>
                <Col>
                  <div className="ItemBox">
                    <img
                      className="Image"
                      src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
                      alt="First slide"
                    />
                    <h5 className="ItemName">{this.state.items[2].ItemName}</h5>
                    <h6 className="Price">{this.state.items[2].Price}</h6>
                    <span className="checkbox">
                      <input
                        type="checkbox"
                        value={this.state.items[2].isChecked}
                      ></input>
                      Select
                    </span>
                  </div>
                </Col>
                <Col>
                  <div className="ItemBox">
                    <img
                      className="Image"
                      src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
                      alt="First slide"
                    />
                    <h5 className="ItemName">{this.state.items[3].ItemName}</h5>
                    <h6 className="Price">{this.state.items[3].Price}</h6>
                    <span className="checkbox">
                      <input
                        type="checkbox"
                        value={this.state.items[3].isChecked}
                      ></input>
                      Select
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
                      alt="First slide"
                    />
                    <h5 className="ItemName">{this.state.items[4].ItemName}</h5>
                    <h6 className="Price">{this.state.items[4].Price}</h6>
                    <span className="checkbox">
                      <input
                        type="checkbox"
                        value={this.state.items[4].isChecked}
                      ></input>
                      Select
                    </span>
                  </div>
                </Col>
                <Col>
                  <div className="ItemBox">
                    <img
                      className="Image"
                      src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
                      alt="First slide"
                    />
                    <h5 className="ItemName">{this.state.items[5].ItemName}</h5>
                    <h6 className="Price">{this.state.items[5].Price}</h6>
                    <span className="checkbox">
                      <input
                        type="checkbox"
                        value={this.state.items[5].isChecked}
                      ></input>
                      Select
                    </span>
                  </div>
                </Col>
                <Col>
                  <div className="ItemBox">
                    <img
                      className="Image"
                      src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
                      alt="First slide"
                    />
                    <h5 className="ItemName">{this.state.items[6].ItemName}</h5>
                    <h6 className="Price">{this.state.items[6].Price}</h6>
                    <span className="checkbox">
                      <input
                        type="checkbox"
                        value={this.state.items[6].isChecked}
                      ></input>
                      Select
                    </span>
                  </div>
                </Col>
                <Col>
                  <div className="ItemBox">
                    <img
                      className="Image"
                      src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
                      alt="First slide"
                    />
                    <h5 className="ItemName">{this.state.items[7].ItemName}</h5>
                    <h6 className="Price">{this.state.items[7].Price}</h6>
                    <span className="checkbox">
                      <input
                        type="checkbox"
                        value={this.state.items[7].isChecked}
                      ></input>
                      Select
                    </span>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
        <div className="LowerBox">
          <div className="ADD_SELECTED_TO_CART">
            <div className="ADD_SELECT_LEFT">
              <img
                className="Small_Image"
                src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
                alt="First slide"
              />
              <div id="SUMMARY">
                50 Pcs 3 Layer Disposible Face Masks Tie-on Earloop/Elastic
              </div>
            </div>
            <button id="Selected_Items_Btn" onClick={this.props.selectedItems}>
              {this.state.checkedBoxes} Selected Items
            </button>
            <div id="Price">{this.props.price}</div>
            <button id="Add_To_Cart_Btn" onClick={this.props.AddSelectedToCart}>
              ADD SELECTED TO CART
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default AlsoBought;
