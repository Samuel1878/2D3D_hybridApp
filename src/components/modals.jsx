import { BlurView } from "expo-blur";
import { Modal, Text, View } from "react-native";
import Styles from "../libs/Styles";

export const ChangeModel = ({changed})=> {
    return(
        <Modal
        animationType="fade"
        transparent={true}
        visible={changed}
        onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModal(!changed);
        }}
        >
        <BlurView intensity={50} tint="dark" style={Styles.modal}>
            <View style={Styles.modalBox}>
            <Text style={Styles.Txt2M}>Successfully changed</Text>
            <Text style={Styles.Txt3}>
                Changing frequencely may occur your account banned, temporary!
            </Text>
            </View>
        </BlurView>
        </Modal>
    )

}
export const ErrorModel = (changed) => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={changed}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModal(!changed);
        }}
      >
        <BlurView intensity={50} tint="dark" style={Styles.modal}>
          <View style={Styles.modalBox}>
            <Text style={[Styles.Txt2M,{color:"red"}]}>Error!</Text>
            <Text style={Styles.Txt3}>
              Something went wrong! try again later.
            </Text>
          </View>
        </BlurView>
      </Modal>
    );
}