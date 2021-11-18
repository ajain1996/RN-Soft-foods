import React from 'react';
import { View, Text } from 'react-native';

export default function CustomTextComponent({
    text, fs, fw, textAlign, textColor
}) {
    return (
        <Text
            style={{
                fontSize: fs, color: textColor,
                fontWeight: fw, textAlign: textAlign,
                fontFamily: 'lucida grande',
            }}
        >
            {text}
        </Text>
    )
}
