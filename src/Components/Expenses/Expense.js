import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import './Expense.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

function Expense(props) {
  const [choosedYear, setChoosedYear] = useState('2019');

  const filteredYearHandler = (selectedYear) => {
    console.log(selectedYear);
    setChoosedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((filteredExpense) => {
    return filteredExpense.date.getFullYear().toString() === choosedYear;
  });

  return (
    <Card className="expense">
      <ExpensesFilter
        selected={choosedYear}
        onFilteredYear={filteredYearHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expense;
