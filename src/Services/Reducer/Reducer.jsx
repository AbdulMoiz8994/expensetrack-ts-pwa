import {ADD_TO_TRANSACTION,REMOVE_TO_TRANSACTION} from '../ConstantType'
import {Actions,} from '../../TS-TYPE/TypeScriptType'

export const Reducer=(state,action) =>{
    console.log(action);
    switch(action.type){
        case REMOVE_TO_TRANSACTION:
            console.log(state);
            return{
                ...state,
                transactions: state.transactions.filter((transaction) => transaction.id !== action.payload)
            }
        case ADD_TO_TRANSACTION:
            return({
                ...state,
                transactions: [action.payload,...state.transactions]
            })          
            default:
                return state
    }
}
