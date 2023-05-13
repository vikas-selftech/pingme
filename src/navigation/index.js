import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ChatScreen from './../screens/ChatScreen'
import ChatListScreen from './../screens/ChatListScreen'
import MainTabNavigator from './MainTabNavigator';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'whitesmoke' } }}>
            <Stack.Screen name='BottomTab' component={MainTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name='Chat' component={ChatScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator