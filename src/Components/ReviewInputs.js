import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class ReviewInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      review: [],
    };
  }

  buttonClickListener = () => {
    const { review } = this.state;
    alert(review);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.state;
    alert("Review Submited");
  };

  handleInputChange = (e) => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  changeHandler() {
    axios
      .get("/api/Reviews/:id/review")
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        this.setState({ review: data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.changeHandler();
  }

  render() {
    const { name } = this.state;
    const { review } = this.state;
    return (
      <div>
        <h1>Reviews</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Write Review Here"
              review="review"
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <button onClick={this.buttonClickListener}>Write A Review</button>
          </p>
        </form>
            
            {/* {this.state.review.map((Reviews, index) => {
                <div key ={Reviews.id}> 
                  <div>{this.state.name}</div>
                  <div>{this.state.review}</div>
                </div>
            })} */}
          
      </div>
    );
  }
}
export default ReviewInputs;

//  <div>
//                 <h1>Reviews</h1>
//                 <form onSubmit={this.handleSubmit}>
//                     <p><input type ='text' placeholder="Your Name"  name="name" onChange={this.handleInputChange}/></p>
//                     <p><input type = 'text' placeholder='Write Review Here'review="review" onChange={this.handleInputChange}/></p>
//                     <p><button onPress={this.buttonClickListener}>Write A Review</button></p>

//                 </form>
//             </div>
