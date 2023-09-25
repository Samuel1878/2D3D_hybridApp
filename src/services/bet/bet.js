import { useContext, useState } from "react"
import BetContext from "./betContext"

const BetProvider =({children})=>{
    const [betDigits2D, setBetDigits2D] = useState([]);
    const [betDigits3D, setBetDigits3D] = useState([]);
    console.log(betDigits2D)
    return(
        <BetContext.Provider
            value={{betDigits2D,setBetDigits2D,betDigits3D,setBetDigits3D}}>
            {children}
        </BetContext.Provider>
    )
}
export default BetProvider