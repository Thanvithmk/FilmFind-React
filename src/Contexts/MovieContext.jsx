import { createContext,useState,useContext,useEffect } from "react";

const MovieContext=createContext()

export const useMovieContext=()=>{
    return useContext(MovieContext)
}

export const MovieProvider=({children})=>{

    const [favorites,setFavorites]=useState([]);

    useEffect(()=>{
        const storedFavs=localStorage.getItem("favorites")
        if(storedFavs) setFavorites(JSON.parse(storedFavs))
    },[])

    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])

    const addToFavorites=(movie)=>{
        // Added a check to prevent adding duplicates
        if (!favorites.some(favMovie => favMovie.id === movie.id)) {
            setFavorites(prev=>[...prev,movie])
        }
    }

    const removeFromFavorites=(movieId)=>{
        // Corrected typo from movie.if to movie.id
        setFavorites(prev=>prev.filter(movie=>movie.id!==movieId))
    }

    const isFavorite=(movieId)=>{
        // Corrected typo from movie.Id to movie.id
        return favorites.some(movie=>movie.id===movieId)
    }

    const value={
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}