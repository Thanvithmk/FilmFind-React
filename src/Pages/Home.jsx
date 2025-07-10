import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import "../css/Home.css"
import { searchMovies,getPopularMovies } from "../Services/api";

export default function Home() {
    const [search, setSearch] = useState("");

    const [movies,setMovies]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const loadPopularMovies=async()=>{
            try{
                const popularMovies=await getPopularMovies()
                setMovies(popularMovies)

            }catch(err){
                console.log(err)
                setError("Failed to load movies")
            }finally{
                setLoading(false)
            }
        }
        loadPopularMovies();
    },[])

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
