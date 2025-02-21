import moment from "moment";
import { Link } from "react-router-dom";

import "../style/ConcertTableComponent.css";

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

                                <Link to={{pathname: `/setlist_information/${concert.artist}/${concert.date}`}}>
                                {moment(concert.date).format("M-D-YYYY")}
                                </Link>
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