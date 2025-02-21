import { ResponsiveBar } from "@nivo/bar";
import "../style/ConcertDateGraphComponent.css";
import moment from "moment";

function getChartData(concertList) {
    var chartData = [];

    var years = {};
    for (const concert of concertList) {
        const year = moment(concert.date).year();
        if (year in years) {
            years[year] += 1;
        } else {
            years[year] = 1;
        }
    }

    for (const [key, value] of Object.entries(years)) {
        chartData.push({
            "Year": key,
            "Concerts Attended": value
        });
    }

    chartData.sort((a,b) => moment(a["Year"]).valueOf() - moment(b["Year"]).valueOf())
    return chartData;
}


const ConcertDateGraphComponent = ({ concertList }) => {
    const chartData = getChartData(concertList);

    return(
        <div className = "ConcertDateGraphComponent">
        <h2>Concerts Attended by Year</h2>
        <ResponsiveBar
        data={chartData}
        theme={
            {
                axis: {
                    legend: {
                        text: {
                            fill: "#FFFFFF"
                        }
                    },
                    ticks: {
                        text: {
                            fill: "#FFFFFF"
                        }
                    }
                }
            }
        }
        keys={[
            "Concerts Attended"
        ]}
        indexBy="Year"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={["#6C809A"]}
        colorBy="index"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Year",
            legendPosition: "middle",
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Number Of Concerts Attended",
            legendPosition: "middle",
            legendOffset: -40,
            truncateTickAt: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="#FFFFFF"
        legends={[
            {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                itemTextColor: "#FFFFFF",
                symbolSize: 20,
                effects: [
                    {
                        on: "hover",
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
    />
        </div>
    );
};

export default ConcertDateGraphComponent;