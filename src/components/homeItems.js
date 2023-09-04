import { View,Text } from "react-native"
import { app_4 } from "../libs/style"
import Services from "./services"
import TwoDmini from "./2Dmini"

const HomeItems = ({item})=>{
    console.log(item)
    switch (item.title) {
        case "services":
        return<Services/>
        case "2D":
            return<TwoDmini/>
        default:
        return(
      <View style={{ backgroundColor: app_4, height: 300 }}>
        <Text>Fulck adfasdf asdfasdf asdf</Text>
      </View>
    );
    }

}
export default HomeItems