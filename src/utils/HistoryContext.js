import React, { createContext, useState, useContext } from "react";

const HistoryContext = createContext();
const { Provider } = HistoryContext;

const HistoryProvider = ({children}) => {
    const [history, setHistory] = useState([]);
    return (
        <Provider value={[history, setHistory]}>
            {children}
        </Provider>
    )
}

const useHistoryContext = () => {
    return useContext(HistoryContext);
};

export {HistoryProvider, useHistoryContext};