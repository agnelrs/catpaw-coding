// src/components/ui/button.js
import React from 'react';

export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl"
    >
      {children}
    </button>
  );
}
