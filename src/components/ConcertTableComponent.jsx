import "../style/ConcertTableComponent.css";
import moment from "moment";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import SetlistViewPage from "../components/SetlistViewPage.jsx";

const ConcertTableComponent = ({ concertList }) => {
    return (
        <div className="ConcertTable">
        <h1>Concert Dashboard</h1>
        <table>
            <thead >
                <tr>
                    <th>ID</th>
                    <th>Artist</th>
                    <th>Date</th>
                    <th>Venue</th>
                    <th>Rating</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                {
                    concertList.map(concert =>
                        <tr key = {concert.id}>
                            <td>{concert.id}</td>
                            <td>{concert.artist}</td>
                            <td>
                               {moment(concert.date).format("M-D-YYYY")}
                            </td>
                            <td>{concert.venue}</td>
                            <td>{concert.rating}</td>
                            <td>{concert.notes}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    );
};

export default ConcertTableComponent;