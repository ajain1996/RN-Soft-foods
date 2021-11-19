import React from 'react';
import { View, Text, TouchableOpacity, Image, Platform, StyleSheet } from 'react-native';
import { SIZES, COLORS, FONTS, icons } from '../constants';

const RecipeCardDetails = ({ recipeItem }) => {
    return (
        <View style={{ flex: 1 }}>
            {/* Name & Bookmark */}
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ width: "70%", color: COLORS.white, ...FONTS.h3, fontSize: 18 }}>
                    {recipeItem.name}
                </Text>

                <Image
                    source={recipeItem.isBookmark
                        ? require("../assets/icons/bookmark-filled.png")
                        : require("../assets/icons/bookmark.png")
                    }
                    style={{ width: 20, height: 20, marginRight: 20, tintColor: COLORS.darkGreen }}
                />
            </View>

            <Text style={{ color: COLORS.lightGray, ...FONTS.body4 }}>
                {recipeItem.duration} | {recipeItem.serving} Serving
            </Text>
        </View>
    );
}

const RecipeCardInfo = ({ recipeItem }) => {
    return (
        <View style={styles.recipeCardContainer}>
            <RecipeCardDetails
                recipeItem={recipeItem}
            />
        </View>
    );
}

export default function TrendingCard({ containerStyle, recipeItem, onPress }) {
    return (
        <TouchableOpacity activeOpacity={0.8}
            style={{
                height: 350, width: 250,
                marginTop: 10, marginRight: 20,
                borderRadius: 10, ...containerStyle,
            }}
            onPress={onPress}
        >
            <Image
                source={recipeItem.image}
                resizeMode="cover"
                style={{ width: 250, height: 350, borderRadius: 10 }}
            />

            <View style={{
                position: 'absolute', top: 20,
                paddingHorizontal: 18,
                paddingVertical: 5, left: 15,
                backgroundColor: COLORS.transparentGray,
                borderRadius: SIZES.radius,
            }}>
                <Text>{recipeItem.category}</Text>
            </View>

            {/* Card Info */}
            <RecipeCardInfo
                recipeItem={recipeItem}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    recipeCardContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        borderRadius: 10,
        height: 100,
        backgroundColor: COLORS.transparentGray,
        paddingHorizontal: 8,
        paddingVertical: 10
    }
});
