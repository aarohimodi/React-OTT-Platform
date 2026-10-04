import React from "react";
import Button from "./Button";

function MovieCard({ data, setTrailer, addToWatchlist }) {
  return (
    <div className="rounded-lg bg-[#18181B] p-3">
      <img src={data.image} className="w-full h-[300px] " />
      <h2 className="text-[20px] capitalize py-3">{data.title}</h2>
      <div className="flex justify-between">
        <button
          className="bg-red-500 text-white rounded-lg px-3 py-1"
          onClick={() => setTrailer(data.trailer)}
        >
          Watch Trailer
        </button>
        <button
          className="bg-red-500 text-white rounded-lg px-3 py-1"
          onClick={() => addToWatchlist(data)}
        >
          Add to Watchlist
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
