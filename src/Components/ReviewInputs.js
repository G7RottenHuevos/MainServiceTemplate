import React from "react";
// import { Redirect } from "react-router-dom";
import axios from "axios";

class ReviewInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: [],
      singleName: "",
      singleReview: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let singleReview = this.state.singleReview;
    let singleName = this.state.singleName;
   axios
   .post("/api/Reviews/", {singleReview, singleName})
   .then((res) => {
     console.log("post sent");
     this.changeHandler();
   })
   .catch((err) => {
     console.log("error on post")
   })
  };

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({
      singleName: e.target.value,
    });
  };

  handleInputChanges = (e) => {
    e.preventDefault();
    this.setState({
      singleReview: e.target.value,
    });
  };

  changeHandler() {
    axios
      .get("/api/Reviews/")
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        this.setState({ review: data });
        console.log("is this being run")
      })
      .catch((err) => {
        console.error(err);
      });
  }
  
  componentDidMount() {
    this.changeHandler();
  }

  render() {

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
              onChange={this.handleInputChanges}
            />
          </p>
          <p>
            <button onClick={this.buttonClickListener}>Write A Review</button>
          </p>
        </form>
            
             <div>
             {this.state.review.length > 0 ? 
              this.state.review.map((value, index) => (
                <div key={index}>
               <div> {value.name}</div>
               <div>{value.review}</div>
                </div> 
                
               )) : null
            }
            </div> 
      </div>
    );
  }
}
export default ReviewInputs;
