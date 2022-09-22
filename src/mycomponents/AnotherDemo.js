import React, { Component } from 'react'
import  ReactDOM  from 'react-dom';

export default class AnotherDemo extends Component {
    changeImage(){
        var imgID = document.getElementById("imgID");
        ReactDOM.findDOMNode(imgID).src="https://farazitechnology.com.bd/public/productImage/962562931.jpg";
    }
  render() {
    return (
      <div>
        <button onClick={this.changeImage}>Change Image</button><br></br>
        <img id='imgID' src='https://www.mobiledokan.com/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-Max.jpg'></img>
      </div>
    )
  }
}
