export function saveFavourites(data) {
  localStorage.setItem("favourites", JSON.stringify(data));
}

export function loadFavourites() {
  const stored = localStorage.getItem("favourites");
  return stored ? JSON.parse(stored) : [];
}