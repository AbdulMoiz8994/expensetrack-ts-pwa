import {ADD_TO_TRANSACTION,REMOVE_TO_TRANSACTION} from '../ConstantType'

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
            return{
                ...state,
                transactions:[ ...state.transactions,action.payload]
            }           
            default:
                return state
    }
}
