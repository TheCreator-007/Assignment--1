import React, { Component } from "react";
class EventBind extends Component{
    constructor(){
        super();
        //this.Helloevent=this.Helloevent.bind(this)
        this.state={
            name:"amit"
        }
    }
    Helloevent=()=>{
        //console.log("hii", this)        
        this.setState({
            name:"lalu"
        })
    }
        render(){
            return(
                <div>
                    <h1>{this.state.name}</h1>
                <button onClick={this.Helloevent}>Click</button>
                </div>
            )
        }


}
export default EventBind