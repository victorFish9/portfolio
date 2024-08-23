import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"
export const ProjectCard = ({ id, title, description, imgUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <p><Link to={`/projects/${id}`}>More info</Link></p>
                </div>
            </div>
        </Col>
    )
} 