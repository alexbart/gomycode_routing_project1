# 🎬 React Movie App

A modern Movie App built with React, Tailwind CSS, and React Router.

This project allows users to:

- View movies
- Add new movies
- Filter movies by title
- Filter movies using ⭐ star ratings
- Sort movies alphabetically or by rating
- Navigate to a movie details page
- Watch embedded movie trailers

---

# 🚀 Technologies Used

- React
- React Hooks (`useState`, `useMemo`)
- React Router DOM
- Tailwind CSS
- Vite

---

# 📸 Features

## ✅ Home Page

- Display all movie cards
- Responsive movie grid
- Hover animations
- Netflix-style UI

## ✅ Add Movie

Users can:

- Add movie title
- Add description
- Add poster image URL
- Add trailer embed URL
- Add rating

Movies are added through a modal popup form.

---

## ✅ Filter Movies

Users can:

- Search movies by title
- Filter movies using clickable ⭐ stars

---

## ✅ Sort Movies

Movies can be sorted by:

- A → Z
- Highest Rating

---

## ✅ Movie Details Page

When a user clicks a movie card:

- React Router navigates to a dedicated page
- Full movie description is displayed
- Embedded trailer plays
- User can navigate back home

---

# 📁 Project Structure

```txt
src/
│
├── components/
│   ├── AddMovieModal.jsx
│   ├── Filter.jsx
│   ├── MovieCard.jsx
│   ├── MovieDetails.jsx
│   ├── MovieList.jsx
│   └── SortMovies.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone <your-repo-link>
```

---

## 2. Navigate Into Project

```bash
cd movie-app
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Run Development Server

```bash
npm run dev
```

---

# 🎨 Tailwind CSS Setup

Install Tailwind:

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## Configure Vite

### vite.config.js

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

---

## index.css

```css
@import "tailwindcss";
```

---

# 🧠 React Concepts Used

This project demonstrates:

- Functional Components
- Props
- Component Reusability
- React Hooks
- Controlled Inputs
- Conditional Rendering
- Dynamic Routing
- useParams
- useNavigate
- Array Filtering
- Array Sorting
- State Management

---

# 🔗 Routing

The app uses React Router DOM.

Routes included:

```jsx
<Route path="/" element={<Home />} />
<Route path="/movie/:id" element={<MovieDetails />} />
```

---

# 🎥 Trailer Links

Use YouTube embed URLs only.

✅ Correct:

```txt
https://www.youtube.com/embed/zSWdZVtXT7E
```

❌ Wrong:

```txt
https://www.youtube.com/watch?v=zSWdZVtXT7E
```

---

# 🌟 Future Improvements

Possible upgrades:

- Add Local Storage
- Add TMDB API integration
- Add Authentication
- Add Favorites Feature
- Add Dark/Light Theme
- Add Framer Motion animations
- Add Pagination
- Add Genre Categories

---

# 📷 Screenshots

You can add screenshots here later.

Example:

```md
![Home Page](./screenshots/home.png)
```

---

# 👨‍💻 Author

Developed by Alex Kiprop

---

# 📄 License

This project is open-source and free to use.