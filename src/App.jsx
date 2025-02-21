import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css'
import ConcertTableComponent from "./components/ConcertTableComponent.jsx";
import ConcertInputComponent from "./components/ConcertInputComponent.jsx";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";

const App = () => {
    const [concertList, setConcertList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    function updateConcertList(newConcert) {
        setConcertList([...concertList, newConcert]);

        return (
            <div>
                <ConcertTableComponent concertList = { concertList }/>
                <ConcertInputComponent updateConcertList = { updateConcertList }/>
            </div>
        )
    }

    useEffect(() => {
        const concertsUrl = "http://localhost:3000/concerts/";
        const params = {
            headers: {
                Accept: "application/json"
            },
            params: {
                "tableName": "concerts"
            }
        };
        const fetchData = async() => {
            try {
                const response = await axios.get(concertsUrl, params);
                setLoading(false);
                setConcertList(response.data);
            } catch(error) {
                console.log(error);
                setError(true);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (<div>Loading concert Data...</div>);
    }

    if (error) {
        return(<div>Error retrieving concert data. Error: { error }</div>);
    }

    if (concertList) {
        return (
            <div>
                
                <ConcertTableComponent concertList = { concertList }/>
                <ConcertInputComponent updateConcertList = { updateConcertList }/>
            </div>
        )
    }
};

export default App;