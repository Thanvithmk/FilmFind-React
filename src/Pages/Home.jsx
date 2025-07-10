import { useState } from "react";
import MovieCard from "../Components/MovieCard";
import "../css/Home.css"

export default function Home() {
    const [search, setSearch] = useState("");

    const movies = [
        { id: 1, title: "Avengers", release_date: "2024" },
        { id: 2, title: "Banglore days", release_date: "2014" },
        { id: 3, title: "KGF-1", release_date: "2019" }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(search);
        // setSearch("....."); // Only use this if resetting the input is intended
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    value={search}
                    placeholder="search for movies"
                    onChange={(event) => setSearch(event.target.value)}
                />
                <button className="search-btn" type="submit">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) =>
                    (<MovieCard movie={movie} key={movie.id} />)
                )}
            </div>
        </div>
    );
}
