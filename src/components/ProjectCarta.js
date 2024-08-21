export const ProjectCarta = ({ imgUrl, title, description }) => {
    return (
        <div>
            <div class="card" >
                <img src={imgUrl} />
                <div class="card-details">
                    <p class="text-title" >{title}</p>
                    <p class="text-body">{description}</p>
                </div>
                <button class="card-button">More info</button>
            </div>
        </div>
    )
}