import "./styles.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./components/navBar/Nav";
import Home from "./components/pages/Home";
import Articles from "./components/pages/Articles";
import About from "./components/pages/About";
import Forms from "./components/pages/Forms";
import NotFound from "./components/pages/NotFound";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Hello React</h1>
          <Nav></Nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Forms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
