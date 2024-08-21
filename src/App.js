import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { ProjectDetail } from './components/ProjectDetail';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const projects = [
    {
      id: "1",
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://t4.ftcdn.net/jpg/02/38/40/55/360_F_238405533_yyX4K55OmH2LiM7LQ01ITn6kl0b6J6K8.jpg",
    },
    {
      id: "2",
      title: "Business End",
      description: "Design & Development",
      imgUrl: "https://t4.ftcdn.net/jpg/02/38/40/55/360_F_238405533_yyX4K55OmH2LiM7LQ01ITn6kl0b6J6K8.jpg",
    },
    {
      id: "3",
      title: "Business Expansion",
      description: "Marketing & Strategy",
      imgUrl: "https://t4.ftcdn.net/jpg/02/38/40/55/360_F_238405533_yyX4K55OmH2LiM7LQ01ITn6kl0b6J6K8.jpg",
    }
  ];

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
