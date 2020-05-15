import React from "react";
import axios from "axios";

class QAInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: [],
      singleName: "",
      singleQuestion: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let singleQuestion = this.state.singleQuestion;
    let singleName = this.state.singleName;
    axios
      .post("/api/Questions/", { singleQuestion, singleName })
      .then((res) => {
        console.log("post sent");
        this.changeHandler();
      })
      .catch((err) => {
        console.log("error on post");
      });
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
      singleQuestion: e.target.value,
    });
  };

  changeHandler() {
    axios
      .get("/api/Questions")
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        this.setState({ question: data });
        console.log("is this being run")
      })
      .catch((err) => {
        console.error(err);
      });
  }

  sendQuestion() {
    axios
      .post("/api/Questions/", {
        question: this.state.question,
      })
      .then(function (response) {
        console.log(response);
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
              onChange={this.handleInputChanges}
            />
          </p>
          <p>
            <button onClick={this.buttonClickListener}>Write A Question</button>
          </p>
        </form>

        <div>
          {this.state.question.length > 0
            ? this.state.question.map((value, index) => (
                <div key={index}>
                  <div> {value.name}</div>
                  <div>{value.question}</div>
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
}
export default QAInputs;
