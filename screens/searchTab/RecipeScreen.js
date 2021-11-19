import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import CategoryCard from '../../components/CategoryCard';
import { SIZES, FONTS, COLORS, icons } from "../../constants";
import dummyData from '../../constants/dummyData';

const HEADER_HEIGHT = 350;

const RecipeCreatorCardDetail = ({ selectedRecipe }) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Image
                source={selectedRecipe?.author?.profilePic}
                style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 20 }}
            />

            <View style={{ flex: 1, marginHorizontal: 20 }}>
                <Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>
                    Recipe by:
                </Text>
                <Text style={{ color: COLORS.white, ...FONTS.h4, marginTop: 4 }}>
                    {selectedRecipe?.author?.name}
                </Text>
            </View>

            <TouchableOpacity style={{
                width: 30, height: 30, borderRadius: 5,
                alignItems: 'center', justifyContent: 'center',
                marginRight: 20, borderWidth: 1,
                borderColor: COLORS.lightGreen1,
            }}>
                <Image
                    source={require("../../assets/icons/right-arrow.png")}
                    style={{ width: 15, height: 15, tintColor: COLORS.lightGreen }}
                />
            </TouchableOpacity>
        </View>
    );
}

const RecipeCreatorCardInfo = ({ selectedRecipe }) => {
    return (
        <View style={{
            flex: 1, borderRadius: 10,
            backgroundColor: COLORS.transparentDarkGray,
        }}>
            <RecipeCreatorCardDetail
                selectedRecipe={selectedRecipe}
            />
        </View>
    );
}


export default function RecipeScreen({ navigation, route }) {

    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const scrollY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        let { recipe } = route.params;
        setSelectedRecipe(recipe);
    }, [selectedRecipe]);

    function renderHeaderBar() {
        return (
            <View style={styles.renderHeaderBarStyleContainer}>
                <Animated.View style={[styles.renderHeaderBarStyle, {
                    opacity: scrollY.interpolate({
                        inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
                        outputRange: [0, 1],
                    })
                }]} />

                <Animated.View style={[styles.renderHeaderBarStyle2, {
                    opacity: scrollY.interpolate({
                        inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                        outputRange: [0, 1]
                    }),
                    transform: [
                        {
                            translateY: scrollY.interpolate({
                                inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                                outputRange: [50, 0],
                                extrapolate: 'clamp',
                            })
                        }
                    ]
                }]}>
                    <Text style={{ color: COLORS.lightGray, ...FONTS.body4 }}>
                        Recipe by:
                    </Text>
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                        {selectedRecipe?.author?.name}
                    </Text>
                </Animated.View>

                <TouchableOpacity
                    style={styles.renderHeaderBarBackBtn}
                    onPress={() => { navigation.goBack() }}
                >
                    <Image
                        source={icons.back}
                        style={{ width: 15, height: 15, tintColor: COLORS.lightGray }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 40, width: 40,
                    }}
                >
                    <Image
                        source={selectedRecipe?.isBookmark
                            ? require("../../assets/icons/bookmark-filled.png")
                            : require("../../assets/icons/bookmark.png")
                        }
                        style={{ width: 26, height: 26, tintColor: COLORS.darkGreen }}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    function renderRecipeInfo() {
        return (
            <View style={styles.renderRecipeInfoStyle}>
                <View style={{ flex: 1.5, justifyContent: 'center' }}>
                    <Text style={{ ...FONTS.h2, color: 'black', fontWeight: '700' }}>
                        {selectedRecipe?.name}
                    </Text>
                    <Text style={{ marginTop: 5, color: COLORS.lightGray2, ...FONTS.body4, color: 'black' }}>
                        {selectedRecipe?.duration} | {selectedRecipe?.serving} Serving
                    </Text>
                </View>
            </View>
        );
    }

    function renderRecipeCardHeader() {
        return (
            <View style={styles.renderRecipeCardHeaderStyle}>
                <Animated.Image
                    source={selectedRecipe?.image}
                    resizeMode="contain"
                    style={{
                        height: HEADER_HEIGHT,
                        width: '200%',
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange: [HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
                                })
                            },
                            {
                                scale: scrollY.interpolate({
                                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange: [2, 1, 0.75]
                                })
                            }
                        ],
                    }}
                />

                <Animated.View style={{
                    position: 'absolute', height: 80,
                    bottom: 10, left: 30, right: 30,
                    transform: [
                        {
                            translateY: scrollY.interpolate({
                                inputRange: [0, 170, 250],
                                outputRange: [0, 0, 100],
                                extrapolate: 'clamp'
                            })
                        }
                    ]
                }}>
                    <RecipeCreatorCardInfo
                        selectedRecipe={selectedRecipe}
                    />
                </Animated.View>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white, }}>
            {/* <Text>RecipeScreen</Text> */}
            <Animated.FlatList
                data={selectedRecipe?.ingredients}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {renderRecipeCardHeader()}
                        {renderRecipeInfo()}
                    </View>
                }
                ListFooterComponent={
                    <FlatList
                        data={dummyData.categories}
                        keyExtractor={item => `${item.id}`}
                        keyboardDismissMode="on-drag"
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={
                            <View></View>
                        }
                        renderItem={({ item }) => {
                            return (
                                <CategoryCard
                                    categoryItem={item}
                                    onPress={() => { navigation.navigate("RecipeScreen") }}
                                />
                            );
                        }}
                        ListFooterComponent={
                            <View style={{ marginBottom: 100 }}></View>
                        }
                    />
                }
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY } } }
                ], { useNativeDriver: true })}
                renderItem={({ item }) => {
                    return (
                        <View style={{
                            flexDirection: 'row', paddingHorizontal: 30,
                            marginVertical: 5,
                        }}>
                            <View style={{
                                alignItems: 'center', justifyContent: 'center',
                                height: 50, width: 50, borderRadius: 5,
                                backgroundColor: COLORS.lightGray,
                            }}>
                                <Image
                                    source={item.icon}
                                    style={{ width: 30, height: 30 }}
                                />
                            </View>

                            <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center' }}>
                                <Text style={{ color: 'black', ...FONTS.body3 }}>{item.description}</Text>
                            </View>

                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'black', ...FONTS.body3 }}>{item.quantity}</Text>
                            </View>
                        </View>
                    );
                }}
            />

            {/* Header Bar */}
            {renderHeaderBar()}
        </View>
    )
}


const styles = StyleSheet.create({
    renderHeaderBarStyleContainer: {
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 90, flexDirection: 'row', paddingLeft: 24,
        alignItems: "flex-end", justifyContent: 'space-between',
        paddingRight: 10, marginTop: -30, paddingBottom: 10
    },
    renderHeaderBarStyle: {
        position: 'absolute', top: 0,
        left: 0, right: 0, bottom: 0,
        backgroundColor: COLORS.black,
    },
    renderHeaderBarStyle2: {
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        alignItems: 'center', justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    renderHeaderBarBackBtn: {
        alignItems: 'center', justifyContent: 'center',
        height: 35, width: 35, borderRadius: 18,
        borderWidth: 1, borderColor: COLORS.lightGray,
        backgroundColor: COLORS.transparentBlack5,
    },
    renderRecipeInfoStyle: {
        flexDirection: 'row', height: 130,
        width: SIZES.width, alignItems: 'center',
        paddingHorizontal: 30, paddingVertical: 20,
    },
    renderRecipeCardHeaderStyle: {
        alignItems: 'center', overflow: 'hidden', marginTop: -1000, paddingTop: 1000
    }
});

