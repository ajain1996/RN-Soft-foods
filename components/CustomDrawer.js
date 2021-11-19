import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import Home from '../screens/Home';
import Entypo from 'react-native-vector-icons/Entypo';
import { SIZES, COLORS, FONTS } from "../constants";
import { useNavigation } from '@react-navigation/core';
import OnBoarding2 from '../screens/OnBoarding2';
import Tabs from './bottom_tabs/tabs';
import Header from './Header';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function CustomDrawer({ }) {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <CustomDrawerContent
                navigation={props.navigation}
            />
            {/* <NavigationContainer>
                <Drawer.Navigator
                    drawerType="slide"
                    overlayColor="transparent"
                    drawerStyle={{
                        flex: 1, width: "65%",
                        paddingRight: 20,
                        backgroundColor: "transparent"
                    }}
                    sceneContainerStyle={{
                        backgroundColor: "transparent"
                    }}
                    screenOptions={{ headerShown: true }}
                    initialRouteName="Home"
                    drawerContent={props => {
                        return (
                            <CustomDrawerContent
                                navigation={props.navigation}
                            />
                        );
                    }}
                >
                    <Drawer.Screen name="Home" component={() => {
                        return <Home navigation={navigation} />
                    }} />
                </Drawer.Navigator>
            </NavigationContainer> */}
        </View>
    )
}

const CustomDrawerContent = ({ navigation }) => {
    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex: 1, backgroundColor: COLORS.primary }}
        >
            <View style={{ flex: 1, paddingHorizontal: 12, marginTop: 20 }}>
                {/* Close Button */}
                <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                        }}
                        onPress={() => navigation.closeDrawer()}
                    >
                        <Entypo name="cross" color="white" size={32} />
                    </TouchableOpacity>
                </View>

                {/* Profile Section */}
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        alignItems: 'center',
                    }}
                    onPress={() => { console.log("Profile") }}
                >
                    <Image
                        source={require('../assets/images/logo.png')}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 12,
                        }}
                    />

                    <View style={{ marginLeft: 16 }}>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Ankit Jain</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>View your profile</Text>
                    </View>
                </TouchableOpacity>

                {/* Drawer Items */}
                <View style={{ flex: 1, marginTop: 30 }}>
                    <CustomDrawerItem
                        label={"Home Screen"}
                        icon={require('../assets/images/home-icon.png')}
                    />

                    <CustomDrawerItem
                        label={"My Wallet"}
                        icon={require('../assets/images/wallet-icon.png')}
                    />

                    <CustomDrawerItem
                        label={"Notifications"}
                        icon={require('../assets/images/notification-icons.png')}
                    />

                    <CustomDrawerItem
                        label={"Favourites"}
                        icon={require('../assets/images/heart-icon.png')}
                    />

                    <View style={{
                        height: 1, marginVertical: SIZES.radius,
                        backgroundColor: COLORS.lightGray
                    }} />

                    <CustomDrawerItem
                        label={"Track Your Order"}
                        icon={require('../assets/images/location-icon.png')}
                    />

                    <CustomDrawerItem
                        label={"Coupons"}
                        icon={require('../assets/images/coupon-icon.png')}
                    />

                    <CustomDrawerItem
                        label={"Settings"}
                        icon={require('../assets/images/setting-icon.png')}
                    />

                    <CustomDrawerItem
                        label={"Invite a Friend"}
                        icon={require('../assets/images/invite-icon.png')}
                    />

                    <CustomDrawerItem
                        label={"Help Center"}
                        icon={require('../assets/images/help-icon.png')}
                    />

                </View>

                <CustomDrawerItem
                    label={"Logout"}
                    icon={require('../assets/images/logout.png')}
                />
            </View>
        </DrawerContentScrollView>
    );
}


const CustomDrawerItem = ({ label, icon }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={{
            alignItems: 'center', paddingLeft: 12,
            flexDirection: 'row', height: 40,
            marginBottom: SIZES.base,
            borderRadius: SIZES.base,
        }}>
            <Image
                source={icon}
                style={{
                    width: 18, height: 18,
                    tintColor: COLORS.white,
                }}
            />
            <Text style={{ marginLeft: 15, color: COLORS.white, fontSize: 15, fontWeight: '600' }}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}
