import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/* import Omdb from "./component/Omdb"; */
import Omdb from "./component/Omdb";
import Comedies from './pages/Comedies';
import Anime from './pages/Anime';
import MovieRequest from './pages/MovieRequest';
import Navbar from './component/Navbar';

function App() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/" element={<Omdb />} />
            <Route path="/comedies" element={<Comedies />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/movierequest" element={<MovieRequest />} />
        </Routes>
    </Router>
)}
export default App;