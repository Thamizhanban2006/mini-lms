# 📚 Mini LMS (Learning Tracker)

A simple Learning Management System where students can track their course progress and admins can manage course content.  
This project demonstrates **authentication, authorization, CRUD operations, and role-based UI rendering** using **Next.js App Router** and **NextAuth**.

---

## 🎯 Goal

- **Students** can:
  - Sign up & log in
  - View available courses
  - Mark courses as completed and track progress

- **Admins** can:
  - Create, edit, and delete courses
  - View which students have completed each course

---

## 🛠️ Tech Stack

| Area          | Tech Used |
|---------------|-----------|
| Frontend      | Next.js (App Router) |
| Styling       | Tailwind CSS |
| Authentication| NextAuth (Credentials Provider) + JWT |
| Database      | MongoDB + Mongoose |
| Deployment    | Vercel / Netlify (frontend) + MongoDB Atlas |

---

## 📂 Folder Structure

mini-lms/
├── app/
│ ├── signin/page.jsx # Login page
│ ├── dashboard/page.jsx # Admin dashboard
│ ├── courses/page.jsx # List of all courses (student view)
│ ├── courses/[id]/page.jsx # Dynamic route for course detail
│ └── api/
│ ├── auth/[...nextauth]/route.js # NextAuth config (JWT + callbacks)
│ └── courses/route.js # CRUD endpoints for courses
├── components/
│ ├── Navbar.jsx # Top navigation bar
│ ├── CourseCard.jsx # Reusable course display card
│ ├── ProtectedButton.jsx # Renders only for admin role
│ └── Loader.jsx # Loading spinner
├── lib/
│ ├── db.js # MongoDB connection setup
│ └── models/
│ ├── Course.js # Mongoose course schema
│ └── User.js # Mongoose user schema
├── utils/
│ └── provider.js # NextAuth SessionProvider wrapper
└── README.md


---

## 🚀 Features

✅ User login with email & password  
✅ JWT-based session handling  
✅ Role-based access control (Admin vs Student)  
✅ CRUD for courses (Admin only)  
✅ Progress tracking (Student marks completed)  
✅ Clean UI with Tailwind CSS  

---

## 🖼️ Pages Overview

| Page           | Description |
|----------------|-------------|
| `/signin`      | Login form for all users |
| `/dashboard`   | Admin-only dashboard with "Add Course" button |
| `/courses`     | List of all available courses |
| `/courses/[id]`| Detailed view of a single course, with "Mark as Completed" button for students |

---

## 🧑‍💻 Developer Setup

1. **Clone repo & install dependencies**
```bash
git clone <repo-url>
cd mini-lms
npm install