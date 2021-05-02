import React, { createContext } from 'react';
import './App.css';
import {UseContext} from './Services/ContextApi/UseContext'
// import comp
import {AddTransaction,History,Header,Balance,IcomeAndExpense} from './Components/index'

function App() {
  return (
    <div className="App">
     <Header/>
     <Balance/>
     <UseContext>
     <IcomeAndExpense/>
     <History/>
     <AddTransaction/>
     </UseContext>
    </div>
  );
}

export default App;
