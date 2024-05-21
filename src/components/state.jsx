import React , {Component} from "react";
class stat extends Component{
    constructor(){
        super()
        this.state = {
            meg :'HELLO THERE'
        }
    }
    dup(){
        this.setState({
            meg :"HOW CAN I HELP YOU!?"
                    })
    }
    render(){
        return(
            <div>
                <h1>{this.state.meg}</h1>
                <button onClick={() => this.dup()}>HELP</button>
            </div>
        )
    }
}

export default stat;