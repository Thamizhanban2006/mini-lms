"use client";

import MainLayout from "../layout/main-layout";
import Sidebar from "../layout/sidebar";
import Navbar from "../layout/navbar";
import Card from "../global/card";

export default function DashboardPage() {
  return (
    <div>
    {/* <MainLayout sidebar={<Sidebar role="admin" />} navbar={<Navbar />}> */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Welcome Admin!
          </h2>
          <p className="text-gray-600">
            Here you can manage your courses, view progress, and handle users.
          </p>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Quick Actions
          </h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            ➕ Add Course
          </button>
        </Card>
      </div>
    {/* </MainLayout> */}
    </div>
  );
}
