import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
// import Header from './components/Header';
// import Footer from './components/Footer';
// import AboutSec from './components/AboutSec';
// import AboutDetailed from './components/AboutDetailed';
// import Skills from './components/Skills';
import ProjectSec from './components/ProjectSec';

function App() {
  return (
    <Router>
      {/* <Header/>
      <AboutSec/>
      <AboutDetailed/>
      <Skills/>
      <Footer/> */}

      <ProjectSec/>
    </Router>
  );
}

export default App;
