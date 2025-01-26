import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner} from  './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import Resume from './components/Resume';
import Experience from './components/Experience';
import  FutureGoals from './components/FutureGoals';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Resume />
      <Experience />
      <FutureGoals />
      <Contact />
      <Footer />
      
      
    </div>
  );
}

export default App;
