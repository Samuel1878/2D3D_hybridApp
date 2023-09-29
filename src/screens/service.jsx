import { Keyboard, KeyboardAvoidingView, TextInput, TouchableWithoutFeedback, View,Platform, TouchableOpacity, VirtualizedList,Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Styles from "../libs/Styles";
import { bg_2, bg_3 } from "../libs/style";
import { useContext, useRef, useState } from "react";
import LottieView from "lottie-react-native";
import { AntDesign } from "@expo/vector-icons";
import GlobalContext from "../services/global/globalContext";

const ServiceChat = () => {
    const {profile} = useContext(GlobalContext);
    const [multiline, setMultiline] = useState(false)
    const [text,setText] = useState("");
    const [focused, setFocused] = useState(false);
    const [message, setMessage] = useState([])
    const sendAni = useRef(null);
    const SendFnc = async() =>{
        sendAni.current.play();
        setMessage((pres)=>([...pres,{sender:"self",message:text}]));
        setText("")
        console.log(message)
        
    }
    const getItem = (_data, index) => ({
      id: index + 1,
      data: message[index]
    });

    const getItemCount = (_data) => message.length;

    const Message = ({item}) => {
        return (
          <View style={[Styles.MessageItem,{justifyContent:item?.["sender"] === "self" ?"flex-end":"flex-start"}]}>
            {item?.["sender"] === "self" ? (
              <>
                <View style={Styles.messageBOx}>
                  <Text style={Styles.messages}>{item?.message}</Text>
                </View>
                {/* <Image style={Styles.msgProfile} source={profile} /> */}
              </>
            ) : (
              <></>
            )}
          </View>
        );
    }
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          keyboardVerticalOffset={75}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={Styles.ServiceContainer}>
            <View style={Styles.chatAreaCon}>
                <View>
                    <Text>Don't leave the Chat! /n</Text>
                    <Text>Waiting for agent</Text>
                </View>

              <VirtualizedList
                style={[Styles.chatBox,{marginTop:message.length<4?100:10}]}
                initialNumToRender={1}
                renderItem={({ item }) => <Message item={item.data} />}
                keyExtractor={(item) => item.id}
                getItemCount={getItemCount}
                getItem={getItem}
                refreshing={true}
                extraData={[message,text]}
              />
            </View>
            <View style={Styles.ServiceBox}>
              {focused ? (
                <TouchableOpacity onPress={() => setFocused(false)}>
                  <AntDesign name="right" size={30} color={bg_2} />
                </TouchableOpacity>
              ) : (
                <>
                  <TouchableOpacity style={Styles.controls}>
                    <MaterialIcons
                      name="keyboard-voice"
                      size={30}
                      color={bg_2}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={Styles.controls}>
                    <FontAwesome name="camera" size={30} color={bg_2} />
                  </TouchableOpacity>
                  <TouchableOpacity style={Styles.controls}>
                    <Ionicons name="images" size={30} color={bg_3} />
                  </TouchableOpacity>
                </>
              )}
              <TextInput
                style={[Styles.serviceTextInput,{height:multiline?75:45}]}
                value={text}
                onFocus={() => setFocused(true)}
                onTouchStart={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChangeText={(e) => setText(e)}
                multiline={true}
                enterKeyHint="send"
                onContentSizeChange={(e)=>{
                 if(e.nativeEvent.contentSize.width >= 300){
                    setMultiline(true);
                    return
                 }
                 setMultiline(false)
                }}
                lineBreakStrategyIOS="standard"
              />
              <TouchableOpacity style={Styles.sendBtnCon} onPress={SendFnc}>
                <LottieView
                  loop={false}
                  ref={sendAni}
                  autoPlay={false}
                  style={Styles.SendBtn}
                  source={require("../../assets/sendJ.json")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
}
export default ServiceChat;