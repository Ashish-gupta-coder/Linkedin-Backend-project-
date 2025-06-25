import React, { createContext } from 'react'
export const authdataContext = createContext()
const serverUrl = "http://localhost:3000"
function Authcontext({children}) {
    let value={
serverUrl
    }
  return (
    <div>
        <authdataContext.Provider value={value}>

      {children}
        </authdataContext.Provider>
    </div>
  )
}

export default Authcontext
