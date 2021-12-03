import logo from "./logo.svg";
import "./App.css";
import "./Footer.js"
//import Logo from "./componets/img/logo.PNG";

import { HashRouter, Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap";
import Homepage from "./componets/Homepage";
import Aboutus from "./componets/Aboutus";
import GoToTop from "./GoToTop";
import Events from "./Calendar";

function App() {
  return (
    <Container fluid>
      <HashRouter>
        <GoToTop />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/Aboutus" element={<Aboutus />} />
          <Route exact path="/Events" element={<Events />} />
        </Routes>
      </HashRouter>
    </Container>
  );
}

export default App;
