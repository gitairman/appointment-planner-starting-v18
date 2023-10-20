import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const phonePattern = new RegExp("^\d{10}$");
  const emailPattern = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicateCheck(name)) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    } else {
      alert("Contact Name already exists!");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 function duplicateCheck(name) {
  const duplicateName = (contact) => contact.name === name; //function to look through contactList array of objects
  return contacts.some(duplicateName); //returns true if it is a duplicate and false if not a duplicate
 }

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} phone={phone} email={email} setName={setName} setPhone={setPhone} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objects={contacts}/>
      </section>
    </div>
  );
};
