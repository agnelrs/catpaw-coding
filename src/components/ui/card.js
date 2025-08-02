// src/components/ui/card.js
import React from 'react';

export function Card({ children }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-4">
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
