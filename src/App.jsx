import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  const API_KEY = "49b4c2d0893203951efcf1028e191267";
  const BASE_URL = "https://api.themoviedb.org/3";
  const PATH = "/trending/movie";

  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    const options = {
      headers: {
        accept: "application/json",
      },
      params: {
        api_key: API_KEY,
        time_window: "day", // Replace `{time_window}` with 'day' or 'week'
      },
    };
    const response = await axios.get(`${BASE_URL}${PATH}/day`, options);
    const trendMovies = response.data.results;
    console.log(trendMovies);
    setMovies(trendMovies);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]); // This ensures the log happens whenever `movies` is updated.

  return (
    <>
      <Navigation trendMovies={movies}></Navigation>
    </>
  );
}

export default App;
