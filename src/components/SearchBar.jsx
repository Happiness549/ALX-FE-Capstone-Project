import React, { useState } from "react";
import useSearchStore from "../store/useSearchStore";

function SearchBar(){
    const {setQuery} = useSearchStore();
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(input);
    }

    return(
        <>
        <div>
            <form onSubmit={handleSubmit}className="flex gap-2 mb-4" >
                
            <input type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for a recipe"
            className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button type="submit" 
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Search
            </button>
            </form>

            
        </div>
        </>
    );
}

export default SearchBar;