import { Route, Routes } from "react-router-dom";
import Landing from "../Landing/Landing";
import Movies from "../moviess/Movies/Movies";
import Page404 from "../Page404/Page404";
import SavedMovies from "../moviess/SavedMovies/SavedMovies";
import ProfilePage from "../ProfilePage/ProfilePage";
import "./App.css";

function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
