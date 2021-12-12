import { useState } from "react"
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
    
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: +amount
            //to add amount as int add +amount

        }
        addTransaction(newTransaction);
    }
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text.." />
                </div>
                <div className="form-control">
                    <label htmlFor="text">Amount<br />(negative-expense, positive-income)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount.." />
                </div>
                <button className='add-btn'>Add Transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
