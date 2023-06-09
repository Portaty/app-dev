import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sell from "@/screens/Sell/Sell";
import { useRoute } from "@react-navigation/native";

import Header from './HeaderTabs/index'


const Stack = createNativeStackNavigator();

const SellNavigator = () => {
  const router = useRoute()
  useEffect(() => {
    console.log(router.name);
  }, []);
  return (
    <Stack.Navigator
      id="Sell_Stack"
      initialRouteName={`Sell`}
    >
      <Stack.Screen
        name="Sell"
        component={Sell}
      // options={{ header: (props) => <Header {...props} /> }}
      />
    </Stack.Navigator>
  );
};

export default SellNavigator;