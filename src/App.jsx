import { useState, useEffect  } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'


function App() {
  const [search, setSearch] = useState('')
  let [contacts, setContact] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem("Contacts"))
    if (savedContacts === null) {
      return [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]
    }
    return savedContacts
  })
      
  const handleSubmit = (values, actions) => {
      const newContact = {
          id: nanoid(), name: values.username, number: values.number
      }
    // contacts.push(contact)
    setContact(prev => [...prev, newContact])
      actions.resetForm();
      
      // console.log(contacts);
  };

  useEffect(() => {
    window.localStorage.setItem("Contacts", JSON.stringify(contacts));
  }, [contacts]);

  let filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(search.trim().toLowerCase()))

  const handleChange = (event) => {
    // filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(search.trim().toLowerCase()))
    setSearch(event.target.value);
  };
  
  const handleClickDelete = (id) => {
    setContact(contacts.filter(contact => contact.id !== id))
  }

  useEffect(() => {
    // console.log("contacts updated: ", contacts);
    }, [contacts, search]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={handleSubmit} />
        <SearchBox onSearch={setSearch} handleChange={handleChange} />
        <ContactList contacts={filteredContacts} handleClickDelete={handleClickDelete} />
      </div>

    </>
  )
}

export default App
