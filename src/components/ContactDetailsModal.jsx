import React from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const ContactDetailsModal = ({ contact, isOpen, setIsOpen }) => (
  <div className="opacity-5 h-[100vh] w-[100%] flex justify-center">
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
          <DialogTitle className="font-bold border-b-[1px] border-black">Contact Details</DialogTitle>
          <div>
            <p className="flex justify-between">
              Name: &nbsp;&nbsp;&nbsp;{contact.name}
            </p>
            <p>Email: &nbsp;&nbsp;&nbsp;{contact.email}</p>
            <p>Number: &nbsp;&nbsp;&nbsp;{contact.mobile}</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => setIsOpen(false)} className="border-none outline-none bg-red-800 text-white rounded-md px-3 py-1">Close</button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  </div>
);

export default ContactDetailsModal;

// open={isOpen} onClose={() => setIsOpen(false)}
