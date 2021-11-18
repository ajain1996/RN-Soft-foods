import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import WebView from 'react-native-webview';
import { SIZES } from '../constants';

export default function RestaurantDetailsWebView({ route }) {

    return (
        <View style={{ width: SIZES.width, height: SIZES.height }}>
            <StatusBar backgroundColor={"#fff"}></StatusBar>
            <WebView source={{ uri: route.params.url }} />
        </View>
    )
}
