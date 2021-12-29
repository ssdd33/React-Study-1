import React from "react";
import { Route, Routes, Link } from "react-router-dom";
/*
Link component:
페이지를 새로 불러오지 않고 애플리케이션은 그대로 유지한 상태에서 HTML5 History API를 사용하여 페이지의
주소만 변경해 준다. Link 컴포넌트 자체는 a 태그로 이루어져 있지만, 페이지 전환을 방지하는 기능이 내장되어 있다.
*/
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>| <Link to="/about">About</Link>|{" "}
        <Link to="/profiles">profiles</Link>|{" "}
        <Link to="/history">history 예제</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles" element={<Profiles />}>
          <Route path=":username" element={<Profile />} />
        </Route>
        <Route path="/history" element={<HistorySample />} />
      </Routes>
    </div>
  );
}

export default App;
