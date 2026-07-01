// src/App.tsx

import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
