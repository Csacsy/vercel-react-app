export function FilmDetails({ movie, day, onScreeningSelect }) {

    const isFullyBooked = (screening) => {
      const { rows, seatsPerRow } = screening.room;
      const totalSeats = rows * seatsPerRow;
      return screening.bookings.length >= totalSeats;
    };
  
    return (
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4">{movie.title}</h1>
  
        <img
          className="w-60 h-60 rounded-lg object-cover mb-4"
          src={`/images/${movie.image}`}
          alt={movie.title}
        />
  
        <p className="text-gray-700 mb-2">{movie.description}</p>
        <p><strong>Hossz:</strong> {movie.duration} perc</p>
        <p><strong>Műfaj:</strong> {movie.genre}</p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">Elérhető időpontok:</h2>
        <div className="flex flex-wrap gap-2">
          {movie.screenings.map((screening) => {

            if (screening.weekday !== day) {
              return null;
            }

            const disabled = isFullyBooked(screening);
  
            return (
              <button
                key={screening.id}
                className={`px-4 py-2 rounded ${
                  disabled
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
                disabled={disabled}
                onClick={() => !disabled && onScreeningSelect(screening)}
              >
                {screening.start_time}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
  