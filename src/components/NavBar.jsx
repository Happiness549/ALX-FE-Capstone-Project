
import React from "react";
import { Link } from "react-router-dom"; 

function NavBar() {
  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-green-700 shadow">
        
        <Link to="/" className="font-bold text-lg">
          Recipe Finder
        </Link>

        
        <div className="flex gap-4">
          <Link
            to="/favorites"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-400"
          >
            My Favorites
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;







