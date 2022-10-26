/* eslint-disable */
import React from "react";
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import Navbar from "./Navbar";
import { useState } from 'react';


function Main() {
    
      
  
    return (
      <div className="Main">
        
             <div> <Navbar/></div>
        <h1>메인 페이지</h1>
        <div>
            <label>총 회원 수 : </label>
            <input></input>    
        </div><br/>
        <div>
            <label>총 가게 수 : </label>
            <input></input>    
        </div><br/>
        <div>
            <label>총 수입금액 : </label>
            <input></input>    
        </div><br/>
        <div>
            <label>총 사용 금액 : </label>
            <input></input>    
        </div><br/>
        <div>
            <label>총 이윤금액 : </label>
            <input></input>    
        </div><br/>
        
        <textarea></textarea>
      </div>
      
      
    );
  }
  
  
  export default Main;