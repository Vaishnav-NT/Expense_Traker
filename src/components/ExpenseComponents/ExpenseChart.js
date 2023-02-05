import React from "react";
import Chart from "../ChartComponents/Chart";

const ExpenseChart = (props) => {
    const chartDatapoints = [
        {
            label: "Jan",
            value: 0,
            id: 1,
        },
        {
            label: "Feb",
            value: 0,
            id: 2,
        },
        {
            label: "Mar",
            value: 0,
            id: 3,
        },
        {
            label: "Apr",
            value: 0,
            id: 4,
        },
        {
            label: "May",
            value: 0,
            id: 5,
        },
        {
            label: "Jun",
            value: 0,
            id: 6,
        },
        {
            label: "Jul",
            value: 0,
            id: 7,
        },
        {
            label: "Aug",
            value: 0,
            id: 8,
        },
        {
            label: "Sept",
            value: 0,
            id: 9,
        },
        {
            label: "Oct",
            value: 0,
            id: 10,
        },
        {
            label: "Nov",
            value: 0,
            id: 11,
        },
        {
            label: "Dec",
            value: 0,
            id: 12,
        },
    ];

    for (const item of props.items) {
        const expenseMonth = item.date.getMonth();
        chartDatapoints[expenseMonth].value += item.amount;
    }

    return <Chart datapoints={chartDatapoints} />;
};

export default ExpenseChart;
