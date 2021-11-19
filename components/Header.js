import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/routers';
import Feather from 'react-native-vector-icons/Feather';
import Animated from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/core';

export default function Header({ navigation }) {
    // const navigation = useNavigation();
    // https://api.edamam.com/search?q=pizza&app_id=89810bc5&app_key=252cf659796933f179514b31c5cbde91

    return (
        <View>
            <Animated.View style={{
                flexDirection: 'row', width: "100%", height: 50, alignItems: 'center',
                justifyContent: 'space-between', paddingHorizontal: 16,
                backgroundColor: 'white'
            }}>
                <TouchableOpacity activeOpacity={0.6} onPress={() => {
                    navigation.dispatch(DrawerActions.openDrawer());
                }}>
                    <Feather name="menu" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>Home Page</Text>
                <Feather name="settings" size={24} color="black" />
            </Animated.View>
        </View>
    )
}
