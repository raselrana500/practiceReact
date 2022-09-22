import React,{Component} from "react";

class setstate extends Component{

    constructor(){
        super();

        this.state={
            name:"Rasel"
        }
    }
    changeName(a){
        this.setState({name:a});
    }

    render(){
        return <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.changeName.bind(this,"Changed name")}>Change Name</button>
        </div>
    }
}

export default setstate;