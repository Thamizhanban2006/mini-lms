"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
   const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        console.log("✅ Registration Success:", data);
        setMessage({ type: "success", text: data.message });
        router.push("/admin-dashboard");
      } else {
        console.log("❌ Registration Failed:", data.error);
        setMessage({ type: "error", text: data.error });
      }
    } catch (error) {
      console.error("❌ Registration Error:", error);
      setMessage({ type: "error", text: "Something went wrong!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-gray-900">Create an Account</h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border p-2 w-full rounded-xl text-gray-900"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border p-2 w-full rounded-xl text-gray-900"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="border p-2 w-full rounded-xl text-gray-900"
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="border p-2 w-full rounded-xl text-gray-900"
        >
          <option   className="border p-2 w-full rounded-xl text-gray-900" value="student">Student</option>
          <option  className="border p-2 w-full rounded-xl text-gray-900"  value="admin">Admin</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 w-full"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {message && (
          <p
            className={`text-center ${
              message.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message.text}
          </p>
        )}
      </form>
    </div>
  );
}
