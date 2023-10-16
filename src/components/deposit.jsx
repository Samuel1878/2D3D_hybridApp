import { View ,Text,TextInput, Image} from "react-native"
import Styles from "../libs/Styles"
import { useContext, useEffect, useState } from "react"
import LocalContext from "../services/localization/localContext"
import { ayaPay, cbPay, kbzPay, wavePay } from "../libs/data"
import { TouchableOpacity } from "react-native"
import { app_1, bg_3b } from "../libs/style"
import { Footer } from "./footer"

const DepositLayout = () =>{
    const {depoMethod,deposit,setDeposit} = useContext(LocalContext);
    const [tranId, setTranId] = useState("");
    const [isQr, setIsQr] = useState(false);
    

    useEffect(()=>{
        setTranId(Math.floor(1000 + Math.random() * 9000))
    },[])

    return (
      <View style={Styles.depositContainer}>
        {depoMethod === "kbzPay" ? (
          <Image style={Styles.MethodImg} source={kbzPay} />
        ) : (
          ""
        )}
        {depoMethod === "wavePay" ? (
          <Image style={Styles.MethodImg} source={wavePay} />
        ) : (
          ""
        )}
        {depoMethod === "ayaPay" ? (
          <Image style={Styles.MethodImg} source={ayaPay} />
        ) : (
          ""
        )}
        {depoMethod === "cbPay" ? (
          <Image style={Styles.MethodImg} source={cbPay} />
        ) : (
          ""
        )}
        <Text style={Styles.depospitH}>Submit your deposit</Text>

        <View style={Styles.depositCon}>
          <View style={Styles.depositRowCon}>
            <Text style={Styles.depositTxt}>Transfer Amount:</Text>
            <Text style={Styles.depositDataTxt}>{deposit}</Text>
          </View>
          <View style={Styles.depositRowCon}>
            <Text style={Styles.depositTxt}>Payment method</Text>
            <Text style={Styles.depositDataTxt}>{depoMethod}</Text>
          </View>
        </View>

        <View style={Styles.depositRowCon}>
          <TouchableOpacity
            style={[
              Styles.qrToggleBtn,
              { backgroundColor: !isQr ? app_1 : bg_3b },
            ]}
            onPress={() => isQr && setIsQr(false)}
          >
            <Text style={Styles.depositBtnTxt1}>Phone</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.qrToggleBtn,
              { backgroundColor: isQr ? app_1 : bg_3b },
            ]}
            onPress={() => !isQr && setIsQr(true)}
          >
            <Text style={Styles.depositBtnTxt1}>QR code </Text>
          </TouchableOpacity>
        </View>
        <Text style={Styles.depositH1}>
          Please transfer to the following Payment Account
        </Text>
        <View style={Styles.depositCon}>
          {!isQr ? (
            <View style={Styles.depositRowCon}>
              <View style={Styles.depositPaymentsCon}>
                <Text style={Styles.depositNameTxt}>U Richest R. Rina</Text>
                <Text style={Styles.depositNameTxt}>0978798234</Text>
              </View>
              <TouchableOpacity style={Styles.depositCopyBtn}>
                <Text style={Styles.depositBtnTxt1}>Copy</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={Styles.depositRowCon}>
              <Image
                style={Styles.qrCode}
                source={require("../../assets/qr.png")}
              />
              <TouchableOpacity style={Styles.depositCopyBtn}>
                <Text style={Styles.depositBtnTxt1}>Download</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={Styles.depositCon}>
          <Text style={Styles.depositH1}>Please add note</Text>
          <TouchableOpacity style={Styles.TranId}>
            <Text style={Styles.tranIdTxt}>{tranId}</Text>
          </TouchableOpacity>

          <Text style={Styles.depositTxt}>
            This four digits pair is your one-time transaction ID
          </Text>
        </View>
        <Text style={Styles.depositH1}>Or</Text>
        <View style={Styles.depositCon}>
          <TouchableOpacity style={Styles.depositUploadBtn}>
            <Text style={Styles.depositBtnTxt}>Upload Image</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={Styles.submitBtn}>
          <Text style={Styles.depositBtnTxt}>Submit</Text>
        </TouchableOpacity>
        <Footer/>
        
      </View>
    );
}
export default DepositLayout;