import { useEffect, useState } from 'react'
import axios from 'axios'

const CustomerPage = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    // Fetch data from the API
    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          'http://localhost/public/api/contacts'
        )
        alert(JSON.stringify(response.data))
        setContacts(response.data)
      } catch (error) {
        console.error('Error fetching contacts:', error)
      }
    }

    fetchContacts()
  }, [])

  const handleMarkAsRead = async (id) => {
    try {
      // Update the status to "read"
      await axios.put(`http://localhost/public/api/contacts/${id}`, {
        status: 'read'
      })
      // Update the local state
      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === id ? { ...contact, status: 'read' } : contact
        )
      )
    } catch (error) {
      console.error('Error updating contact status:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      // Delete the contact
      await axios.delete(`http://localhost/public/api/contacts/${id}`)
      // Update the local state
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== id)
      )
    } catch (error) {
      console.error('Error deleting contact:', error)
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customer Contacts</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Message
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Status
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Actions
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr
                key={contact.id}
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="border border-gray-300 px-4 py-2">
                  {contact.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {contact.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {contact.message}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {contact.status}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {contact.status === 'unread' && (
                    <button
                      onClick={() => handleMarkAsRead(contact.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Mark as Read
                    </button>
                  )}
                  {contact.status === 'read' && (
                    <button
                      onClick={() => handleMarkAsResponded(contact.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Mark as Responded
                    </button>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CustomerPage
