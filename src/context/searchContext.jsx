import React, { createContext, useState } from 'react';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {

    const [filters, setFilters] = useState('');

    return (
        <SearchContext.Provider
            value={{ filters, setFilters }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export { SearchContext, SearchProvider };
