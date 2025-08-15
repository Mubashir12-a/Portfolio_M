import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import AboutSec from './components/AboutSec';
import AboutDetailed from './components/AboutDetailed';

function App() {
  return (
    <Router>
      <Header/>
      <AboutSec/>
      <AboutDetailed/>
      <Footer/>
    </Router>
  );
}

export default App;
