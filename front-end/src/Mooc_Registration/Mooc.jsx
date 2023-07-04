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
    const result = await fetch("http://server-five-wine.vercel.app//api/mooc/register", {
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
    <div
      className="h-screen flex flex-col md:flex-row justify-evenly bg-cover bg-center"
      style={{ backgroundImage: `url("/pic17.jpg")`, opacity: "1" }}
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
            {fields.map((field) => (
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
            ))}
            <FormAction handleSubmit={handleSubmit} text={"Register"} />
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white">
          <h1 className="uppercase font-bold text-2xl underline">
          </h1>
        </div>
        <div className="mt-4 space-y-6 w-96 bg-red-200 p-2 bg-transparent">
          <ul className="list-disc pl-8">
          </ul>
        </div>
      </div>
    </div>
  );
}
