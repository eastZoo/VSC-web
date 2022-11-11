import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Youtube from "./components/Youtube";
import Header from "./Layout/Header";
import Main from "./components/Main";
import Sidebar from "./Layout/Sidebar"
import Twitch from "./components/Twitch";
import Tistory from "./components/Tistory";
import Cafe from "./components/Cafe";
import './App.css'
import Help from "./components/Help";

function App() {
  return (
    <>
      <Router>
        <Header />
        <section className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Main />}></Route>
          </Routes>
          <Routes>
            <Route path="/youtube" element={<Youtube />}></Route>
          </Routes>
          <Routes>
            <Route path="/twitch" element={<Twitch />}></Route>
          </Routes>
          <Routes>
            <Route path="/tistoy" element={<Tistory />}></Route>
          </Routes>
          <Routes>
            <Route path="/cafe" element={<Cafe />}></Route>
          </Routes>
          <Routes>
            <Route path="/help" element={<Help />}></Route>
          </Routes>
        </section>
      </Router>
    </>
    
  );
}

export default App;
