# 🎬 Alex's-Style React Movie App

A modern Netflix-inspired Movie App built with React, Tailwind CSS, React Router, and the OMDb API.

This project allows users to:

- Search movies live using an API
- View dynamic movie results
- Add new custom movies
- Filter movies by title
- Filter movies using ⭐ star ratings
- Sort movies alphabetically or by rating
- Navigate to a movie details page
- Watch embedded movie trailers
- Experience real-time API searching with debounce optimization

---

# 🚀 Technologies Used

- React
- React Hooks (`useState`, `useEffect`, `useMemo`)
- React Router DOM
- Tailwind CSS
- Vite
- OMDb API
- Custom Hooks (`useDebounce`)

---

# 📸 Features

## ✅ Live Movie Search (Netflix Style)

Users can:

- Search movies dynamically
- Fetch movie data directly from the OMDb API
- See results update automatically while typing

The app uses **debounce optimization** to prevent excessive API calls while typing.

---

## ✅ Home Page

- Responsive movie grid
- Dynamic movie cards
- Hover animations
- Netflix-inspired UI
- Real-time movie rendering

---

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

## ✅ Loading & Error States

The app handles:

- Loading states while fetching movies
- Error handling if API requests fail
- Empty search results

---

## ✅ Movie Details Page

When a user clicks a movie card:

- React Router navigates to a dedicated page
- Full movie description is displayed
- Embedded trailer plays
- User can navigate back home

---

# 🌐 OMDb API Integration

This app uses the OMDb API to fetch real movie data.

Example API request:

```txt
https://www.omdbapi.com/?s=batman&apikey=YOUR_API_KEY
```

---

# ⏱️ Debounce Optimization

The application uses a custom `useDebounce` hook to:

- Delay API requests while typing
- Improve performance
- Reduce unnecessary API calls
- Create a smoother Netflix-style search experience

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
├── utils/
│   └── useDebounce.js
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

Install Tailwind CSS:

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
- Component Reusability
- Props
- React Hooks
- Custom Hooks
- Controlled Inputs
- Conditional Rendering
- Dynamic Routing
- useParams
- useNavigate
- useEffect
- useMemo
- API Integration
- Debouncing
- State Management
- Array Filtering
- Array Sorting

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

- Add TMDB API integration
- Add Favorites Feature
- Add Authentication
- Add Local Storage
- Add Genre Categories
- Add Infinite Scrolling
- Add Skeleton Loading UI
- Add Framer Motion animations
- Add Backend Database
- Add User Reviews
- Add Watchlist Functionality

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