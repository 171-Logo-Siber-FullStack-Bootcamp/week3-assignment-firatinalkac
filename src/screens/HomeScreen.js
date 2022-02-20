import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from "react-native";
import firebase from "firebase";
import {auth} from "../../firebase";
import {useNavigation} from "@react-navigation/native";

export default function LoginScreen() {
    const navigation = useNavigation();

    const handleSignOut = () => {
        auth.signOut().then(() => {
                navigation.navigate("Login")
            }).catch(err => alert(err))
    }

    return (
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#FF6F19',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    }
})