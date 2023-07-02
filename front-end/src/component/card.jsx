import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ Heading, Content, videoPath, css, routePath}) => {
  const navigate = useNavigate();
  const registerEvent = () => {
    navigate(routePath);
  }

  return (
      
    <div className={css}>
      <div className=" text-center text-3xl font-bold uppercase mb-3">{Heading}</div>
      <div className="grid grid-cols-2 h-full text-center gap-4">
        <div className="place-self-center">{Content}</div>
        <div className="place-self-center">
          <video
            autoPlay
            loop
            muted
            className="place-self-center brightness-75"
            height={720}
            width={480}
            >
            <source src={videoPath} type="video/mp4" />
          </video>
        </div>
      </div>
      <ul className="flex justify-center">
        <li className="px-2 my-2">
            <button className="block m-auto px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={registerEvent}>
                Register
            </button>
        </li>
        <li className="px-2 my-2">
            <button className="block m-auto px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Search
            </button>
        </li>
      </ul>
    </div>
  );
}

export default Card
