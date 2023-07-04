import { useState, json } from "react";
import React from "react";
import { movieFields } from "./fields";
import Input from "../forms/input";
import FormAction from "../forms/formaction";

const fields = movieFields;
let fieldState = {};

fields.forEach((field) => (fieldState[field.id] = ""));

export default function MovieForm() {
  const [movieState, setMovieState] = useState(fieldState);

  const handleChange = (e) => {
    setMovieState({ ...movieState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or data handling here
    registerMovie();
  };

  const registerMovie = async () => {
    const result = await fetch("http://localhost:3000/api/movie/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieState),
    });

    const jsonData = await result.json();
    console.log(jsonData);
    alert(jsonData.success);
    window.location.reload();
  };

  return (
    <div className="h-screen flex flex-col md:flex-row justify-evenly bg-cover bg-center" style={{ backgroundImage: `url("/pic12.jpg")`, opacity: "0.8" }}>
      <div className="flex flex-col items-center justify-center bg-transparent">
        <div className="bg-white">
          <h1 className="uppercase font-bold text-2xl underline">Registration Form</h1>
        </div> 
        <form onSubmit={handleSubmit}           className="mt-4 space-y-6 w-96 bg-red-200 p-2 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100"
>
          <div className="">
            {
              fields.map((field) => (
                <Input 
                  key={field.id}
                  handleChange={handleChange}
                  value={movieState[field.id]}
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
          <h1 className="uppercase font-bold text-2xl underline">Registration Instruction</h1>
        </div>
        <div className="mt-4 space-y-6 w-96 bg-red-200 p-2">
          <ul className="list-disc pl-8">
            <li>Movie Name: Enter the name of the movie</li>
            <li>Platform Location: Provide the URL of the movie theatre on Bing Maps, or any other relevant OTT platform.</li>
            <li>Give a rating for the movie on a scale of 1 to 5</li>
            <li>Money: Enter the amount of money required for ticket purchase or movie rental.</li>
            <li>Show Time: Specify the time when the movie will be shown or available for viewing.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
