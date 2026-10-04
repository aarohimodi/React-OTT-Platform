import React from "react";

function Trailer({ trailer, setTrailer }) {
  return (
    <div className="fixed z-50 inset-0  p-10 bg-black/50  h-screen rounded-lg">
      <div className="flex justify-between mb-3">
        <div></div>
        <button
          onClick={() => setTrailer("")}
          className="bg-red-600 px-4 py-2 text-white rounded-lg"
        >
          Close
        </button>
      </div>
      <iframe width="100%" height="500" src={trailer} allowFullScreen />
    </div>
  );
}

export default Trailer;
{
  Trailer;
}
