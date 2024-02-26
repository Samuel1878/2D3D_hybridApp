import { View,Text ,TextInput,Image, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from "react-native";
import StylesCon from "../libs/Styles";
import { useContext, useEffect, useState } from "react";
import * as Contacts from "expo-contacts";
import { AlphabetList } from "react-native-section-alphabet-list";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalContext from "../services/global/globalContext";
import LocalContext from "../services/localization/localContext";
import { useTranslation } from "react-i18next";
import { XDLoader } from "../components/modals";


const AddressBook = () => {
    const Styles = StylesCon();
    const{t} = useTranslation();
    const {navigation} = useContext(GlobalContext);
    const {setSendTo} = useContext(LocalContext)
    const [contacts, setContacts] = useState([]);
    const [filtered,setFiltered] = useState([]);
    const [data,setData] = useState([])
    const [sName, setSName] = useState("");
  
    const selectFnc = (e) =>()=>{
        setSendTo(e);
        navigation.navigate("TransferMain")
    };
  useEffect(()=>{
    setData(() =>
      filtered.map((e) => ({
        value: e.name,
        key: e.phoneNumbers[0].number,
      }))
    );
 return; 
},[filtered])
    useEffect(()=>{    
      if(contacts.length>0){

         setFiltered(
           contacts.sort((a, b) => {
             return (a.firstName || a.name) - (b.firstName || b.name);
           })
         );
         return
      }

    },[contacts]);
     useEffect(() => {
       (async () => {
         const { status } = await Contacts.requestPermissionsAsync();
         if (status === "granted") {
           const { data } = await Contacts.getContactsAsync({
             fields: [Contacts.Fields.PhoneNumbers],
           });
           setContacts(data);

           return
         };
       })();
     }, []);
     useEffect(() => {
      if (sName){
        let s = contacts.filter((e) => e.name.includes(sName));
        setFiltered(s);
      }
      
     }, [sName]);

    
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        
        <View style={Styles.Container}>
          <View style={Styles.searchCon}>
            <TextInput
              value={sName}
              onChangeText={(e) => setSName(e)}
              placeholder={t("enter name")}
              style={Styles.searchInput}
              placeholderTextColor={"#f4f5f6"}
              
            />
          </View>
          <SafeAreaView style={Styles.addressContainer}>
              <AlphabetList
                uncategorizedAtTop={true}
                data={data}
                renderCustomItem={(item) => {
                  return (
                    <TouchableOpacity style={Styles.addressBook} onPress={selectFnc(item.key)} key={item.key}>
                      <Image
                        style={Styles.addressProfile}
                        source={require("../../assets/profile.png")}
                      />
                      <View style={Styles.addressD}>
                        <Text style={Styles.addressN}>{item.value}</Text>
                        <Text style={Styles.addressN}>{item.key}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                }}
                indexLetterStyle={Styles.addressBookCon}
                renderCustomSectionHeader={(section) => (
                  <View style={Styles.addressHCon}>
                    <Text style={Styles.addressHeader}>{section.title}</Text>
                  </View>
                )}
              />
       
          </SafeAreaView>
        </View>
      </TouchableWithoutFeedback>
    );
}
export default AddressBook;