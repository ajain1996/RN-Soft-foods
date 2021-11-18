import React, { useState } from "react";
import { StyleSheet, Image, View, Text } from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { COLORS } from "../../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    const [index, setIndex] = useState(0);

    return (
        <Tab.Navigator
            screenOptions={{
                showLabel: false,
                tabBarLabel: "",
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: COLORS.white,
                    borderRadius: 0,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopStartRadius: 8,
                    borderTopEndRadius: 8,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={() => { return <Home /> }}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        setIndex(0);
                        return (
                            <BuildTabComponent
                                image={"home"}
                                text="Home"
                                focused={focused}
                                index={index}
                            />
                        );
                    }
                }}
            />
            <Tab.Screen
                name="Explore"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        setIndex(1);
                        return (
                            <BuildTabComponent
                                image={"search"}
                                text="Explore"
                                focused={focused}
                                index={index}
                            />
                        );
                    }
                }}
            />
            <Tab.Screen
                name="OTT"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        setIndex(2);
                        return (
                            <BuildTabComponent
                                image={"shopping-bag"}
                                text="OTT"
                                focused={focused}
                                index={index}
                            />
                        );
                    }
                }}
            />
            <Tab.Screen
                name="UwoServices"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        setIndex(3);
                        return (
                            <BuildTabComponent
                                image={"receipt"}
                                text="Services"
                                focused={focused}
                                index={index}
                            />
                        );
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        setIndex(4);
                        return (
                            <BuildTabComponent
                                image={"user"}
                                text="Profile"
                                focused={focused}
                                index={index}
                            />
                        );
                    }
                }}
            />
        </Tab.Navigator>
    );
}

const BuildTabComponent = ({ image, text, focused, index }) => {
    return (
        <View style={{ height: 50, marginBottom: -15 }}>
            <View style={{
                borderColor: focused ? COLORS.primary : "transparent",
                borderTopWidth: 2, paddingTop: 10, width: 60,
                alignItems: 'center',
            }}>
                <FontAwesome5Icon
                    name={image}
                    size={focused ? 22 : 20}
                    color={focused ? COLORS.primary : "#323233"}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});

export default Tabs;