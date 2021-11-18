import React from "react";
import { View, Text, Image } from "react-native";

export default function About(props) {
    const { name, image, price, reviews, rating, categories } =
        props.route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(" • ");

    const description = `${formattedCategories} ${price ? " • " + price : ""
        } • 🎫 • ${rating} ⭐ (${reviews}+)`;
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    );
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
    <Text
        style={{
            fontSize: 29,
            fontWeight: "600",
            marginTop: 10,
            marginHorizontal: 20,
            color: '#000'
        }}
    >
        {props.name}
    </Text>
);

const RestaurantDescription = (props) => (
    <Text
        style={{
            marginTop: 10,
            marginHorizontal: 20,
            fontWeight: "400",
            fontSize: 15.5,
            color: '#000'
        }}
    >
        {props.description}
    </Text>
);