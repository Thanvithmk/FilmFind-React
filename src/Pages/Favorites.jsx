import "../css/Favorites.css"
import { useMovieContext } from "../Contexts/MovieContext"
import MovieCard from "../Components/MovieCard"
import { useContext } from "react"
export default function Favorites(){
    const {favorites}=useMovieContext();

    if(favorites){
        return(
            <div className="movies-grid">
                            {favorites.map((movie) =>
                                (<MovieCard movie={movie} key={movie.id} />)
                            )}
                        </div>
        );
    }
    return(
        <div className="favorites-empty">
            <h2>No fav movies</h2>
            <p>Start adding movies</p>
        </div>
    )
}