import { Col, Container, Row } from "react-bootstrap"

import LinkedInImg from '../photo/linkedin-svgrepo-com.png'
import logo from '../photo/header-img.png'


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
                            <a href=""><img src={LinkedInImg} /></a>
                        </div>
                        <p>CopyRight 2022. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}