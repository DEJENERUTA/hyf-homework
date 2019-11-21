 import React, { Component } from 'react'

 class Counter extends Component {
     state = {
         count: 0
     };
     render() {
         return (
             <div>
                 <spna>{this.state.count}</spna>
                 <button>Increment</button>
             </div>
         );
     }
 }

 export default Counter;