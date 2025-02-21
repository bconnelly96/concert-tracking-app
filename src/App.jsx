import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css'
import ConcertViewPage from "./components/ConcertViewPage.jsx";
import SetlistViewPage from "./components/SetlistViewPage.jsx";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<ConcertViewPage />} />
                    <Route path="/setlist_information/:artist/:date" element={<SetlistViewPage />} />
                </Routes>
            </Router>
        </>
    )
};

export default App;