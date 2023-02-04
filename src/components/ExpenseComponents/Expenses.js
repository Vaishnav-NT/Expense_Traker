import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
    const [filterYear, setfilterYear] = useState("2020");

    const onSelectFilterHandler = (selectedFilterYear) => {
        setfilterYear(selectedFilterYear);
    };

    console.log("In Expense.js");
    console.log(filterYear);

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filterYear}
                onSelectFilter={onSelectFilterHandler}
            />
            <ExpenseItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                date={props.expenses[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expenses[3].title}
                amount={props.expenses[3].amount}
                date={props.expenses[3].date}
            ></ExpenseItem>
        </Card>
    );
};

export default Expenses;
