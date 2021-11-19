import React from 'react';
import { View, Text, StatusBar, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../components/CustomButton';
import CustomTextComponent from '../components/CustomTextComponent';
import { COLORS, FONTS, images, SIZES } from '../constants';

export default function IntroScreen({ navigation }) {

    function renderHeader() {
        return (
            <View style={{ height: SIZES.height > 700 ? "65%" : "60%" }}>
                <ImageBackground
                    source={require("../assets/images/login-bg.png")}
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                    }}
                    resizeMode="cover"
                >
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={[
                            COLORS.transparent,
                            COLORS.black
                        ]}
                        style={{
                            height: 200,
                            justifyContent: 'flex-end',
                            paddingHorizontal: SIZES.padding
                        }}
                    >
                        <Text
                            style={{
                                width: '80%',
                                color: COLORS.white,
                                ...FONTS.largeTitle,
                                lineHeight: 45,
                                marginHorizontal: 20,
                                fontWeight: '700'
                            }}
                        >Cooking a Delicious Food Easily</Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
        );
    }

    function renderDetail() {
        return (
            <View style={{ flex: 1, paddingHorizontal: SIZES.padding, paddingHorizontal: 20, }}>
                {/* Description */}
                <Text
                    style={{
                        marginTop: SIZES.radius,
                        width: '70%',
                        color: COLORS.gray,
                        ...FONTS.body3,
                    }}>
                    Discover more than 1200 food recipies in your hands and cooking it easily
                </Text>
                <Text />

                <CustomButton
                    fs={16} text={"Sign In"} fw={"600"}
                    textColor={COLORS.white}
                    bgColor={COLORS.darkGreen}
                    width={"100%"} height={60}
                    onPress={() => {
                        navigation.navigate("LoginScreen");
                    }}
                />
                <Text />

                <CustomButton
                    fs={16} text={"Sign Up"} fw={"600"}
                    textColor={"red"}
                    bgColor={COLORS.darkGreen}
                    width={"100%"} height={60}
                    borderWidth={1}
                    onPress={() => {
                        navigation.navigate("SignUpScreen");
                    }}
                />
            </View>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black }}>
            <StatusBar backgroundColor={COLORS.black} barStyle="light-content" />

            {/* Header */}
            {renderHeader()}

            {/* Details */}
            {renderDetail()}
        </View>
    )
}
