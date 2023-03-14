import './NewExp.css'
import ExpForm from './ExpForm';
import React , {useState} from 'react';

const NewExp = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expensedata = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        console.log(expensedata);
        setIsEditing(false);
        props.onAddExpense(expensedata);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
      const stopEditingHandler = () => {
        setIsEditing(false);
      };

    return(
        <div className='newexp'>
            {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}



            {/* <ExpForm onSaveExpenseData = {onSaveExpenseDataHandler}/> */}
        </div>

    )
};

export default NewExp; 

