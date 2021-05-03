import React from 'react';
import './App.css';
import {UseContext} from './Services/ContextApi/UseContext'
// import comp
import {AddTransaction,History,Header,Balance,IcomeAndExpense} from './Components/index'

function App() {
  return (
    <div className="App">
     <Header/>
     <UseContext>
     <Balance/>
     <IcomeAndExpense/>
     <History/>
     <AddTransaction/>
     </UseContext>
    </div>
  );
}

export default App;
