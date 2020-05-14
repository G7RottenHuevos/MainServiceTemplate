import React from 'react';
import ReviewInputs from './ReviewInputs';



export const Reviews = () =>(
  <div>
  <ReviewInputs/>
  </div>
)
// import axios from 'axios';

// class Reviews extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {

//     }
//   }
//   changeHandler(){
//     axios 
//     .get("/api/Reviews/:id/review")
//     .then((res) => {
//       console.log(res.data);
//       const data = res.data;
//       this.setState({groups : data}); 
//     })
//     .catch((err) => { 
//       console.error(err);
//     });
//     }
//   componentDidMount(){
//     changeHandler()
//   }
//   Render(){
//     return(
//       <div>
//         <ReviewInputs/>
//       </div>
//     )
//   }
// }

// export default Reviews;