import React from "react";

function BlackButton({ text, onClick }) {
  return (
    <button
      className="bg-black text-white mont py-2 px-4 rounded font-semibold"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default BlackButton;
