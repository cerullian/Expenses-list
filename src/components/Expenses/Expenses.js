import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2022");
    
    // let filterInfoText = "2019, 2020 & 2021";

    // if (filteredYear === "2019") {
    //     filterInfoText = "2020, 2021 & 2022";
    // } else if (filteredYear === "2020") {
    //     filterInfoText = "2019, 2021 & 2022";
    // } else if (filteredYear === "2021") {
    //     filterInfoText = "2019, 2020 & 2022";
    // } else {
    //     filterInfoText = "2019, 2020 & 2021";
    // };

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {/* <p>Data for years {filterInfoText} is hidden.</p> */}
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
