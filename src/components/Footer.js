import { Col, Container, Row } from "react-bootstrap"

import LinkedInImg from '../photo/linkedin-svgrepo-com.png'
import logo from '../photo/header-img.png'
import GithubImg from '../photo/github.png'


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Footer image" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/victor-cherkasov-621620221/"><img src={LinkedInImg} /></a>
                        </div>
                        <div className="social-icon">
                            <a href="https://github.com/victorFish9?tab=repositories"><img src={GithubImg} alt="LinkedIn" /></a>
                        </div>
                        <p>victor.cherkasov222@gmail.com</p>
                        <p>CopyRight 2024. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}