import { FlatList, View,Text ,TextInput,Image, SectionList, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from "react-native";
import Styles from "../libs/Styles";
import { useContext, useEffect, useState } from "react";
import * as Contacts from "expo-contacts";
import { AlphabetList } from "react-native-section-alphabet-list";
import { SafeAreaView } from "react-native-safe-area-context";
import { bg_3 } from "../libs/style";
import GlobalContext from "../services/global/globalContext";
import LocalContext from "../services/localization/localContext";


const AddressBook = () => {
    const {navigation} = useContext(GlobalContext);
    const {setSendTo} = useContext(LocalContext)
    const [contacts, setContacts] = useState([]);
    const [filtered,setFiltered] = useState([]);
    const [data,setData] = useState([])
    const [sName, setSName] = useState("");
    const [loaded, setLoaded] = useState(false)
    const renderArray = ()=> contacts?.sort((a,b)=>{return(a.firstName||a.name) - ( b.firstName ||b.name ) });
    const selectFnc = (e) =>()=>{
        setSendTo(e);
        navigation.navigate("TransferMain")
    };
    const createData = () => {
        setData(()=>filtered?.map((e) => ({
           value:e.name,
           key:e.phoneNumbers[0].number
         })));
         return setLoaded(true);
    };
    function readyData () {
        setFiltered(()=>renderArray());
        createData();
        console.log(filtered)
    };
     useEffect(() => {
       (async () => {
         const { status } = await Contacts.requestPermissionsAsync();
         if (status === "granted") {
           const { data } = await Contacts.getContactsAsync({
             fields: [Contacts.Fields.PhoneNumbers],
           });
           setContacts(data);
           readyData();
           return
         }
       })();
      
       
     }, []);
     useEffect(() => {
      if ( sName === "" || sName.length===0){
        readyData()
        return
      } else {
        let s = contacts.filter((e) => e.name.includes(sName));
        setFiltered(s);
        createData();
      }
      
     }, [sName,contacts]);
    
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={Styles.Container}>
          <View style={Styles.searchCon}>
            <TextInput
              value={sName}
              onChangeText={(e) => setSName(e)}
              placeholder="Please Enter Name"
              style={Styles.searchInput}
            />
          </View>
          <SafeAreaView style={Styles.addressContainer}>
           { loaded&&<AlphabetList
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
                }
          </SafeAreaView>
        </View>
      </TouchableWithoutFeedback>
    );
}
export default AddressBook;