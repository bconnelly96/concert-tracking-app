import { USMap } from "react-us-map";
import "../style/ConcertLocationMapComponent.css";

const ConcertLocationMapComponent = () => {
    return (
        <div className = "ConcertLocationMapComponent">
        <USMap 
             fill={d => northStates.includes(d) ? 'steelblue' : '#eee'}
             stroke={d => northStates.includes(d) ? '#333' : '#ccc'}
             strokeWidth={d => northStates.includes(d) ? 2 : 1}
             sort={(a, b) => (northStates.includes(a) ? 1 : 0) - (northStates.includes(b) ? 1 : 0)}
             textFilter={d => northStates.includes(d)}
             textFill={d => northStates.includes(d) ? '#fff' : '#999'}
             textFontWeight={d => northStates.includes(d) ? 'bold' : 'normal'}
        />
        </div>
    )
};

export default ConcertLocationMapComponent;