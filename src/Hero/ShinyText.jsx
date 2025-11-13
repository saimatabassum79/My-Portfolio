import React from "react";

const ShinyText = ({ text = "Golam Faruk Adnan" }) => {
    return (
        <h1
            className="sm:text-xl text-[15px] font-bold bg-clip-text text-transparent"
            style={{
                backgroundImage: "linear-gradient(90deg, #56c5f4, rgba(255,255,255,0.3), #9ca3af, #56c5f4)",

                backgroundSize: "200% auto",
                animation: "shine 5s linear infinite",
            }}
        >
            {text}
            <style>
                {`
          @keyframes shine {
            0% { background-position: -200%; }
            100% { background-position: 200%; }
          }
        `}
            </style>
        </h1>
    );
};

export default ShinyText;
