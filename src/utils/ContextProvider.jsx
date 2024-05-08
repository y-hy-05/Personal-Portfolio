import React, {  createContext, useState } from "react"


export const MyContext = createContext()

export const MyProvider = ({ children }) => {

    const [dark, setDark] = useState(true)


    return (
        <>

            <MyContext.Provider value={ [dark, setDark] } >
                {children}
            </MyContext.Provider>

        </>
    )


}