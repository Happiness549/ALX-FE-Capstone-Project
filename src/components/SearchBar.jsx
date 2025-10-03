import useSearchStore from "../store/useSearchStore";

function SearchBar(){
    const {query, setQuery} = useSearchStore();

    return(
        <>
        <div>
            <input type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a recipe"
            className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        </>
    );
}

export default SearchBar;