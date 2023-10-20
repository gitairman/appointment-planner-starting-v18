import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  function handleOnChange(e) {
    setContact(e.target.value);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label for="title">Name: </label>
      <input type="text" name="title" onChange={({target}) => setName(target.value)} value={name}/>
      <label for="date">Date: </label>
      <input type="date" name="date" onChange={({target}) => setDate(target.value)} value={date} min={getTodayString()}/>
      <label for="time">Time: </label>
      <input type="time" name="time" onChange={({target}) => setTime(target.value)} value={time}/>
      <ContactPicker contacts={contacts} handleOnChange={handleOnChange}/>
      <button type="submit">Submit</button>
    </form>
    </>
  );
};
