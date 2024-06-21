const Note = ({ note }) => {
    console.log(note)
    return (
        <>
            <li className="note">
                {note.content}
                <p></p>
                {note.description}
            </li>

        </>
    )
}

export default Note