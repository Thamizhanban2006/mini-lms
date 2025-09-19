"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../layout/navbar";
import Input from "../global/Input";
import Button from "../global/button";

const LoginPage = () => {
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

    // For now keep it static (no backend yet)
    setTimeout(() => {
      console.log("Form submitted:", form);
      setIsLoading(false);
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            disabled={isLoading}
            required
          />

          <Input
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            disabled={isLoading}
            required
          />

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>

          <div className="mt-4 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/signup")}
              className="text-blue-600 hover:underline"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
