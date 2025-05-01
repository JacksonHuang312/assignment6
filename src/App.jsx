import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./Views/HomeView.jsx";
import RegisterView from "./Views/RegisterView.jsx";
import LoginView from "./Views/LoginView.jsx";
import MovieView from "./Views/MovieView.jsx";
import DetailView from "./Views/DetailView.jsx";
import GenreView from "./Views/GenreView.jsx";
import ErrorView from "./Views/ErrorView.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/movies" element={<MovieView />}>
          <Route path="genre/:genre_id" element={<GenreView />} />
          <Route path="details/:id" element={<DetailView />} />
        </Route>
        <Route path="*" element={<ErrorView />} /> {/* Add this line */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;