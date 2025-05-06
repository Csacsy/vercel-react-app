// import './App.css'
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import { useState } from "react";
import moviesData from "./data/movies.json";

import { WeekDay } from './pages/WeekDay'

function App() {
  const [movies, setMovies] = useState(moviesData);
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/monday"> Hétfő </NavLink>
        <NavLink to="/tuesday"> Kedd </NavLink>
        <NavLink to="/wednesday"> Szerda </NavLink>
        <NavLink to="/thursday"> Csütörtök </NavLink>
        <NavLink to="/friday"> Péntek </NavLink>
        <NavLink to="/saturday"> Szombat </NavLink>
        <NavLink to="/sunday"> Vasárnap </NavLink>
      </nav>
      <Routes>
        <Route path="/monday" element={< WeekDay day={"Monday"} movies={movies}/>} />
        <Route path="/tuesday" element={< WeekDay day={"Tuesday"} movies={movies}/>} />
        <Route path="/wednesday" element={< WeekDay day={"Wednesday"} movies={movies}/>} />
        <Route path="/thursday" element={< WeekDay day={"Thursday"} movies={movies}/>} />
        <Route path="/friday" element={< WeekDay day={"Friday"} movies={movies}/>} />
        <Route path="/saturday" element={< WeekDay day={"Saturday"} movies={movies}/>} />
        <Route path="/sunday" element={< WeekDay day={"Sunday"} movies={movies}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
