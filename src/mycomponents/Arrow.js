import React from "react";
const myAlt=(a)=>alert(a);

const Arrow=()=>{
    return(
        <button className="btn btn-danger" onClick={myAlt.bind(this,"Button Click and this is from arrow function allert.")}>Button From Arrow Function</button>
    );
}

export default Arrow;