export default function ContactList({search, handleChange}) {
    return (
        <>
            <p>Find contacts by name</p>
            <input type="text" value={search} onChange={handleChange}  />
        </>
    )
}