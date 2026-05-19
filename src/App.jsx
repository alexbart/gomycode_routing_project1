import { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { MovieList } from "./components/MovieList";
import { Filter } from "./components/Filter";
import { AddMovie } from "./components/AddMovie";
import { AddMovieModal } from "./components/AddMovieModal";
import { SortMovies } from "./components/SortMovies";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Breaking Bad",
      description:
        "A chemistry teacher becomes a drug kingpin.",
      posterURL:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
      rating: 5,
      trailer:
        "https://www.youtube.com/embed/HhesaQXLuRY",
    },

    {
      id: 2,
      title: "Interstellar",
      description:
        "A team travels through a wormhole in space.",
      posterURL:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop",
      rating: 4,
      trailer:
        "https://www.youtube.com/embed/zSWdZVtXT7E",
    },

    {
      id: 3,
      title: "Stranger Things",
      description:
        "Kids uncover terrifying supernatural mysteries.",
      posterURL:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1200&auto=format&fit=crop",
      rating: 4,
      trailer:
        "https://www.youtube.com/embed/b9EkMc79ZSU",
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [sortType, setSortType] = useState("");


  const addMovie = (movie) => {
    setMovies((prev) => [...prev, { id: Date.now(), ...movie }]);
  };

  const filteredMovies = useMemo(() => {
    let updatedMovies = [...movies].filter(
      (movie) =>
        movie.title
          .toLowerCase()
          .includes(titleFilter.toLowerCase()) &&
        movie.rating >= ratingFilter
    );

    if (sortType === "az") {
      updatedMovies.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortType === "rating") {
      updatedMovies.sort((a, b) => b.rating - a.rating);
    }

    return updatedMovies;
  }, [movies, titleFilter, ratingFilter, sortType]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gray-950 text-white p-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <h1 className="text-4xl font-bold">
                  🎬 Movie App
                </h1>

                <AddMovieModal addMovie={addMovie} />
              </div>

              <div className="flex flex-col lg:flex-row gap-4 justify-between mb-8">
                <Filter
                  setTitleFilter={setTitleFilter}
                  ratingFilter={ratingFilter}
                  setRatingFilter={setRatingFilter}
                />

                <SortMovies setSortType={setSortType} />
              </div>

              <MovieList movies={filteredMovies} />
            </div>
          </div>
        }
      />

      <Route
        path="/movie/:id"
        element={<MovieList movies={movies} />}
      />
    </Routes>
  );
}

export default App;