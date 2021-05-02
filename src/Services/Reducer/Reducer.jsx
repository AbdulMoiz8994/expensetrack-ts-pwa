import {ADD_TO_TRANSACTION,REMOVE_TO_TRANSACTION} from '../ConstantType'

let initialValue={
    transactions:[
        {id:1,desc:"Food",value:+200},
        {id:2,desc:"Dinner",value:+800},
        {id:3,desc:"Re-freshment",value:-100}
    ]
}
export default function Reducer(state=initialValue,action){
    switch(action.type){
        case ADD_TO_TRANSACTION:
            // console.log(state);
            return({
                ...state,
                transactions: state.transactions
                // transactions:  action.transactions
            })
          default:
              return state  
    }
}