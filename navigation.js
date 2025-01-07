import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import RestaurantProfileScreen from './screens/RestaurantProfileScreen';

const Stack = createNativeStackNavigator()

const screenOptions = {
    headerShown: false,
}

const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={screenOptions}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
            <Stack.Screen name='RestaurantProfileScreen' component={RestaurantProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)


export default SignedInStack