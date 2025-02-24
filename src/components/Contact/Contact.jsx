export default function Contact({ contact, handleClickDelete }) {
    return (
        <>
            <p>{ contact.name }</p>
            <p>{ contact.number }</p>
            <button type="button" onClick={() => handleClickDelete(contact.id)}>Delete</button>
        </>
    )
}