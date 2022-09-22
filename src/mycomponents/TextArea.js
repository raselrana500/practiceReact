import React, { Component } from 'react'

export default class TextArea extends Component {
    constructor(){
        super();
        this.state={            
            userInpur:""
        }
    }
    onChangeHandler=(event)=>{
        var myText = event.target.value;
        this.setState({userInpur:myText});
    }
  render() {
    return (
      <div>
        <textarea onChange={this.onChangeHandler} placeholder="Write here"></textarea>
        <p>{this.state.userInpur}</p>
      </div>
    )
  }
}
