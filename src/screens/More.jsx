import { View, Text, Image, TouchableWithoutFeedback, FlatList } from "react-native";
import styles, { app_1, app_3, app_4, bg_1, bg_3b, bg_3c } from "../libs/style";
import { LoginBtn, RegisterBtn } from "../components/logRegBtn";
import { BlurView } from "expo-blur";
import LogReg from "../layouts/logReg";
import { useContext, useEffect, useRef, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import ServiceBtn from "../components/ServiceBtn";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DATA } from "../libs/data";
import LottieView from "lottie-react-native";
import AuthContext from "../services/auth/authContext";

const More = ({ navigation }) => {
  const animation = useRef(null)
  const { profile, name, phone, level } = useContext(GlobalContext);
    const {signOut,userToken} = useContext(AuthContext)
    const renderItem = ({item}) =>{
      const pressHandler = ()=>{
        switch (item.id) {
          case 9:
            signOut();
            navigation.navigate("Home")
            break;
          case 4:
            navigation.navigate("PwdChange")
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
            <Text style={styles.moreItemTxt}>{item.title}</Text>
          </TouchableOpacity>

        )
    }
    useEffect(()=>{
      animation?.current.play()
    },[])



  return (
    <View style={styles.Container}>
      <View style={styles.topmeCon}>
        {userToken && (
          <TouchableOpacity
            onPress={() => navigation.navigate("me")}
            style={styles.userProfileCon}
          >
            <Image style={styles.userProfile} source={profile} />
            <View style={styles.userDataBox}>
              <Text style={styles.userNameTxt}>
                {name}
                <MaterialIcons name="verified-user" size={21} color={bg_3b} />
              </Text>
              <Text style={styles.userDataTxt}>
                Phone: {phone}{" "}
                <MaterialIcons name="verified" size={20} color={bg_3b} />
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.bottomMeCon}>
        <FlatList
          data={DATA}
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
