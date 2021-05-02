import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
         <h2>Add Transaction</h2>
            <form>
                <label>ADD Description</label>
                <input type="text" name="text"  placeholder="Enter Description" />
                <label>ADD Amount
                    <p>(Income,Expense)</p>
                    <input type="number" name="number" placeholder="Enter Amount"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>

        </div>
    )
}
