import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
    const [filterYear, setfilterYear] = useState("2020");

    const filteredExpenses = props.items.filter(
        (expense) => expense.date.getFullYear().toString() === filterYear
    );

    const onSelectFilterHandler = (selectedFilterYear) => {
        setfilterYear(selectedFilterYear);
    };

    return (
        <ul>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filterYear}
                    onSelectFilter={onSelectFilterHandler}
                />
                <ExpenseChart items={filteredExpenses} />
                <ExpenseList items={filteredExpenses} />
            </Card>
        </ul>
    );
};

export default Expenses;
