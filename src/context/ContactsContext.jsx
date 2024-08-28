import React, { createContext, useEffect, useState } from "react";

export const ContactsContext = createContext();

const sampleContacts = [
  {
    id: 1,
    name: "Aaron",
    mobile: "5785664545",
    email: "aaron@gmail.com",
  },
  {
    id: 2,
    name: "Buincy Hanson",
    mobile: "5785664569",
    email: "hanson@gmail.com",
  },
];

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState(sampleContacts);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    console.log("Contacts updated:", contacts);
  }, [contacts]);

  const editContact = (contact) => {
    console.log(contact);
    const updatedContact = contacts.map((each) => {
      if (each.id === contact.id) {
        return { ...each, ...contact };
      }
      return each;
    });
    setContacts(updatedContact);
    console.log(contacts);
  };

  const deleteContact = (id) => {
    const filteredContacts = contacts.filter((each) => {
      if (each.id !== id) {
        return each;
      }
    });
    setContacts(filteredContacts);
  };

  return (
    <ContactsContext.Provider
      value={{ contacts, setContacts, addContact, editContact, deleteContact }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
