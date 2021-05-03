import React,{useContext, useRef} from 'react'
import {CreatContext} from '../Services/ContextApi/CreateContext'
export const AddTransaction = () => {
const {addTransaction}=useContext(CreatContext)
// console.log(addTransaction);

    let getDes=useRef(null);
    let getAmount=useRef(null)
    const onSubmitFunc=(e) =>{
      e.preventDefault();
      let desc=getDes.current.value;
      let amount=getAmount.current.value;
    //   Important we do not need to use useState hook only put in varibale
    //   console.log(description);
    //   console.log(amount);
      const addInputs={
          id: new Date().getTime(),
          desc,
          amount: Number(amount)
      }
      console.log(addInputs);
       addTransaction(addInputs) 


    }


    return (
        <div>
         <h2>Add Transaction</h2>
            <form onSubmit={onSubmitFunc}>
                <label>ADD Description</label>
                <input type="text" name="text" required placeholder="Enter Description" ref={getDes}/>
                <label>ADD Amount
                    <p>(Income,Expense)</p>
                    <input type="number" name="number" required placeholder="Enter Amount" ref={getAmount}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>

        </div>
    )
}
