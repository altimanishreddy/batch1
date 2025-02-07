import React, { Component } from 'react'
import CBCPropsex1 from './propsexample/CBCPropsex1';

 class App extends Component {
    render() {
        return (
            <div>App
                <hr />

                <CBCPropsex1
                username="Sam"
                age={25}
                desig={["developer" , "tester"]}
                userDetailes={{city:"Hyd" , ares:"Maisammaguda"}}
                sendFun={function(){alert("Hi i m from parent component")}}
                />
            </div>
        )
    }
}

 export default App;