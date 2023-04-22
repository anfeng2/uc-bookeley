import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import MapFeed from './Components/MapFeed';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mapfeed' element={<MapFeed/>} />
      </Routes>
    </Router>
  );
}

export default App;


