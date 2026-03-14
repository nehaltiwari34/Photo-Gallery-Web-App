import { useMemo } from "react";
import PhotoCard from "./PhotoCard";
import useFetchPhotos from "../hooks/useFetchPhotos";

export default function Gallery({ search, favourites, dispatch }) {

  const { photos, loading, error } = useFetchPhotos();

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [photos, search]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 text-lg">
        Failed to load photos
      </div>
    );
  }

  if (filteredPhotos.length === 0) {
    return (
      <div className="text-center text-gray-500 text-lg">
        No photos found for this author
      </div>
    );
  }

  return (

    <div className="max-w-7xl mx-auto px-6 pb-12">

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

        {filteredPhotos.map((photo) => (

          <PhotoCard
            key={photo.id}
            photo={photo}
            favourites={favourites}
            dispatch={dispatch}
          />

        ))}

      </div>

    </div>

  );
}