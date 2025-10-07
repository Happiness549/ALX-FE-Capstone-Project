import React from "react";
import useSearchStore from "../store/useSearchStore";



function Category({ onSelectCategory }){

    const categories = ["Breakfast", "Dessert", "Chicken", "Beef", "Lamb"];

    return(
        <div className="flex gap-2 justify-start mt-4 flex-wrap">
            {categories.map((cat) => (
                <button 
                type='submit'
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 mt-8">
                    {cat}
                </button>

            ))}
        </div>
    )

}

export default Category;