import React, { useState, useEffect, createContext } from 'react';

export const DataContext = createContext();

const DataProvider = (props) => {
    const [data,setData] = useState([])

    useEffect(() => {
        const dataStore = JSON.parse(localStorage.getItem('dataStore'))
        if(dataStore) setData(dataStore)
    }, [])


    useEffect(() => {
       localStorage.setItem('dataStore',JSON.stringify(data))
    }, [data])


    return (
        <div>
            <DataContext.Provider value={[data,setData]}>
                {props.children}
            </DataContext.Provider>
        </div>
    )
}

export default DataProvider;