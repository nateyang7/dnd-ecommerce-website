// src/App.tsx

import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <Contact />
    </>
  );
}

export default App;
