import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [showForm, setshowForm] = useState(false);

    const showFormHandler = () => {
        setshowForm(true);
    };

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setshowForm(false);
    };

    const onCloseFormHandler = (event) => {
        setshowForm(false);
    };

    return (
        <div className="new-expense">
            {!showForm && (
                <button onClick={showFormHandler}>Add New Expense</button>
            )}
            {showForm && (
                <ExpenseForm
                    onSaveExpenseData={onSaveExpenseDataHandler}
                    onCloseForm={onCloseFormHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
