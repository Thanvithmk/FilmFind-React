//const API_KEY ="f05484e5540d0188a4b5a89f4d81873e"
const API_KEY = "f05484e5540d0188a4b5a89f4d81873e";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) { // This block should be inside the function
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    if (!response.ok) { // This block should be inside the function
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.results;
};