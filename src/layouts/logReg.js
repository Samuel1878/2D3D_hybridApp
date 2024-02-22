import { View, Text } from "react-native";
import stylesCon from "../libs/style";
import { LoginBtn, RegisterBtn } from "../components/logRegBtn";
import { BlurView } from "expo-blur";
export default function LogReg({navigation}) {
      const styles = stylesCon();
  return (
      <BlurView style={styles.btnBlurCon} intensity={100} tint="dark">
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
