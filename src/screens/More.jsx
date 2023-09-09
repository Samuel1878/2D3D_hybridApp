import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles, { app_1, app_3, app_4 } from "../libs/style";
import { LoginBtn, RegisterBtn } from "../components/logRegBtn";
import { BlurView } from "expo-blur";
import LogReg from "../layouts/logReg";
import { useContext, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import ServiceBtn from "../components/ServiceBtn";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const More = ({ navigation }) => {
  const [profileShown, setProfileShown] = useState(false);
  const { loggedIn, profile, name, phone, level } = useContext(GlobalContext);
  const showProfile = () => {
    if (profileShown) {
      setProfileShown(false);
      return;
    }
    setProfileShown(true);
  };
  const hideProfile = () => {
    if (profileShown) {
      setProfileShown(false);
    }
  };
  return (
    <View style={styles.Container}>
      <View style={styles.topMoreCon}>
        {loggedIn ? (
          <View style={styles.userProfileCon}>
            <View style={styles.userDataBox}>
              <Text style={styles.userNameTxt}>
                {name}
                <MaterialIcons name="verified-user" size={21} color={app_4} />
              </Text>
              <Text style={styles.userDataTxt}>
                Phone: {phone}{" "}
                <MaterialIcons name="verified" size={20} color={app_3} />
              </Text>
              <Text style={styles.userDataTxt}>
                level:{level}{" "}
                <MaterialCommunityIcons
                  name="numeric-1-box-multiple"
                  size={21}
                  color="black"
                />
              </Text>
              <TouchableOpacity
                style={styles.privacySetting}
                onPress={showProfile}
              >
                <Text style={styles.privacySettingTxt}>Privacy Setting</Text>
                <AntDesign
                  name={profileShown ? "up" : "down"}
                  size={26}
                  color={app_1}
                />
              </TouchableOpacity>
            </View>
            <Image style={styles.userProfile} source={profile} />
          </View>
        ) : (
          <></>
        )}
      </View>
      <View
        style={[
          styles.hiddenProfile,
          { display: profileShown ? "block" : "none" },
        ]}
      >
        <TouchableOpacity>
          <Text>Name Change</Text>
        </TouchableOpacity>
        <Text>Password Change</Text>
        <TextInput />
        <TextInput />
        <TextInput />
        <TouchableOpacity>
          <Text>Upload profile</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>

      <TouchableWithoutFeedback onPress={hideProfile} style={styles.bottomCon}>
        <View style={{ flex: 2 }}></View>
      </TouchableWithoutFeedback>
      {loggedIn ? <ServiceBtn /> : <LogReg navigation={navigation} />}
    </View>
  );
};
export default More;
