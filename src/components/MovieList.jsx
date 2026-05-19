import { Link } from "react-router-dom";
import { MovieCard } from "./MovieCard";

export function MovieList({ movies }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <Link
                        key={movie.id}
                        to={`/movie/${movie.id}`}
                    >
                        <MovieCard movie={movie} />
                    </Link>
                ))
            ) : (
                <p>No movies found.</p>
            )}
        </div>
    );
}