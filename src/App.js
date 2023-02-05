import React, { useState } from "react";
import Expenses from "./components/ExpenseComponents/Expenses";
import NewExpense from "./components/NewExpenseComponents/NewExpense";
import "./components/ExpenseComponents/Expenses.css";

const dummyExpenses = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: "e2",
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
    },
    {
        id: "e5",
        title: "Books",
        amount: 14.12,
        date: new Date(2020, 8, 4),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(dummyExpenses);

    const onAddExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    };

    return (
        <div>
            <NewExpense onAddExpense={onAddExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
