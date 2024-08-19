import { useParams } from "react-router-dom";

export const ProjectDetail = (props) => {

    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.imgUrl} alt={props.title} />
            <p>{props.description}</p>
        </div>
    )
}