import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo ,MaterialIcons} from '@expo/vector-icons';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

const TabNav=createBottomTabNavigator();

const TabNavScreen=()=>{
  return(
  <TabNav.Navigator>
    <TabNav.Screen name="Home" component={Home} 
        options={{tabBarLabel:"Home" , tabBarIcon:({color})=>
        ( 
          <Entypo name="home" size={24} color={color} />
        )}}
      />
</TabNav.Navigator>);
}

const StackNav= createNativeStackNavigator();

const StackNavScreen=()=>{
  return(
      <StackNav.Navigator initialRouteName="Login">
          <StackNav.Screen name="Login"  component={Login} />
          <StackNav.Screen name="Register"  component={Register} />
          <StackNav.Screen name="Home"  component={Home} />
      </StackNav.Navigator>
  );
}

const Root = createNativeStackNavigator();

const RootStackScreen = ()=>{
    return(
    <Root.Navigator screenOptions={{headerShown:false}} initialRouteName="App">  
      <Root.Screen name="App" component={StackNavScreen}  />
      <Root.Screen name="Tab" component={TabNavScreen} />
    </Root.Navigator>
    );
}
export default function App() {
  return (    
     <NavigationContainer>
      <RootStackScreen/>
     </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
