"use client";
import { getSession } from "next-auth/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react"; // ✅ import signIn
import InputField from "@/components/global/Input";
import Button from "@/components/global/Button";

const Page = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.email || !form.password) {
    setError("Email and password are required.");
    return;
  }

  setIsLoading(true);

  const result = await signIn("credentials", {
    redirect: false,
    email: form.email,
    password: form.password,
  });

  setIsLoading(false);

  if (result?.error) {
    console.error("❌ Login failed:", result.error);
    setError(result.error);
  } else {
    console.log("✅ Login successful:", result);

    // ✅ Fetch session to know the role
    const session = await getSession();
    console.log("🔑 Session after login:", session);

    if (session?.user?.role === "admin") {
      router.push("/admin-dashboard");
    } else {
      router.push("/student-dashboard"); // ✅ create a student dashboard route
    }
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Sign in to continue learning
        </p>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-center text-sm mb-4">{error}</p>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5 text-gray-900">
          <InputField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            disabled={isLoading}
            required
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            disabled={isLoading}
            required
          />

          {/* Sign In Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl shadow-md transition duration-200"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm text-gray-900">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Redirect to Sign Up */}
        <p className="text-center text-gray-700 text-sm">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => router.push("/signup")}
            className="text-blue-600 font-medium hover:underline"
          >
            Create one
          </button>
        </p>
      </div>
    </div>
  );
};

export default Page;
