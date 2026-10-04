import React from "react";

function Button({ title, setTrailer, link }) {
  return (
    <button
      className="bg-red-500 text-white rounded-lg px-3 py-1"
      onClick={() => setTrailer(link)}
    >
      {title}
    </button>
  );
}

export default Button;
