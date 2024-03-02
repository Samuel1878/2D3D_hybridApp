import { View, Text, Image,FlatList, SafeAreaView, ImageBackground } from "react-native";
import stylesCon from "../libs/style";
import LogReg from "../layouts/logReg";
import { useContext, useEffect, useRef} from "react";
import GlobalContext from "../services/global/globalContext";
import ServiceBtn from "../components/ServiceBtn";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { DATA } from "../libs/data";
import LottieView from "lottie-react-native";
import AuthContext from "../services/auth/authContext";
import themeProvider from "../libs/theme";
import {useTranslation} from "react-i18next";
  
const More = ({ navigation }) => {
  const styles = stylesCon();
  const { t, i18n } = useTranslation();
  const colors = themeProvider().colors;
  const animation = useRef(null)
  const { profile, proType, name, phone, level } = useContext(GlobalContext);
    const {signOut,userToken} = useContext(AuthContext)
    console.log(userToken)
    const renderItem = ({item}) =>{
      const pressHandler = ()=>{
        switch (item.id) {
          case 9:
            signOut();
            navigation.navigate("Home");
            break;
          case 8:
            navigation.navigate("termofus")
            break;
          case 7:
            navigation.navigate("version")
            break;
          case 6:
              //rate us
            break;
          case 5:
            ///invite code
            break;
          case 4:
            navigation.navigate("PwdChange");
            break;
          case 3:
            navigation.navigate("pin")
            break;
          case 2:
              navigation.navigate("level");
            break;
          case 1:
            navigation.navigate("history")
            break;
          default:
            break;
        }
      }
      
        return(
          <TouchableOpacity 
            onPress={pressHandler}
            style={styles.moreItemCon}>
            <LottieView
              autoPlay
              ref={animation}
              style={styles.moreItemImg}
              source={item.src}
              />
            <Text style={styles.moreItemTxt}> {" "}{item.title}</Text>
          </TouchableOpacity>

        )
    }
    useEffect(()=>{
      animation?.current.play();
      // console.log(profile,proType);
      
    },[])



  return (
    <View style={styles.Container}>
      {/* <SafeAreaView style={styles.topmeCon}> */}
      <ImageBackground
        source={require("../../assets/night.jpg")}
        style={styles.topmeCon}
        resizeMode="cover"
      >
        <SafeAreaView>
          {userToken && (
            <TouchableOpacity
              onPress={() => navigation.navigate("me")}
              style={styles.userProfileCon}
            >
              <Image
                style={styles.userProfile}
                source={{uri:profile}}
              />
              <View style={styles.userDataBox}>
                <Text style={styles.userNameTxt}>{name}</Text>
                <Text style={styles.userDataTxt}>
                  {phone}
                  {/* {phone&&(<MaterialIcons name="verified" size={20} color={colors.bg_3b} />)} */}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </SafeAreaView>
      </ImageBackground>
      {/* </SafeAreaView> */}
      <View style={styles.bottomMeCon}>
        <FlatList
          data={DATA()}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={DATA}
          bounces={false}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {userToken ? <ServiceBtn /> : <LogReg navigation={navigation} />}
    </View>
  );
};
export default More;
