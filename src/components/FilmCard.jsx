import { useState } from "react";
import { FilmDetails } from "./FilmDetails";

export function FilmCard({ movies, day, selectedMovie, onMovieSelect, onScreeningSelect }) {
  const filteredMovies = movies.filter((movie) =>
    movie.screenings?.some((screening) => screening.weekday === day)
  );

  return (
    <>
      <div className="flex gap-6 flex-wrap justify-center bg-red-50">
        {filteredMovies.map((movie, index) => (
          <div
            className={`p-4 w-56 bg-white shadow-lg rounded-xl flex flex-col items-center cursor-pointer 
              ${selectedMovie === movie ? 'ring-2 ring-blue-500' : ''}`}
            key={index}
            onClick={() => {
              onMovieSelect(movie);
              onScreeningSelect(null);
            }}
          >
            <img
              className="w-20 h-20 rounded-full object-cover"
              src={`/images/${movie.image}`}
              alt={movie.title}
            />
            <h2 className="font-bold">{movie.title}</h2>
            <span>{movie.duration} perc</span>
            <span>{movie.genre}</span>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <FilmDetails
          movie={selectedMovie}
          day={day}
          onScreeningSelect={onScreeningSelect}
        />
      )}
    </>
  );
}
