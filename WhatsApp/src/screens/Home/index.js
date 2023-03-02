import React from "react";
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native'
import Header from "../../components/Header";
import List from "../../components/List";
import Colors from "../../themes/Colors";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        name: "Richard",
        avatar: Images.avatar1,
        bg: Images.story_bg1
    },
    {
        id: 1,
        name: "Alexa",
        avatar: Images.avatar2,
        bg: Images.story_bg2
    },
    {
        id: 2,
        name: "Ruseel",
        avatar: Images.avatar3,
        bg: Images.story_bg3
    },
    {
        id: 3,
        name: "Sonia",
        avatar: Images.avatar4,
        bg: Images.story_bg4
    },
]

const callData = [
    {
        id: 0,
        avatar: Images.avatar1,
        name: "Richard",
        status: 0
    },
    {
        id: 1,
        avatar: Images.avatar5,
        name: "Sania",
        status: 0
    },
    {
        id: 2,
        avatar: Images.avatar6,
        name: "Lilly",
        status: 1
    },
    {
        id: 3,
        avatar: Images.avatar7,
        name: "Simon",
        status: 0
    },
    {
        id: 4,
        avatar: Images.avatar8,
        name: "Maria",
        status: 1
    },
]

const messageData = [
    {
        id: 0,
        avatar: Images.avatar6,
        name: "Lilly",
        lastMess: 'Hello ! Where r u ?',
        time: '4:35 PM'
    },
    {
        id: 1,
        avatar: Images.avatar7,
        name: "Simon",
        lastMess: 'Typing….',
        time: '4:35 PM'
    },
    {
        id: 2,
        avatar: Images.avatar8,
        name: "Maria",
        lastMess: 'Let’s meet tomorrow!',
        time: 'Yesterday'
    }
]

export default function Home({navigation}) {

    const renderStory = (item) => {
        return (
            <TouchableOpacity >
                <ImageBackground source={item.bg} style={styles.story_bg}>
                    <Image source={item.avatar} style={styles.avatar} />
                    <Text style={styles.story_name}>{item.name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    const renderCalls = (item) => {
        return (
            <TouchableOpacity onPress={()=>navigation.navigate("CallDetails")}>
                <Image source={item.avatar} style={styles.call_avatar} />
                <Text style={styles.call_name}>{item.name}</Text>
                <View style={[styles.status, { backgroundColor: item.status === 1 ? Colors.green : Colors.red }]}>
                    <Image source={item.status === 1 ? Images.call_done : Images.call_missed}
                        style={{
                            height: item.status === 1 ? 10 : 13,
                            width: item.status === 1 ? 10 : 13
                        }} />
                </View>
            </TouchableOpacity>
        )
    }

    const renderMessage = (item) => {
        return (
            <TouchableOpacity style={styles.message_container} onPress={()=>navigation.navigate("ChatDetails")}>
                <View style={styles.mess_left}>
                    <Image source={item.avatar} style={styles.mess_avatar} />
                    <View style={styles.info}>
                        <Text style={styles.mess_name}>{item.name}</Text>
                        <Text style={styles.mess}>{item.lastMess}</Text>
                    </View>
                </View>
                <Text style={styles.time}>{item.time}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container} showsVerticalScrollIndicator={false}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <List data={data} title="Stories" renderItem={(item) => renderStory(item)} />
                <List data={callData} title="Calls" renderItem={(item) => renderCalls(item)} style={{ marginTop: 20 }} />
                <View style={[styles.line, { marginHorizontal: 16, marginTop: 20 }]} />
                <List data={messageData}
                    title="Recent Messages"
                    renderItem={(item) => renderMessage(item)}
                    vertical={true}
                    styleList={{ marginHorizontal: 16, paddingLeft: 0 }} />
                <View style={{ height: 150 }} />
            </ScrollView>
        </View>
    )
}