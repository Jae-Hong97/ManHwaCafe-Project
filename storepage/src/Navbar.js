/* eslint-disable */
import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar(props) {
    
  
    return (
      <div className="Navbar">
        <h2> 만화카페 통합시스템</h2>

        <nav className="navbar">
            <div className="navbar-menu">
                <ul>
                    <li className="navbarlist1" color="white"><Link to={"/main"}>Home</Link></li>
                    <li className="navbarlist2"><Link to={"/modifysit"}>배치수정</Link></li>
                    <li className="navbarlist3"><Link to={"/usagedetails"}>이용내역</Link></li>
                    <li className="navbarlist4"><Link to={"/income"}>수입</Link></li>
                </ul>
            </div>
        </nav>
  
      
      </div>
      
      
      
    );
  }
  
  export default Navbar;