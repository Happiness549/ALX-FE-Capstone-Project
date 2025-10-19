import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import RecipeDetails from './components/RecipeDetails'
import Favorites from "./components/Favorites";




function App() {
  return (
    <div className= "bg-green-200 min-h-screen text-black" >
    <Router>
      <NavBar />
      <Routes>
         
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
         <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
