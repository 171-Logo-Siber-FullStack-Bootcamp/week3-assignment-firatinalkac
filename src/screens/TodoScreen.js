import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import axios from "axios";
import { Ionicons } from '@expo/vector-icons';

export default function TodoScreen() {
    const [data, setData] = useState([])

    const getData = async () => {
        await axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
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
            <Text style={styles.title}>TODOS</Text>
            <FlatList
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={({ item }) => (
                    <Text style={styles.item}>
                        <View style={{ position: 'absolute', top: 0, left: 0}}>
                            <Ionicons
                                name={item.completed ? 'checkmark-circle' : 'close-circle'}
                                size={20}
                                color={item.completed ? '#FF6000' : 'red'}
                            />
                        </View>
                        <Text>{item.title}</Text>
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
    title: {
        margin: 15,
        fontSize: 30,
        fontWeight: 600,
        color: '#FF6000'
    }
});