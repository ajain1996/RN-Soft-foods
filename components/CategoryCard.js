import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { COLORS, FONTS } from '../constants';

export default function CategoryCard({ containerStyle, categoryItem, onPress }) {
    return (
        <TouchableOpacity activeOpacity={0.8} style={{
            flexDirection: 'row', alignItems: 'center',
            padding: 10, marginTop: 10, borderRadius: 12,
            backgroundColor: "#eee", ...containerStyle
        }}>
            <Image
                source={categoryItem.image}
                resizeMode="cover"
                style={{ width: 90, height: 90, borderRadius: 12, }}
            />

            <View style={{ width: "65%", paddingHorizontal: 20 }}>
                <Text style={{ flex: 1, ...FONTS.h3, color: 'black', fontWeight: '800' }}>
                    {categoryItem.name}
                </Text>

                <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                    {categoryItem.duration} | {categoryItem.serving} Serving
                </Text>
            </View>
        </TouchableOpacity>
    )
}
