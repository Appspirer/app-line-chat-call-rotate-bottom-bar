import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Colors from "../../themes/Colors";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";
const Pulse = require('react-native-pulse').default;

export default function CallDetails({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.avatar_cotainer}>
                <Pulse color={Colors.white} numPulses={3} diameter={250} speed={20} duration={1000} />
                <Image source={Images.avatar} style={styles.avatar} />
            </View>
            <View style={styles.info_container}>
                <Text style={styles.name}>Nelson D’Souza</Text>
                <View style={styles.location}>
                    {Icons.Icons({ name: "location", height: 17, width: 14 })}
                    <Text style={styles.address}>Nora Hunting Ground</Text>
                </View>
                <Text style={styles.phone_number}>+972 76 989 569 7</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.action_container}>
                <View style={styles.item_column}>
                    <TouchableOpacity style={styles.action_item}>
                        {Icons.Icons({ name: "mute", height: 28, width: 18 })}
                        <Text style={styles.action_text}>Mute</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action_item_bottom}>
                        {Icons.Icons({ name: "gallery", height: 21.13, width: 21.62 })}
                    </TouchableOpacity>
                </View>
                <View style={styles.item_column}>
                    <TouchableOpacity style={styles.action_item}>
                        {Icons.Icons({ name: "bluetooth", height: 25.43, width: 14.53 })}
                        <Text style={styles.action_text}>Bluetooth</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancel_call} onPress={()=>navigation.goBack()}>
                        {Icons.Icons({ name: "call", height: 28.35, width: 28.53 })}
                    </TouchableOpacity>
                </View>
                <View style={styles.item_column}>
                    <TouchableOpacity style={styles.action_item}>
                        {Icons.Icons({ name: "hold", height: 26, width: 26 })}
                        <Text style={styles.action_text}>Hold</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action_item_bottom}>
                        {Icons.Icons({ name: "speaker", height: 23.14, width: 27 })}
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}