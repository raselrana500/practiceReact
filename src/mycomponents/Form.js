import React, { Component } from 'react'

export default class Form extends Component {

    constructor(){
        super();
        this.state={
            userName:""
        }
    }
    onChangeHandler=(event)=>{
        var newName=event.target.name;
        var newValue=event.target.value;
        this.setState({[newName]:newValue});
    }
    onSubmitHandler=()=>{
        alert(this.state.userName);
    }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
        <p>My First Form</p>
        <h3>{this.state.userName}</h3>
        <input name="userName" onChange={this.onChangeHandler} type="text" placeholder="Your Name"></input><br></br><br></br>
        <input type="submit" value="Submit Now"></input>
        </form>
      </div>
    )
  }
}
