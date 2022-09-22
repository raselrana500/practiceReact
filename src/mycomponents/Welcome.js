import React,{Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Welcome extends Component{

   doThisFromClass(a){
        alert(a);
    }

    render(){
        return <div>
            <h2>i am from {this.props.name} components</h2>
            <button className="btn btn-primary m-5" onClick={this.doThisFromClass.bind(this,"parameter pass from class component")}>Click me from class</button>
        </div>
        ;
        
        
    }
} 

export default Welcome;