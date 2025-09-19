"use client";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Mini LMS</h1>
      <div>
        <button className="text-sm text-blue-600 hover:underline">
          Logout
        </button>
      </div>
    </nav>
  );
}
