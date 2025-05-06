import { useState, useEffect } from 'react';
import { BookingSummary } from '../components/BookingSummary';
import { FilmCard } from '../components/FilmCard';
import { SeatSelector } from '../components/SeatSelector';
import { TicketTypeSelector } from '../components/TicketTypeSelector';

export function WeekDay({ day, movies }) {
  const [selectedScreening, setSelectedScreening] = useState(null);
  const [ticketCounts, setTicketCounts] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    setSelectedMovie(null);
    setSelectedScreening(null);
    setTicketCounts({});
  }, [day]);

  const today = {
    Monday: "Hétfő",
    Tuesday: "Kedd",
    Wednesday: "Szerda",
    Thursday: "Csütörtök",
    Friday: "Péntek",
    Saturday: "Szombat",
    Sunday: "Vasárnap"
  }[day];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{today}i filmek</h1>
      <p className="text-gray-700 mb-2">Válassz egy filmet és időpontot!</p>

      <FilmCard
        movies={movies}
        day={day}
        selectedMovie={selectedMovie}
        onMovieSelect={(movie) => {
          setSelectedMovie(movie);
          setSelectedScreening(null);
        }}
        onScreeningSelect={setSelectedScreening}
      />

      {selectedScreening && (
        <>
          <TicketTypeSelector
            screening={selectedScreening}
            onTicketsChange={(tickets) => setTicketCounts(tickets)}
          />
          <SeatSelector screening={selectedScreening} ticketCounts={ticketCounts} />
          <BookingSummary screening={selectedScreening} />
        </>
      )}
    </div>
  );
}
