import './App.css';
import NavBar from './components/navBar/NavBar';
import Presentation from './pages/Presentation';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Presentation />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
