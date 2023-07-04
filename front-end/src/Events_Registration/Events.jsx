import { useState, json } from "react";
import React from "react";
import { eventsFields } from "./fields";
import Input from "../forms/input";
import FormAction from "../forms/formaction";

const fields = eventsFields;
let fieldState = {};

fields.forEach((field) => (fieldState[field.id] = ""));

export default function EventForm() {
  const [eventState, seteventState] = useState(fieldState);

  const handleChange = (e) => {
    seteventState({ ...eventState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or data handling here
    registerEvent();
  };

  const registerEvent = async () => {
    const result = await fetch("https://server-five-wine.vercel.app//api/events/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventState),
    });

    const jsonData = await result.json();
    console.log(jsonData);
    alert(jsonData.success);
    window.location.reload();
  };

  return (
    <div
      className="h-screen flex flex-col md:flex-row justify-evenly bg-cover bg-center"
      style={{ backgroundImage: `url("/pic16.jpg")`, opacity: "0.7" }}
    >
      <div className="flex flex-col items-center justify-center bg-transparent">
        <div className="bg-white">
          <h1 className="uppercase font-bold text-2xl underline">
            Registration Form
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-4 space-y-6 w-96 bg-red-200 p-2 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100"
        >
          <div className="">
        {
          fields.map((field) => (
            <Input 
            key={field.id}
            handleChange={handleChange}
            value={eventState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            />
            ))
          }
        <FormAction handleSubmit={handleSubmit} text={'Register'} />
      </div>
    </form>
    </div>
    <div className="flex flex-col items-center justify-center">
        <div className="bg-white">
          <h1 className="uppercase font-bold text-2xl underline">
            Registration Instruction
          </h1>
        </div>
        <div className="mt-4 space-y-6 w-96 bg-red-200 p-2">
          <ul className="list-disc pl-8">
          <li>Event-Type: Specify the type of event (e.g., Music, Comedy, Poetry, etc.).</li>
          <li>Event Location: Enter the Bing URL of the event's location or venue.</li>
          <li>Rating: Provide a rating for the event on a scale of 1 to 5.</li>
          <li>Money: Enter the amount of money required for attending the event (e.g., ticket price, entrance fee, etc.).</li>
          <li>Event Date: Specify the date of the event in the format dd-mm-yyyy.</li>
          <li>Event Time: Enter the start time or duration of the event (e.g., 7:00 PM, 2 hours, etc.).</li>

        </ul>
      </div>
    </div>
    </div>
  );
}
