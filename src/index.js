import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Home from "./screens/Home";
import ThreeD from "./screens/3D";
import TwoD from "./screens/2D";
import { app_1, app_2, app_3, bg_1, bg_3 } from "./libs/style";
const Tab = createMaterialBottomTabNavigator();
const Navigations = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={({route})=>({
            tabBarIcon:({focused, color,size})=>{
                let iconName ;
                let iconSize;
                let iconColor = focused ? bg_1 : bg_3;
                switch (route.name) {
                    case "home":
                        iconName= focused?"home":"home-outline";
                        iconSize= focused?36:24;
                        return <Ionicons name={iconName} size={iconSize} color={iconColor}/>;
                        break;
                    case "2D":
                        iconName = focused
                          ? "numeric-2-box-multiple"
                          : "numeric-2-box-multiple-outline";
                        iconSize = focused ? 36 : 24;
                        return (
                          <MaterialCommunityIcons
                            name={iconName}
                            size={iconSize}
                            color={iconColor}
                          />
                        );
                        break;
                    case "3D":
                        iconName = focused
                          ? "numeric-3-box-multiple"
                          : "numeric-3-box-multiple-outline";
                        iconSize = focused ? 36 : 24;
                        return (
                          <MaterialCommunityIcons
                            name={iconName}
                            size={iconSize}
                            color={iconColor}
                          />
                        );
                        break;
                    default:
                        break;
                };
               
            }
        })}
        activeColor={app_1}
        inactiveColor={bg_3}
        barStyle={{ backgroundColor: app_2, padding:10}}
      >
        <Tab.Screen
          name="2D"
          component={TwoD}
        //   options={{
        //     tabBarLabel: "2D",
        //     tabBarIcon: ({ color, size }) => (
        //       <FontAwesome5 name="draft2digital" size={24} color="black" />
        //     ),
        //   }}
        />
        <Tab.Screen
          name="home"
          component={Home}
        //   options={{
        //     tabBarLabel: "Home",
        //     tabBarIcon: ({ color, size }) => (
        //       <MaterialCommunityIcons name="home" color={color} size={24} />
        //     ),
        //   }}
        />
        <Tab.Screen
          name="3D"
          component={ThreeD}
        //   options={{
        //     tabBarLabel: "3D",
        //     tabBarIcon: ({ color, size }) => (
        //       <MaterialCommunityIcons name="ticket" size={24} color="black" />
        //     ),
        //   }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigations;
