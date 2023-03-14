import './ExpenseDate.css';
import Card from '../UI/Card';
function ExpenseDate(props){
    
    const month = props.date.toLocaleString('en-US', {month : 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US'  , {day : '2-digit'});
    return (
            <div className="calendar">
                <div className='month'>{month}</div>
                <div className='day'>{day}</div>
                <div className='year'>{year}</div>
        </div>
        
    )
}
export default ExpenseDate;