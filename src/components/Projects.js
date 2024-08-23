import { Col, Row, Container, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

import projects1 from '../projects-file'

export const Projects = () => {

    const filterProjects = (language) => {
        return projects1.filter(project => project.language === language)
    }

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <h2>Projects</h2>
                                    <p>Explore our diverse range of projects, from design and development to marketing strategies and beyond.</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">JavaScript</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Java</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Python</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            filterProjects('JavaScript').map((project, index) => (
                                                <ProjectCard key={index} {...project} />
                                            ))
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            filterProjects('Java').map((project, index) => (
                                                <ProjectCard key={index} {...project} />
                                            ))
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            filterProjects('Python').map((project, index) => (
                                                <ProjectCard key={index} {...project} />
                                            ))
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src="" alt="Background" />
        </section>
    );
}
