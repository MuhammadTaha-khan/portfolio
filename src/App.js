import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Education from './Education';
import Services from './Services';
import Projects from './Projects';
import Msg from './Msg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SkillChart from './SkillChart';


function App() {
  return (
    //     <Router>
    //     <div className="App">
    //       <Navbar/>
    //     <Routes>
    //           <Route path="/" element={<Home/>} />
    //           <Route path="/About" element={<About/>} />
    //           <Route path="/Education" element={<Education/>} />
    //           <Route path="/Services" element={<Services/>} />
    //           <Route path="/Projects" element={<Projects/>} />
    //           <Route path="/Msg" element={<Msg/>} />     
    //     </Routes>
    //     </div>
    //     </Router>
    //   );
    // }


    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<SinglePage />} />
        </Routes>
      </div>
    </Router>
  );
}

const SinglePage = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="Skill">
        <SkillChart />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="msg">
        <Msg />
      </section>

    </div>
  );
}

export default App;
