import React, { Component } from 'react';
import './App.css';
import Toggle from './Components/ToggleComponent'
import Child from './Components/Child'
import Circle from './Components/Circle'
import Parent from './Components/Parent'
import Button from './Components/Button'
import ToggleComponent from './Components/ToggleComponent'
import Counter from './Components/Counter/Counter'

       class App extends Component {
         constructor(props) {
           super(props);
           this.state = {
             count: 0
           }
         }
        
       
         increament = () =>{
           this.setState({ count:this.state + 1});
         } 
         decreament = () =>{
          this.setState({ count:this.state - 1});
              }
              render() {
                return (
                  <div className="App">
                    <button onClick ={this.increament} className="counter">+</button>
                    <button onClick ={this.decreament} className="counter">-</button>
                <h2>{this.state.count}</h2>
                
                <div>
              <h1>Cool-App</h1>
              <ToggleComponent />
              <Toggle />
              <Child />
              <Circle />
              <Parent />
              <Counter />
              <Button />
            </div>
                  </div>
                );

              }
              }

      
    
  

export default App;