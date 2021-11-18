import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
    const [selectedBottomTab, setSelectedBottomTab] = useState("Home");
    return (
        <View
            style={{
                flexDirection: "row",
                paddingVertical: 8,
                paddingTop: 10,
                paddingHorizontal: 20,
                justifyContent: "space-between",
                alignItems: 'center',
                backgroundColor: '#fff',
                elevation: 2,
                shadowColor: '#000'
            }}
        >
            <Icon
                icon="home" text="Home"
                selectedBottomTab={selectedBottomTab}
                setSelectedBottomTab={setSelectedBottomTab}
            />
            <Icon
                icon="search" text="Browse"
                selectedBottomTab={selectedBottomTab}
                setSelectedBottomTab={setSelectedBottomTab}
            />
            <Icon
                icon="shopping-bag" text="Grocery"
                selectedBottomTab={selectedBottomTab}
                setSelectedBottomTab={setSelectedBottomTab}
            />
            <Icon
                icon="receipt" text="Orders"
                selectedBottomTab={selectedBottomTab}
                setSelectedBottomTab={setSelectedBottomTab}
            />
            <Icon
                icon="user" text="Account"
                selectedBottomTab={selectedBottomTab}
                setSelectedBottomTab={setSelectedBottomTab}
            />
        </View>
    );
}

const Icon = (props) => (
    <TouchableOpacity onPress={() => { props.setSelectedBottomTab(props.text) }}>
        <FontAwesome5
            name={props.icon}
            size={20}
            style={{
                marginBottom: 3,
                alignSelf: "center",
            }}
            color={props.selectedBottomTab === props.text ? "#000" : '#999'}
        />
        <Text style={{
            color: props.selectedBottomTab === props.text ? "#000" : '#999',
            fontSize: 12
        }}>{props.text}</Text>
    </TouchableOpacity>
);