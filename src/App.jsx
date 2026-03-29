import './App.css'
import { Routes, Route } from "react-router-dom";

import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Nabar'
import Projects from './components/Project'
import Services from './components/Services'
import ToolsUsed from './components/ToolsUsed'
import ServiceDetails from './components/ServiceDetails'
import LogoAnimation from './components/LogoAnimation';

/* ✅ YOUR OLD PAGE → NOW HOME */
function Home() {
  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <Navbar />
      <Hero />
      <Services />
      <About />
      {/* <ToolsUsed /> */}
      <LogoAnimation/>
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* ✅ Homepage */}
      <Route path="/" element={<Home />} />

      {/* ✅ New Service Page */}
      <Route
        path="/service/:name"
        element={
          <>
            <Navbar />
            <ServiceDetails />
          </>
        }
      />
    </Routes>
  );
}

export default App;