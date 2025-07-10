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

    const handleSearch =async (e) => {
        e.preventDefault();
        
        if(!search.trim())return 
        if(loading) return 
        setLoading(true)

        try {
            const searchResults =await searchMovies(search)
            setMovies(searchResults)
            setError(null)

        }catch(err){
            setError("Failed to fetch movies...")
        }finally{
            setLoading(false)
        }
        setSearch("");
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

            {error && <div className="error-msg">{error}</div>}

            {loading ? (<div className="loading">Loading...</div>):
            <div className="movies-grid">
                {movies.map((movie) =>
                    (<MovieCard movie={movie} key={movie.id} />)
                )}
            </div>}

    
        </div>
    );
}
