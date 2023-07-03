import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ Heading, Content, videoPath, css, registerPath, backgroundImage, searchPath }) => {
  const navigate = useNavigate();

  const registerEvent = () => {
    navigate(registerPath);
  };

  const searchEvent = () => {
    navigate(searchPath);
  };

  return (
    <div
      className={css}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-50 p-4 rounded-lg">
        <div className="text-center text-3xl font-bold uppercase mb-3">{Heading}</div>
        <div className="grid grid-cols-2 h-full text-center gap-4 text-xl">
          <div className="place-self-center">{Content}</div>
          <div className="place-self-center aspect-w-16 aspect-h-9">
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover object-center brightness-75"
            >
              <source src={videoPath} type="video/mp4" />
            </video>
          </div>
        </div>
        <ul className="flex justify-center">
          <li className="px-2 my-2">
            <button
              className="block m-auto px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 aspect-w-16 aspect-h-9"
              onClick={registerEvent}
            >
              Register
            </button>
          </li>
          <li className="px-2 my-2">
            <button
              className="block m-auto px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 aspect-w-16 aspect-h-9"
              onClick={searchEvent}
            >
              Search
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
