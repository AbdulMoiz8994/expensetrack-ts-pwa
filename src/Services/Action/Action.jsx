import {ADD_TO_TRANSACTION,REMOVE_TO_TRANSACTION} from '../ConstantType'

export const Action=(transactions) =>{
   return{
       transactions:transactions,
       type: ADD_TO_TRANSACTION,   
   }
}