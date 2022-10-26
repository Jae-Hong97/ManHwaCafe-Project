/* eslint-disable */
import React from "react";
import Navbar from "./Navbar";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Franchise.css"

function StoreRegistration(){
    return(
        <div className="StoreRegistration">
            <div><Navbar/></div>
            <h1> 가게 등록 페이지</h1>
            <div>
            <TextField 
            label = "가게 이름"  
            type="storename" 
            required 
            name='storename'/>
            </div>
            <div>
            <TextField 
            label = "가게 정보"  
            type="storeinformation" 
            required 
            name='storeinformation'/>
            </div>
            <div>
            <TextField 
            label = "Id"  
            type="id" 
            required 
            name='id'/>
            </div>
            <div>
            <TextField 
            label = "비밀번호"  
            type="password" 
            required 
            name='password'/>
            </div>
            <div>
            <TextField 
            label = "휴대폰 번호"  
            type="phonenumber" 
            required 
            name='phonenumber'/>
            </div>
            <div>
            <TextField 
            label = "가게 주소"  
            type="storeaddress" 
            required 
            name='storeaddress'/>
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <Link to = {"/franchise"}><button>등록</button></Link>
            </div>
        </div>
    );
}

export default StoreRegistration;