import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor(){
        super();
        this.state={
            fName:"",
            lName:"",
            email:"",
            mobile:""
        }
    }
    onChangeHandler=(event)=>{
        var inputName = event.target.name;
        var inputValue = event.target.value;
        this.setState({[inputName]:inputValue});

        if(inputName==="fName"){
            var namePattern=/^([a-zA-z ]){2,30}$/;
            if(!namePattern.test(inputValue)){
                this.setState({fName:"First Name is not Valid"});
            }
        }
        if(inputName==="lName"){
            var namePattern=/^([a-zA-z ]){2,30}$/;
            if(!namePattern.test(inputValue)){
                this.setState({lName:"Last Name is not Valid"});
            }
        }

        if(inputName==="email"){
            var emailPattern=/\S+@\S+\.\S+/;
            if(!emailPattern.test(inputValue)){
                this.setState({email:"Email is not valid"});
            }
        }
        if(inputName==="mobile"){
            
            if(!Number(inputValue)){
                this.setState({mobile:"Mobile number is not valid"});
            }
        }
    }

  render() {
    return (
      <div>
        <p>First Name: {this.state.fName}</p>
        <p>First Name: {this.state.lName}</p>
        <p>First Name: {this.state.email}</p>
        <p>First Name: {this.state.mobile}</p>
        <form>
            <input onChange={this.onChangeHandler} name="fName" type="text" placeholder='First Name'></input><br></br>
            <input onChange={this.onChangeHandler} name="lName" type="text" placeholder='Last Name'></input><br></br>
            <input onChange={this.onChangeHandler} name="email" type="email" placeholder='Email'></input><br></br>
            <input onChange={this.onChangeHandler} name="mobile" type="text" placeholder='Mobile Number'></input><br></br><br></br>
            <input name="submit" type="submit" value="Save Now" className='btn btn-primary'></input>
        </form>
      </div>
    )
  }
}
