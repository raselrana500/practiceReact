import React,{Component} from "react";

class Condition1 extends Component{
    constructor(){
        super();
        this.state={
            login:true
        }
    }
    changeState(a){
        this.setState({login:a});
    }
    
    render(){
        
        if(this.state.login===true){
            return (<button onClick={this.changeState.bind(this,"false")}>Logout</button>)
            
        }else{
            return (<button>Login</button>)
            
        }
        
    }
}

export default Condition1;