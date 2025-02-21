import { useState, useEffect } from "react";
import axios from "axios";
import ConcertMetadataComponent from "./ConcertMetadataComponent.jsx";
import SetlistComponent from "./SetlistComponent.jsx";
import AlbumGraphComponent from "./AlbumGraphComponent.jsx";
import { useLocation, useParams } from "react-router-dom";

const artistName = "Billy Strings";
const concertDate = "02-08-2024";

const concertViewComponent = ({ concertInfo }) => {
    const [concertMetadata, setConcertMetadata] = useState(null);
    const [concertSetlistData, setConcertSetlistData] = useState(null);
    //const [concertAlbumData, setConcertAlbumData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    //const albumData = {
    //    "Home": 2,
    //    "Cover": 2,
    //    "Renewal": 1
    //}

    useEffect(() => {
        const setlistUrl = "http://localhost:3000/setlists/metadata";
        const params = {
            headers: {
                Accept: 'application/json'
            },
            params: {
                "artistName": artistName,
                "date": concertDate
            }
        };
        const fetchData = async() => {
            try {
                const response = await axios.get(setlistUrl, params);
                setLoading(false);

                const setlist = response.data.setlist[0];
                console.log(setlist)

                setConcertMetadata({
                    "artist": setlist.artist.name,
                    "date": setlist.eventDate,
                    "venue": setlist.venue.name,
                    "city": setlist.venue.city.name,
                    "locale": setlist.venue.city.state,
                    "tour": setlist.tour.name
                })

                setConcertSetlistData(setlist.sets.set)

            } catch (error) {
                console.log(error);
                setError(true);
            }
        };
        fetchData();
    },[]);

    if (loading) {
        return (<div>Loading concert Data...</div>);
    }

    if (error) {
        return(<div>Error retrieving concert data. Error: { error }</div>);
    }

    if (concertMetadata) {
        return (
            <div>
                <ConcertMetadataComponent concertMetadata = { concertMetadata } />
                <SetlistComponent concertSetlistData = { concertSetlistData } />
            </div>
        )
    }
}

export default concertViewComponent;