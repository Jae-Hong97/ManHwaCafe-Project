/* eslint-disable */
import React from "react";
import Navbar from "./Navbar";
import './UsageDetails.css'
import { useState } from 'react';

function UsageDetails(){
    let [글제목, 글제목변경] = useState(['1','2','3'])
    return(
        <div className="UsageDetails">
            <div><Navbar/></div>
            <h1>이용내역 화면입니다</h1>
            <div>
                <input aria-label="Id"></input>
                <button>조회</button>
            </div>
            <div className="searchtable">
                
                <div className='list'>
                    <h4>{글제목[0]}</h4>
                    <p>날짜 아이디 이용시간 사용금액</p>
                </div>
                <div className='list'>
                    <h4>{글제목[1]}</h4>
                    <p>날짜 아이디 이용시간 사용금액</p>
                </div>
                <div className='list'>
                    <h4>{글제목[2]}</h4>
                    <p>날짜 아이디 이용시간 사용금액</p>
                </div>
            </div>
        </div>
    );
}

export default UsageDetails;