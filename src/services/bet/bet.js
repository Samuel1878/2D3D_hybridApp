import { useContext, useState } from "react"
import BetContext from "./betContext"

const BetProvider =({children})=>{
    const [betDigits2D, setBetDigits2D] = useState([]);
    const [betDigits3D, setBetDigits3D] = useState([]);
    return(
        <BetContext.Provider
            value={{betDigits2D,setBetDigits2D}}>
            {children}
        </BetContext.Provider>
    )
}
export default BetProvider