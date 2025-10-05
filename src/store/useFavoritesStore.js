import { create } from "zustand";

const useFavoritesStore = create((set) => ({
    favorites: [],
    addFavorite: (recipe) =>
        set((state) => ({favorites: [...state.favorites, recipe]})),

    removeFavorite: (idMeal) => 
        set((state) => ({
            favorites: state.favorites.filter((r) => r.idMeal !== idMeal),
        })),
}));

export default useFavoritesStore;