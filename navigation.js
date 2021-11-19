import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import OrderCompleted from "./screens/OrderCompleted";
import CustomDrawer from "./components/CustomDrawer";
import Tabs from './components/bottom_tabs/tabs';
import OnBoarding from "./screens/OnBoarding";
import OnBoarding2 from "./screens/OnBoarding2";
import IntroScreen from "./screens/IntroScreen";
import { View } from "react-native";
import LoginScreen from "./screens/auth/LoginScreen";
import SignUpScreen from "./screens/auth/SignUpScreen";
import ForgotPasswordScreen from "./screens/auth/ForgotPasswordScreen";
import RestaurantDetailsWebView from "./screens/RestaurantDetailsWebView";
import SearchScreen from "./screens/searchTab/SearchScreen";
import RecipeScreen from "./screens/searchTab/RecipeScreen";

export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="OnBoarding"
                    screenOptions={screenOptions}
                >
                    <Stack.Screen name="OnBoarding" component={OnBoarding2} />
                    <Stack.Screen name="IntroScreen" component={IntroScreen} />
                    <Stack.Screen name="Home" component={Tabs} />
                    <Stack.Screen name="SearchScreen" component={SearchScreen} />
                    <Stack.Screen name="RecipeScreen" component={RecipeScreen} />

                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                    <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
                    <Stack.Screen name="RestaurantDetailsWebView" component={RestaurantDetailsWebView} />
                    <Stack.Screen name="CustomDrawer" component={CustomDrawer} />
                    <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
                    <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}