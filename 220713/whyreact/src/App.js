import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Main from "./main/Main";
import Counter from "./counter/Counter";
import main from "./main/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navBar">
          <Link to="/">Main</Link>
          <Link to="/counter">Counter</Link>
        </div>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// https://velog.io/@youthfulhps/React-React%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0

// 한 마디로 동적인 페이지를 위해 <=> 그냥 사전을 만든다? html 쓰셈
// 하지만 요즘은 웹 페이지 <=> 웹 어플리케이션이라는 말도 있을만큼 동적인 페이지가 주를 이룬다

// 페이지가 많이 변한다? > DOM변화가 많이 생긴다
// > 랜더 트리 재생성, 요소의 스타일 계산, 레이아웃 구성, 패인팅이 다시 이루어짐
// 브라우저 동작 과정은

// DOM트리 구축(HTML 파싱)
// ->
// 렌더 트리 구축(css 파싱와 함께 html표시 규칙)
// ->
// 렌더 트리 배치
// ->
// 렌더 트리 그리기

// DOM = Document Object Model
// 웹페이지는 문서, 그런 문서를 해석(parsing)해서,
// 문서를 표현, 저장, 조작을 돕는다
// document.~~는 그래서 브라우저

// https://www.youtube.com/watch?v=mFawNZz_Uu0&t=220s

// ! 그래서 프론트엔드의 라이브러리/프레임 워크는 DOM관리와 상태 변환 관리를 최소화, 개발자는 개발에만 집중할 수 있다

// 리액트인 이유?
// 관련 자료가 많다, 사람들이 많이 사용한다
// Virtual DOM이 있어서 DOM의 렌더링을 최소화 한다
// 최초는 아니지만 선두주자

// Virtual DOM에 미리 적용시켜서 보는데, 이는 랜더링 과정이 필요 없어서 연산 비용이 적다고 한다..
// 또 어떤게 바뀌었는지 자동으로 파악해서 필요한 DOM만 업데이트

export default App;
