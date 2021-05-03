import React, { useContext } from 'react'
import {CreatContext} from '../Services/ContextApi/CreateContext'


export const Balance = () => {

const {transactions}=useContext(CreatContext)
console.log(transactions);
const balance= transactions.map((amounts) => amounts.amount)
console.log(balance); 
const totalBalance=balance.reduce(((acc,value) => acc += value),0).toFixed(2)

    return (
        <div>
            <h1>Your Balance</h1>
              <h3>${totalBalance}</h3>
        </div>
    )
}
