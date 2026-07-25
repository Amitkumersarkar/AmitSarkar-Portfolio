import Navbar from "./components/Navbar";
import DynamicBackground from "./components/DynamicBackground";
import Hero from "./sections/Hero";

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
        </main>
      </div>
    </div>
  );
}

export default App;