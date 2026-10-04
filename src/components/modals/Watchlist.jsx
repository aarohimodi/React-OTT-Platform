import React from "react";

function Watchlist({ setShowWatchlist, removeWatchlist, watchList }) {
  return (
    <div className="fixed inset-0 z-30  overflow-auto p-10 bg-[#18181B] w-[400px] left-0 top-0  h-screen transition-transform duration-300">
      <div className="flex justify-between mb-3">
        <div>
          <h3 className="text-white">WatchList</h3>
        </div>
        <button
          onClick={() => setShowWatchlist(false)}
          className="bg-red-600 px-4 py-2 text-white rounded-lg"
        >
          Close
        </button>
      </div>
      {watchList.map((item) => (
        <div className="rounded-lg bg-[#18181B] p-3" key={item.key}>
          <img src={item.image} className="w-full h-[300px] object-cover" />
          <h2 className="text-[20px] text-white capitalize py-3">
            {item.title}
          </h2>
          <button
            className="px-4 py-2 bg-gray-950 text-white "
            onClick={() => removeWatchlist(item.title)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Watchlist;
