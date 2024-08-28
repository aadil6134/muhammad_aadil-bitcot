import React, { useContext, useEffect, useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ContactsContext } from "../context/ContactsContext";

const EditContact = ({ contact, showEdit, setShowEdit }) => {
  const { editContact } = useContext(ContactsContext);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [mobile, setMobile] = useState(contact.mobile);

  useEffect(() => {
    setName(contact.name);
    setEmail(contact.email);
    setMobile(contact.mobile);
  }, [contact])

  const onSubmit = () => {
    const newDetails = { id:contact.id, name, mobile, email};
    editContact(newDetails);
    setShowEdit(false);
  };

  return (
    <>
      <div className="opacity-5">
        <Dialog
          open={showEdit}
          onClose={() => setShowEdit(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
              <DialogTitle className="font-bold border-b-[1px] border-black">
                Edit Contact
              </DialogTitle>
              <div className="flex flex-col space-y-1">
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
                    onClick={() => setShowEdit(false)}
                    className="border-none outline-none bg-red-800 text-white rounded-md px-3 py-1"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={onSubmit}
                    className="border-none outline-none bg-blue-800 text-white rounded-md px-3 py-1"
                  >
                    Edit Contact
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default EditContact;
