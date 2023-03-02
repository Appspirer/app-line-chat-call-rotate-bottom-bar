import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Header from "../../components/Header";
import List from "../../components/List";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        avatar: Images.avatar6,
        name: "Kitty Party Group",
        lastMess: "Hi all whats the plan?",
        time: "4:35 PM",
        newMess: 2,
        isGroup: 1,
        icon: null
    },
    {
        id: 1,
        avatar: Images.avatar7,
        name: "Simon",
        lastMess: "Hey Kacy Lets make plan",
        time: "4:35 PM",
        newMess: 0,
        isGroup: 0,
        icon: null
    },
    {
        id: 2,
        avatar: Images.avatar1,
        name: "Sania",
        lastMess: "He must be busy :D",
        time: "4:35 PM",
        newMess: 0,
        isGroup: 0,
        icon: Images.checked
    },
    {
        id: 3,
        avatar: Images.avatar8,
        name: "Maria",
        lastMess: "Lets get hangover",
        time: "4:35 PM",
        newMess: 3,
        isGroup: 0,
        icon: Images.beer
    },
    {
        id: 4,
        avatar: Images.avatar3,
        name: "Ruseel",
        lastMess: "Hey Kacy Lets make plan",
        time: "4:35 PM",
        newMess: 0,
        isGroup: 0,
        icon: null
    },
]

export default function Chat({navigation}) {

    const renderItem = (item) => {
        return (
            <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('ChatDetails')}>
                <View style={styles.left}>
                    <View>
                        <Image source={item.avatar} style={styles.avatar} />
                        {item.isGroup === 1 && <Image source={Images.group} style={styles.group} />}
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.name}>{item.name}</Text>
                        <View style={styles.lastMess_container}>
                            {item.icon && <Image source={item.icon} style={{ height: 14, width: 14, marginRight:5 }} />}
                            <Text style={styles.lastMess}>{item.lastMess}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.right}>
                    <Text style={styles.time}>{item.time}</Text>
                    {item.newMess > 0 && <View style={styles.newMess_container}>
                        <Text style={styles.newMess}>{item.newMess}</Text>
                    </View>}
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Header />
            <List data={data}
                title="Chats"
                vertical={true}
                renderItem={(item) => renderItem(item)}
                styleList={{ paddingLeft: 0, marginHorizontal: 16 }}
                style={{flex:1}}
            />
        </View>
    )
}