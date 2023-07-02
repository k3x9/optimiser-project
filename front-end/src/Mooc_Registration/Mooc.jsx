import { useState, json } from "react";
import React from "react";
import { moocFields } from "./fields";
import Input from "../forms/input";
import FormAction from "../forms/formaction";

const fields = moocFields;
let fieldState = {};

fields.forEach((field) => (fieldState[field.id] = ""));

export default function MoocForm() {
  const [moocState, setmoocState] = useState(fieldState);

  const handleChange = (e) => {
    setmoocState({ ...moocState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or data handling here
    registerCourse();
  };

  const registerCourse = async () => {
    const result = await fetch("http://localhost:3000/api/mooc/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(moocState),
    });

    const jsonData = await result.json();
    console.log(jsonData);
    alert(jsonData.success);
    window.location.reload();
  };

  return (
    <div className="flex flex-col  items-center h-[2000px] z-[999]">

    <form onSubmit={handleSubmit} className="mt-4 space-y-6 w-96 ">
      <div className="">
        {
          fields.map((field) => (
            <Input 
            key={field.id}
            handleChange={handleChange}
            value={moocState[field.id]}
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
  );
}
