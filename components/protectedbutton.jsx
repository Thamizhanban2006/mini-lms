"use client";

export default function ProtectedButton() {
  return (
    <button
      onClick={() => console.log("Open Add Course Modal")}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Add New Course
    </button>
  );
}
// components/ProtectedButton.jsx