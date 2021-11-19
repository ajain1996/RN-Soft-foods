import React, { useState } from 'react'
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Alert, StatusBar } from 'react-native'
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput'
import CustomTextComponent from '../../components/CustomTextComponent';
import { COLORS, SIZES } from '../../constants';

export default function SignUpScreen({ navigation }) {

    const [usernameError, setusernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showEye, setShowEye] = useState("");

    const handleSubmitOnPress = () => {
        if (username.length === 0) {
            setusernameError("Username is required");
        } if (email.length === 0) {
            setEmailError("Email is required");
        } else if (!(email.includes("@")) || !(email.includes("gmail.com"))) {
            setEmailError("Invalid Email");
        } if (password.length === 0) {
            setPasswordError("Invalid Password")
        } else if (password.length < 6) {
            setPasswordError("Password must be 6 characters long")
        } else {
            navigation.navigate("Home");
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar backgroundColor="#fff" />
            <View>
                <View style={styles.header_block}>
                    <Image
                        source={require('../../assets/images/app-logo2.jpg')}
                        style={styles.login_logo}
                    />

                    <CustomTextComponent
                        fs={20} textColor="black" fw="900"
                        text={"Getting Started"}
                    />

                    <View style={{ marginTop: 4 }} />

                    <CustomTextComponent
                        fs={14} textColor="grey"
                        text={"Create an account to continue!"}
                    />
                </View>

                <View style={{ alignItems: 'center', marginTop: 40, }}>
                    <CustomInput
                        placeholderText="Username"
                        iconType="user"
                        headingText="Username"
                        error={usernameError}
                        labelValue={username}
                        onChangeText={(val) => {
                            setusername(val);
                            setusernameError("");
                        }}
                    />
                </View>

                <View style={{ alignItems: 'center', }}>
                    <CustomInput
                        placeholderText="Email"
                        iconType="user"
                        headingText="Email"
                        keyboardType={'email-address'}
                        autoCapitalize='none'
                        error={emailError}
                        labelValue={email}
                        onChangeText={(val) => {
                            setEmail(val);
                            setEmailError("");
                        }}
                    />
                </View>

                <View style={{ alignItems: 'center', }}>
                    <CustomInput
                        placeholderText="Password"
                        iconType={showEye ? "eye" : "eyeo"}
                        headingText="Password"
                        error={passwordError}
                        secureTextEntry={showEye ? false : true}
                        labelValue={password}
                        onChangeText={(val) => {
                            setPassword(val);
                            setPasswordError("");
                        }}
                        onPress={() => { setShowEye(!showEye) }}
                    />
                </View>
                <View style={{ marginTop: 10 }} />

                <CustomButton
                    fs={16} text={"Sign Up"} fw={"600"}
                    textColor={COLORS.white}
                    bgColor={COLORS.primary}
                    width={"100%"} height={50}
                    onPress={handleSubmitOnPress}
                />
                <View style={{ marginTop: 20 }} />

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <CustomTextComponent
                        fs={16} text={"Already have an account? "}
                        textColor={COLORS.gray} fw="600"
                    />
                    <TouchableOpacity
                        style={{ alignItems: 'center' }}
                        activeOpacity={0.6}
                        onPress={() => { navigation.navigate("LoginScreen") }}
                    >
                        <CustomTextComponent
                            fs={16} text={"Sign In"} fw="700"
                            textColor={COLORS.primary}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <CustomButton
                    text={"Continue with Google"}
                    textColor={COLORS.black}
                    iconColor={COLORS.primary}
                    bgColor={COLORS.lightGray4}
                    width={"100%"} height={50}
                    fw={"600"} icon={"google"}
                    fs={16} onPress={handleSubmitOnPress}
                />
                <Text />

                <CustomButton
                    text={"Continue with Facebook"}
                    bgColor={COLORS.blue}
                    iconColor={COLORS.white}
                    textColor={COLORS.white}
                    width={"100%"} height={50}
                    fw={"600"} icon={"facebook-square"}
                    fs={16} onPress={handleSubmitOnPress}
                />
            </View>

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

