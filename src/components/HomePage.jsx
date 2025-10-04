import axios from 'axios';
import { useEffect, useState} from 'react';
import SearchBar from '../components/SearchBar'
import useSearchStore from '../store/useSearchStore'


function HomePage(){
    const {query} = useSearchStore();
    const [recipes, setRecipes] = useState([]);
   
    useEffect(() => {
  if (query) {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => {
        setRecipes(response.data.meals || []);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  } else {
    setRecipes([]);
  }
}, [query]);


    return(
        <div className='container mx-auto p-4'>
            < SearchBar />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {recipes.length > 0 ? (
                recipes.map((recipes) => (
                    <div 
                     key = {recipes.idMeal}
                     className="border rounded-md overflow-hidden shadow hover:shadow-lg transition">
                       
                      <img src="{recipe.strMealThumb}" 
                      alt="{recipe.strMeal}" 
                      className="w-full h-48 object-cover"/>  
                      <div className='p-2'>
                        <h2 className='font-semibold text-lg'>{recipes.strMeal}</h2>
                        <p className='text-sm text-green-500'>{recipes.strCategory} | {recipes.strArea}</p>

                      </div>
                    </div>
                ))
            ) : ( 
                <p className='text-gray-500 col-span-full mt-4'>
                    {query ? "No recipe found" : "Type a dish name to search for recipe."}
                </p>
            )}

        </div>
        </div>
    );
}
 export default HomePage;