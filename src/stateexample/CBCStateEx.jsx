import React, { Component } from 'react'

 class CBCStateEx extends Component {
    constructor(){
         super();
         this.state={
            username: "Pranav"
        };
    }
     changeName=()=>{
        this.setState({username : "Keshav is absent form last two days"});
    }

   render() {
    console.log(this);
    return (
        <div>CBCStateEx

            <h1>{this.state.username}</h1>
            <button onClick={this.changeName}>Update the State</button>
        </div>
    )
   }
 }
 export default CBCStateEx