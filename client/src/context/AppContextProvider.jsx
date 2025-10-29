import { AppContext } from "./AppContext";
import { useState } from "react";


export const AppContextProvider  = ({children})=>{

    const backendUrl = import.meta.env.VITE_BACKENDURL


        const [demoOpen, setDemoOpen] = useState(false); 
    const value  = {
          demoOpen, setDemoOpen , backendUrl
    }
     
     return (
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
     )
}

