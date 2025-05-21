import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      {/* parent element : one must be returned */}
      <MovieCard movie={{title: "Daniel's Film", release_date: "2025"}}/>
    </>
  );
}

export default App;
