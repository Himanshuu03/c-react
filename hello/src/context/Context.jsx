import React, { createContext, useState } from 'react'

const AppContext = createContext();

function Context({children}) {
    const [data,setData] = useState({
        fullname:"",
        email:"",
        address:"",
        query:"",
        state:false
    })
    const value ={
        data,setData
    } 
  return<AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}

export default Context
export {AppContext}