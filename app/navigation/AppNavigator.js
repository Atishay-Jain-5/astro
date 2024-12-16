import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../screens/Signup";
import Signupheader from "../components/Signupheader";
import ChatScreen from "../screens/ChatScreen";
import ChatHeader from "../components/ChatHeader";

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
       
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen
          name="SignUpScreen"
          component={Signup}
          options={{
            header: () => <Signupheader />,
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            header: () => <ChatHeader />,
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
