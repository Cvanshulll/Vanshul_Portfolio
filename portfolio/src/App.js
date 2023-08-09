import About from "./components/About";
import Award from "./components/Awards";
import CoCurr from "./components/CoCurr";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import "./styles.css";

export default function App() {
  return (
    <>
      <div class="container">
        <Navbar />
        <Intro />
        <About />
        <Education />
        <Project />
        <Experience />
        <CoCurr />
        <Award />
        <Contact />
      </div>
    </>
  );
}
