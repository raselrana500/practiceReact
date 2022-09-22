import React, { Component } from 'react';
import ReactDom from 'react-dom';

export default class NewDemo extends Component {

    myFunction(){
        var container = document.getElementById("myID");
        var element = <h2>This is element . </h2>;
        var callback = function(){
            alert("hi! this is from callBack function.");
        }
        ReactDom.hydrate(element,container,callback);
    }
  render() {
    return (
      <div>
        <button onClick={this.myFunction}>Change</button>
        <h1 id="myID">My name is Rasel</h1>
      </div>
    )
  }
}
