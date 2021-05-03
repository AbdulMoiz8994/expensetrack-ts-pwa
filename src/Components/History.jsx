import React,{useContext} from 'react'
import {CreatContext} from '../Services/ContextApi/CreateContext'
export const History = () => {
   
    let {transactions,delTransaction}=useContext(CreatContext)
console.log(transactions);    

    return (
        <div>
            <ul>
            {transactions.map((transactionObj) =>{
                console.log(transactionObj);
               return(
                   <div key={transactionObj.id}>
              <li >{transactionObj.desc} 
              <span> {transactionObj.amount}
              </span> 
              <button  onClick={() => delTransaction(transactionObj.id)}>X</button></li>
              </div>
               )
            })}
            </ul>
        </div>
    )
}
