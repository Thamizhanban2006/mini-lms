import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col justify-between hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
      <p className="text-gray-600 mb-4">{course.description}</p>
      <Link
        href={`/courses/${course.id}`}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
      >
        View Details
      </Link>
    </div>
  );
}
