import contacts from '../contacts.json'
import { useState } from 'react'
import ContactItem from './ContactItem'

const ContactsTable = (props) => {
  const [contactsList, setContactsList] = useState(contacts.slice(0, 16))
  return (
    <>
      <h1>IronContacts</h1>
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
