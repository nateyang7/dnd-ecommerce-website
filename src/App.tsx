// src/App.tsx

import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <About />
      <Contact />
    </>
  );
}

export default App;
