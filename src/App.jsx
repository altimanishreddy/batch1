// import React, { Component } from 'react'
// import CBCPropsex1 from './propsexample/CBCPropsex1';

//  class App extends Component {
//     render() {
//         return (
//             <div>App
//                 <hr />

//                 <CBCPropsex1
//                 username="Sam"
//                 age={25}
//                 desig={["developer" , "tester"]}
//                 userDetailes={{city:"Hyd" , ares:"Maisammaguda"}}
//                 sendFun={function(){alert("Hi i m from parent component")}}
//                 />
//             </div>
//         )
//     }
//  }

//  export default App;

//  // ! props children example
// import React from 'react'
// import PropsChildrenEx from './propsexample/PropsChildrenEx'
// import ChildProps from './propsexample/ChildProps'

// const App = () => {
//     return (
//         <div>
//           <PropsChildrenEx username="Tarun" company="Meta">
//             <h1>This data is passed as props children</h1>
//             <ChildProps/>
//            </PropsChildrenEx>
//         </div>
//     )

// }

// export default App
import React from "react"
 import FBCStateEx from './stateexample/CBCStateEx'

 const App = ()=> {
    return(
        <div> App
        <hr />
        <FBCStateEx/>
        </div>
    )
 }

 export default App