/* eslint-disable */
import React from "react";
import Navbar from "./Navbar";
import './Income.css'
import { useState } from 'react';

function Income(){
    let [글제목, 글제목변경] = useState(['1','2','3','4'])
    return(
        <div className="Income">
            <div><Navbar/></div>
            <h2>수입 리스트</h2>
            <div className="incomelist">
                <div className='list'>
                    <h4>{글제목[0]}</h4>
                    <p>날짜(월)  사용금액  수입금액</p>
                </div>
                <div className='list'>
                    <h4>{글제목[1]}</h4>
                    <p>날짜(월)  사용금액  수입금액</p>
                </div>
                <div className='list'>
                    <h4>{글제목[2]}</h4>
                    <p>날짜(월)  사용금액  수입금액</p>
                </div>
                <div className='list'>
                    <h4>{글제목[3]}</h4>
                    <p>날짜(월)  사용금액  수입금액</p>
                </div>
            </div>
        </div>
    );
}

export default Income;