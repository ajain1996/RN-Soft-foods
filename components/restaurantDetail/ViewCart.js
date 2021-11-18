import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import LottieView from "lottie-react-native";
import firestore from '@react-native-firebase/firestore';
import { Card } from "react-native-paper";
import Entypo from 'react-native-vector-icons/Entypo';

export default function ViewCart({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
    );

    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });

    const addOrderToFireBase = async () => {
        setLoading(true);
        const db = await firestore().collection("orders")
            .add({
                items: items,
                restaurantName: restaurantName,
                createdAt: firestore.Timestamp.fromDate(new Date()),
            })
            .then(() => {
                setTimeout(() => {
                    setLoading(false);
                    navigation.navigate("OrderCompleted");
                }, 2500);
            });
    };

    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.7)",
        },

        modalCheckoutContainer: {
            backgroundColor: "white",
            paddingBottom: 12,
            height: 450,
            borderWidth: 1,
        },

        restaurantName: {
            fontWeight: "600",
            fontSize: 20,
            color: 'green',
        },

        subtotalContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
            marginHorizontal: 20
        },

        subtotalText: {
            textAlign: "left",
            fontWeight: "600",
            fontSize: 15,
            marginBottom: 10,
            color: 'black'
        },
    });

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Card style={{ width: '100%', elevation: 4, shadowColor: '#999' }}>
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-between',
                                paddingLeft: 20, paddingRight: 12, alignItems: 'center',
                            }}>
                                <View style={{ paddingTop: 12, paddingBottom: 15 }}>
                                    <Text style={styles.restaurantName}>{restaurantName}</Text>
                                </View>
                                <TouchableOpacity onPress={() => { setModalVisible(false); }}>
                                    <Entypo name="cross" color="black" size={26} />
                                </TouchableOpacity>
                            </View>
                        </Card>
                        <ScrollView>
                            {items.map((item, index) => (
                                <OrderItem key={index} item={item} />
                            ))}
                            <View style={styles.subtotalContainer}>
                                <Text style={styles.subtotalText}>Subtotal: </Text>
                                <Text style={{ color: 'black' }}>{totalUSD}</Text>
                            </View>
                        </ScrollView>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <TouchableOpacity
                                style={{
                                    marginTop: 10,
                                    backgroundColor: "black",
                                    alignItems: "center",
                                    padding: 13,
                                    borderRadius: 30,
                                    width: 300,
                                }}
                                onPress={() => {
                                    addOrderToFireBase();
                                    setModalVisible(false);
                                }}
                            >
                                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                                <Text
                                    style={{
                                        position: "absolute",
                                        right: 20,
                                        color: "white",
                                        fontSize: 15,
                                        top: 17,
                                    }}
                                >
                                    {total ? '$ ' + totalUSD : ""}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        );
    };

    return (
        <>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>
            {total ? (
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        position: "absolute",
                        bottom: 16,
                        zIndex: 999,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                marginTop: 20,
                                backgroundColor: "black",
                                flexDirection: "row",
                                justifyContent: "center",
                                padding: 15,
                                borderRadius: 30,
                                width: 300,
                                position: "relative",
                            }}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
                                View Cart
                            </Text>
                            <Text style={{ color: "white", fontSize: 20 }}>$ {totalUSD}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <></>
            )}
            {loading ? (
                <View
                    style={{
                        backgroundColor: "black",
                        position: "absolute",
                        opacity: 0.6,
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <LottieView
                        style={{ height: 200 }}
                        source={require("../../assets/animations/scanner.json")}
                        autoPlay
                        speed={3}
                    />
                </View>
            ) : (
                <></>
            )}
        </>
    );
}