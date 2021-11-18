import React from 'react';
import { View, Text } from 'react-native';
import LottieView from "lottie-react-native";

export default function CustomProgressIndicator() {
    return (
        <View
            style={{
                backgroundColor: "white",
                // position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                height: "88%",
                width: "100%",
            }}
        >
            <LottieView
                style={{ height: 200 }}
                source={require("../assets/animations/scanner.json")}
                autoPlay
                speed={3}
            />
        </View>
    )
}
