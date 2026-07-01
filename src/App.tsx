// src/App.tsx

import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
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
      <Footer />
    </>
  );
}

export default App;
