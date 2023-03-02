import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import Header from "../../components/Header";
import Colors from "../../themes/Colors";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";



export default function ChatDetails({ navigation }) {

    const [value, setValue] = useState('')

    const data = [
        {
            id: 0,
            content: "Hey Howʼs it going",
            time: "10:09 AM",
            type: 0,
            from: 0
        },
        {
            id: 1,
            content: "Lets hangouts",
            time: "10:09 AM",
            type: 0,
            from: 0
        },
        {
            id: 2,
            content: "Lets Meet",
            time: "10:09 AM",
            type: 0,
            from: 1
        },
        {
            id: 3,
            content: "Where To Go?",
            time: "10:09 AM",
            type: 0,
            from: 1
        },
        {
            id: 4,
            content: "",
            time: "10:09 AM",
            type: 1,
            from: 1
        },
    ]

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={50}
        >
            <Header
                title="Simon"
                leftIcon={<Image source={Images.avatar1} style={styles.avatar} />}
                rightIcon={Icons.Icons({ name: "dot_ver", height: 20, width: 4 })}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.list}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data.reverse()}
                    inverted
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index} style={[styles.item, {
                                alignSelf: item.from === 0 ? 'flex-end' : 'flex-start',
                                backgroundColor: item.from === 0 ? Colors.green_18 : Colors.gray_18,
                            }]}>
                                {item.type === 1 ?
                                    <TouchableOpacity>
                                        <Image source={Images.voice} style={styles.voice} />
                                    </TouchableOpacity>
                                    : <Text style={styles.content}>{item.content}</Text>}
                                <View style={styles.time_container}>
                                    <Text style={styles.time}>{item.time}</Text>
                                    {item.from === 0 && <Image source={Images.checked} style={styles.checked} />}
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
            <View style={styles.line} />
            <View style={styles.input_container}>
                <TouchableOpacity>
                    {Icons.Icons({ name: 'machine', height: 20.76, width: 24 })}
                </TouchableOpacity>
                <View style={styles.textinput}>
                    <TextInput
                        placeholder="Type Message..."
                        value={value}
                        onChangeText={setValue}
                        style={styles.input}
                    />
                    {Icons.Icons({ name: 'next', height: 9.72, width: 11.9 })}
                </View>
                <TouchableOpacity style={styles.record}>
                    {Icons.Icons({ name: 'record', height: 34, width: 34 })}
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}