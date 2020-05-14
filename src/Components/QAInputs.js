import React from 'react';
import axios from "axios";

class QAInputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          question: [],
        };
    }
      buttonClickListener = () => {
        const { question } = this.state;
        alert(question);
      };
      handleSubmit = (e) => {
        e.preventDefault();
        const data = this.state;
        alert("Question Submited");
      };
      handleInputChange = (e) => {
        e.preventDefault();
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
      changeHandler() {
        axios
          .get("/api/Questions")
          .then((res) => {
            console.log(res.data);
            const data = res.data;
            this.setState({ question: data });
          })
          .catch((err) => {
            console.error(err);
          });
      }
      componentDidMount() {
        this.changeHandler();
      }

      render() {
        // const { name } = this.state;
        // const { review } = this.state;
        return (
          <div>
            <h1>Questions</h1>
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
                  placeholder="Write Question Here"
                  question="question"
                  onChange={this.handleInputChange}
                />
              </p>
              <p>
                <button onClick={this.buttonClickListener}>Write A Question</button>
              </p>
            </form>
    
                 <div>
                 {this.state.question.length > 0 ? 
                  this.state.question.map((value, index) => (
                    <div key={index}>
                        <div> {value.name}</div>
                        <div>{value.question}</div>
                    </div> 
                    
                   )) : null
                }
                </div> 
          </div>
        );
      }
    }
export default QAInputs;