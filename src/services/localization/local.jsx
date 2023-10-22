import { useState } from "react";
import LocalContext from "./localContext"
const Local = ({children}) =>{
    const [lang,setLang] = useState("en");
    const [mode, setMode] = useState(false);
    const [theme, setTheme] = useState("dark")
    const [sendTo, setSendTo] = useState("");
    const [detail, setDetail] = useState({});
    const [depoMethod, setDepoMethod] = useState("");
    const [withMethod,setWithMethod] = useState("");
    const [deposit,setDeposit] = useState("");
    const [withDraw,setWithdraw] = useState("");
    const [forgetNo, setForgetNo] = useState("");

    return (
      <LocalContext.Provider
        value={{
          mode,
          lang,
          setLang,
          setMode,
          setSendTo,
          sendTo,
          detail,
          setDetail,
          depoMethod,
          setDepoMethod,
          withMethod,
          setWithMethod,
          deposit,
          setDeposit,
          withDraw,
          setWithdraw,
          forgetNo,
          setForgetNo,
        }}
      >
        {children}
      </LocalContext.Provider>
    );
}
export default Local ;