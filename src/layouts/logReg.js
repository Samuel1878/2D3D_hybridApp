import { View, Text } from "react-native";
import styles from "../libs/style";
import { LoginBtn, RegisterBtn } from "../components/logRegBtn";
import { BlurView } from "expo-blur";
export default function LogReg({navigation}) {
  return (
      <BlurView style={styles.btnBlurCon} intensity={50} tint="light">
        <View style={styles.btnContainer}>
          <LoginBtn navigation={navigation} />
          <RegisterBtn navigation={navigation} />
          <Text style={styles.btnLabelTxt}>
            Please! login or register, to get full access
          </Text>
        </View>
      </BlurView>
  );
};
