import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import axios from "axios";

import SetlistMetadataComponent from "./SetlistMetadataComponent.jsx";
import SetlistComponent from "./SetlistComponent.jsx";
import SetlistAlbumGraphComponent from "./SetlistAlbumGraphComponent.jsx";
import "../style/SetlistViewPage.css";


const SetlistViewPage = (props) => {
    const [concertMetadata, setConcertMetadata] = useState(null);
    const [concertSetlistData, setConcertSetlistData] = useState(null);
    //const [concertAlbumData, setConcertAlbumData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //const albumData = {
    //    "Home": 2,
    //    "Cover": 2,
    //    "Renewal": 1
    //}

    const {artist, date} = useParams();
    const artistName = artist;
    // API takes date format that is not compatible with moment
    const apiDate = moment(date).format("D-M-YYYY");

    useEffect(() => {
        const setlistUrl = "http://localhost:3000/setlists/metadata";
        const params = {
            headers: {
                Accept: 'application/json'
            },
            params: {
                "artistName": artistName,
                "date": apiDate
            }
        };
        const fetchData = async() => {
            try {
                const response = await axios.get(setlistUrl, params);
                setLoading(false);

                const setlist = response.data.setlist[0];

                console.log(setlist.eventDate)
                setConcertMetadata({
                    "artist": setlist.artist.name,
                    "date": date,
                    "venue": setlist.venue.name,
                    "city": setlist.venue.city.name,
                    "locale": setlist.venue.city.state,
                    "tour": setlist.tour ? setlist.tour.name : "N/A",
                })

                setConcertSetlistData(setlist.sets.set)

            } catch (error) {
                console.log(error);
                setError("Setlist data does not exist for the given artist/date.");
            }
        };
        fetchData();
    },[]);

    if (loading) {
        return (<div>Loading concert Data...</div>);
    }

    if (error) {
        return(
            <div className = "Error">
                <p>Error retrieving concert setlist data. {error}</p>
            </div>
        )
    }

    if (concertMetadata) {
        return (
            <div>
                <SetlistMetadataComponent concertMetadata = { concertMetadata } />
                <SetlistComponent concertSetlistData = { concertSetlistData } />
            </div>
        )
    }
}

export default SetlistViewPage;