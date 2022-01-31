import React, { useState, createContext } from 'react';

const initialState = {
    values: ['Home'],
};

export const HomeContext = createContext(initialState);

export const HomeContextProvider = ({ children, initialFilters }) => {
    const [values, setValues] = useState(['Home']);
 
    return (
        <HomeContext.Provider
            value={{
                values
            }}
        >
            {children}
        </HomeContext.Provider>
    );
};
