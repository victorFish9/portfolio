import { useParams } from 'react-router-dom';

export const ProjectDetail = ({ projects }) => {
    const { projectId } = useParams();
    const project = projects.find(proj => proj.id === projectId);

    if (!project) {
        return <div>Project not found!</div>;
    }

    return (
        <div>
            <h2>{project.title}</h2>
            <img src={project.imgUrl} alt={project.title} />
            <p>{project.description}</p>
        </div>
    );
};
