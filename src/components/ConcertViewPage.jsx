import { useState, useEffect } from 'react'
import axios from "axios";

import ConcertTableComponent from "./ConcertTableComponent.jsx";
import ConcertInputComponent from "./ConcertInputComponent.jsx";
import ConcertArtistGraphComponent from "./ConcertArtistGraphComponent.jsx"
import ConcertDateGraphComponent from "./ConcertDateGraphComponent.jsx"

const ConcertViewPage = () => {
    const [concertList, setConcertList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Callback to pass updates back to parent page
    function updateConcertList(newConcert) {
        setConcertList([...concertList, newConcert]);

        return (
            <div>
                <ConcertTableComponent concertList = { concertList }/>
                <ConcertInputComponent updateConcertList = { updateConcertList }/>
                <ConcertArtistGraphComponent concertList = { concertList }/>
                <ConcertDateGraphComponent concertList = { concertList }/>
            </div>
        )
    }

    // Fetch concert info from API
    useEffect(() => {
        const concertsUrl = "http://localhost:3000/concerts/";
        const params = {
            headers: {
                Accept: "ConcertViewPagelication/json"
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
                <ConcertArtistGraphComponent concertList = { concertList }/>
                <ConcertDateGraphComponent concertList = { concertList }/>
            </div>
        )
    }
};

export default ConcertViewPage;