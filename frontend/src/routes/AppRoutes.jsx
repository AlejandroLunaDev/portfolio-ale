import Home from "../home/pages/Home"
import About from "../about/pages/About"
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
