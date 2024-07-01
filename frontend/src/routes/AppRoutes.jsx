import Home from "../home/pages/Home"
import About from "../about/pages/About"
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Projects from "../projects/pages/Projects";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}
