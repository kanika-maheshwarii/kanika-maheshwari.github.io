import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Works from "./components/Works/work";
import Projects from './components/Projects/project';
import Skills from "./components/Skills/skill";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Works/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
