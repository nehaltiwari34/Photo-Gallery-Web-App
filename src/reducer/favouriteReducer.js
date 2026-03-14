import { saveFavourites, loadFavourites } from "../utils/localStorage";

// Load favourites from localStorage
export const initialState = loadFavourites() || [];

export function favouriteReducer(state = initialState, action) {

  switch (action.type) {

    case "TOGGLE_FAV": {

      if (!action.payload) return state;

      const exists = state.some((item) => item.id === action.payload.id);

      let updatedState;

      if (exists) {
        // remove favourite
        updatedState = state.filter((item) => item.id !== action.payload.id);
      } else {
        // add favourite
        updatedState = [...state, action.payload];
      }

      // save updated list to localStorage
      saveFavourites(updatedState);

      return updatedState;
    }

    default:
      return state;
  }
}