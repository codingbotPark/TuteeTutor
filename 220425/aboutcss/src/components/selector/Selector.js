import React, { useState } from "react";

import "./Selector.css";

const Selector = () => {
  const [selectorList, setSeletorList] = useState([
    {
      id: 0,
      comment: ": hover",
    },
    {
      id: 1,
      comment: ": active",
    },
    {
      id: 2,
      comment: ": visited",
    },
    {
      id: 3,
      comment: ": focus",
    },
  ]);

  function toDown() {
    window.scrollTo({
      top: 1200,
      behavior: "smooth",
    });
  }

  const [isHover, setIsHover] = useState(false);

  return (
    <div className="selectorContainer">
      <h1 className="selectorBasic" 
      onMouseLeave={() => setIsHover(false)}
      >
        그냥 css줄 때 선택하는거(태그, 클래스, 아이디)
        <div 
        onMouseEnter={() => setIsHover(true)}
        >조금 더 알아보면?</div>
        {isHover && (
          <ul>
            <li>
              <a href="https://axce.tistory.com/78" target="_blank">
                복합 선택자
              </a>
            </li>
            <li className="selectorUnder" onClick={toDown}>
              가상 선택자
            </li>
          </ul>
        )}
      </h1>
      <div className="selectorMore">
        <h1 className="selectorHover">테스트 : hover</h1>
        <h1 className="selectorActive">테스트 : active</h1>
        <h1 >테스트 : focus</h1>
        <input className="selectorFocus" type="text" placeholder="테스트 : focus"/>
        <h1 className="selectorLast">
        <a href="https://flukeout.github.io/">선택자 국룰 게임</a>
        </h1>
      </div>
    </div>
  );
};

export default Selector;
