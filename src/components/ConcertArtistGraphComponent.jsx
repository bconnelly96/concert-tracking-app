import { ResponsivePie } from "@nivo/pie";
import "../style/ConcertArtistGraphComponent.css";

function getChartData(concertList) {
    var chartData = []

    var artists = {};
    for (const concert of concertList) {
        const artist = concert.artist;
        if (artist in artists) {
            artists[artist] += 1;
        } else {
            artists[artist] = 1;
        }
    }

    for (const [key, value] of Object.entries(artists)) {
        chartData.push({
            "id": key,
            "label": key,
            "value": value
        });
    }

    return chartData;
}

const ConcertArtistGraphComponent = ({ concertList }) => {
    const chartData = getChartData(concertList)
    return (
        <div className = "ConcertArtistGraphComponent">
        <h2>Concerts Attended By Artist</h2>
        <ResponsivePie
        data={chartData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.45}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={["#AEECEF", "#666b70", "#6C809A", "#F2D1C9", "#DB5461", "#FFBF00", "#EDF060", "#FFFFFF", "#310D20", "#80DED9"]}
        colorBy="index"
        borderWidth={1}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#FFFFFF"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor="#FFFFFF"
        legends={[
            {
                anchor: "top-right",
                direction: "column",
                justify: false,
                translateX: -300,
                translateY: 0,
                itemsSpacing: 6,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#FFFFFF",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                    {
                        on: "hover",
                        style: {
                            itemTextColor: "#000"
                        }
                    }
                ]
            }
        ]}
        />
        </div>
    );
};

export default ConcertArtistGraphComponent;