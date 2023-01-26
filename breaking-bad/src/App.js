import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Iced from "./pages/Iced";

function App() {
  return (
    <Router>
      <nav>
        <ul style={{ display: "flex", listStyleType: "none" }}>
          <li>
            <Link to="/">HOT</Link>
          </li>
          <li style={{ marginLeft: "20px" }}>
            <Link to="/iced">ICED</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/iced" element={<Iced />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
