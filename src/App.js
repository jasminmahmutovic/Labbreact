import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Movies from "./Pages/Movies";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="movies" element={<Movies />} />
         </Routes>
    </BrowserRouter>
  );
}

export default App;
