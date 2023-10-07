import { useState } from "react";
import LocalContext from "./localContext"
const Local = ({children}) =>{
    const [lang,setLang] = useState("en");
    const [mode, setMode] = useState("dark");
    return(
        <LocalContext.Provider 
            value={{mode,lang,setLang,setMode}}>
            {children}
        </LocalContext.Provider>
    )
}
export default Local ;