import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const datapointValues = props.datapoints.map(
        (datapoint) => datapoint.value
    );
    const totalMax = Math.max(...datapointValues);
    return (
        <div className="chart">
            {props.datapoints.map((datapoint) => (
                <ChartBar
                    key={datapoint.id}
                    value={datapoint.value}
                    label={datapoint.label}
                    maxValue={totalMax}
                />
            ))}
        </div>
    );
};

export default Chart;
