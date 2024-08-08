import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import { useState, useEffect } from "react"
import headerImg from '../photo/header-img.png'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web developer", "Web Designer", "UI/UX Designer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000
    const icons = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    ]
    const [currentIconIndex, setcurrentIconIndex] = useState(0)

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        const imageTicker = setInterval(() => {
            setcurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length)
        }, 1000)

        return () => {
            clearInterval(ticker)
            clearInterval(imageTicker)
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my portfolio
                        </span>
                        <h1>{'Hi I am Victor '}<span className="wrap">{text}</span></h1>
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