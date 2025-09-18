# UI Component Plan – Mini LMS

## 🎯 Goal
Build a simple, clean, and responsive UI for a Mini LMS (Learning Tracker) with admin and student views.

---

## 🧩 Component Classification

### 1. **Reusable Components**
| Component       | Purpose |
|----------------|---------|
| `Button`       | Consistent primary/secondary buttons across pages |
| `Input`        | Styled input fields for forms (signin, add course, etc.) |
| `Card`         | Used to display courses in a grid layout |
| `Loader`       | Simple loading spinner for async actions |

---

### 2. **Layout Components**
| Component           | Purpose |
|--------------------|---------|
| `Navbar`           | Persistent navigation bar with links |
| `Footer`           | Footer with copyright & branding |
| `DashboardLayout`  | Wrapper for admin dashboard with sidebar + main content |
| `RootLayout`       | Global layout that wraps all pages (includes Navbar + Footer) |

---

### 3. **Page-Level Components**
| Page / Route      | Component(s) Used |
|------------------|-----------------|
| `/signin`        | `Input`, `Button` |
| `/courses`       | `Card`, `Button` |
| `/courses/[id]`  | `Card`, `Button` |
| `/dashboard`     | `DashboardLayout`, `Card`, `Button` |

---

## 📁 Folder Structure (Planned)

src/
├─ app/
│ ├─ layout.jsx # Root layout (Navbar + Footer)
│ ├─ page.jsx # Home page
│ ├─ signin/page.jsx # Sign-in page
│ ├─ courses/page.jsx # Course listing page
│ └─ dashboard/page.jsx # Admin dashboard page
│
├─ components/
│ ├─ Navbar.jsx
│ ├─ Footer.jsx
│ ├─ DashboardLayout.jsx
│ ├─ Button.jsx
│ ├─ Input.jsx
│ └─ Card.jsx
│
└─ styles/
└─ globals.css

yaml
Copy code

---

## 🎨 Styling Guidelines
- **Tailwind CSS** for utility-first styling
- Responsive design: use `flex`, `grid`, `max-w-*`, and `md:` breakpoints
- Consistent colors:  
  - Primary: `blue-600` (buttons, highlights)
  - Background: `gray-50`
  - Text: `gray-700`

---

## ✅ Deliverables
- UI skeleton for Navbar, Footer, DashboardLayout, Button, and Input
- Basic responsive layout for all pages
- Pushed to GitHub with this `ui-plan.md`