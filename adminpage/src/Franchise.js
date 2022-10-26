/* eslint-disable */
import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Franchise(){
    return(
        <div className="Franchise">
            <div><Navbar/></div>
            <h1>가맹점 페이지</h1>
            <Link to ={"/storeregistration"}><button>가게 등록</button></Link><br/><br/>
            <label htmlFor="month-select">시작월:</label>
                <select id="month-select">
                    <option value="">--월을 선택하세요--</option>
                    <option value="january">1</option>
                    <option value="february">2</option>
                    <option value="march">3</option>
                    <option value="april">4</option>
                    <option value="may">5</option>
                    <option value="june">6</option>
                    <option value="july">7</option>
                    <option value="august">8</option>
                    <option value="september">9</option>
                    <option value="october">10</option>
                    <option value="november">11</option>
                    <option value="december">12</option>
                </select>
                <label> ~ </label>
                <label htmlFor="month-select">마지막월:</label>
                <select id="month-select">
                    <option value="">--월을 선택하세요--</option>
                    <option value="january">1</option>
                    <option value="february">2</option>
                    <option value="march">3</option>
                    <option value="april">4</option>
                    <option value="may">5</option>
                    <option value="june">6</option>
                    <option value="july">7</option>
                    <option value="august">8</option>
                    <option value="september">9</option>
                    <option value="october">10</option>
                    <option value="november">11</option>
                    <option value="december">12</option>
                </select>
                <button>조회</button>
                <div>
                    <h3>가게 리스트</h3>
                    <div className='list'>
                        <h4>가게 리스트</h4>
                        <p>가게이름 사용금액 환전금액</p>
                    </div>
                    <div className='list'>
                        <h4>가게 리스트</h4>
                        <p>가게이름 사용금액 환전금액</p>
                    </div>
                    <div className='list'>
                        <h4>가게 리스트</h4>
                        <p>가게이름 사용금액 환전금액</p>
                    </div>
          
                </div>
        </div>
    );
}

export default Franchise;