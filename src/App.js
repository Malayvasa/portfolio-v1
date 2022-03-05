import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import E404 from "./routes/404";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
