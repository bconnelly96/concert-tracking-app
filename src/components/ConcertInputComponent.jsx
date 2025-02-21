import { useState } from "react";
import axios from "axios";

import "../style/ConcertInputComponent.css";

const ConcertInputComponent = ({ updateConcertList }) => {
    const [inputVals, setInputVals] = useState([]);

    const onButtonClick = () => {
        if (!inputVals.artist_input || !inputVals.date_input || !inputVals.venue_input || !inputVals.rating_input) {
            alert("Missing data values. Must include arist name, date, venue, and rating to add a concert to the list.");
        } else {
            const concertsUrl = "http://localhost:3000/concerts/";
            const tableData = {
                "artist": inputVals.artist_input,
                "date": inputVals.date_input,
                "venue": inputVals.venue_input,
                "rating": parseInt(inputVals.rating_input),
                "notes": inputVals.notes_input
            };

            const params = {
                headers: {
                    Accept: "application/json"
                },
                params: {
                    "tableName": "concerts",
                    "tableData": tableData
                }
            };
            
            const postData = async() => {
                try {
                    const response = await axios.post(concertsUrl, params);
                    if (response.status === 200) {
                        // Pass new concert to Parent component
                        updateConcertList(tableData);

                        var newInputVals = {};
                        for (const [key, value] of Object.entries(inputVals)) {
                            newInputVals[key] = "";
                        }
                        setInputVals(newInputVals);
                    } else {
                        alert(`Concert was not added successfully. HTTP status code: ${response.status}`);
                    }
                } catch(error) {
                    console.log(error);
                }
            };
            postData();
        }

    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setInputVals(prevVals => ({...prevVals, [name]: value }));
    }

    return(
        <div className="ConcertInputComponent">
        <table>
            <thead>
                <tr>
                    <th>Artist</th>
                    <th>Date</th>
                    <th>Venue</th>
                    <th>Show Rating</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                            type="text"
                            id="artist_input" 
                            name="artist_input" 
                            placeholder=""
                            onChange={handleInputChange} 
                            value={inputVals.artist_input}
                        />
                    </td>
                    <td>
                        <input 
                            type="text" 
                            id="date_input" 
                            name="date_input"
                            placeholder=""
                            onChange={handleInputChange} 
                            value={inputVals.date_input}
                        />
                    </td>
                    <td>
                        <input 
                            type="text" 
                            id="venue_input" 
                            name="venue_input"
                            placeholder=""
                            onChange={handleInputChange} 
                            value={inputVals.venue_input}
                        />
                    </td>
                    <td>
                        <input 
                            type="text" 
                            id="rating_input" 
                            name="rating_input"
                            placeholder=""
                            onChange={handleInputChange} 
                            value={inputVals.rating_input}
                        />
                    </td>
                    <td>
                        <input 
                            type="text" 
                            id="notes_input" 
                            name="notes_input"
                            placeholder=""
                            onChange={handleInputChange} 
                            value={inputVals.notes_input}
                        />
                    </td>
                    <td>
                    <button type="button" onClick={onButtonClick}>Add Concert</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    );
};

export default ConcertInputComponent;