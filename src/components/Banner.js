import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import { useState, useEffect } from "react"

import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
    const icons = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg"
    ]
    const [currentIconIndex, setcurrentIconIndex] = useState(0)

    useEffect(() => {
        const imageTicker = setInterval(() => {
            setcurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length)
        }, 5000)

        return () => {
            clearInterval(imageTicker)
        }
    })


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">
                                        Welcome to my portfolio
                                    </span>
                                    <h1>{'Hi I am Victor '}<span className="wrap">Web developer</span></h1>
                                    <p>
                                        I build responsive, intuitive websites and develop robust back-end systems to ensure seamless performance and scalability.
                                    </p>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={icons[currentIconIndex]} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}