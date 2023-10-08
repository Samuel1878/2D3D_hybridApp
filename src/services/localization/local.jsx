import { useState } from "react";
import LocalContext from "./localContext"
const Local = ({children}) =>{
    const [lang,setLang] = useState("en");
    const [mode, setMode] = useState("dark");
    const [sendTo, setSendTo] = useState("");

    return(
        <LocalContext.Provider 
            value={{mode,lang,setLang,setMode,setSendTo,sendTo}}>
            {children}
        </LocalContext.Provider>
    )
}
export default Local ;