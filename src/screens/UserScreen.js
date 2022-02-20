import React, {useState, useEffect} from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";
import axios from "axios";
import {Ionicons} from "@expo/vector-icons";

export default function UserScreen() {
    const [data, setData] = useState([])

    const getData = async () => {
        await axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            setData(response.data)
            console.log(response.data)
        }).catch(error => {
            console.error(error)
        })
    }
    useEffect(async () => {
        await getData()
    }, [])
    return(
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={({ item }) => (
                    <Text style={styles.item}>
                        <Text>{item.name}</Text>
                    </Text>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 20,
        backgroundColor: '#fff',
    },
    item: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 5,
        marginTop: 10,
        padding: 10,
        backgroundColor: '#f3f3f3',
        fontSize: 14,
        textTransform: 'capitalize'
    },
});