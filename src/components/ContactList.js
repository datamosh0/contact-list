import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
const ContactList = ({ contacts, removeContact }) => {
  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        removeContact={removeContact}
      />
    );
  });

  return (
    <div>
      <h2>
        Contact List
        <Link to="/add" className="ui button blue" style={{ float: "right" }}>
          Add Contact
        </Link>
      </h2>

      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
