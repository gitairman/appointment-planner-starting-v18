import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label for="name">Name: </label>
      <input name="name" type="text" onChange={({target}) => setName(target.value)} value={name}/>
      <label for="phone">Phone: </label>
      <input name="phone" type="text" onChange={({target}) => setPhone(target.value)} value={phone} pattern="^\d{10}$" title="Ten digit phone number"/>
      <label for="email">Email: </label>
      <input name="email" type="text" onChange={({target}) => setEmail(target.value)} value={email}/>
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

