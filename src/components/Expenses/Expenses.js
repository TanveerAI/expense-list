import React from 'react'
import './Expenses.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function Expenses(props) {
    // const expensedate = new Date(2022 , 7,28);
    // const expenseTitle = 'Car Insurance';
    // const expensePrice = 294.67;

    // const [title , setTitle] = useState(props.title);

    // const clickHandler = () => {
    //   setTitle('Updated!');
    //   console.log(title);
    // }


  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="description">
            <h2>{props.title}</h2>
          </div>
          <div className="price">${props.Price}</div>
          {/* <button onClick={clickHandler}> Change Title</button> */}
      </Card>
      </li>   
  )
}

export default Expenses;


