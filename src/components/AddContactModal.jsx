import React, { useContext, useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ContactsContext } from "../context/ContactsContext";

const AddContact = ({ showAddContact, setShowAddContact }) => {
  const { contacts, addContact } = useContext(ContactsContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const onSubmit = () => {
    const newId =
      contacts.length > 0
        ? Math.max(...contacts.map((contact) => contact.id)) + 1
        : 1;
    const newContact = { id: newId, name, email, mobile };
    if (name.length !== 0 && email.length !== 0 && mobile.length !== 0) {
      addContact(newContact);
      setName('');
      setEmail('');
      setMobile('');
      setShowAddContact(false)
    }
  };

  return (
    <>
      <div className="opacity-5">
        <Dialog
          open={showAddContact}
          onClose={() => setShowAddContact(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
              <DialogTitle className="font-bold border-b-[1px] border-black">
                Contact Details
              </DialogTitle>
              <form className="flex flex-col space-y-1">
                <p className="flex justify-between">Name:</p>
                <input
                  type="text"
                  className="border-[1px] px-2 py-[1px] border-black rounded-sm outline-none text-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <p>Email: </p>
                <input
                  type="text"
                  className="border-[1px] px-2 py-[1px] border-black rounded-sm outline-none text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>Number: </p>
                <input
                  type="text"
                  className="border-[1px] px-2 py-[1px] border-black rounded-sm outline-none text-sm"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                <div className="flex gap-4 mt-3">
                  <button
                    onClick={() => setShowAddContact(false)}
                    className="border-none outline-none bg-red-800 text-white rounded-md px-3 py-1"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={onSubmit}
                    className="border-none outline-none bg-blue-800 text-white rounded-md px-3 py-1"
                  >
                    Add Contact
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default AddContact;
