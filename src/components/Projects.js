import { Col, Row, Container, Tab, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { ProjectCard } from "./ProjectCard";

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectCarta } from "./ProjectCarta";

export const Projects = () => {

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
                            <Nav variant="pills" className="nav-pills mb-2 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        <div className="card-container">
                                            {projects.map((project, index) => {
                                                return (
                                                    <Link to={`/projects/${project.id}`}>
                                                        <ProjectCarta {...project} />
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (

                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        <div className="card-container">
                                            {projects.map((project, index) => {
                                                return (
                                                    <Link to={`/projects/${project.id}`}>
                                                        <ProjectCarta {...project} />
                                                    </Link>
                                                )
                                            })}

                                        </div>
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
