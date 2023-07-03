import { useState, json } from "react";
import React from "react";
import { adventureFields } from "./fields";
import Input from "../forms/input";
import FormAction from "../forms/formaction";

const fields = adventureFields;
let fieldState = {};

fields.forEach((field) => (fieldState[field.id] = ""));

export default function AdventureForm() {
  const [adventureState, setadventureState] = useState(fieldState);

  const handleChange = (e) => {
    setadventureState({ ...adventureState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or data handling here
    registerAdventure();
  };

  const registerAdventure = async () => {
    const result = await fetch("http://localhost:3000/api/adventure/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adventureState),
    });

    const jsonData = await result.json();
    console.log(jsonData);
    alert(jsonData.success);
    window.location.reload();
  };

  return (
    <div className="h-screen flex justify-evenly">

    <div className="flex flex-col  items-center justify-center ">
        <h1 className="uppercase font-bold text-2xl underline">Registration Form</h1>
    <form onSubmit={handleSubmit} className="mt-4 space-y-6 w-96 bg-red-200 p-2">
      <div className="">
        {
          fields.map((field) => (
            <Input 
            key={field.id}
            handleChange={handleChange}
            value={adventureState[field.id]}
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
    <h1 className="uppercase font-bold text-2xl underline">Registration Instruction</h1>
      <div className="mt-4 space-y-6 w-96 bg-red-200 p-2">
        <ul typeof="">
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    </div>
  );
}
