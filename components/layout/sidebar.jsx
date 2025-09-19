"use client";

export default function Sidebar({ role }) {
  return (
    <div className="p-4 space-y-4">
      <p className="text-lg font-semibold text-gray-700">Navigation</p>
      <ul className="space-y-2">
        <li>
          <a href="/courses" className="block text-gray-600 hover:text-blue-600">
            Courses
          </a>
        </li>
        {role === "admin" && (
          <li>
            <a
              href="/admin-dashboard"
              className="block text-gray-600 hover:text-blue-600"
            >
              Dashboard
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
