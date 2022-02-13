import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, removeContact }) => {
  const { id, name, email } = contact;

  return (
    <div className="item" key={id}>
      <img src={user} alt="user" className="ui avatar image" />
      <div className="content">
        <Link
          to={{
            pathname: `/contact/${id}`,
          }}
          state={{ contact: contact }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <Link to="/delete" state={{ contact: contact }}>
        <i
          className="trash alternate outline icon"
          style={{
            color: "red",
            margin: ".6rem",
            float: "right",
            cursor: "pointer",
          }}
          // onClick={() => getId(id)}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
