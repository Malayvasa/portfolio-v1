import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import E404 from "./routes/404";

import "./index.css";
import PageTemplate from "./components/PageTemplate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<PageTemplate />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
