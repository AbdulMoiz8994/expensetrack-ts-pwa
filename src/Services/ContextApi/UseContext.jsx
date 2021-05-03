import React,{useReducer} from 'react'
import {Reducer} from '../Reducer/Reducer';
import {CreatContext} from './CreateContext'
import {ADD_TO_TRANSACTION,REMOVE_TO_TRANSACTION} from '../ConstantType'
import {initialState,TransactionTYPE} from '../../TS-TYPE/TypeScriptType'

export const UseContext = (props) => {
    let initialValue={
        transactions:[]
            // {id:1,desc:"Salary",amount:1000},
            // {id:2,desc:"Bouns",amount:500},
            // {id:3,desc:"Food",amount: -200},
            // {id:4,desc:"Dinner",amount: -100},

        // ]
    }  
    const [state,dispatch]=useReducer(Reducer,initialValue)

    const delTransaction=(id) =>{
        console.log(id);
        dispatch({
            type: REMOVE_TO_TRANSACTION,
            payload: id
        })
    }

const addTransaction=(transaction) =>{
    console.log(transaction);
    dispatch({
        type: ADD_TO_TRANSACTION,
        payload:transaction
    })
}

// we will get the id which we gie in new Date()  object


    return (
        <div>
           <CreatContext.Provider value={{
            //    In satte we get whole transactions of array in objects
               transactions: state.transactions,
               addTransaction,
               delTransaction,
           }}>
               {props.children}
        </CreatContext.Provider> 
        </div>
    )
}
