import { useState, json } from "react";
import React from "react";
import { foodFields } from "./fields";
import Input from "../forms/input";
import FormAction from "../forms/formaction";

const fields = foodFields;
let fieldState = {};

fields.forEach((field) => (fieldState[field.id] = ""));

export default function FoodForm() {
  const [foodState, setFoodState] = useState(fieldState);

  const handleChange = (e) => {
    setFoodState({ ...foodState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or data handling here
    registerFood();
  };

  const registerFood = async () => {
    const result = await fetch("http://server-five-wine.vercel.app//api/food/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodState),
    });

    const jsonData = await result.json();
    console.log(jsonData);
    alert(jsonData.success);
    window.location.reload();
  };

  return (
    <div
      className="h-screen flex flex-col md:flex-row justify-evenly bg-cover bg-center"
      style={{ backgroundImage: `url("/pic13.jpg")`, opacity: "1" }}
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
                value={foodState[field.id]}
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
            Registration Instruction
          </h1>
        </div>
        <div className="mt-4 space-y-6 w-96 bg-red-200 p-2">
          <ul className="list-disc pl-8">
            <li>
              Average Money: Enter the average price range for a meal at the
              restaurant
            </li>
            <li>Food Preference: VEG/NON-VEG/BOTH(CASE SEBSITIVE)</li>
            <li>Loacation: Provide the Bing map URL of the restaurant</li>
            <li>Rating: Enter the rating of the restaurant from 1 to 5</li>
            <li>
              Average Money:Enter the average price range for a meal at the
              restaurant
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
