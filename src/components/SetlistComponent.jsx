import "../style/SetlistComponent.css";

const SetlistComponent = ({ concertSetlistData }) => {
    return (
        <div className = "SetlistComponent">
            <h2>SETLIST</h2>
            {
                concertSetlistData.map(set => 
                    <>
                    <p>{set.encore ? "Encore": set.name}</p>
                    <ol>
                    {
                        set.song.map(song =>
                            <li>
                                {song.info ? `${song.name} ${song.info}`: song.name}
                            </li>
                        )
                    }
                    </ol>
                    </>
                )
            }
        </div>
    )
};

export default SetlistComponent;