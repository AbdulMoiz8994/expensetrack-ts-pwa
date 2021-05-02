import React from 'react';
import './App.css';

// import components from Comp Folder
import {Header} from './Components/Header'
// 
import Balance from './Containrs/BalanceCont'
import IcomeAndExpense from './Containrs/IcoandExpCont'
import History from './Containrs/HistoryCont'
import AddTransaction  from './Containrs/AddTranssactionCont';

function App() {
  return (
    <div className="App">
      <Header/>
      <Balance/>
      <IcomeAndExpense/>
      <History/>
      <AddTransaction/>
    </div>
  );
}

export default App;
