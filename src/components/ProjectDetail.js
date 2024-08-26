import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const ProjectDetail = ({ projects }) => {
    const { projectId } = useParams();
    const project = projects.find(proj => proj.id === projectId);
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const techIcons = {
        // https://devicon.dev/
        "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    };

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    if (!project) {
        return <div>Project not found!</div>;
    }

    const { title, description, images, sourceCode, siteLink, technology } = project;


    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="project-detail-container">
            <h2>{title}</h2>
            <div className="image-carousel">
                {images.length > 1 && (
                    <button className="carousel-button prev" onClick={prevImage}>
                        ‹
                    </button>
                )}
                <div className="image-wrapper">
                    <img src={images[currentImageIndex]} alt={`${title} - ${currentImageIndex + 1}`} />
                </div>
                {images.length > 1 && (
                    <button className="carousel-button next" onClick={nextImage}>
                        ›
                    </button>
                )}
            </div>
            <p>{description}</p>
            <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Technologies Used</h3>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                {technology && technology.length > 0 ? (
                    technology.map((tech, index) => (
                        <div className="item" key={index}>
                            <img src={techIcons[tech]} alt={tech} />
                            <h5>{tech}</h5>
                        </div>
                    ))
                ) : (
                    <p>No technologies listed for this project.</p>
                )}
            </Carousel>

            <br></br>
            {sourceCode && siteLink ? (
                <div>
                    <p>
                        <a href={sourceCode} target="_blank" className="back-button" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                            Open source code
                        </a>
                        <br></br>
                        <br></br>
                        <a href={siteLink} target="_blank" className="back-button" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                            Live site
                        </a>
                    </p>
                </div>
            ) : sourceCode ? (
                <p>
                    <a href={sourceCode} target="_blank" className="back-button" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                        Open source code
                    </a>
                </p>
            ) : siteLink ? (
                <p>
                    <a href={siteLink} target="_blank" className="back-button" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                        Live site
                    </a>
                </p>
            ) : null}
            <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};
