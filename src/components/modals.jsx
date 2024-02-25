import { BlurView } from "expo-blur";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import StylesCon from "../libs/Styles";
import AnimatedLottieView from "lottie-react-native";
import GlobalContext from "../services/global/globalContext";
import { useContext } from "react";

export const ChangeModel = ({setModal,modal})=> {
    const Styles = StylesCon();
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(!modal);
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
    );

}
export const ErrorModel = ({setModal,modal}) => {
    const Styles = StylesCon();
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(!modal);
        }}
      >
        <BlurView intensity={50} tint="dark" style={Styles.modal}>
          <View style={Styles.modalBox}>
            <Text style={[Styles.Txt2M, { color: "red" }]}>Error!</Text>
            <Text style={Styles.Txt3}>
              Something went wrong! try again later.
            </Text>
          </View>
        </BlurView>
      </Modal>
    );
}
export const NoPinErr = ({setModal,modal}) => {
      const Styles = StylesCon();
      const {navigation} = useContext(GlobalContext);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modal}
      onRequestClose={() => {
        setModal(!modal);
      }}
    >
      <BlurView intensity={10} tint="dark" style={Styles.modal}>
        <View style={Styles.modalBox}>
          <Text style={Styles.Txt2M}>Something's wrong</Text>
          <Text style={Styles.Txt4}>
            Check whether you have created fund security pin, or using the
            correct pin. which will be 6-digit number pair. Choose an option.
          </Text>
          <TouchableOpacity
            style={Styles.pinBtn}
            onPress={() => {
              setModal(!modal);
              navigation.navigate("pin");
            }}
          >
            <Text style={Styles.btnTxt2}>Pin management</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.okayCon}
            onPress={() => {
              setModal(!modal);
            }}
          >
            <Text style={Styles.Txt3M}>Try again</Text>
          </TouchableOpacity>
        </View>
      </BlurView>
    </Modal>
  );
};
export const XDLoader = ({setModal,modal}) => {
    const Styles = StylesCon();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modal}
      onRequestClose={() => {
        setModal(!modal);
      }}
    >
      <BlurView intensity={10} tint="dark" style={Styles.modal}>
        <View style={Styles.modalBox}>
          <AnimatedLottieView
            autoPlay
            style={Styles.loader}
            source={require("../../assets/loader.json")}
          />
          <Text style={Styles.Txt3M}>Loading... </Text>
        </View>
      </BlurView>
    </Modal>
  );

};