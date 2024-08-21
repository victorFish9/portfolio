import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { ProjectDetail } from './components/ProjectDetail';
import projects from './projects-file'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          {/* Home route showing all sections */}
          <Route path="/portfolio" element={
            <>
              <Banner />
              <Skills />
              <Projects />
              <Footer />
            </>
          } />

          {/* Project detail route */}
          <Route path="/projects/:projectId" element={<ProjectDetail projects={projects} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
