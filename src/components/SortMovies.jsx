export function SortMovies({ setSortType }) {
  return (
    <select
      onChange={(e) => setSortType(e.target.value)}
      className="bg-gray-800 px-4 py-2 rounded-lg outline-none"
    >
      <option value="">Sort Movies</option>
      <option value="az">A-Z</option>
      <option value="rating">Highest Rating</option>
    </select>
  );
}
