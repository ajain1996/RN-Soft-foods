import React, { useEffect, useState } from "react";
import { View, ScrollView, StatusBar } from "react-native";
import Animated from "react-native-reanimated";
import Header from "../components/Header";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems, {
    localRestaurants,
} from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";
import { useNavigation } from "@react-navigation/core";
import CustomProgressIndicator from "../components/CustomProgressIndicator";

const YELP_API_KEY =
    "xu3AoDybdBaW-G0l3HeNj62mwcGsYywOqgiEB33Z1yTM1d-H9wsGjI8AKzycJ9mVhaTsU_iVMmzVIH2YX-0DlIqlUnSMmA9O4psM1sm1hz4wezGBkpvz5ZPC2y9aXXYx";

export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState("Delivery");
    const navigation = useNavigation();

    const getRestaurantsFromYelp = () => {
        setLoading(true);
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => (
                setLoading(false),
                setRestaurantData(
                    json.businesses.filter((business) =>
                        business.transactions.includes(activeTab.toLowerCase())
                    )
                )
            ));
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <Animated.View style={{ backgroundColor: "#eee", flex: 1 }}>
            <StatusBar backgroundColor="#fff" />
            <Header navigation={navigation} />
            {loading
                ? <CustomProgressIndicator />
                : <>
                    <View style={{ backgroundColor: "white", padding: 15 }}>
                        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                        <SearchBar cityHandler={setCity} />
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Categories />
                        <RestaurantItems
                            restaurantData={restaurantData}
                            navigation={navigation}
                        />
                    </ScrollView>
                </>}
        </Animated.View>
    );
}