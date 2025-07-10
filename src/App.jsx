import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import Home from './Pages/Home'
import Favorites from './Pages/Favorites'
import NavBar from './Components/NavBar'
import { MovieProvider } from './Contexts/MovieContext'
function App() {
  return (
    <MovieProvider>
      <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </main>  

    </MovieProvider>
      
  )
}

export default App
