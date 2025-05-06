import { useState } from "react";

export function SeatSelector({ screening, ticketCounts }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const rows = screening.room.rows;
  const seatsPerRow = screening.room.seatsPerRow;

  const totalTickets = Object.values(ticketCounts).reduce((sum, count) => sum + count, 0);

  const toggleSeat = (row, seat) => {
    const seatId = `${row}-${seat}`;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(prev => prev.filter(id => id !== seatId));
    }
    else {
      setSelectedSeats(prev => [...prev, seatId]);
    }

    if (totalTickets === 0) {
      setSelectedSeats([]);
      setSelectedSeats(prev => prev.filter(id => id !== seatId));
    } else if (totalTickets === selectedSeats.length) {
      setSelectedSeats(prev => {
        const lastSeat = prev[prev.length - 1];
        return [lastSeat];
      });
    } else if (totalTickets < selectedSeats.length) {
      setSelectedSeats(prev => {
        const lastSeat = prev[prev.length - 1];
        return [lastSeat];
      });
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Válaszd ki az üléseket</h2>
      <div className="flex flex-col gap-2 items-center">
        {[...Array(rows)].map((_, rowIndex) => (
          <div 
            className="flex gap-2"
            key={rowIndex}
          >
            {[...Array(seatsPerRow)].map((_, seatIndex) => {
              const seatId = `${rowIndex}-${seatIndex}`;
              const isSelected = selectedSeats.includes(seatId);
              const isBooked = screening.bookings?.some(b => b.seat === seatIndex && b.row === rowIndex); 
              
              return (
                <button
                  key={seatId}
                  disabled={isBooked}
                  onClick={() => {toggleSeat(rowIndex, seatIndex)}}
                  className={`w-8 h-8 rounded ${
                    isBooked
                      ? "bg-red-300 cursor-not-allowed"
                      : isSelected
                      ? "bg-green-500"
                      : "bg-gray-300 hover:bg-green-300"
                  }`}
                  title={`Sor ${rowIndex + 1}, Szék ${seatIndex + 1}`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
