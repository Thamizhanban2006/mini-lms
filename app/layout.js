// app/layout.jsx
import "./globals.css";
import Navbar from "../components/layout/navbar";

export const metadata = {
  title: "Mini LMS",
  description: "Track courses and progress easily!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
