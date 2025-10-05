import React from 'react'
import { Link } from 'react-router-dom'
import useFavoritesStore from "../store/useFavoritesStore";

function Favorites(){
    const { favorites, removeFavorite } = useFavoritesStore();

    

    return(
        <div className='container mx-auto p-4'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center'>My Favourites Recipes</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

                {favorites.length > 0 ? (
          favorites.map((recipe) => (
            <div
              key={recipe.idMeal}
              className="border rounded-md overflow-hidden shadow hover:shadow-lg transition relative"
            >
            
              <button
                onClick={() => removeFavorite(recipe.idMeal)}
                className="absolute top-2 right-2 px-3 py-1.5 bg-red-500 text-white text-sm sm:text-base rounded hover:bg-red-600"
              >
                Remove
              </button>

              
              <Link to={`/recipe/${recipe.idMeal}`}>
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="w-full h-48 object-cover"
                />
                <div className="p-2">
                  <h2 className="font-semibold text-lg">{recipe.strMeal}</h2>
                  <p className="text-sm text-green-500">
                    {recipe.strCategory} | {recipe.strArea}
                  </p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center mt-4">
            You have no favorite recipes yet.
          </p>
        )}
      </div>

            </div>
        
        
    )
}

export default Favorites;