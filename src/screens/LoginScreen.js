import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, TextInput} from "react-native";
import {TouchableOpacity} from "react-native-web";
import { auth } from "../../firebase";
import {useNavigation} from "@react-navigation/native";

export default function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user) {
                navigation.replace("Main")

            }
        })
        return unsubscribe
    }, [])

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .catch(err => console.log(err.message))
    }

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                setEmail('');
                setPassword('');
                navigation.navigate("Main");
            })
            .catch(err => console.log(err.message))
    }

    return (
        <>
            <Text style={styles.welArea}>
                <View>
                    <Text>Welcome</Text>
                </View>
            </Text>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleSignUp}
                        style={styles.buttonOutline}
                    >
                        <Text style={styles.buttonOutlineText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

const styles = StyleSheet.create({
    welArea: {
        margin: 50,
        textAlign: "center",
        fontSize: 30,
        fontWeight: 700,
        display: 1,
        alignItems: 'center',
        color: '#FF6F19',
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    inputContainer: {
        width: '80%',

    },
    input: {
        backgroundColor: '#ffece0',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#FF6F19',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        width: '100%',
        padding: 15,
        borderWidth: 2,
        borderColor: '#FF6F19',
        marginTop: 5,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#FF6F19',
        fontWeight: '700',
        fontSize: 16,
    }
})