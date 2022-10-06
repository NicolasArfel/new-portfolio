import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
