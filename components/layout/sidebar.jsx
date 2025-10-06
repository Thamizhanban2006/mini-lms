// /components/layout/sidebar.js
"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Sidebar = ({ role, children }) => {
  const router = useRouter();

  const handleLogout = async () => {
    const loadingToast = toast.loading("Logging out...", { duration: Infinity });
    try {
      // do signOut without redirect so we can show feedback
      await signOut({ redirect: false });
      toast.dismiss(loadingToast);
      toast.success("Logout successful");
      router.push("/signin");
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Logout failed. Please try again.");
      console.error("Logout error:", error);
    }
  };

  let links = null;
  if (role === "admin") {
    links = (
      <>
        <a href="/admin-dashboard" className="text-blue-600 hover:text-blue-800">Admin Dashboard</a>
        <a href="/edit_lesson" className="text-blue-600 hover:text-blue-800">Edit Lessons</a>
        <a href="/manage_students" className="text-blue-600 hover:text-blue-800">Manage Users</a>
        <button onClick={handleLogout} className="text-blue-600 hover:text-blue-800 text-left">Logout</button>
      </>
    );
  } else if (role === "student") {
    links = (
      <>
        <a href="/student-dashboard" className="text-green-600 hover:text-green-800">Student Dashboard</a>
        <a href="/courses" className="text-green-600 hover:text-green-800">My Courses</a>
        <a href="/grades" className="text-green-600 hover:text-green-800">Grades</a>
        <a href="/profile" className="text-green-600 hover:text-green-800">Profile</a>
        <button onClick={handleLogout} className="text-green-600 hover:text-green-800 text-left">Logout</button>
      </>
    );
  }

  if (!links) return null;

  return (
    <aside className="w-64 bg-gray-100 h-full p-4 hidden md:block border-r">
      <nav className="flex flex-col gap-4">{links}</nav>
      {children}
    </aside>
  );
};

export default Sidebar;
