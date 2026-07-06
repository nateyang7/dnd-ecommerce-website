import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";

import { navigationLinks } from "./data/navigationLinks";
import { members } from "./data/members";

function App() {
  return (
    <>
      <NavBar navigationLinks={navigationLinks} />
      <Hero />
      <About members={members} />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
