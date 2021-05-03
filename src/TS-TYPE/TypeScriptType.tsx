import {ADD_TO_TRANSACTION,REMOVE_TO_TRANSACTION} from '../Services/ConstantType'

export interface initialState{
    transactions:{
            id: number,
            desc: string,
            amount: number,
    }
    delTransaction: (id:number) => void,
    addTransaction: (transaction:TransactionTYPE) => void

}
export type TransactionTYPE={
    id: number,
    desc: string,
    amount: number

}
export type Actions={
  type: "ADD_TO_TRANSACTION";
  payload: number     
}

