import React , {useState} from 'react'
import Card from "../UI/Card";
import './Exp.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Exp = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
    
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return(
    <Card className="expenses">

      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {/* <Expenses
          title={props.items[0].title}
          Price={props.items[0].amount}
          date={props.items[0].date}
        />
        <Expenses
          title={props.items[1].title}
          Price={props.items[1].amount}
          date={props.items[1].date}
        />
        <Expenses
          title={props.items[2].title}
          Price={props.items[2].amount}
          date={props.items[2].date}
        />
        <Expenses
          title={props.items[3].title}
          Price={props.items[3].amount}
          date={props.items[3].date}
        /> */}

        {/* {filteredExpenses.length === 0 ? (<p>No Expenses Found</p>) : (
          filteredExpenses.map(expense => <Expenses key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
        )} */}
        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList item={filteredExpenses} />
      
    </Card>
    )
}
export default Exp;

// import React, { useState } from 'react';

// import Card from '../UI/Card';
// import ExpensesFilter from './ExpensesFilter';
// import ExpensesList from './ExpensesList';
// import ExpensesChart from './ExpensesChart';
// import './Expenses.css';

// const Exp = (props) => {
//   const [filteredYear, setFilteredYear] = useState('2020');

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   const filteredExpenses = props.items.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

//   return (
//     <div>
//       <Card className='expenses'>
//         <ExpensesFilter
//           selected={filteredYear}
//           onChangeFilter={filterChangeHandler}
//         />
//         <ExpensesChart expenses={filteredExpenses} />
//         <ExpensesList item={filteredExpenses} />
//       </Card>
//     </div>
//   );
// };

// export default Exp;