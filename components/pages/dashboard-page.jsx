"use client";
import MainLayout from "../layout/main-layout";
import Sidebar from "../layout/sidebar";
import Navbar from "../layout/Navbar";
import Card from "../global/card";

export default function DashboardPage() {
  return (
    <div>
      <MainLayout sidebar={<Sidebar role="admin" />} navbar={<Navbar />}>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-800">📚 Courses</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">24</p>
          <p className="text-sm text-gray-500">Total Courses</p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-800">👥 Users</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">1,240</p>
          <p className="text-sm text-gray-500">Active Users</p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-800">📈 Progress</h3>
          <p className="text-2xl font-bold text-purple-600 mt-2">78%</p>
          <p className="text-sm text-gray-500">Avg. Completion Rate</p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-800">💬 Messages</h3>
          <p className="text-2xl font-bold text-red-600 mt-2">15</p>
          <p className="text-sm text-gray-500">Pending Queries</p>
        </Card>
      </div>

      {/* Main Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
          <div className="flex flex-wrap gap-3">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              ➕ Add Course
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
              👤 Add User
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
              ⚙️ Settings
            </button>
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Activity
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li>✅ New course "React Basics" was published.</li>
          {/* <li>👤 User <span className="font-semibold">John Doe</span> signed up.</li> */}
          <li>📌 Updated progress for <span className="font-semibold">Data Science</span>.</li>
          <li>⚠️ 2 pending queries from students.</li>
        </ul>
      </Card>
      </MainLayout>
    </div>
  );
}
