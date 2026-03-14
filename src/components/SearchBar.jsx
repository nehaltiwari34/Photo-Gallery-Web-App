export default function SearchBar({ search, setSearch }) {

  return (

    <div className="flex justify-center mb-10">

      <input
        type="text"
        placeholder="Search by author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-96 max-w-full px-4 py-3 border rounded-lg shadow-sm
        focus:outline-none focus:ring-2 focus:ring-blue-400
        transition"
      />

    </div>

  );
}