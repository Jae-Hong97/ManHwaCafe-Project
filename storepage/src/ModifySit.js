/* eslint-disable */
import React from "react";
import Navbar from "./Navbar";
import "./ModifySit.css";
function ModifySit(){
    return(
        <div className="ModifySit">
            <div><Navbar/></div>
            <div className="container">
                <div className="redistcontainer">
                    <h3>자리</h3>
                </div>
                <div className="correction">
                    <h3>배치 수정</h3>
                </div>
                <div className="add">
                    <button>추가</button>
                    <button>삭제</button>
                </div>
                <div className="sitName">
                    <h3>자리 이름</h3>
                    <label>자리이름 :</label><input></input>
                    <button>수정</button>
                </div>
            </div>
        </div>
    );
}

export default ModifySit;