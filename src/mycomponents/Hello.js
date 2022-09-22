import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Hello(props) {
    function doThis(a){
        alert(a);
    }
    return(
        <div>
            <h1>Hello {props.name},Your age is : {props.age}</h1>
            <button className="btn btn-primary m-5" onClick={doThis.bind(this,"para pass from functional components.")}>Click Me</button>
        </div>
    );
}

export default Hello;