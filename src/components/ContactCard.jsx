import React, { useContext } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import { ContactsContext } from "../context/ContactsContext";

const ContactCard = ({ contact, index, onShow, onEdit}) => {
    const {deleteContact} = useContext(ContactsContext);
  return (
    <li className="w-[100%] px-4 py-2 flex justify-between items-center bg-white rounded-md">
      <p className="">{index}</p>
      <div className="flex justify-center items-center gap-x-2 mr-[150px] grow-0">
        <p>
          <IoPersonCircleOutline className="text-4xl" />
        </p>
        <div className="">
          <p>{contact.name}</p>
          <p>{contact.mobile}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-2">
        <button type="button" className="" onClick={() => onShow(contact.id)}>
          <IoEye />
        </button>
        <button type="button" className="" onClick={() => deleteContact(contact.id)}>
          <RiDeleteBin7Fill />
        </button>
        <button type="button" className="" onClick={() => onEdit(contact.id)}>
          <FaPen className="text-sm"/>
        </button>
      </div>
    </li>
  );
};

export default ContactCard;
