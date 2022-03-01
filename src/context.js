import { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [query, setQuery] = useState('');
    const [inputPage, setInputPage] = useState(1);
    const [favouritesArray, setFavouritesArray] = useState([]);

    return <AppContext.Provider value={
        {
            inputPage,
            setInputPage,
            query,
            setQuery,
            favouritesArray,
            setFavouritesArray,
        }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext };