import React from "react";
import user from "../images/user.jpg";
import { useLocation } from "react-router-dom";
const ContactDetail = () => {
  const location = useLocation();
  const { contact } = location.state;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{contact.name}</div>
          <div className="description">{contact.email}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
