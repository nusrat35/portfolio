import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Research from "./components/Research";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

function App() {
  return (
    <>
    <NavBar />
    <Home />
    <main id="main">
        <About />        
        <Resume />
        <Skills />
        <Portfolio />
        <Research />
        <Contact />
    </main>
    <Footer />
    </>
  );
}

export default App;
