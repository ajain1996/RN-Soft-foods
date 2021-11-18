import React, { useState } from 'react'
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput'
import CustomTextComponent from '../../components/CustomTextComponent';
import { COLORS, SIZES } from '../../constants';

export default function ForgotPasswordScreen({ navigation }) {

    const [emailError, setEmailError] = useState(false);

    const [email, setEmail] = useState("");
    const [showEye, setShowEye] = useState("");

    const handleSubmitOnPress = () => {
        if (email.length === 0) {
            setEmailError("Email is required");
        } else if (!(email.includes("@")) || !(email.includes("gmail.com"))) {
            setEmailError("Invalid Email");
        } else {
            navigation.replace("LoginScreen");
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <View style={styles.header_block}>
                    <Image
                        source={require('../../assets/images/app-logo2.jpg')}
                        style={styles.login_logo}
                    />

                    <CustomTextComponent
                        fs={20} textColor="black" fw="900"
                        text={"Password Recovery"}
                    />

                    <View style={{ marginTop: 6 }} />

                    <View style={{ paddingHorizontal: 40 }}>
                        <CustomTextComponent
                            fs={14} textColor="grey" textAlign="center"
                            text={"Please enter your email address to recover your password"}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 40 }} />

                <View style={{ alignItems: 'center', }}>
                    <CustomInput
                        placeholderText="Email"
                        iconType={"user"}
                        headingText="Email"
                        error={emailError}
                        secureTextEntry={showEye ? false : true}
                        labelValue={email}
                        keyboardType={'email-address'}
                        autoCapitalize='none'
                        onChangeText={(val) => {
                            setEmail(val);
                            setEmailError("");
                        }}
                    />
                </View>
                <View style={{ marginTop: 10 }} />
            </View>

            <CustomButton
                fs={16} text={"Send Email"} fw={"600"}
                textColor={COLORS.white}
                bgColor={COLORS.primary}
                width={"100%"} height={50}
                onPress={handleSubmitOnPress}
            />

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 12,
        flexGrow: 1,
        justifyContent: 'space-between'
    },
    header_block: {
        alignItems: 'center',
        width: '100%',
    },
    login_logo: {
        width: 160,
        height: 60,
        marginTop: 20,
        marginBottom: 30,
    },
});

