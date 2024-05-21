
import React , {Component} from "react";

const infor = props =>{
return(
    <div>
    <h1>HEY my name is {props.name} and i am {props.age} and i am doing {props.deg}</h1>
    <strong>THANK YOU</strong>
    </div>
)
}


//using props in class componenets with this keyword
class info extends Component{
    render(){
        return(
            <h1>HEllo my name is {this.props.name} and i am {this.props.age} and i am doing {this.props.deg}</h1>
        )
    }
}
export default info ; 