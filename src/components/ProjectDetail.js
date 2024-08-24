import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


export const ProjectDetail = ({ projects }) => {
    const { projectId } = useParams();
    const project = projects.find(proj => proj.id === projectId);
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!project) {
        return <div>Project not found!</div>;
    }

    const { title, description, images, sourceCode, siteLink } = project;

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
            {sourceCode && siteLink ? (<div>
                <p>
                    <a href={sourceCode} target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>
                        Open source code
                    </a>
                    <br></br>
                    <a href={siteLink} target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>
                        Live site
                    </a>
                </p>
            </div>) : sourceCode ? (
                <p>
                    <a href={sourceCode} target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>
                        Open source code
                    </a>
                </p>
            ) : siteLink ? (
                <p>
                    <a href={siteLink} target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>
                        Live site
                    </a>
                </p>
            ) : null}
            <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};
