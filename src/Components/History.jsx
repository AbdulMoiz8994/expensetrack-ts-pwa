import React,{useContext} from 'react'
import {CreatContext} from '../Services/ContextApi/CreateContext'
export const History = () => {
   
    let {transactions}=useContext(CreatContext)
    console.log(transactions);
// let initialValue={
//     transactions:[
//         {id:1,desc:"Salary",amount:+1000},
//         {id:2,desc:"Bouns",amount:+500},
//         {id:3,desc:"Food",amount: -200},
//     ]
// }


    // const {transactions} = initialValue

    return (
        <div>
            <ul>
            {transactions.map((transactionObj) =>{
               return(
              <li key={transactionObj.id}>{transactionObj.desc} <span> {transactionObj.amount}</span></li>
               )
            })}
            </ul>
        </div>
    )
}
