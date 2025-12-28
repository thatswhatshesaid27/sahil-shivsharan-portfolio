import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Nabar'
import Projects from './components/Project'
import Services from './components/Services'
import ToolsUsed from './components/ToolsUsed'
function App() {
 

  return (
    <>
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
      <ToolsUsed/>
      <Projects />
      <Contact />
    </div>
    </>
  )
}

export default App
