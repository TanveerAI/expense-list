
import React , {useState} from 'react';
import './ExpForm.css';
const ExpForm = (props) => {

    const [enteredtitle , setTitle] = useState('');
    const [enteredamount , setAmount] = useState('');
    const [entereddate , setDate] = useState('');

    // const [input , setInput] = useState({
    //     newtitle:'',
    //     newAmount:'',
    //     newdate:'',
    // });

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
        // setInput({
        //     ...input,
        //     newtitle:event.target.value
        // });
        // setInput((prevState)=>{
        //     return {...prevState,
        //         newtitle:event.target.value,
        //     }
        // })
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
        // setInput({
        //     ...input,
        //     newdate:event.target.value,
        //     });
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
        // setInput({
        // ...input,
        // newdate:event.target.value,
        // });
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expensedata ={
            title : enteredtitle,
            amount: +enteredamount,
            date : new Date(entereddate),
        };

        props.onSaveExpenseData(expensedata);
        setTitle('');
        setAmount('');
        setDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="newexp-controls">
                <div className="newexp-control">
                    <label> Title </label>
                    <input onChange={titleChangeHandler} value={enteredtitle} type="text" />
                </div>
                <div className="newexp-control">
                    <label> Amount </label>
                    <input onChange={amountChangeHandler} value={enteredamount} type="number" min="0.01" step="0.01" />
                </div>
                <div className="newexp-control">
                    <label>Date</label>
                    <input onChange={dateChangeHandler} value={entereddate} type="date" min="2020-01-01" max="2026-02-13" />
                </div>
                </div>
            <div className="newexp-actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpForm;