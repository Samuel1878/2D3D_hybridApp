import { View ,Text,TextInput, Image, Modal, Pressable} from "react-native"
import Styles from "../libs/Styles"
import { useContext, useEffect, useState } from "react"
import LocalContext from "../services/localization/localContext"
import { ayaPay, cbPay, kbzPay, wavePay } from "../libs/data"
import { TouchableOpacity } from "react-native"
import { app_1, bg_3b } from "../libs/style"
import { Footer } from "./footer";
import * as ImagePicker from "expo-image-picker";
import axios from "axios"
import { DEPOSIT, PAYMENTS } from "../hooks/config"
import AuthContext from "../services/auth/authContext"
import AnimatedLoader from "react-native-animated-loader";
import * as Clipboard from "expo-clipboard";
import * as FileSystem from "expo-file-system";
import GlobalContext from "../services/global/globalContext"
import { BlurView } from "expo-blur"
import { useTheme } from "@react-navigation/native"
const DepositLayout = () =>{
   const colors = useTheme().colors;
    const {depoMethod,deposit,setDeposit} = useContext(LocalContext);
    const {navigation} = useContext(GlobalContext)
    const {userToken} = useContext(AuthContext);
    const [tranId, setTranId] = useState("");
    const [isQr, setIsQr] = useState(false);
    const [isNote, setIsNote] = useState(true);
    const [image, setImage] = useState(null);
    const [modal, setModal] = useState(false);
    const [payments, setPayments ] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [index, setIndex] = useState(0);
    const [downloadedStatus,setDownloadedStatus] = useState(null)
    
const submitFnc = () =>{
    deposit &&
      axios.post(
        DEPOSIT,
        {
            amount:deposit,
            name:payments[index].name,
            phone:payments[index].phone,
            oneTimeNo:tranId,
            file:Image,
            type:"deposit",
            method:depoMethod
        },
        {
            params:{"userToken":userToken},
            headers: { "Content-Type": "application/json" },
        }
      ).then((e)=>{
        if(e.status === 201 || 200){
            setModal(true);
        }
      }).catch((e)=>console.log(e));
};

const hideModalFnc = async()=> {
    setModal(!modal);
  await navigation.navigate("Wallet")
}
const uploadImage = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
     if (!result.canceled){
       setImage(result.assets[0].uri);
     }
};
const callback = downloadProgress => {
  const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
  setDownloadedStatus({progress:progress});
  console.debug(progress)
};
const createDownloadFile = FileSystem.createDownloadResumable(
  // payments?[index]?.qr||require("../../assets/qrCode.png"),
  "https://media.geeksforgeeks.org/wp-content/uploads/20210401125141/mywiki.png",
  FileSystem.documentDirectory + "mywiki.png",
  {},
  callback
);
const downloadFnc = ()=>{
    const {uri} = createDownloadFile.downloadAsync();
    console.debug(uri)
}

    useEffect(()=>{
        setTranId(Math.floor(1000 + Math.random() * 9000));
        axios.get(PAYMENTS, 
            {headers:{"Content-Type":"application/json"},
            params:{userToken:userToken,method:depoMethod}})
            .then((e)=>{
              e.status===(200||201) && setPayments(e.data)
            })
            .catch((e)=>console.log(e)).finally(()=>setLoaded(true))
    },[])
    //  useEffect(() => {
    //    succeed&&setTimeout(()=>{setSucceed(false); navigation.navigate("deposit");},2000)
    //  }, [succeed]);
     useEffect(() => {
            console.log(index);
        if(index>=payments?.length-1){
        
            setIndex(0)
        }
        
     }, [index]);
    return (
      <View style={Styles.depositContainer}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modal}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModal(!modal);
            }}
          >
            <BlurView intensity={50} tint="dark" style={Styles.modal}>
              <View style={Styles.modalBox}>
                <Text style={Styles.Txt2M}>Successed!</Text>
                <Text style={Styles.Txt3}>
                  Your deposit has been placed. This may take 24
                  business hours to be accomplished.
                </Text>
                <Text>Please check your receipts.</Text>
                <Pressable
                  style={Styles.modalBtn}
                  onPress={hideModalFnc}
                >
                  <Text style={Styles.Txt3}>OK</Text>
                </Pressable>
              </View>
            </BlurView>
          </Modal>

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
              {loaded ? (
                <View style={Styles.depositPaymentsCon}>
                  <Text style={Styles.depositNameTxt}>
                    {payments[index].name}
                  </Text>
                  <Text style={Styles.depositNameTxt}>
                    {payments[index]?.phone}
                  </Text>
                </View>
              ) : (
                <AnimatedLoader
                  visible={loaded}
                  overlayColor="red"
                  animationStyle={Styles.loader}
                  speed={1}
                >
                  <Text>Doing something...</Text>
                </AnimatedLoader>
              )}
              <TouchableOpacity
                style={Styles.changeBtn}
                onPress={() => setIndex((prev) => prev + 1)}
              >
                <Text style={Styles.Txt2M}>Change</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.depositCopyBtn}
                onPress={() => Clipboard.setStringAsync(payments[index].phone)}
              >
                <Text style={Styles.depositBtnTxt1}>Copy</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={Styles.depositRowCon}>
              {payments[index]?.qr === null ? (
                <Image
                  style={Styles.qrCode}
                  source={require("../../assets/qr.png")}
                />
              ) : (
                <Image
                  style={Styles.qrCode}
                  source={{ uri: payments[index].qr }}
                />
              )}
              <TouchableOpacity
                style={Styles.changeBtn}
                onPress={() => setIndex((prev) => prev + 1)}
              >
                <Text style={Styles.Txt2M}>Change</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Styles.depositCopyBtn}
                onPress={downloadFnc}
              >
                <Text style={Styles.depositBtnTxt1}>Download</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={Styles.depositRowCon}>
          <TouchableOpacity
            style={[
              Styles.qrToggleBtn,
              { backgroundColor: !isNote ? app_1 : bg_3b },
            ]}
            onPress={() => isNote && setIsNote(false)}
          >
            <Text style={Styles.depositBtnTxt1}>Note</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.qrToggleBtn,
              { backgroundColor: isNote ? app_1 : bg_3b },
            ]}
            onPress={() => !isNote && setIsNote(true)}
          >
            <Text style={Styles.depositBtnTxt1}>Screenshot</Text>
          </TouchableOpacity>
        </View>
        {!isNote ? (
          <View style={Styles.depositCon}>
            <Text style={Styles.depositH1}>
              Please add this 4-digits note in transaction
            </Text>
            <TouchableOpacity
              style={Styles.TranId}
              onPress={() => Clipboard.setStringAsync(tranId)}
            >
              <Text style={Styles.tranIdTxt}>{tranId}</Text>
            </TouchableOpacity>

            <Text style={Styles.depositTxt}>
              This four digits pair is your one-time transaction ID
            </Text>
          </View>
        ) : (
          <>
            <Text style={Styles.depositH1}>
              Please take a screenshot after transaction completed!
            </Text>
            <View style={Styles.depositCon}>
              <View style={Styles.depositRowCon}>
                <View style={Styles.depositImageCon}>
                  {image && (
                    <Image
                      source={{ uri: image }}
                      style={Styles.depositImage}
                    />
                  )}
                  {!image && (
                    <Image
                      source={require("../../assets/qrCode.jpg")}
                      style={Styles.depositImage}
                    />
                  )}
                </View>
                <View style={Styles.clickhere}>
                  <Text style={Styles.Txt2M}>Go to Gallery</Text>
                </View>
                <TouchableOpacity
                  style={Styles.depositUploadBtn}
                  onPress={uploadImage}
                >
                  <Text style={Styles.depositBtnTxt}>Upload Image</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}

        <TouchableOpacity style={Styles.submitBtn} onPress={submitFnc}>
          <Text style={Styles.depositBtnTxt}>Submit</Text>
        </TouchableOpacity>
        <Footer />
      </View>
    );
}
export default DepositLayout;