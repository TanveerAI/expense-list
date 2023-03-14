import React , {useState} from 'react';
import './App.css';
import Exp from './components/Expenses/Exp';
import NewExp from './components/NewExp/NewExp';

const DummyExpenses = [
  {
    id : 'E1',
    title : 'Mobile Phone',
    amount : 1500,
    date : new Date(2023,2,26),
  },
  {
    id : 'E2',
    title : 'Smart TV',
    amount : 1200,
    date : new Date(2023,9,24),
  },
  {
    id : 'E3',
    title : 'Sports Bike',
    amount : 6000,
    date : new Date(2024,2,23),
  },
  {
    id : 'E4',
    title : 'Car Insurance',
    amount : 250,
    date : new Date(2024,11,16),
  },
  {
    id : 'E5',
    title : 'Car',
    amount : 250,
    date : new Date(2022,11,16),
  },
  {
    id : 'E6',
    title : 'Body Spray',
    amount : 350,
    date : new Date(2020,5,16),
  }
];


function App() {

  const [expenses , setExpense] = useState(DummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpense ( (prevExpenses) => {
      return [expense , ...prevExpenses];
    });
  };
  
  return (
    <div className='back'>
      <NewExp onAddExpense={addExpenseHandler} />
      <Exp items={expenses}/>
      
    </div>
  );
}

export default App;
