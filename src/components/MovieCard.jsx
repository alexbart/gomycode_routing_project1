export function MovieCard({ movie }) {
    return (
        <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition duration-300">
            <img
                src={movie.posterURL}
                alt={movie.title}
                className="h-96 w-full object-cover"
            />

            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{movie.title}</h2>

                <p className="text-gray-400 text-sm mb-3">
                    {movie.description}
                </p>

                <div className="text-yellow-400 text-lg">
                    {"★".repeat(movie.rating)}
                </div>
            </div>
        </div>
    );
}

