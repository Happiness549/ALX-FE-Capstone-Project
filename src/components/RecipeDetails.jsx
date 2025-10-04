import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RecipeDetails(){
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);

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
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <h1 className="text-2xl font-bold mb-4">{recipe.strMeal}</h1>
            <img src={recipe.strMealThumb}
            alt={recipe.strMeal} 
            className="w-full max-w-md mx-auto rounded-lg shadow mb-6"
            />

            <div className="grid grid-cols-1 gap-6">
                <div>
                <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
                <ul className="list-disc list-inside space-y-1" >
                    {ingredients.map((item, index) => (
                        <li key ={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Instructions</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{recipe.strInstructions}</p>
            </div>
            <div className="mt-8 space-y-6">
                        <div>
          <h2 className="text-2xl font-semibold mb-2">Watch on YouTube</h2>
          <iframe
            className="w-full aspect-video rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/${recipe.strYoutube?.split('v=')[1]}`}
            title="Recipe Video"
            allowFullScreen
            />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Source</h2>
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