import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
    {
        image: require("../../assets/images/shopping-bag.png"),
        text: "Pick-up",
    },
    {
        image: require("../../assets/images/soft-drink.png"),
        text: "Soft Drinks",
    },
    {
        image: require("../../assets/images/bread.png"),
        text: "Bakery Items",
    },
    {
        image: require("../../assets/images/fast-food.png"),
        text: "Fast Foods",
    },
    {
        image: require("../../assets/images/deals.png"),
        text: "Deals",
    },
    {
        image: require("../../assets/images/coffee.png"),
        text: "Coffee & Tea",
    },
    {
        image: require("../../assets/images/desserts.png"),
        text: "Desserts",
    },
];

export default function Categories() {
    return (
        <View
            style={{
                marginTop: 10,
                backgroundColor: "#fff",
                paddingVertical: 10,
                paddingLeft: 20,
            }}
        >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                    <View key={index} style={{ alignItems: "center", marginRight: 22 }}>
                        <Image
                            source={item.image}
                            style={{
                                width: 44,
                                height: 34,
                                resizeMode: "contain",
                            }}
                        />
                        <Text style={{ fontSize: 12, fontWeight: "700", color: 'black' }}>
                            {item.text}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}