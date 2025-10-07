import axios from 'axios';
import { useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../components/SearchBar'
import Category from "../components/Categories";
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


const fetchByCategory = async (category) => {
    try{
        const response = await axios.get(
             `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        setRecipes(response.data.meals || []);
    } catch(error){
        console.log('Error fetching recipes category:', error)
            setRecipes([]);
    }
};

    return(
        
        <div className='container mx-auto p-4'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 sm:mb-4 mb-8'>Recipe Finder</h1>
            < SearchBar />
            <Category onSelectCategory={fetchByCategory} />


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {recipes.length > 0 ? (
                recipes.map((recipe) => (
                    <Link
                    
                     key = {recipe.idMeal}
                     to={`/recipe/${recipe.idMeal}`}
                     className="border rounded-md overflow-hidden shadow hover:shadow-lg transition">
                       
                      <img src={recipe.strMealThumb} 
                      alt={recipe.strMeal} 
                      className="w-full h-48 object-cover"/>  
                      <div className='p-2'>
                        <h2 className='font-semibold text-lg'>{recipe.strMeal}</h2>
                        <p className='text-sm text-green-500'>{recipe.strCategory} | {recipe.strArea}</p>

                      </div>
                    </Link>
                    
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