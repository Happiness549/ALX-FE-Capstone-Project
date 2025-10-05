



function NavBar(){
    return(
        <div>
         <nav className="flex justify-between items-center p-4 bg-gray-100 shadow">
          <Link to="/" className="font-bold text-lg">Recipe Finder</Link>
         <div className="flex gap-4">
          <Link
            to="/favorites"
             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
           >
             My Favorites
           </Link>
       </div>
        </nav>
        </div>
    )
}

export default NavBar;