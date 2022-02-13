import React from "react";
import { useLocation } from "react-router-dom";

const Delete = ({ removeContact }) => {
  const library = useLocation();
  const { contact } = library.state;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="content">
          <div className="header">{contact.name}</div>
          <div className="description">{contact.email}</div>
        </div>
        <div
          className="ui button red"
          onClick={() => removeContact(contact.id)}
        >
          Delete Contact?
        </div>
      </div>
    </div>
  );
};

export default Delete;
