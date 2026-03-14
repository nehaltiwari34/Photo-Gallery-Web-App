import { useState, useReducer, useCallback } from "react";
import SearchBar from "./components/SearchBar";
import Gallery from "./components/Gallery";
import { favouriteReducer, initialState } from "./reducer/favouriteReducer";

function App() {

  const [search, setSearch] = useState("");

  const [favourites, dispatch] = useReducer(
    favouriteReducer,
    initialState
  );

  const handleSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="text-center py-10">

        <h1 className="text-5xl font-bold tracking-tight text-gray-800">
          Photo Gallery
        </h1>

        <p className="text-gray-500 mt-2">
          Discover beautiful images from around the world
        </p>

      </header>

      {/* Search */}
      <SearchBar
        search={search}
        setSearch={handleSearch}
      />

      {/* Gallery */}
      <Gallery
        search={search}
        favourites={favourites}
        dispatch={dispatch}
      />

    </div>
  );
}

export default App;