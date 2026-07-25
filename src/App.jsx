import Navbar from "./components/Navbar";
import DynamicBackground from "./components/DynamicBackground";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
  return (
    <div className="relative">
      <DynamicBackground />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <About />
        </main>
      </div>
    </div>
  );
}

export default App;