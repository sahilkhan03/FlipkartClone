import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar" >

                              {/* Name of Project (on left side)*/}
        <div className="navbar-brand">
        <NavLink role="button" className="navbar-item navlinks" exact activeStyle={{ color: "orange", backgroundColor:"#001730" }}  to="/"> Flickart    </NavLink>  
        </div>

                                        {/* SEARCH BAR*/}

              <div id="Search">
                
                    <input className="input is-rounded is-hovered" type="text" placeholder="Search"></input>                                      
              </div>

                                        {/* The Elements to be shown on right side */ }      
        
        <div className="navbar-end">

                  <NavLink role="button" className="navbar-item navlinks" exact activeStyle={{ color: "orange", backgroundColor:"#001730" }} to="/cart"> 
                  Cart
                   </NavLink>

                  <NavLink role="button" className="navlinks navbar-item" exact activeStyle={{ color: "orange" ,backgroundColor:"#001730" }}  to="/login"> Login </NavLink>
                  
                  <NavLink role="button" className="navbar-item navlinks" exact activeStyle={{ color: "orange", backgroundColor:"#001730" }}  to="/signup"> Signup </NavLink>
                  
                  <NavLink role="button" className="navbar-item navlinks" exact activeStyle={{ color: "orange" ,backgroundColor:"#001730" }}  to="/about"> About </NavLink>
        
        </div>
      
      </div>
    );
  }
}
