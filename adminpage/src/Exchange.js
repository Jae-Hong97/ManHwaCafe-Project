/* eslint-disable */
import React from "react";
import Navbar from "./Navbar";

function Exchange(){
    return(
        <div className="Exchange">
            <div><Navbar/></div>
            <h1> 환전 페이지</h1>
            <div>
                <label>가게이름</label><br/><br/>
                <select id="storeName">
                <option value="">--가맹점을 선택하세요--</option>
                </select><br/><br/>
                
            </div>
            <div>
                    <label>사용금액</label><input></input><label>원</label><br/><br/>
                <label>환전할 금액</label><input></input><label>원</label><br/><br/>
            </div>
            <button>환전</button>
        </div>
    );
}

export default Exchange;