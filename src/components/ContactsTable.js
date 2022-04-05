import contacts from '../contacts.json'
import { useState } from 'react'
import ContactItem from './ContactItem'

const ContactsTable = (props) => {
  const [contactsList, setContactsList] = useState(contacts.slice(0, 5))
  const [remainingContacts, setRemainingContacts] = useState(contacts.slice(5))

  const addRandomContact = () => {
    const newContactList = [...contactsList]
    const newRemainingContactList = [...remainingContacts]

    const pickedIndex = Math.floor(
      Math.random() * newRemainingContactList.length
    )
    const pickedElement = newRemainingContactList.splice(pickedIndex, 1)
    newContactList.push(pickedElement[0])

    setContactsList(newContactList)
    setRemainingContacts(newRemainingContactList)
  }

  return (
    <>
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactsList.map((contactItem) => (
            <ContactItem key={contactItem.id} {...contactItem} />
          ))}
        </tbody>
      </table>
    </>
  )
}
export default ContactsTable
