import Navigation from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import Register from "./pages/Register";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col min-h-screen">
        {/* Main Content */}
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
