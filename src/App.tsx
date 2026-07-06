import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";

import { navigationLinks } from "./data/navigationLinks";

function App() {
  return (
    <>
      <NavBar navigationLinks={navigationLinks} />
      <Hero />
      <About
        members={[
          {
            id: 1,
            name: "Elminster",
            description: "Notre spécialiste des livres",
          },
          {
            id: 2,
            name: "Artemis",
            description: "Notre spécialiste des accessoires",
          },
          {
            id: 3,
            name: "Bruenor",
            description: "Notre spécialistes des figurines",
          },
        ]}
      />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
