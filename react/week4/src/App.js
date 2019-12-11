import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import  Home  from './Components/Home'
import  Contact from './Components/Contact'
import  Header from './Components/Header'
import  About from './Components/About'
//import Header from './Components/Header'

class App extends Component {
  render() {
    return (
     <Router>
        <div className="App">
          <React.Fragment>
            <image />
          </React.Fragment>
          <Header />
          <Route exact path= '/home'
          render= {(props) =>(
          <React.Fragment>
           <Home />
          </React.Fragment>
       )}
       />
          <Route path='/About' component = {About} />
          <Route path='/Contact' component = {Contact} />
        </div>
     </Router>
            
    );
  }

}

export default App;
