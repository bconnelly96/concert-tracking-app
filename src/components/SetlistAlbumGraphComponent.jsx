import "../style/SetlistAlbumGraphComponent.css";
import { ResponsivePie } from "@nivo/pie";

function getChartData(albumData) {
    var chartData = []
    for (const [key, value] of Object.entries(albumData)) {
        chartData.push(
            {
                "id": key,
                "label": key,
                "value": value
            }
        )
    }

    return chartData;
}

const SetlistAlbumGraphComponent = ({ albumData }) => {
    const chartData = getChartData(albumData);

    return (
        <div className = "SetlistAlbumGraphComponent">
        <h2>Album Breakdown</h2>
        <ResponsivePie
        data={chartData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={["#666b70", "#6C809A", "#F2D1C9"]}
        colorBy="index"
        borderWidth={1}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#000"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor="#000"
        legends={[
            {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#000",
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
}

export default SetlistAlbumGraphComponent;