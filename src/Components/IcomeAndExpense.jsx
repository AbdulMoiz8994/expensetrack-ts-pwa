import React, { useContext } from 'react'
import {CreatContext} from '../Services/ContextApi/CreateContext'
export const IcomeAndExpense = () => {
const {transactions}=useContext(CreatContext)
 console.log(transactions);
const amounts=transactions.map((amount) => amount.amount)
console.log(amounts);
const income=amounts.filter((amounts) => amounts > 0).reduce(((acc,value) => acc +=value),0).toFixed(2)
// The reducer by default value id 0 and it will assign to acc
console.log(income);

const expense=amounts.filter((amounts)=> amounts < 0).reduce(((acc,value) => acc=acc+value),0).toFixed(2)
// The reducer by default value id 0 and it will assign to acc

console.log(expense); 
    return (
        <div>
            <div>
            <h2>Icome
                <span>${income}</span>
            </h2>
            </div>
            <div>
                <h2>Expense
                    <span>${expense}</span>
                </h2>
            </div>
        </div>
    )
}
