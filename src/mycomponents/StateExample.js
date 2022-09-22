import React,{Component} from "react";

class StateExample extends Component{
    constructor(){
        super();
        this.state={
            name:"Rasel Rana",
            age:"28",
            height: "5.6 feet",
            weight:"60 KG",
            friends:{
                name:"Aminul islam",
                age:"25",
                job:["programmer","Networking enginner"],
                friends:{
                    name:"Rasel Rana",
                    age:"28",
                    job:["Php programmer","web Developer","Android Developer"]
                }
            }
            
        }

    }
    render(){
        return <div>
            <h1><b>My Name Is : </b>{this.state.name}</h1>
            <h1><b>My Age Is : </b>{this.state.age}</h1>
            <h1><b>My height Is : </b>{this.state.height}</h1>
            <h1><b>My Weight Is : </b>{this.state.weight}</h1>
            <h1><b>My Friends Name Is : </b>{this.state.friends.name}</h1>
            <h1><b>My Friends Age Is : </b>{this.state.friends.age}</h1>
            <h1><b>My Friends Job Is : </b>{this.state.friends.job[1]}</h1>
            <h1><b>Aminul islam Friends Name Is : </b>{this.state.friends.friends.name}</h1>
            <h1><b>Aminul islam Friends Age Is : </b>{this.state.friends.friends.age}</h1>
            <h1><b>Aminul islam Friends Job Is : </b>{this.state.friends.friends.job[1]}</h1>
        </div>;
    }
}

export default StateExample;