import {MovieCard} from "./MovieCard";

export function MovieList({ movies }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            ) : (
                <p>No movies found.</p>
            )}
        </div>
    );
}

