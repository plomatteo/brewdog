import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar1 from './components/Navbar';
import HomeScreen from './screen/HomeScreen';
import FavouritesScreen from './screen/FavouritesScreen';
import SingleBeerScreen from './screen/SingleBeerScreen';
import ErrorScreen from './screen/ErrorScreen';
import { useEffect } from 'react';
import { useGlobalContext } from './context';

function App() {

  const {
    favouritesArray,
    setFavouritesArray,
  } = useGlobalContext();

  useEffect(() => {
    if (favouritesArray.length === 0 && localStorage.getItem('jsonOnLocalstorage')) {
      setFavouritesArray((JSON.parse(localStorage.getItem('jsonOnLocalstorage'))));
    }
  }, [])// eslint-disable-line

  return (
    <Router className='App'>
      <Navbar1 />
      <Routes>
        <Route path='' element={<HomeScreen />} />
        <Route path='favourites' element={<FavouritesScreen />} />
        <Route path='randombeer/:id' element={<SingleBeerScreen />} />
        <Route path='beers/:id' element={<SingleBeerScreen />} />
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
