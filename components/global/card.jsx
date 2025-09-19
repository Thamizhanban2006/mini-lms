"use client";

export default function Card({ children }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      {children}
    </div>
  );
}
