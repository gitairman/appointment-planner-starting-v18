import React from "react";

export const ContactPicker = ({contacts, handleOnChange, value, name}) => {
  return (
    <>
    <select onChange={handleOnChange} value={value} name={name}>
      <option value="">No Contact Selected</option>
      {contacts.map(contact => (
        <option>{contact.name}</option>
      ))}
    </select>
    </>
  );
};
