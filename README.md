# The Wild Oasis

A full-stack hotel management dashboard built with React, Supabase, and styled-components. This project is designed for learning and practicing modern React patterns, hooks, authentication, and real-world UI/UX for property management.

<img width="1920" height="1143" alt="image" src="https://github.com/user-attachments/assets/13119297-fcf9-4e12-8bc8-0839d5bb365c" />


## Features

- User authentication (signup, login, logout, update profile)
- Dashboard with booking stats, charts, and recent activity
- Bookings management: view, filter, sort, check-in, check-out, delete
- Cabin management: add, edit, duplicate, delete cabins
- Settings: update global settings (e.g., breakfast price)
- Responsive, modern UI with dark mode toggle
- Pagination, filtering, and sorting for large datasets
- File uploads for cabin images
- Error boundaries and loading spinners

## Tech Stack

- React (functional components, hooks)
- React Router
- React Query
- Supabase (database, authentication, storage)
- styled-components
- Vite (for fast development)
- date-fns (date utilities)

## Folder Structure

```
src/
  App.jsx
  main.jsx
  context/           # Context providers (e.g., DarkMode)
  data/              # Demo data and uploads
  features/          # Main app features (auth, bookings, cabins, dashboard, etc.)
  hooks/             # Custom React hooks
  pages/             # Route pages
  services/          # API calls and Supabase client
  styles/            # Global styles
  ui/                # Reusable UI components
  utils/             # Helpers and constants
```

## Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/BahaaJber1/The-Wild-Oasis.git
   cd The-Wild-Oasis
   ```
2. **Install dependencies:**
   ```bash
   yarn
   # or
   npm install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the root with your Supabase credentials:
     ```env
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_KEY=your_supabase_key
     ```
4. **Start the development server:**
   ```bash
   yarn dev
   # or
   npm run dev
   ```
5. **Open [http://localhost:5173](http://localhost:5173) in your browser.**

## Supabase Setup

- Create a Supabase project and database
- Add tables for `bookings`, `cabins`, `guests`, and configure Row Level Security (RLS)
- Set up authentication in Supabase dashboard
- Update `.env` with your Supabase project credentials

---

