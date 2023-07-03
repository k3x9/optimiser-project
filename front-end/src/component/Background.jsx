import React from 'react';
import "./bg.css";

const BGV = () => {
    return (
        <div className="fixed w-full h-full bg-cover bg-center bg-video">
            <video autoPlay loop muted className="w-full h-full object-cover opacity-75">
                <source src="/video02.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default BGV;
