/* eslint-disable */
import React from "react";
import Navbar from "./Navbar";
import "./Main.css";

function Main(){
    
    return(
        <div className="Main">
            <div><Navbar/></div>
            <div className="container">
                    <div className="peoplenumber"> <h1>1/20</h1></div>
                    <div className="cafe"><h1>Cafe 현황</h1></div>
                    <div className="userdetails">
                        <p>1번 사용자 정보</p>
                        
                    </div>
                    <div className="sit"><h2>배치현황 </h2></div>
            </div>
        </div>
    );
}

export default Main;