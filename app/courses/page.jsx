import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  const dummyCourses = [
    { id: 1, title: "React Basics", description: "Learn React step by step." },
    { id: 2, title: "Next.js Essentials", description: "Get started with Next.js App Router." },
    { id: 3, title: "MongoDB Crash Course", description: "Understand MongoDB fundamentals." },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📚 Available Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
