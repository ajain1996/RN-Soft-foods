import React from "react";
import { View, Text, TouchableOpacity, ScrollView, TouchableHighlight, StatusBar } from "react-native";
import { Divider } from "react-native-elements";
import CustomButton from "../components/CustomButton";
import CustomTextComponent from "../components/CustomTextComponent";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";
import { COLORS } from "../constants";

const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
            "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    },
    {
        title: "Tandoori Chicken",
        description:
            "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
        price: "$19.20",
        image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
    },
    {
        title: "Chilaquiles",
        description:
            "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
        price: "$14.50",
        image:
            "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
    },
    {
        title: "Chicken Caesar Salad",
        description:
            "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
        price: "$21.50",
        image:
            "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
    },
    {
        title: "PHENAKITE RESTAURANT",
        description:
            "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
        price: "$19.25",
        image:
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    },

];

export default function RestaurantDetail({ route, navigation }) {
    return (
        <>
            <StatusBar backgroundColor={"#fff"}></StatusBar>
            <ScrollView style={{ backgroundColor: '#fff' }}>
                <About route={route} />

                <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                    <CustomTextComponent
                        fs={15} text={"Categories: "}
                        textColor={COLORS.black} fw="600"
                    />
                </View>

                <ScrollView style={{ flexDirection: 'row', paddingHorizontal: 20 }} horizontal>
                    {route.params.categories.map((data) => {
                        return (
                            <TouchableHighlight
                                underlayColor={"#dcdcdc"}
                                style={{
                                    paddingHorizontal: 12, paddingVertical: 7,
                                    borderWidth: 1, borderColor: COLORS.darkgray,
                                    borderRadius: 8, marginRight: 8, marginTop: 8
                                }}
                            >
                                <CustomTextComponent
                                    fs={15} text={data.title}
                                    textColor={COLORS.gray} fw="600"
                                />
                            </TouchableHighlight>
                        );
                    })}
                </ScrollView>

                <BuildTextRowComponent
                    title="Address: "
                    info={route.params.location.address1 + " " + route.params.location.address2 + " " + route.params.location.address3}
                />

                <BuildTextRowComponent
                    title="State: "
                    info={route.params.location.state}
                />

                <BuildTextRowComponent
                    title="Country: "
                    info={route.params.location.country}
                />

                <BuildTextRowComponent
                    title="State: "
                    info={route.params.location.state}
                />

                <BuildTextRowComponent
                    title="City: "
                    info={route.params.location.city}
                />

                <BuildTextRowComponent
                    title="Zip Code: "
                    info={route.params.location.zip_code}
                />

                <View style={{ alignItems: 'flex-end', paddingHorizontal: 20, marginTop: 20 }}>
                    <CustomButton
                        text={"Restaurant Details >"}
                        textColor={COLORS.blue}
                        bgColor={COLORS.white}
                        width={150} height={38}
                        fs={14} fw={"600"} onPress={() => {
                            navigation.navigate("RestaurantDetailsWebView", {
                                url: route.params.url,
                            });
                        }}
                    />
                </View>

                <Divider width={1} color={"#eee"} style={{ marginBottom: 26, marginTop: 10 }} />

                <BuildAvailableItemsTitleComponent />
                <MenuItems restaurantName={route.params.name} foods={foods} />
                <View style={{ height: 80 }} />
            </ScrollView>
            <ViewCart navigation={navigation} />
        </>
    );
}


const BuildAvailableItemsTitleComponent = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
        <View style={{
            paddingVertical: 6, borderWidth: 1, borderColor: '#dcdcdc',
            borderTopRightRadius: 30, borderBottomRightRadius: 30, width: 180,
        }}>
            <Text style={{ color: '#000', fontSize: 20, fontWeight: '600', marginHorizontal: 16 }}>
                Available Items
            </Text>
        </View>
        <View style={{ paddingRight: 16 }}>
            <TouchableOpacity activeOpacity={0.7} style={{
                backgroundColor: '#0073ff', paddingHorizontal: 18,
                borderRadius: 8, paddingVertical: 10,
            }}>
                <Text style={{ fontSize: 14, color: '#fff' }}>View All</Text>
            </TouchableOpacity>
        </View>
    </View>
);


const BuildTextRowComponent = ({ title, info }) => {
    return (
        <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row' }}>
            <CustomTextComponent
                fs={15} text={title}
                textColor={COLORS.black} fw="700"
            />
            <CustomTextComponent
                fs={15} text={info}
                textColor={COLORS.black} fw="600"
            />
        </View>
    );
}

