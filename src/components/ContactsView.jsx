import React, { useContext, useState } from "react";
import { ContactsContext } from "../context/ContactsContext";
import { LuPlusCircle } from "react-icons/lu";
import ContactCard from "./ContactCard";
import ContactDetailsModal from "./ContactDetailsModal";
import AddContact from "./AddContactModal";
import EditContact from "./EditContactModal";

const ContactsView = () => {
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showAddContact, setShowAddContact] = useState(false);
  const { contacts } = useContext(ContactsContext);
  const [contact, setContact] = useState({});
  const [showEdit, setShowEdit] = useState(false);

  const [filteredContacts, setFilteredContacts] = useState([]);

  const onSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);
    setFilteredContacts(
      contacts.filter((each) => {
        if (
          each.name.toLowerCase().includes(text.toLowerCase()) ||
          each.mobile.includes(text)
        ) {
          return each;
        }
      })
    );
  };

  const onShow = (id) => {
    setIsOpen(true);
    const filteredContact = contacts.find((each) => each.id === id);
    setContact(filteredContact);
  };

  const onEdit = (id) => {
    const filteredContact = contacts.find((each) => each.id === id);
    setContact(filteredContact);
    setShowEdit(true);
  };

  const onShowAdd = () => {
    setShowAddContact(true);
  };

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] bg-gray-200 grow-1">
        <div className="min-h-[500px] max-h-[500px] w-[40%] bg-black rounded-md px-4 md:px-[10px] py-2 flex flex-col gap-y-4 overflow-auto">
          <div className="w-[100%] bg-teal-300 p-3 flex justify-center items-center gap-4 text-white rounded-md">
            <p className="text-lg font-medium">All Contacts</p>
            <button className="" onClick={() => onShowAdd()}>
              <LuPlusCircle className="text-xl font-semibold mt-[5px]" />
            </button>
          </div>
          <input
            type="text"
            onChange={onSearch}
            className="w-[50%] border-none outline-none px-3 rounded-md py-1 self-center"
            placeholder="Search Contact"
            value={searchText}
          />
          <ul className="flex flex-col gap-y-2">
            {searchText.length !== 0
              ? filteredContacts.map((each, index) => (
                  <ContactCard
                    key={each.id}
                    contact={each}
                    index={index + 1}
                    onShow={onShow}
                    onShowAdd={onShowAdd}
                    onEdit={onEdit}
                  />
                ))
              : contacts.map((each, index) => (
                  <ContactCard
                    key={each.id}
                    contact={each}
                    index={index + 1}
                    onShow={onShow}
                    onShowAdd={onShowAdd}
                    onEdit={onEdit}
                  />
                ))}
          </ul>
        </div>
      </div>
      <ContactDetailsModal
        contact={contact}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <AddContact
        showAddContact={showAddContact}
        setShowAddContact={setShowAddContact}
      />
      <EditContact
        showEdit={showEdit}
        contact={contact}
        setShowEdit={setShowEdit}
      />
    </>
  );
};

export default ContactsView;
