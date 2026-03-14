export default function PhotoCard({ photo, favourites, dispatch }) {

  const isFav = favourites.some((item) => item.id === photo.id);

  function toggleFav() {
    dispatch({
      type: "TOGGLE_FAV",
      payload: photo
    });
  }

  return (

    <div className="bg-white rounded-xl shadow-sm overflow-hidden
    hover:shadow-lg transition duration-300">

      <div className="overflow-hidden">

        <img
          src={photo.download_url}
          alt={photo.author}
          className="w-full h-56 object-cover
          hover:scale-105 transition duration-300"
        />

      </div>

      <div className="flex items-center justify-between px-4 py-3">

        <p className="text-gray-700 font-medium text-sm">
          {photo.author}
        </p>

        <button
          onClick={toggleFav}
          className="text-xl transition transform hover:scale-125"
        >
          {isFav ? "❤️" : "🤍"}
        </button>

      </div>

    </div>

  );
}