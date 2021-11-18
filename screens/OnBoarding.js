
import React from 'react';
import {
    Animated,
    Image,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';


const onBoardings = [
    {
        title: "Let's Travelling",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: require("../assets/images/o-1.jpg"),
    },
    {
        title: "Navigation",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: require("../assets/images/o-2.jpg"),
    },
    {
        title: "Destination",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: require("../assets/images/o-3.jpg"),
    }
];

const OnBoarding = () => {
    const [completed, setCompleted] = React.useState(false);

    const scrollX = new Animated.Value(0);

    React.useEffect(() => {
        scrollX.addListener(({ value }) => {
            if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
                setCompleted(true);
            }
        });
        return () => scrollX.removeListener();
    }, []);

    // Render

    function renderContent() {
        return (
            <Animated.ScrollView
                horizontal pagingEnabled scrollEnabled
                decelerationRate={0} scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } },
                ], { useNativeDriver: false })}
            >
                {onBoardings.map((item, index) => (
                    <View
                        key={`img-${index}`}
                        style={styles.imageAndTextContainer}
                    >
                        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={item.img}
                                resizeMode="cover"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </View>
                        <View style={{
                            position: 'absolute', right: 40,
                            bottom: '10%', left: 40,
                        }}>
                            <Text style={{ ...FONTS.h1, color: "black", textAlign: 'center' }}>
                                {item.title}
                            </Text>

                            <Text style={{
                                ...FONTS.body3, textAlign: 'center',
                                marginTop: SIZES.base, color: "black",
                            }}>
                                {item.description}
                            </Text>
                        </View>
                    </View>
                ))}
            </Animated.ScrollView>
        );
    }


    function renderDots() {
        const dotPosition = Animated.divide(scrollX, SIZES.width);

        var showBtns = false;

        return (
            <View style={{ alignItems: 'center' }}>
                <View style={styles.dotsContainer}>
                    {onBoardings.map((item, index) => {
                        const opacity = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: "clamp"
                        });

                        const dotSize = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [SIZES.base, 17, SIZES.base],
                            extrapolate: "clamp"
                        });

                        return (
                            <View key={`dot-${index}`}>
                                <Animated.View
                                    opacity={opacity}
                                    style={[styles.dot, { width: dotSize, height: dotSize, }]}
                                />
                            </View>
                        );
                    })}
                </View>

                {completed
                    ? <></>
                    : <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '85%' }}>
                        {/* Button */}
                        <TouchableOpacity
                            style={styles.skipBtnText}
                            onPress={() => { console.log("Button on pressed") }}
                        >
                            <Text style={{ ...FONTS.h2, color: "white" }}>{"Skip"}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.skipBtnTex2}
                            onPress={() => { console.log("Button on pressed") }}
                        >
                            <Text style={{ ...FONTS.h2, color: "white" }}>{"Next"}</Text>
                        </TouchableOpacity>
                    </View>}
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                {renderContent()}
            </View>

            <View style={styles.dotsRootContainer}>
                {renderDots()}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    imageAndTextContainer: {
        width: SIZES.width
    },
    dotsRootContainer: {
        position: 'absolute',
        // bottom: SIZES.height > 700 ? '22%' : '16%',
        bottom: 6,
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: SIZES.padding,
        position: 'absolute',
        bottom: 20
    },
    dot: {
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.blue,
        marginHorizontal: SIZES.radius / 2,
    },
    skipBtnText: {
        justifyContent: 'center', borderBottomRightRadius: 30,
        width: 100, height: 45, borderTopRightRadius: 30,
        backgroundColor: COLORS.blue, alignItems: 'center',
    },
    skipBtnTex2: {
        justifyContent: 'center', borderBottomLeftRadius: 30,
        width: 100, height: 45, borderTopLeftRadius: 30,
        backgroundColor: COLORS.blue, alignItems: 'center',
    }
});

export default OnBoarding;
