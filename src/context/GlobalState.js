import { createContext } from "react";
import { useReducer } from "react";
import AppReducer from './AppReducer'

//create Intial state
const initialState = {
    transactions: []
}

//Create global context
export const GlobalContext = createContext(initialState);

//Create global  provider
export const GlobalProvider = ({ children }) => {
const [state, dispatch] = useReducer(AppReducer, initialState);

//Create action and add to dispatch
function deleteTransaction(id) {
    dispatch ({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
}

function addTransaction(id) {
    dispatch ({
        type: 'ADD_TRANSACTION',
        payload: id
    });
}

return <GlobalContext.Provider value={{ 
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
    }}>
    {children}
</GlobalContext.Provider>
}
