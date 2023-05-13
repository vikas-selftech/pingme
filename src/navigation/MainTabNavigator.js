import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DemoScreen from "../screens/DemoScreen";
import ChatListScreen from "../screens/ChatListScreen";
import { Entypo, Ionicons } from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator 
            initialRouteName="ChatList"
            screenOptions={{
                tabBarStyle: { backgroundColor: "whitesmoke" },
                headerStyle: { backgroundColor: "whitesmoke" },
            }}
        >
            <Tab.Screen name="Status" component={DemoScreen} 
            options={{
                tabBarIcon: ({color, size}) => {
                    <Ionicons name="logo-whatsapp" size={size} color={color} />
                }
            }} />
            <Tab.Screen name="Calls" component={DemoScreen} 
            options={{
                tabBarIcon: ({color, size}) => {
                    <Ionicons name="call-outline" size={size} color={color} />
                }
            }} />
            <Tab.Screen name="Camera" component={DemoScreen} 
            options={{
                tabBarIcon: ({color, size}) => {
                    <Ionicons name="camera-outline" size={size} color={color} />
                }
            }} />
            <Tab.Screen name="ChatList" component={ChatListScreen} 
            options={{
                tabBarIcon: ({color, size}) => {
                    <Ionicons name="" size={size} color={color} />
                },
                headerRight: () => {
                    <Entypo 
                        name="new-message"
                        size={18}
                        color={"royalblue"}
                        style={{ marginRight: 15 }}
                    />
                }
            }} />
            <Tab.Screen name="Settings" component={DemoScreen} 
            options={{
                tabBarIcon: ({color, size}) => {
                    <Ionicons name="logo-whatsapp" size={size} color={color} />
                }
            }} />
        </Tab.Navigator>
    )
}

export default MainTabNavigator;