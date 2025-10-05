import { create } from "zustand";

const useFavouritesStore = create((set) => ({
    favorites: [],
    addFavorite: (recipe) =>
        set((state) => ({favorites: [...state.favorites, recipe]})),

    removeFavorite: (idMeal) => 
        set((state) => ({
            favorites: state.favorites.filter((r) => r.idMeall !== idMeal),
        })),
}));

export default useFavouritesStore;