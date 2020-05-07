import React from 'react';
import { Redirect } from "react-router-dom";

class ReviewInputs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:null,
            review: null,
        }
    }
    buttonClickListener = () =>{
        const {review} = this.state;
        alert(review)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const data = this.state;
        alert('Review Submited')
    }
    handleInputChange = (e) => {
        e.preventDefault();
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount(){
      
    }
    render() {
        const {name} = this.state;
        const {review} = this.state;
        return(
            <div>
                <h1>Reviews</h1>
                <form onSubmit={this.handleSubmit}>
                    <p><input type ='text' placeholder="Your Name"  name="name" onChange={this.handleInputChange}/></p>
                    <p><input type = 'text' placeholder='Write Review Here'review="review" onChange={this.handleInputChange}/></p>
                    <p><button onPress={this.buttonClickListener}>Write A Review</button></p>
                    
                </form>
            </div>
        )
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