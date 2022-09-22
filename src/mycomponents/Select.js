import React, { Component } from 'react'

export default class Select extends Component {
    constructor(){
        super();
        this.state={
            city1:"Dhaka",
            city2:"Rajshahi",
            city3:"Khulna",
            city4:"Bogura",
            city5:"Rangpur",
            city6:"Barisal",
            show:"",
            auto:"Dhaka"
        }
    }
    onChangeHandler=(event)=>{
        var selectedValue=event.target.value;
        this.setState({show:selectedValue,auto:selectedValue});
    }
  render() {
    return (
      <div>
        <p>{this.state.auto}</p>
        <select onChange={this.onChangeHandler} value={this.state.auto}>
            <option>{this.state.city1}</option>
            <option>{this.state.city2}</option>
            <option>{this.state.city3}</option>
            <option>{this.state.city4}</option>
            <option>{this.state.city5}</option>
            <option>{this.state.city6}</option>
        </select>
      </div>
    )
  }
}
