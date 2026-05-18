
export function Filter({ setTitleFilter, ratingFilter, setRatingFilter }) {
    return (
        <div className="flex flex-col md:flex-row gap-4">
            <input
                type="text"
                placeholder="Search movies..."
                className="px-4 py-2 rounded-lg bg-gray-800 text-white outline-none"
                onChange={(e) => setTitleFilter(e.target.value)}
            />

            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        onClick={() => setRatingFilter(star)}
                        className={`text-2xl transition ${star <= ratingFilter
                                ? "text-yellow-400"
                                : "text-gray-500"
                            }`}
                    >
                        ★
                    </button>
                ))}

                <button
                    onClick={() => setRatingFilter(0)}
                    className="ml-2 text-sm text-red-400"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
