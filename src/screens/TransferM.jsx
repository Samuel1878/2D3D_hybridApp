import { View,Text } from "react-native";
import Styles from "../libs/Styles";
import { useContext, useEffect, useState } from "react";
import LocalContext from "../services/localization/localContext";
import axios from "axios"

const TransferMain = ()=>{
    const {sendTo} = useContext(LocalContext);
    const [isUser, setIsUser] = useState(false);
    useEffect(()=>{
        axios.get()
    },[])
    return(<View style={Styles.tranContainer}>
        {
            isUser
            ?(<View style={Styles.tranCon}>
                
            </View>)
            :(<View style={Styles.notfoundTran}>
                <Text style={Styles.notfoundH}>User Not Found</Text>
                <Text style={Styles.notfoundTxt}> {sendTo} -This number is not registerred!</Text>
            </View>)
        }

    </View>)
}
export default TransferMain;