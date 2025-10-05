import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useFavoritesStore from '../store/useFavoritesStore'

function RecipeDetails(){
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);

     const {favorites, addFavorite, removeFavorite} = useFavoritesStore();

    useEffect(() => {
        axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => {
            setRecipe(response.data.meals ? response.data.meals[0] : null)
        })
        .catch((error) => {
            console.log('Error fetching recipe details:', error)
        });
    }, [id]);

    if(!recipe){
        return <p className="text-center mt-10 text-gray-500">Recipe loading...</p>
    }


     const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

    return(
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">{recipe.strMeal}</h1>

        <div>
            <button onClick={() =>{
                favorites.some((r) => r.idMeal === recipe.idMeal)
                ? removeFavorite(recipe.idMeal)
                : addFavorite(recipe)
            }}

            className={`px-4 py-2 rounded font-semibold mt-4 ${
            favorites.some((r) => r.idMeal === recipe.idMeal)
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-green-500 text-white hover:bg-green-600"
            }`}>
                {favorites.some((r) => r.idMeal === recipe.idMeal ) ? "Remove from favorites" : "Add to favorites"}

            </button>
        </div>

            <img src={recipe.strMealThumb}
            alt={recipe.strMeal} 
            className="w-full max-w-md mx-auto md:mx-0 rounded-lg shadow-lg mb-6"
            />

            <div className="grid grid-cols-1 gap-6">
                <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3">Ingredients</h2>
                <ul className="list-disc list-inside space-y-1 text-gray-700" >
                    {ingredients.map((item, index) => (
                        <li key ={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-6 md:mt-0">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3">Instructions</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{recipe.strInstructions}</p>
            </div>
            <div className="mt-8">
                        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Watch on YouTube</h2>
          <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/${recipe.strYoutube?.split('v=')[1]}`}
            title="Recipe Video"
            allowFullScreen
            />
        </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Source</h2>
           <a
             href={recipe.strSource}
             target="_blank"
             rel="noopener noreferrer"
             className="text-blue-600 hover:underline"
           >
            View Full Recipe
          </a>
        </div>



            </div>
            </div>
        </div>
    );
}

export default RecipeDetails;