import { FlatList, View } from "react-native";
import Styles from "../libs/Styles";


const AddressBook = () => {
    const renderItem = ({item,index}) =>{
        return(
            <View>
                
            </View>
        )
    }
    return (
        <View style={Styles.Container}>
            <FlatList
                renderItem={renderItem}
                style={Styles.addressBookCon}
                />
        </View>
    )
}
export default AddressBook;