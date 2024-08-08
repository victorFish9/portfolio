import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import { useState, useEffect } from "react"
import headerImg from '../photo/header-img.png'

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
                        <span className="tagline">
                            Welcome to my portfolio
                        </span>
                        <h1>{'Hi I am Victor '}<span className="wrap">Web developer</span></h1>
                        <p>simple lorem simple loremsimple loremsimple loremsimple loremsimple loremsimple lorem</p>
                        <button onClick={() => console.log("connect")}>Let's connect<ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={icons[currentIconIndex]} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}