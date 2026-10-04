import { useEffect, useState } from "react";
import Button from "./components/Button";
import { movies } from "./data/movies";
import MovieCard from "./components/MovieCard";
import Trailer from "./components/modals/Trailer";
import Watchlist from "./components/modals/Watchlist";
function App() {
  const [trailer, setTrailer] = useState("");
  const [hoverMovie, setHoverMovie] = useState(null);
  console.log(hoverMovie);
  const [search, setSearch] = useState("");
  const searchedMovie = movies.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });
  const [watchList, setWatchList] = useState(() => {
    return JSON.parse(localStorage.getItem("watchlist")) || [];
  });

  const addToWatchlist = (movie) => {
    const isAlready = watchList.find((i) => i.title === movie.title);
    if (isAlready) {
      return;
    }
    setWatchList([...watchList, movie]);
  };
  const removeWatchlist = (title) => {
    const updatedWatchlist = watchList.filter((i) => {
      return i.title !== title;
    });
    setWatchList(updatedWatchlist);
  };
  const [showWatchlist, setShowWatchlist] = useState(false);
  const [categoryTab, setCategoryTab] = useState("All");
  const categories = [
    "All",
    "Comedy",
    "Science Fiction",
    "History",
    "Action",
    "Romantic",
    "Thriller",
  ];
  const filteredMovie = movies.filter((item) => {
    return categoryTab === "All" ? true : item.category === categoryTab;
  });
  const visibleCards = 3;
  const [index, setIndex] = useState(0);
  const visibleSlide = movies.slice(index, index + visibleCards);
  const leftArrow = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const rightArrow = () => {
    if (index < movies.length - visibleCards) {
      setIndex(index + 1);
    }
  };
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchList));
  }, [watchList]);
  return (
    <>
      <div className="flex justify-between items-center py-7">
        <h1 className="text-white text-xl">Netflix Clone</h1>
        <button
          onClick={() => setShowWatchlist((prev) => !prev)}
          className="bg-red-600 px-4 py-2 text-white rounded-lg"
        >
          WatchList {watchList.length}
        </button>
      </div>
      <input
        className="border w-full rounded-lg py-2 pl-2 mb-3"
        placeholder="Search Here..."
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {trailer && <Trailer trailer={trailer} setTrailer={setTrailer} />}
      {showWatchlist && (
        <Watchlist
          setShowWatchlist={setShowWatchlist}
          watchList={watchList}
          removeWatchlist={removeWatchlist}
        />
      )}

      <div className="grid grid-cols-1  md:grid-cols-3 gap-2">
        {searchedMovie.map((item) => (
          <MovieCard
            key={item.title}
            data={item}
            setTrailer={setTrailer}
            addToWatchlist={addToWatchlist}
          />
        ))}
      </div>
      <section className="py-4">
        <div className="flex justify-between items-center py-7 ">
          <h1 className="text-white text-xl">Categories</h1>
        </div>
        <div className="flex gap-3 flex-wrap">
          {categories.map((item) => (
            <button
              onClick={() => setCategoryTab(item)}
              key={item}
              className={`${categoryTab === item ? "bg-red-500 text-white" : "bg-white text-black"} border border-gray-100  rounded-lg px-4 py-2`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1  md:grid-cols-4 gap-2 mt-3">
          {filteredMovie.map((item) => (
            <div
              className="rounded-lg bg-[#18181B] p-3 relative"
              key={item.key}
              onMouseEnter={() => setHoverMovie(item)}
              onMouseLeave={() => setHoverMovie(null)}
              // onClick={() => setTrailer(item.trailer)}
            >
              <img src={item.image} className="w-full h-[300px] object-cover" />
              <h2 className="text-[20px] capitalize py-3">{item.title}</h2>

              <div
                className={`absolute w-[110%] -top-10 -left-5 z-20 bg-zinc-900 rounded-xl p-3 shadow-xl transform transition-all duration-500 ease-out ${hoverMovie?.title === item.title ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
              >
                <img
                  src={item.image}
                  className="w-full h-[330px] object-cover rounded-lg"
                />

                <h2 className="text-white text-xl mt-2">{item.title}</h2>

                <button
                  onClick={() => setTrailer(item.trailer)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2"
                >
                  Watch Trailer
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-4">
        <div className="grid grid-cols-3 gap-2 relative">
          {visibleSlide.map((item) => (
            <div key={item.title}>
              <img
                src={item.image}
                className="w-full h-[100px] md:h-[300px] object-cover"
              />
              <h2 className="text-[15px] md:text-[20px] capitalize py-3">
                {item.title}
              </h2>
            </div>
          ))}

          <button
            className="bg-red-500/70 px-5 py-2 rounded text-white absolute top-8 md:top-35 left-5"
            onClick={leftArrow}
          >
            {" "}
            &#8592;
          </button>

          <button
            className="bg-red-500/70 px-5 py-2 rounded text-white absolute top-8 md:top-35 right-5"
            onClick={rightArrow}
          >
            {" "}
            &#8594;
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
