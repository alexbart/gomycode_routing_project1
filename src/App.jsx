import { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { MovieList } from "./components/MovieList";
import { Filter } from "./components/Filter";
import { AddMovieModal } from "./components/AddMovieModal";
import { SortMovies } from "./components/SortMovies";
import { useDebounce } from "./utils/useDebounce";

function App() {

  // 🎬 Movies state
  const [movies, setMovies] = useState([]);

  // 🔍 Search input
  const [titleFilter, setTitleFilter] = useState("batman");

  // ⭐ Rating filter
  const [ratingFilter, setRatingFilter] = useState(0);

  // 🔤 Sorting
  const [sortType, setSortType] = useState("");

  // ⏱️ Debounced search
  const debouncedSearch = useDebounce(titleFilter, 500);

  // ⚡ Loading state
  const [loading, setLoading] = useState(false);

  // ❌ Error state
  const [error, setError] = useState(null);

  // 🌐 Fetch movies from OMDb API
  useEffect(() => {

    const fetchMovies = async () => {

      if (!debouncedSearch) return;

      setLoading(true);
      setError(null);

      try {

        const response = await fetch(
          `https://www.omdbapi.com/?s=${debouncedSearch}&apikey=84610416`
        );

        const data = await response.json();

        if (data.Search) {

          const formattedMovies = data.Search.map((movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            description: movie.Year,
            posterURL: movie.Poster,
            rating: Math.floor(Math.random() * 5) + 1,
          }));

          setMovies(formattedMovies);

        } else {

          setMovies([]);
          setError("No movies found.");

        }

      } catch (error) {

        console.error("Error fetching movies:", error);
        setError("Failed to fetch movies.");

      } finally {

        setLoading(false);

      }

    };

    fetchMovies();

  }, [debouncedSearch]);

  // ➕ Add movie manually
  const addMovie = (movie) => {

    setMovies((prev) => [
      ...prev,
      { id: Date.now(), ...movie }
    ]);

  };

  // 🔎 Filter + sort movies
  const filteredMovies = useMemo(() => {

    let updatedMovies = [...movies].filter(
      (movie) =>
        movie.rating >= ratingFilter
    );

    // 🔤 Sort alphabetically
    if (sortType === "az") {

      updatedMovies.sort((a, b) =>
        a.title.localeCompare(b.title)
      );

    }

    // ⭐ Sort by rating
    if (sortType === "rating") {

      updatedMovies.sort((a, b) =>
        b.rating - a.rating
      );

    }

    return updatedMovies;

  }, [movies, ratingFilter, sortType]);

  return (
    <Routes>

      {/* 🏠 Home Page */}
      <Route
        path="/"
        element={

          <div className="min-h-screen bg-gray-950 text-white p-6">

            <div className="max-w-7xl mx-auto">

              {/* HEADER */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                <h1 className="text-4xl font-bold">
                  🎬 Alex's Movie App
                </h1>

                <AddMovieModal addMovie={addMovie} />

              </div>

              {/* FILTERS */}
              <div className="flex flex-col lg:flex-row gap-4 justify-between mb-8">

                <Filter
                  setTitleFilter={setTitleFilter}
                  ratingFilter={ratingFilter}
                  setRatingFilter={setRatingFilter}
                />

                <SortMovies setSortType={setSortType} />

              </div>

              {/* LOADING */}
              {loading && (
                <p className="text-yellow-400 mb-4">
                  Loading movies...
                </p>
              )}

              {/* ERROR */}
              {error && (
                <p className="text-red-400 mb-4">
                  {error}
                </p>
              )}

              {/* MOVIES */}
              <MovieList movies={filteredMovies} />

            </div>

          </div>

        }
      />

      {/* 🎬 Movie Details Page */}
      <Route
        path="/movie/:id"
        element={<MovieList movies={movies} />}
      />

    </Routes>
  );
}

export default App;