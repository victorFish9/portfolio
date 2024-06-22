const Note = ({ note }) => {
    return (
        <>
            <li className="note">
                <h2>{note.content}</h2>
                <p>
                    {note.description}
                </p>
                <iframe width="560"
                    height="315"
                    src={note.link}
                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </li>

        </>
    )
}

export default Note