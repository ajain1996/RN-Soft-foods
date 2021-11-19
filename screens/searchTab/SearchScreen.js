import React from 'react';
import { View, Text, StatusBar, SafeAreaView, FlatList, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import CategoryCard from '../../components/CategoryCard';
import TrendingCard from '../../components/TrendingCard';
import { COLORS, FONTS, icons, images, SIZES } from '../../constants';
import dummyData from "../../constants/dummyData";

export default function SearchScreen({ navigation }) {

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', height: 80 }}>
                {/* Text */}
                <View style={{ flex: 1 }}>
                    <Text style={{ color: COLORS.darkGreen, ...FONTS.h2 }}>
                        Hello Ankit,
                    </Text>

                    <Text style={{ marginTop: 3, color: COLORS.gray, ...FONTS.body3 }}>
                        What you want to cook today?
                    </Text>
                </View>

                {/* Image */}
                <TouchableOpacity onPress={() => { }}>
                    <Image
                        source={images.profile}
                        style={{ width: 40, height: 40, borderRadius: 20 }}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    function renderSearchBar() {
        return (
            <View style={styles.renderSearchBarContainer}>
                <Image
                    source={icons.search}
                    style={{ width: 20, height: 20, tintColor: COLORS.gray }}
                />
                <TextInput
                    style={{ marginLeft: SIZES.radius, ...FONTS.body3, }}
                    placeholder="Search Recipes"
                    placeholderTextColor={COLORS.gray}
                />
            </View>
        );
    }

    function renderSeeRecipeCard() {
        return (
            <View style={styles.renderSeeRecipeCardContainer}>
                {/* Image */}
                <View style={{ width: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={images.recipe}
                        style={{ width: 80, height: 80 }}
                    />
                </View>

                <View style={{ flex: 1, paddingVertical: 10 }}>
                    {/* Text */}
                    <Text style={{ width: '90%', ...FONTS.body4, color: 'black' }}>
                        You have 12 recipes that you haven't tried yet
                    </Text>

                    <TouchableOpacity style={{ marginTop: 10 }}>
                        <Text style={styles.seeRecipeTextStyle}>See Recepies</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    function renderTrendingSection() {
        return (
            <View style={{ marginTop: 20 }}>
                <Text style={{ ...FONTS.h2, color: 'black', fontWeight: '700' }}>
                    Trending Recipe
                </Text>

                <FlatList
                    data={dummyData.trendingRecipes}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => {
                        return (
                            <TrendingCard
                                recipeItem={item}
                                onPress={() => {
                                    navigation.navigate("RecipeScreen", {
                                        recipe: item
                                    })
                                }}
                            />
                        );
                    }}
                />
            </View>
        );
    }

    function renderCategoryHeader() {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
            }}>
                <Text style={{ flex: 1, ...FONTS.h2, color: 'black', fontWeight: '700' }}>
                    Categories
                </Text>

                <TouchableOpacity>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                        View All
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 20 }}>
            <StatusBar barStyle="dark-content" />
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {renderHeader()}
                        {renderSearchBar()}
                        {renderSeeRecipeCard()}
                        {renderTrendingSection()}
                        {renderCategoryHeader()}
                    </View>
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
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    renderSearchBarContainer: {
        flexDirection: 'row', borderRadius: 10,
        alignItems: 'center', height: 50,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.lightGray
    },
    renderSeeRecipeCardContainer: {
        flexDirection: 'row', borderRadius: 10,
        marginTop: 10,
        backgroundColor: COLORS.lightGreen,
    },
    seeRecipeTextStyle: {
        color: COLORS.darkGreen,
        textDecorationLine: 'underline',
        ...FONTS.body3,
    }
});

