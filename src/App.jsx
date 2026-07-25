import Navbar from "./components/Navbar";
import DynamicBackground from "./components/DynamicBackground";

import Hero from "./sections/Hero";
import About from "./sections/About";
import SelectedWork from "./sections/SelectedWork";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* Background */}
      <DynamicBackground />

      {/* Website */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <About />
          <SelectedWork />
          <Skills />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;