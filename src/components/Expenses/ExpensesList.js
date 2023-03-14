import './ExpensesList.css';
import Expenses from './Expenses';
function ExpensesList(props){

    if(props.item.length === 0){
        return <h2 className='expense-list__fallback'>No expenses found</h2>
    }

    return (
        <ul className="expense-list">
        {props.item.map((expense => <Expenses key={expense.id} title={expense.title} Price={expense.amount} date={expense.date} />))}
        </ul>
    );

};

export default ExpensesList;