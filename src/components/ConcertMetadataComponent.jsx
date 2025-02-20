import moment from "moment";
import "../style/ConcertMetadataComponent.css";

const ConcertMetadataComponent = ({ concertMetadata }) => {
    console.log(concertMetadata)
    return (
        <div className = "ConcertMetadataComponent">
            <h2>SHOW INFO</h2>
            <table>
                <thead>
                    <tr>
                        <th>Artist</th>
                        <th>Concert Date</th>
                        <th>Concert Venue</th>
                        <th>City</th>
                        <th>State / Country</th>
                        <th>Tour</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{concertMetadata.artist}</td>
                        <td>{moment(concertMetadata.date).format("M-D-YYYY")}</td>
                        <td>{concertMetadata.venue}</td>
                        <td>{concertMetadata.city}</td>
                        <td>{concertMetadata.locale}</td>
                        <td>{concertMetadata.tour}</td>
                    </tr>
                </tbody>
            </table>
        </div>)
};

export default ConcertMetadataComponent;