import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Header from "../../components/Header";
import List from "../../components/List";
import Colors from "../../themes/Colors";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        avatar: Images.avatar6,
        name: "Lilly",
        time: "Today, 2:09 pm",
        statusCall: 1,
    },
    {
        id: 1,
        avatar: Images.avatar7,
        name: "Simon",
        time: "29 September, 10:21 pm",
        statusCall: 0,
    },
    {
        id: 2,
        avatar: Images.avatar1,
        name: "Sania",
        time: "28 September, 09:21 pm",
        statusCall: 1,
    },
    {
        id: 3,
        avatar: Images.avatar8,
        name: "Maria",
        time: "18 September, 09:21 pm",
        statusCall: 1,
    },
    {
        id: 4,
        avatar: Images.avatar3,
        name: "Ruseel",
        time: "18 September, 09:21 pm",
        statusCall: 1,
    },
]

export default function Call({navigation}) {

    const renderItem = (item) => {
        return (
            <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("CallDetails")}>
                <View style={styles.left}>
                    <View>
                        <Image source={item.avatar} style={styles.avatar} />
                        <View style={[styles.ic_call, { backgroundColor: item.statusCall === 1 ? Colors.green : Colors.red }]}>
                            <Image source={item.statusCall === 1 ? Images.call_done : Images.call_missed}
                                style={{ height: 7.5, width: 7.5}} />
                        </View>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.time}>{item.time}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.right}>
                    {Icons.Icons({name:'phone', height:18.6, width:18.64})}                    
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Header />
            <List data={data}
                title="Contact List"
                vertical={true}
                renderItem={(item) => renderItem(item)}
                styleList={{ paddingLeft: 0, marginHorizontal: 16 }}
                style={{ flex: 1 }}
            />
        </View>
    )
}