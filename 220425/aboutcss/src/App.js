import react from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"


import Main from "./components/main/Main"
import Position from "./components/position/Position";
import Selector from "./components/selector/Selector";
import Display from "./components/display/Display";
import Cascading from "./components/cascading/Cascading";

import NavBar from "./components/navBar/NavBar";

import logo from "./logo.svg"

function App() {

  return (
    <div style={{
      backgroundColor:"#282c34", 
      color:"white",
      minHeight:"100vh",
      width:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      zIndex:"-5",
      }}>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/position" element={<Position/>}/>
          <Route path="/selector" element={<Selector/>}/>
          <Route path="/display" element={<Display/>}/>
          <Route path="/cascading" element={<Cascading/>}/>
          <Route path="*" element={<h1>페이지 못찾음 ㅅㄱ</h1>}/>

        </Routes>
      <img src={logo} style={{
        position:"fixed",
        height:"700px",
        bottom:"-200px",
        right:"-400px",
      }}/>
    </div>
  );
}

export default App;
