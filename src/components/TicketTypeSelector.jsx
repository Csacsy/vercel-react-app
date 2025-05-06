import { useState } from 'react';

const ticketTypes = [
  { type: 'Felnőtt', price: 2500 },
  { type: 'Diák', price: 2000 },
  { type: 'Nyugdíjas', price: 1800 },
];

export function TicketTypeSelector({ screening, onTicketsChange }) {
  const [quantities, setQuantities] = useState({
    Felnőtt: 0,
    Diák: 0,
    Nyugdíjas: 0,
  });

  const handleChange = (type, value) => {
    const newQuantities = {
      ...quantities,
      [type]: Number(value),
    };

    setQuantities(newQuantities);

    if (onTicketsChange) {
      onTicketsChange(newQuantities);
    }
  };

  if (!screening) return null;

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Válassz jegytípusokat</h2>
      {ticketTypes.map(({ type, price }) => (
        <div key={type} className="flex justify-between items-center mb-4">
          <div>
            <span className="font-medium">{type} jegy</span>
            <span className="text-gray-600 ml-2">{price} Ft</span>
          </div>
          <input
            type="number"
            min="0"
            value={quantities[type]}
            onChange={(e) => handleChange(type, e.target.value)}
            className="w-16 p-1 border border-gray-300 rounded"
          />
        </div>
      ))}
    </div>
  );
}
