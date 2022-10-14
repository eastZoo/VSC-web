import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Youtube from "./components/Youtube";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Sidebar from "./Layout/Sidebar"
import Test from "./components/Test";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
        <Routes>
          <Route path="/youtube" element={<Youtube />}></Route>
        </Routes>
        <Routes>
          <Route path="/code" element={<Test />}></Route>
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
