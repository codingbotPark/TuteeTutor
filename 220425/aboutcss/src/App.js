import react from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Main from "./components/main/main"

function App() {
  return (
    <div style={{backgroundColor:"black"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
