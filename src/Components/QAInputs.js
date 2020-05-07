import React from 'react';

class QAInputs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:null,
            Question: null,
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const data = this.state;
        alert('Question Submited')
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
        const {Question} = this.state;
        return(
            <div>
                <h1>Question</h1>
                <form onSubmit={this.handleSubmit}>
                    <p><input type ='text' placeholder="Your Name"  name="name" onChange={this.handleInputChange}/></p>
                    <p><input type = 'text' placeholder='Write Question Here'Question="Question" onChange={this.handleInputChange}/></p>
                    <p><button>Post Question</button></p>
                </form>
            </div>
        )
    }
}
export default QAInputs;