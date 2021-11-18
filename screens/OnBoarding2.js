import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { COLORS, FONTS, SIZES } from '../constants';

const Square = ({ isLight, selected }) => {
    let backgroundColor;
    if (isLight) {
        backgroundColor = selected ? "purple" : 'rgba(0, 0, 0, 0.3)';
    } else {
        backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
    }
    return (
        <View
            style={{
                width: 10, height: 10,
                marginHorizontal: 6,
                backgroundColor,
                marginTop: -SIZES.width,
                borderRadius: 100,
            }}
        />
    );
};

export default function OnBoarding2({ navigation }) {
    return (
        <>
            <StatusBar backgroundColor={"#FFDECB"}></StatusBar>
            <Onboarding
                DotComponent={Square}
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <View style={{ width: '100%', }}>
                            <Image source={require('../assets/images/app-logo.jpg')} style={{
                                width: "100%", height: 100, resizeMode: 'cover',
                            }} />
                            <Image source={require('../assets/images/o-1.jpg')} style={{
                                width: "100%", height: 450, resizeMode: 'cover',
                            }} />
                        </View>,
                        title: 'Fresh Food',
                        subtitle: 'We make it simple to find the food you crave. Enter your address and let us do the rest',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <View style={{ width: '100%', }}>
                            <Image source={require('../assets/images/app-logo.jpg')} style={{
                                width: "100%", height: 100, resizeMode: 'cover',
                            }} />
                            <Image source={require('../assets/images/o-2.jpg')} style={{
                                width: "100%", height: 450, resizeMode: 'cover',
                            }} />
                        </View>,
                        title: 'Swift Delivery',
                        subtitle: 'Recieve your order in less then 1 hour or pick specific delivery time',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <View style={{ width: '100%', }}>
                            <Image source={require('../assets/images/app-logo.jpg')} style={{
                                width: "100%", height: 100, resizeMode: 'cover',
                            }} />
                            <Image source={require('../assets/images/o-3.jpg')} style={{
                                width: "100%", height: 450, resizeMode: 'cover',
                            }} />
                        </View>,
                        title: 'Tracking Order',
                        subtitle: 'Realtime-tracking will keep you posted about order progress',
                    },
                ]}
                onSkip={() => {
                    navigation.navigate("LoginScreen");
                }}
                onDone={() => {
                    navigation.navigate("LoginScreen");
                }}
                showDone={true}
                titleStyles={{
                    fontSize: 25, color: "purple", textAlign: 'center',
                    fontWeight: '700', marginTop: 0
                }}
                subTitleStyles={{
                    ...FONTS.body3, textAlign: 'center', color: "black", marginTop: 0
                }}
                containerStyles={{ backgroundColor: '#fff', }}
                bottomBarColor={COLORS.white}
                imageContainerStyles={{ marginTop: -SIZES.width / 3.7 }}
            />
        </>
    )
}
