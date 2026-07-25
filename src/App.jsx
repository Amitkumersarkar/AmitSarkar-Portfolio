import { motion } from "motion/react";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-semibold tracking-tight md:text-7xl"
      >
        Amit Sarkar
      </motion.h1>
    </main>
  );
}

export default App;