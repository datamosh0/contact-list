import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import Delete from "./Delete";
function App() {
  const LOCAL_STORAGE_KEY = "storage";
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const removeContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
    navigate("/");
  };

  useEffect(() => {
    const retrievedContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrievedContacts) setContacts(retrievedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Header />
      <div className="ui container">
        <Routes>
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
            exact
          ></Route>
          <Route
            path="/"
            element={
              <ContactList contacts={contacts} removeContact={removeContact} />
            }
          ></Route>
          <Route path="/contact/:id" element={<ContactDetail />}></Route>
          <Route
            path="/delete"
            element={<Delete removeContact={removeContact} />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
