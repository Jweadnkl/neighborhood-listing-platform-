import React from 'react';

interface PropertyCardProps {
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  onViewDetails?: () => void;
}

export default function PropertyCard({
  address,
  price,
  bedrooms,
  bathrooms,
  squareFeet,
  onViewDetails,
}: PropertyCardProps) {
  return (
    <article className="border rounded-lg p-4 shadow-sm bg-white flex flex-col justify-between">
      <header className="mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{address}</h3>
        <p className="text-xl font-bold text-blue-600">${price.toLocaleString()}</p>
      </header>
      <ul className="text-sm text-gray-600 mb-4 space-y-1">
        <li>{bedrooms} Bedrooms</li>
        <li>{bathrooms} Bathrooms</li>
        <li>{squareFeet} sq ft</li>
      </ul>
      <button
        onClick={onViewDetails}
        aria-label={`View details for ${address}`}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
      >
        View Details
      </button>
    </article>
  );
}
