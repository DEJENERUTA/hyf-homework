import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
//import image from './Components/image/background.jpg';



class Header extends Component {
  render () {
    return (
         <header>
          <nav>
           <Link  to="/home">Home | <Link  to="/contact">Contact</Link></Link> | <Link  to="/about">About</Link>
           </nav>
           <div>
             <h2>Well come To My Portfolio</h2>
             {/* <div className="background-picture">
             <img src="background.jpg" alt width="300" height="400" /> */}
             </div>
           
        </header> 
       );
  }
} 

export default Header;