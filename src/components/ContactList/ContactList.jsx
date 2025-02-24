import Contact from '../Contact/Contact'

export default function ContactList({ contacts, handleClickDelete }) {
    return (
        <ul>
            {contacts.map((item) => (<li key={item.id}><Contact contact={item} handleClickDelete={ handleClickDelete} /></li>))}
        </ul>
    )
}