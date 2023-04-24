import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import MapFeed from './Components/MapFeed';
import Favorite from './Components/Favorite';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/uc-bookeley/' element={<Home/>}/>
        <Route path='/uc-bookeley/mapfeed' element={<MapFeed/>} />
        <Route path='/uc-bookeley/fav_libraries' element={<Favorite/>} />
      </Routes>
    </Router>
  );
}

export default App;


