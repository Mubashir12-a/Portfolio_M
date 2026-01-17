import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Skills from './components/Skills';
import ProjectSec from './components/ProjectSec';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutSec from './components/AboutSec';
import AboutDetailed from './components/AboutDetailed';

import CertificateSec from './components/CertificateSec'


function App() {
  return (
    <>
      <Router>
        
        <Header/>
        <AboutSec/>
        <AboutDetailed/>
        <Skills/>
        <ProjectSec/>
        <Footer/>

        <CertificateSec/>

      </Router>
    </>
  );
}

export default App;

