import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe.js';
import Services from './components/Services.js';
import Experiences from './components/Experiences.js'
import Portfolio from './components/Portfolio.js'
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';

function App() {
  return (
    <>    
    <Navbar /> 
    <Header />
    <AboutMe />
    <Services />
    <Experiences />
    <Portfolio />
    <Testimonials />
    <Contacts />
    </>
  );
}

export default App;
