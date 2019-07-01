import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar" >

                              {/* Name of Project (on left side)*/}
        <div className="navbar-brand">
        <NavLink role="button" className="navbar-item navlinks" exact  to="/"> Flickart    </NavLink>  
        </div>

                                        {/* SEARCH BAR*/}

              <div id="Search">
                
                    <input className="input is-rounded is-hovered" type="text" placeholder="Search"></input>                                      
              </div>

                                        {/* The Elements to be shown on right side */ }      
        
        <div className="navbar-end">

                  <NavLink role="button" className="navbar-item navlinks" exact to="/cart"> 
                  Cart
                   </NavLink>

                  <NavLink role="button" className="navlinks navbar-item" exact  to="/login"> Login </NavLink>
                  
                  <NavLink role="button" className="navbar-item navlinks" exact  to="/signup"> Signup </NavLink>
                  
                  <NavLink role="button" className="navbar-item navlinks" exact  to="/about"> About </NavLink>
        
        </div>
      
      </div>
    );
  }
}
