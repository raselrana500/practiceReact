import React,{Component} from "react";
class ConditionInReturn extends Component{
    constructor(){
        super();
        this.state={
            login:true
        }
    }

    render(){
        return(
            this.state.login? <h1>Condition True</h1> : <h1>Condition False</h1>
        )
    }
}

export default ConditionInReturn;