import React,{useReducer} from 'react'
import {Reducer} from '../Reducer/Reducer';
import {CreatContext} from './CreateContext'
import {ADD_TO_TRANSACTION,REMOVE_TO_TRANSACTION} from '../ConstantType'


export const UseContext = (props) => {
    let initialValue={
        transactions:[
            {id:1,desc:"Salary",amount:+1000},
            {id:2,desc:"Bouns",amount:+500},
            {id:3,desc:"Food",amount: -200},
        ]
    }  
    const [state,dispatch]=useReducer(useReducer,initialValue)
    return (
        <div>
           <CreatContext.Provider value={{
            //    In satte we get whole transactions of array in objects
               transactions: state.transactions
           }}>
               {props.children}
        </CreatContext.Provider> 
        </div>
    )
}
